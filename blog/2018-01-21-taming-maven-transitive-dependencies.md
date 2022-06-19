---
layout: post
title: "Maven의 Transitive Dependency 길들이기"
description: "NullPointerException만큼 무서운 ClassNotFoundException을 피하는 방법"
tags: [maven, build-tools]
---

Maven으로 의존성을 관리하다보면 라이브러리 버전이 꼬이는 경우가 종종 있습니다. 그동안은 주먹구구식으로 해결하곤 했는데 한번쯤 확실히 알아둬야겠다고 생각해서 정리해 보았습니다.


## Transitive Dependency란?

어떤 아티팩트를 의존성으로 추가하면, 그 아티팩트가 가지고 있는 의존성이 함께 딸려옵니다. 그렇게 '딸려온' 의존성을 Transitive Dependency라고 합니다.

아래 의존 관계 트리에서 MyProject &larr; A이고 A &larr; X이므로 MyProject &larr; X의 의존 관계가 생겼습니다.

* MyProject
    * A
        * X


## (참고사항) 의존 관계 디버그

[Maven Dependency Plugin](https://maven.apache.org/plugins/maven-dependency-plugin/)을 사용하면 의존 관계 트리를 찍어볼 수 있습니다.

```
$ mvn dependency:tree
[INFO] [dependency:tree]
[INFO] org.apache.maven.plugins:maven-dependency-plugin:maven-plugin:2.0-alpha-5-SNAPSHOT
[INFO] \- org.apache.maven.doxia:doxia-site-renderer:jar:1.0-alpha-8:compile
[INFO]    \- org.codehaus.plexus:plexus-velocity:jar:1.1.3:compile
[INFO]       \- velocity:velocity:jar:1.4:compile
```

또는 IntelliJ에 있는 기능을 사용할 수도 있습니다. (근데 Ultimate Edition에서만 되는 듯 합니다.)


## 의존 관계 중재 (Dependency Mediation)

의존 관계 트리에 한 아티팩트의 여러 버전이 있으면 어떤 버전이 선택될까요? 가장 가까운 정의가 선택됩니다.

* MyProject
    * A
        * **X 1.0**
    * B
        * C
            * X 2.0

위의 트리에서, MyProject 기준으로 X 1.0이 X 2.0보다 가까이 있습니다. 따라서 X 1.0이 선택됩니다.

만약 거리(깊이)가 같으면 어떻게 될까요?

* MyProject
    * A
        * **X 1.0**
    * C
        * X 2.0

이 때는 **먼저** 선언된 쪽이 이깁니다. A가 C보다 먼저 선언되었으므로 X 1.0이 선택됩니다.


## 원하는 버전으로 고정하기

의존성 사이에 충돌이 일어났을 때 어떤 알고리즘으로 중재되는지 살펴봤습니다. 이제 충돌을 우리가 원하는 버전으로 해결하는 방법을 알아보겠습니다.

### 방법 1: 직접 의존성으로 포함

MyProject에 원하는 버전의 아티팩트를 직접 포함시키면, 이것이 가장 가까운 의존성이 되므로 항상 선택됩니다.

* MyProject
    * A
        * X 1.0
    * B
        * C
            * X 2.0
    * **X 2.0**

하지만 MyProject의 코드에서 X를 직접 사용하지 않는다면 불필요한 의존성을 추가한 것이므로 좋은 방법이 아닐 수 있습니다.

### 방법 2: 원하지 않는 의존성 제외

`<exclusion>` 설정을 이용하면 원하지 않는 의존성을 제외할 수 있습니다. 다음과 같이 A에서 X를 제외하면 X 2.0이 가장 가까운 의존성이 되어 선택됩니다.

* MyProject
    * A
        * <del>X 1.0</del>
    * B
        * C
            * **X 2.0**

이 방법의 단점은 X 1.0에 의존하는 아티팩트가 여러개라면 일일히 제외시켜줘야 한다는 것입니다. 그리고 의존성 버전을 바꾸게 될 때마다 기존에 의도한 버전이 계속 선택되고 있는지 확인해야 합니다.

### 방법 3: Dependency Management 설정 사용

`<dependencyManagement>` 설정으로 특정 아티팩트의 딸려온 의존성을 포함한 모든 의존성의 버전을 고정할 수 있습니다.

POM에 다음 내용을 추가하면 모든 X가 기존에 설정된 버전을 무시하고 2.0 버전으로 고정됩니다.

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>X</artifactId>
            <version>2.0</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

* MyProject
    * A
        * <del>X 1.0</del> **X 2.0**
    * B
        * C
            * X 2.0


## Dependency Management 활용: BOM

규모가 큰 라이브러리는 여러 모듈로 쪼개져서 배포되는 경우가 있습니다. 예를 들어 Jackson은 `jackson-core`, `jackson-databind`, `jackson-dataformat-yaml` 등의 모듈로 나눠져 있습니다.

보통은 문제가 안되지만, 이렇게 나눠진 모듈끼리 버전이 안 맞으면 공포의 `ClassNotFoundException`을 유발하는 원인이 됩니다. 예를 들어 `jackson-core`는 2.8인데 `jackson-databind`는 2.6이라거나요.

그래서 이렇게 쪼개진 라이브러리들은 대부분 "bill of materials" (BOM)을 함께 배포합니다. BOM을 임포트하면 해당 라이브러리의 모든 모듈을 특정 버전으로 고정할 수 있습니다.

다음 내용을 POM에 추가하면 모든 Jackson의 모듈이 2.9.0 버전으로 강제됩니다.

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson</groupId>
            <artifactId>jackson-bom</artifactId>
            <version>2.9.0</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## 레퍼런스

* [Maven &#x2013; Introduction to the Dependency Mechanism](http://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html)
