---
layout: post
title: "Gradle에서 서브 프로젝트를 한 디렉토리에 몰아넣기"
tags: [gradle, build-tools]
---

한 문장으로 요약이 잘 안돼서 제목이 이상한데, 읽어보시면 뭔지 알 수 있습니다.

## Gradle 멀티프로젝트 기초

일단 간단하게 Gradle에서 멀티프로젝트 설정 방법을 알아봅시다. `model`, `server`, `util` 세 가지 서브프로젝트로 나눈다고 하면 디렉토리 구조는 다음과 같습니다.

* `model/`
    * `build.gradle`
* `server/`
    * `build.gradle`
* `util/`
    * `build.gradle`
* `build.gradle`
* `settings.gradle`

여기서 `settings.gradle`에 모든 서브프로젝트를 선언해줍니다.

```groovy
rootProject.name = "example"

include("model")
include("server")
include("util")
```

그리고 만약 `server`에서 `model`을 참조하고자 한다면 `server/build.gradle`에서

```groovy
dependencies {
    compile(project(":model"))
}
```

과 같이 할 수 있습니다.

## 서브 프로젝트를 한 디렉토리에 몰아넣기

보통 Git 저장소에는 코드만 있는게 아니라 다른 것들도 있습니다. 예를 들면 스크립트를 모아둔 `scripts` 디렉토리 같은 것인데, 이게 Gradle 프로젝트 디렉토리와 섞여있으면 기분이 나쁩니다. (개인 취향)

그래서 만약 디렉토리 구조를 다음과 같이 변경하고 싶다면,

* `scripts/`
* **`subprojects/`**
    * `model/`
        * `build.gradle`
    * `server/`
        * `build.gradle`
    * `util/`
        * `build.gradle`
* `build.gradle`
* `settings.gradle`

`settings.gradle`은 다음과 같이 바뀌고...

```groovy
rootProject.name = "example"

include("subprojects:model")
include("subprojects:server")
include("subprojects:util")
```

다른 프로젝트를 참조할때도 `project(":subprojects:model")`과 같이 `subprojects:`를 꼭 붙여줘야 합니다.

다행히도 Gradle은 논리적인 프로젝트 경로와 실제 프로젝트 디렉토리를 다르게 설정할 수 있습니다. 따라서 `settings.gradle`를 다음과 같이 구성하면 됩니다.

```groovy
rootProject.name = "example"

include("model")
include("server")
include("util")

for (project in rootProject.children) {
    project.projectDir = file("subprojects/${project.name}")
}
```

이렇게 하면 서브프로젝트끼리 참조할 때도 `project(":model")`처럼 해주면 됩니다.

## 자세한 작동 원리

일단 저렇게 해서 잘 돌아가는 것은 확인했는데 어떻게 해서 되는 것인지 좀 더 알아보았습니다.

* `settings.gradle`에서 제공되는 변수, 함수는 [Settings](https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html) 객체에 대응됩니다.
* `rootProject`는 [ProjectDescriptor](https://docs.gradle.org/current/javadoc/org/gradle/api/initialization/ProjectDescriptor.html) 객체입니다.
* [`include(String...)`](https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html#org.gradle.api.initialization.Settings:include(java.lang.String[]))을 호출하면 해당 이름의 프로젝트가 `rootProject`에 자식으로 추가되고 추가된 프로젝트의 `projectDir`은 프로젝트 이름과 같게 됩니다.
* 그러므로, 먼저 `include`를 한 다음 `rootProject.children`으로 전체 `ProjectDescriptor`를 받아올 수 있습니다. (서브 프로젝트가 여러 계층이라면 프로젝트 계층을 탐색해야겠군요.)
* 각 `ProjectDescriptor`의 `projectDir`을 실제 원하는 디렉토리로 설정해주면 목적을 달성할 수 있습니다. (`projectDir`이 `java.io.File` 타입이므로 `file(...)` 함수를 사용해야 합니다.)
