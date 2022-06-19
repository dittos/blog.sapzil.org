---
layout: post
title: "Kotlin에서 JPA 사용할 때 주의할 점"
tags: [database, jpa, kotlin, java, spring, backend]
---

Kotlin에서 JPA를 사용해봅시다! Java에서 쓸 때와 별로 다를 것은 없습니다. 하지만 엔티티 클래스를 [데이터 클래스](http://kotlinlang.org/docs/reference/data-classes.html)로 선언하였을 때 런타임 프록시 객체를 사용하는 Hibernate/JPA의 기능들이 잘 작동하지 않을 수 있어 주의가 필요합니다.

## 프로젝트 세팅

예제 프로젝트는 Spring Boot를 사용하겠습니다. 하지만 다른 프레임워크에도 마찬가지로 적용되는 내용입니다.

### `build.gradle`, `Application.kt`

크게 중요하지 않아서 [Gist 링크로 대체합니다.](https://gist.github.com/dittos/9e94540705d39f60521f437415f20eeb)

### `User.kt`

엔티티 클래스입니다.

```kotlin
package org.sapzil

import javax.persistence.*

@Entity
data class User(@Id 
                @GeneratedValue(strategy = GenerationType.AUTO)
                var id: Int? = null,
                var name: String)
```

### `UserRepository.kt`

```kotlin
package org.sapzil

import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Int> {
  fun findByName(name: String): User?
}
```

### `Demo.kt`

```kotlin
package org.sapzil

import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringRunner
import javax.persistence.EntityManager

@RunWith(SpringRunner::class)
@DataJpaTest(showSql = true)
open class Demo {
  @Autowired lateinit var userRepository: UserRepository
  @Autowired lateinit var entityManager: EntityManager

  @Before
  fun setup() {
    userRepository.save(User(name = "alice"))
    userRepository.save(User(name = "bob"))
    entityManager.clear()
  }

  @Test
  fun simple() {
    println(userRepository.findByName("bob"))
  }
}
```

테스트 코드를 실행해보면 오류가 발생합니다.

```
org.springframework.orm.jpa.JpaSystemException: No default constructor for entity:  : org.sapzil.User; nested exception is org.hibernate.InstantiationException: No default constructor for entity:  : org.sapzil.User
```

기본 생성자가 없다고 합니다.

## 기본 생성자를 만들자

사실, 위의 엔티티 선언에는 문제가 있습니다. JPA 엔티티 클래스에는 기본 생성자(다른 말로는, 인자 없는 생성자)가 반드시 필요합니다.

당연히, 기본 생성자를 추가해주면 됩니다.

### `User.kt` (수정 - 예시)

```kotlin
@Entity
data class User(...) {
  constructor() : this(null, "")
}
```

하지만 모든 필드에 기본값을 채워줘야 하니 귀찮습니다. 어차피 JPA가 객체를 생성한 다음에 알아서 값을 채워줄텐데요.

[kotlin-jpa 컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#jpa-support)을 쓰면 `@Entity` 등의 어노테이션이 붙은 클래스에 자동으로 기본 생성자를 만들도록 할 수 있습니다. `build.gradle`에 다음 내용을 추가합니다.

```groovy
buildscript {
  dependencies {
    classpath "org.jetbrains.kotlin:kotlin-noarg:$kotlin_version"
  }
}

apply plugin: "kotlin-jpa"
```

실제로 만들어지는지 바이트코드를 까서 확인해봅시다. IntelliJ에서요. Gradle 임포트 후 `Build > Rebuild Project` 한 다음 `User.kt`에서 `Tools > Kotlin > Show Kotlin Bytecode`를 실행하면...

```
  // access flags 0x1
  public <init>()V
   L0
    ALOAD 0
    INVOKESPECIAL java/lang/Object.<init> ()V
    RETURN
   L1
    LOCALVARIABLE this Lkotlin/Unit; L0 L1 0
    MAXSTACK = 1
    MAXLOCALS = 1
```

기본 생성자가 추가된 것을 알 수 있습니다. 이제는 테스트도 통과합니다.

```
Hibernate: select user0_.id as id1_1_, user0_.name as name2_1_ from user user0_ where user0_.name=?
User(id=2, name=bob)
```

데이터 클래스로 선언했으니 `toString()`도 자동으로 구현된 것을 알 수 있습니다. 매우 편리하네요.

## `@ManyToOne`과 지연 로딩 문제

이제 새로운 `Post` 엔티티를 추가해봅시다.

### `Post.kt`

```kotlin
package org.sapzil

import javax.persistence.*

@Entity
data class Post(@Id
                @GeneratedValue(strategy = GenerationType.AUTO)
                var id: Int? = null,
                @ManyToOne(fetch = FetchType.LAZY)
                @JoinColumn(name = "user_id")
                var user: User,
                var content: String)
```

### `PostRepository.kt`

```kotlin
package org.sapzil

import org.springframework.data.repository.CrudRepository

interface PostRepository : CrudRepository<Post, Int>
```

### `Demo.kt` (코드 추가)

```kotlin
@Autowired lateinit var postRepository: PostRepository

@Test
fun lazy() {
  val bob = userRepository.findByName("bob")!!
  val postId = postRepository.save(Post(user = bob, content = "Hello world")).id!!
  entityManager.clear()
  println("*** EntityManager cleared")

  val post = postRepository.findOne(postId)
  println("... Accessing post.user.id")
  println(post.user.id)
  println("... Accessing post.user.name")
  println(post.user.name)
}
```

`Post`를 가져온 뒤, 연관된 `User`에 접근하는 테스트 코드입니다. 실행해봅시다.

```
*** EntityManager cleared
Hibernate: select post0_.id as id1_0_0_, post0_.content as content2_0_0_, post0_.user_id as user_id3_0_0_ from post post0_ where post0_.id=?
Hibernate: select user0_.id as id1_1_0_, user0_.name as name2_1_0_ from user user0_ where user0_.id=? <- ???
... Accessing post.user.id
4
... Accessing post.user.name
bob
```

쿼리 로그에서 알 수 있듯이 `Post`를 가져올 때 `User`까지 동시에 가져와져 버렸습니다. 즉 지연 로딩이 작동하지 않은 것입니다.

지연 로딩을 하려면 프록시 객체를 만들어야 하는데, Kotlin의 모든 클래스는 final이라 상속을 받을 수 없습니다. 일반 클래스는 `open`할 수 있지만 데이터 클래스는 불가능합니다.

사실, JPA 표준에서는 엔티티 클래스가 final이면 안됩니다. 하지만 이 예제에서는 Hibernate를 JPA 구현체로 사용하기 때문에 어떻게든 작동하긴 하는 것 같네요.

아무튼 이번에도 [컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#all-open-compiler-plugin)의 도움을 받아서 엔티티 클래스를 확장할 수 있도록 만듭니다. `build.gradle`에 다음 내용을 추가합니다.

```groovy
buildscript {
  dependencies {
    classpath "org.jetbrains.kotlin:kotlin-allopen:$kotlin_version"
  }
}

apply plugin: "kotlin-allopen"

allOpen {
  annotation "javax.persistence.Entity"
}
```

Gradle 임포트와 Rebuild를 한 다음 테스트를 다시 실행해보면...

```
*** EntityManager cleared
Hibernate: select post0_.id as id1_0_0_, post0_.content as content2_0_0_, post0_.user_id as user_id3_0_0_ from post post0_ where post0_.id=?
... Accessing post.user.id
Hibernate: select user0_.id as id1_1_0_, user0_.name as name2_1_0_ from user user0_ where user0_.id=?
4
... Accessing post.user.name
bob
```

`post.user`에 접근할 때가 돼서야 `User`를 불러왔습니다. 이번에는 제대로 지연 로딩이 작동한 것을 확인할 수 있습니다.

## 연관 객체의 ID에 쿼리 없이 접근

**아래 내용은 이제 사실이 아닙니다. [Hibernate 5.2.13/5.3](https://hibernate.atlassian.net/browse/HHH-12096)에서 문제가 수정되어 필드 접근 모드에서도 ID 접근시 엔티티가 로드되지 않습니다. 읽을 때 참고 바랍니다.**

`post.user.id`는 사실 `User`를 쿼리해보지 않아도 `post.user_id` 컬럼으로 알아낼 수 있습니다. 알고보면 Hibernate에서 원래 지원하는 기능입니다. 하지만 위의 예제 코드에서는 작동하지 않았죠. 왜일까요?

데이터 클래스의 필드에 어노테이션을 달면, getter 메소드가 아니라 JVM 필드에 어노테이션이 달립니다. 그러면 프로퍼티 접근 모드가 아니라 [필드 접근 모드](http://blog.xebia.com/jpa-implementation-patterns-field-access-vs-property-access/)가 되고, 이 경우 [Hibernate는 지연 로딩을 지원하지 않습니다.](https://hibernate.atlassian.net/browse/HHH-3718)

어쨌든 getter에 어노테이션이 붙도록 수정하면 됩니다.

`User.kt` (수정)

```kotlin
@Entity
data class User(@get:Id
                @get:GeneratedValue(strategy = GenerationType.AUTO)
                var id: Int? = null,
                var name: String)
```

Rebuild 후 테스트를 다시 실행해보면...

```
*** EntityManager cleared
Hibernate: select post0_.id as id1_0_0_, post0_.content as content2_0_0_, post0_.user_id as user_id3_0_0_ from post post0_ where post0_.id=?
... Accessing post.user.id <- 이때는 쿼리가 안날아감
4
... Accessing post.user.name
Hibernate: select user0_.id as id1_1_0_, user0_.name as name2_1_0_ from user user0_ where user0_.id=?
bob
```

`post.user.name`에 접근할 때 `User`를 가져오는 것을 확인할 수 있습니다.

## 세 줄 요약

* `kotlin-jpa` 컴파일러 플러그인을 써서 기본 생성자를 자동으로 추가하자.
* `kotlin-allopen` 컴파일러 플러그인을 써서 엔티티 클래스를 상속 가능하게 만들자.
* JPA 어노테이션은 getter에 달자.

## 고민해볼 점

* 데이터 클래스를 쓸 때도 [`equals()`와 `hashCode()`를 오버라이드 해야하나?](https://developer.jboss.org/wiki/EqualsAndHashCode) `toString()`은?
* 모든 필드를 데이터 클래스의 생성자에 선언해야 하나? `@OneToMany` 붙은 콜렉션은?
* 이쯤되면 JPA가 문제인 것 같다. **굳이 JPA를 써야하나? 😂**