---
layout: post
title: "Gradle Convention Plugins 삽질기"
tags: [gradle, build-tools, kotlin, spring]
---

오랜만에 Spring Boot 프로젝트를 멀티 모듈로 구성하려고 Gradle 문서를 읽다보니 [멀티 프로젝트에서 `subprojects {}`, `allprojects {}`의 사용을 더이상 권장하지 않는다](https://docs.gradle.org/7.4/userguide/sharing_build_logic_between_subprojects.html#sec:convention_plugins_vs_cross_configuration)는 내용을 보게 되었다.

위와 같은 기존 방식을 _cross project configuration_ 이라고 하는데, 다음과 같은 문제가 있다고 한다.

* 서브프로젝트의 빌드 스크립트만 봐서는 부모 프로젝트에서 빌드 로직이 주입된다는 것이 분명하게 드러나지 않기 때문에 로직을 파악하기 힘들다.
* 설정 시점에 프로젝트 간에 커플링이 생기기 때문에 [configuration-on-demand](https://docs.gradle.org/7.4/userguide/multi_project_configuration_and_execution.html#sec:configuration_on_demand)와 같은 최적화가 제대로 작동하지 않는다.

큰 프로젝트가 아니라면 사실 별로 상관 없다고 생각하지만, 아무튼 일리가 있다고 생각되니 권장 방식인 Convention Plugins 방식을 사용해본다.

## 문제 1: `UnknownPluginException`

[공식 문서](https://docs.gradle.org/7.4/userguide/declaring_dependencies_between_subprojects.html)를 Kotlin DSL 버전으로 따라해보았는데, 다음과 같은 에러가 나면서 잘 되지 않았다.

```
Build file '/Users/user/myproject/api/build.gradle.kts' line: 1

Plugin [id: 'myproject.java-conventions'] was not found in any of the following sources:

* Try:
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Exception is:
org.gradle.api.plugins.UnknownPluginException: Plugin [id: 'myproject.java-conventions'] was not found in any of the following sources:

- Gradle Core Plugins (plugin is not in 'org.gradle' namespace)
- Plugin Repositories (plugin dependency must include a version number for this source)
...
```

이 문제는, `buildSrc/build.gradle.kts`를 다음과 같이 만들어주면 해결된다.

```kotlin
plugins {
    `kotlin-dsl`
}

repositories {
    // for kotlin-dsl plugin
    gradlePluginPortal()
}
```

해당 문서화 버그는 [gradle/gradle#19667](https://github.com/gradle/gradle/issues/19667)로 등록되어 있다. (이 자식들 ㅠㅠ)

## 문제 2: 플러그인 버전 지정 불가

[Spring Initializr](https://start.spring.io/)에서 만들어진 플러그인 설정을 그대로 사용했더니 다음과 같은 에러가 났다.

```
Invalid plugin request [id: 'org.springframework.boot', version: '2.6.4']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.springframework.boot' is an implementation dependency of project ':buildSrc'.
Invalid plugin request [id: 'io.spring.dependency-management', version: '1.0.11.RELEASE']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'io.spring.dependency-management' is an implementation dependency of project ':buildSrc'.
Invalid plugin request [id: 'org.jetbrains.kotlin.jvm', version: '1.6.10']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.jetbrains.kotlin.jvm' is an implementation dependency of project ':buildSrc'.
Invalid plugin request [id: 'org.jetbrains.kotlin.plugin.spring', version: '1.6.10']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.jetbrains.kotlin.plugin.spring' is an implementation dependency of project ':buildSrc'.
```

일단 `plugins {}` 블럭에서 다음과 같이 버전을 제거했다.

```kotlin
plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.spring")
}
```

근데 그러면 플러그인 버전을 어떻게 지정해야 할까? 답은 `buildSrc/build.gradle.kts`에 다음과 같이 의존성을 추가하는 것이다.

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-gradle-plugin:2.6.4")
    implementation("io.spring.gradle:dependency-management-plugin:1.0.11.RELEASE")
    implementation("org.jetbrains.kotlin:kotlin-gradle-plugin:1.6.10")
    implementation("org.jetbrains.kotlin:kotlin-allopen:1.6.10")
}
```

참고로 여기에는 플러그인 ID가 아니라, Maven 좌표를 찾아서 적어주었다. Maven 좌표는 [plugins.gradle.org](https://plugins.gradle.org/)에서 플러그인 ID로 검색해서 찾는다.

예를 들어 [`org.springframework.boot`](https://plugins.gradle.org/plugin/org.springframework.boot)를 찾아서 들어가보면 "Using legacy plugin application:" 아래에 다음과 같이 되어있다.

```groovy
buildscript {
  ...
  dependencies {
    //         v~~~~ 이 부분!
    classpath "org.springframework.boot:spring-boot-gradle-plugin:2.6.4"
  }
}
```

플러그인 ID만 가지고 할 수 있는 더 좋은 방법이 있을 수도 있는데 찾아보진 않았다. 끝!
