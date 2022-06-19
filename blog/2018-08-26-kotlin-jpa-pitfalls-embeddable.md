---
layout: post
title: "Kotlin에서 JPA 사용할 때 주의할 점 (2) - Embeddable, IdClass"
tags: [database, jpa, kotlin, java, spring, backend]
---

[Kotlin에서 JPA 사용할 때 주의할 점](/2017/11/02/kotlin-jpa-pitfalls/)을 쓴 이후로 직장에서 하는 프로젝트에도 Kotlin + JPA를 사용하게 되었습니다. 그러다보니 좀 더 고급 기능을 사용하게 되고 또 여러가지 새로운 어려움에 부딪혔습니다.

## Embeddable

기간(시작 날짜, 끝 날짜)이나 좌표(X, Y) 등 항상 같이 다니는 값들을 객체로 묶어서 Entity의 속성으로 지정할 수 있습니다.

이러한 객체의 클래스에 `@Embeddable` 어노테이션을 붙여서 선언하고, Entity에서 `@Embedded` 어노테이션을 붙여서 사용합니다. 예제 코드를 보면,

```kotlin
@Embeddable
data class Coordinate(
  var x: Int,
  var y: Int
)
```

와 같이 선언하고

```kotlin
@Entity
data class Marker(
  @get:Id
  var id: Int,

  @get:Embedded
  var coordinate: Coordinate
)
```

처럼 가져다 쓸 수 있습니다.

데이터베이스 스키마에서는 `Coordinate`에 대한 새로운 테이블이 생기지 않고, `Marker` 테이블에 `x`, `y` 컬럼이 추가됩니다.

### 주의사항

Embeddable 클래스도 [이전 글](/2017/11/02/kotlin-jpa-pitfalls/)에서 설명한 Entity 클래스와 마찬가지로 다음 속성을 만족해야 합니다.

* 기본 생성자(인자 없는 생성자)가 있어야 한다. &rarr; [kotlin-jpa 컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#jpa-support) 추가
* `final`이면 안된다. &rarr; [kotlin-allopen 컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#all-open-compiler-plugin)에 `javax.persistence.Embeddable` 추가
* 프로퍼티에는 getter와 setter가 존재해야 한다. &rarr; `val`이 아니라 **`var`로 선언**

### Embedded와 null

[JPA 스펙에 의하면 Embedded 속성은 null이 될 수 없습니다.](https://github.com/javaee/jpa-spec/issues/42) 하지만 Hibernate 같은 구현체들은 null을 지원합니다.

당연히 일단 Kotlin에서 nullable 타입으로 수정해야 null을 넣을 수 있습니다.

```kotlin
@Entity
data class Marker(
  @get:Id
  var id: Int,

  @get:Embedded
  var coordinate: Coordinate? // <- nullable 타입으로 수정
)
```

그리고 실제 데이터베이스 스키마에서도 컬럼을 nullable하게 만들어야 합니다.

그런데 Hibernate에서 자동으로 테이블을 생성하는 경우(`hbm2ddl.auto` 사용시), Embeddable에 속한 컬럼은 무조건 not null 컬럼이 되는 문제가 있습니다. 그런 경우 다음과 같이 수정하면 nullable 컬럼이 생성되게 할 수 있습니다.

```kotlin
@Embeddable
data class Coordinate(
  @get:Column
  var x: Int,
  @get:Column
  var y: Int
)
```

참고로, Embeddable 클래스의 어노테이션 위치 (필드 vs 프로퍼티)는 포함된 Entity 클래스의 어노테이션 위치를 따라갑니다. 앞의 예제에서 `Marker`는 프로퍼티(getter)에 어노테이션을 달았기 때문에 Embeddable에서도 getter에 달아야 인식이 됩니다.

**Kotlin에서 JPA 관련 어노테이션은 무조건 `@get:`으로 달아야 한다**고 기억해두면 혼란이 적은 것 같습니다.

### 같은 타입의 Embedded 속성을 여러 개 선언하기

Kotlin과는 무관하지만 알아두면 좋은 내용입니다.

```kotlin
@Entity
data class Line(
  @get:Id
  var id: Int,

  @get:Embedded
  var start: Coordinate,

  @get:Embedded
  var end: Coordinate
)
```

위와 같이 선언하면 `start`와 `end`가 동일한 컬럼 `x`, `y`를 가지려고 해서 다음과 같은 오류가 발생합니다.

```
org.hibernate.MappingException: Repeated column in mapping for entity: org.sapzil.jpa.Line column: x (should be mapped with insert="false" update="false")
```

정석 해결 방법은 [@AttributeOverride](https://docs.oracle.com/javaee/6/api/javax/persistence/AttributeOverride.html)를 사용하는 것이지만 이런 속성이 많아지면 일일히 달기는 귀찮습니다. 이 때 `ImplicitNamingStrategy`를 이용하면 자동으로 `start_x`, `end_x`와 같이 prefix 붙은 컬럼을 지정할 수 있습니다.

Spring에서는 `spring.jpa.hibernate.naming.implicit-strategy` 프로퍼티를 `org.hibernate.boot.model.naming.ImplicitNamingStrategyComponentPathImpl`로 지정하거나, `ImplicitNamingStrategyComponentPathImpl`을 Bean으로 주입하여 설정하면 됩니다.

## IdClass

JPA에서 복합 기본키(composite primary key)를 매핑하기 위해서는 `@IdClass` 어노테이션을 사용합니다. 다음과 같이 PK가 될 속성에 모두 `@Id`를 붙이고, PK의 속성을 모두 가진 클래스를 만들어서 `@IdClass` 어노테이션으로 지정합니다.

```kotlin
@Entity
@IdClass(Name::class)
data class Person(
    @get:Id
    var firstName: String,
    @get:Id
    var lastName: String,
    var phoneNumber: String
)
```

어떤 클래스를 IdClass로 사용하려면 Serializable 인터페이스를 구현해야 돼서 처음에 다음과 같이 선언해 봤습니다.

```kotlin
data class Name(var firstName: String, var lastName: String) : Serializable
```

그랬더니 객체를 저장하려고 할 때 이런 오류가 발생했습니다.

```
java.lang.IllegalArgumentException: No argument provided for a required parameter: parameter #0 firstName of fun <init>(kotlin.String, kotlin.String): org.sapzil.jpa.Name
	at kotlin.reflect.jvm.internal.KCallableImpl.callDefaultMethod(KCallableImpl.kt:138)
	at kotlin.reflect.jvm.internal.KCallableImpl.callBy(KCallableImpl.kt:110)
	at org.springframework.beans.BeanUtils$KotlinDelegate.instantiateClass(BeanUtils.java:765)
	at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:170)
	at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:124)
	...
```

메시지를 보니 아무래도 Spring이 생성자에 인자를 넘기지 않고 객체를 만들려고 해서 그런 것 같습니다. 그래서 인자를 받지 않는 생성자를 추가해봤습니다.

```kotlin
data class Name(var firstName: String, var lastName: String) : Serializable {
	constructor() : this("", "")
}
```

그랬는데도 같은 오류가 발생했습니다. 스택 트레이스에 나타난 [BeanUtils의 코드](https://github.com/spring-projects/spring-framework/blob/d553ddc5b3a657adebad04d9f3c7d466fbdd7b05/spring-beans/src/main/java/org/springframework/beans/BeanUtils.java#L122-L124)를 보면...

```java
Constructor<T> ctor = (KotlinDetector.isKotlinType(clazz) ?
		KotlinDelegate.getPrimaryConstructor(clazz) : clazz.getDeclaredConstructor());
return instantiateClass(ctor);
```

Kotlin 클래스일 경우 Primary Constructor를 찾게 되어있습니다. [Primary Constructor](https://kotlinlang.org/docs/reference/classes.html#constructors)는 클래스 선언 헤더에 같이 선언되는 생성자를 말합니다. 방금 추가한 인자 없는 생성자는 Secondary Constructor이기 때문에 인식되지 않은 것입니다.

그래서 data class를 포기해야 하나... 생각하고 있었는데, 구글링하던 중 [Gist](https://gist.github.com/mchlstckl/4f9602b5d776878f48f0)를 하나 발견했습니다. 결론은 생성자의 모든 파라미터에 기본값을 지정하면 된다는 것입니다.

```kotlin
data class Name(var firstName: String = "", var lastName: String = "") : Serializable
```

이렇게 하면 Primary Constructor를 인자 없이 호출할 수 있게 되어서 정상적으로 저장이 됩니다.

### IdClass와 ImplicitNamingStrategy

(Kotlin과는 무관한 내용이지만) 앞서 설명한대로 ImplicitNamingStrategy를 변경하면 IdClass를 사용할 때 문제가 생길 수 있습니다.

`ImplicitNamingStrategyComponentPathImpl`을 사용할 때, 위의 예제대로 모델을 선언한 후 저장하려고 하면 이렇게 됩니다.

```
org.h2.jdbc.JdbcSQLException: NULL not allowed for column "_IDENTIFIER_MAPPER_FIRST_NAME"; SQL statement:
insert into person (phone_number, id_first_name, id_last_name) values (?, ?, ?) [23502-197]
```

먼저 컬럼 이름 앞에 `id_`가 붙은 것도 이상하고, `_identifier_mapper_first_name`이라는 이상한 컬럼이 생긴 것도 문제입니다.

IdClass를 지정하면 Hibernate는 내부적으로 `id`, `_identifierMapper`라는 숨은 속성을 생성합니다. 즉 `id.firstName`, `_identifierMapper.firstName` 같은 속성이 생기는 건데요. 기본 ImplicitNamingStrategy에서는 속성 경로의 마지막 부분만 취하기 때문에 문제가 없지만, 우리는 속성 경로를 모두 나타내는 전략으로 변경하였기 때문에 이런 이상한 일이 벌어진 겁니다. (결국은 [HHH-11427 버그](https://hibernate.atlassian.net/browse/HHH-11427) 때문입니다.)

이것을 제대로 해결하려면 ImplicitNamingStrategy의 구현을 수정해야겠지만, 간단하게는 컬럼명을 직접 지정해서 해결할 수 있습니다.

```kotlin
@Entity
@IdClass(Name::class)
data class Person(
    @get:Id
    @get:Column(name = "first_name") // <- 컬럼명 지정
    var firstName: String,
    @get:Id
    @get:Column(name = "last_name") // <- 컬럼명 지정
    var lastName: String,
    var phoneNumber: String
)
```

## 정리

* [kotlin-jpa 컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#jpa-support) 사용하자.
* [kotlin-allopen 컴파일러 플러그인](http://kotlinlang.org/docs/reference/compiler-plugins.html#all-open-compiler-plugin) 사용하자. (`javax.persistence.Embeddable` 추가해주자.)
* `Embeddable`의 속성은 `var`로 선언하자.
* 속성에 어노테이션 붙일 때는 getter에 붙이자. (`@get:`)
* `IdClass`의 생성자에는 모두 기본값을 달아주자.
* `ImplicitNamingStrategyComponentPathImpl` 쓰면 편리하다.
* `ImplicitNamingStrategyComponentPathImpl`과 `IdClass` 같이 쓰려면 컬럼명을 지정해주자.
