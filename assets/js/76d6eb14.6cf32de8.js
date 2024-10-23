"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[6908],{6628:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var r=i(4848),o=i(8453);const s={layout:"post",title:"Gradle Convention Plugins \uc0bd\uc9c8\uae30",tags:["gradle","build-tools","kotlin","spring"]},l=void 0,t={permalink:"/2022/03/04/gradle-convention-plugins",source:"@site/blog/2022-03-04-gradle-convention-plugins.md",title:"Gradle Convention Plugins \uc0bd\uc9c8\uae30",description:"\uc624\ub79c\ub9cc\uc5d0 Spring Boot \ud504\ub85c\uc81d\ud2b8\ub97c \uba40\ud2f0 \ubaa8\ub4c8\ub85c \uad6c\uc131\ud558\ub824\uace0 Gradle \ubb38\uc11c\ub97c \uc77d\ub2e4\ubcf4\ub2c8 \uba40\ud2f0 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c subprojects {}, allprojects {}\uc758 \uc0ac\uc6a9\uc744 \ub354\uc774\uc0c1 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \ub0b4\uc6a9\uc744 \ubcf4\uac8c \ub418\uc5c8\ub2e4.",date:"2022-03-04T00:00:00.000Z",tags:[{inline:!0,label:"gradle",permalink:"/tags/gradle"},{inline:!0,label:"build-tools",permalink:"/tags/build-tools"},{inline:!0,label:"kotlin",permalink:"/tags/kotlin"},{inline:!0,label:"spring",permalink:"/tags/spring"}],readingTime:4.25,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Gradle Convention Plugins \uc0bd\uc9c8\uae30",tags:["gradle","build-tools","kotlin","spring"]},unlisted:!1,prevItem:{title:"\ub098\uc758 k3s \uad6c\uc131 \ub458\ub7ec\ubcf4\uae30",permalink:"/2023/01/22/k3s"},nextItem:{title:"\u2018\uc21c\uc218 \ud568\uc218\ud615\u2019 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Nix \ub9db\ubcf4\uae30",permalink:"/2021/05/09/nix"}},d={authorsImageUrls:[]},a=[{value:"\ubb38\uc81c 1: <code>UnknownPluginException</code>",id:"\ubb38\uc81c-1-unknownpluginexception",level:2},{value:"\ubb38\uc81c 2: \ud50c\ub7ec\uadf8\uc778 \ubc84\uc804 \uc9c0\uc815 \ubd88\uac00",id:"\ubb38\uc81c-2-\ud50c\ub7ec\uadf8\uc778-\ubc84\uc804-\uc9c0\uc815-\ubd88\uac00",level:2}];function c(n){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\uc624\ub79c\ub9cc\uc5d0 Spring Boot \ud504\ub85c\uc81d\ud2b8\ub97c \uba40\ud2f0 \ubaa8\ub4c8\ub85c \uad6c\uc131\ud558\ub824\uace0 Gradle \ubb38\uc11c\ub97c \uc77d\ub2e4\ubcf4\ub2c8 ",(0,r.jsxs)(e.a,{href:"https://docs.gradle.org/7.4/userguide/sharing_build_logic_between_subprojects.html#sec:convention_plugins_vs_cross_configuration",children:["\uba40\ud2f0 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,r.jsx)(e.code,{children:"subprojects {}"}),", ",(0,r.jsx)(e.code,{children:"allprojects {}"}),"\uc758 \uc0ac\uc6a9\uc744 \ub354\uc774\uc0c1 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4"]}),"\ub294 \ub0b4\uc6a9\uc744 \ubcf4\uac8c \ub418\uc5c8\ub2e4."]}),"\n",(0,r.jsxs)(e.p,{children:["\uc704\uc640 \uac19\uc740 \uae30\uc874 \ubc29\uc2dd\uc744 ",(0,r.jsx)(e.em,{children:"cross project configuration"})," \uc774\ub77c\uace0 \ud558\ub294\ub370, \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\uac00 \uc788\ub2e4\uace0 \ud55c\ub2e4."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc11c\ube0c\ud504\ub85c\uc81d\ud2b8\uc758 \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub9cc \ubd10\uc11c\ub294 \ubd80\ubaa8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ube4c\ub4dc \ub85c\uc9c1\uc774 \uc8fc\uc785\ub41c\ub2e4\ub294 \uac83\uc774 \ubd84\uba85\ud558\uac8c \ub4dc\ub7ec\ub098\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub85c\uc9c1\uc744 \ud30c\uc545\ud558\uae30 \ud798\ub4e4\ub2e4."}),"\n",(0,r.jsxs)(e.li,{children:["\uc124\uc815 \uc2dc\uc810\uc5d0 \ud504\ub85c\uc81d\ud2b8 \uac04\uc5d0 \ucee4\ud50c\ub9c1\uc774 \uc0dd\uae30\uae30 \ub54c\ubb38\uc5d0 ",(0,r.jsx)(e.a,{href:"https://docs.gradle.org/7.4/userguide/multi_project_configuration_and_execution.html#sec:configuration_on_demand",children:"configuration-on-demand"}),"\uc640 \uac19\uc740 \ucd5c\uc801\ud654\uac00 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\ud070 \ud504\ub85c\uc81d\ud2b8\uac00 \uc544\ub2c8\ub77c\uba74 \uc0ac\uc2e4 \ubcc4\ub85c \uc0c1\uad00 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud558\uc9c0\ub9cc, \uc544\ubb34\ud2bc \uc77c\ub9ac\uac00 \uc788\ub2e4\uace0 \uc0dd\uac01\ub418\ub2c8 \uad8c\uc7a5 \ubc29\uc2dd\uc778 Convention Plugins \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574\ubcf8\ub2e4."}),"\n",(0,r.jsxs)(e.h2,{id:"\ubb38\uc81c-1-unknownpluginexception",children:["\ubb38\uc81c 1: ",(0,r.jsx)(e.code,{children:"UnknownPluginException"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://docs.gradle.org/7.4/userguide/declaring_dependencies_between_subprojects.html",children:"\uacf5\uc2dd \ubb38\uc11c"}),"\ub97c Kotlin DSL \ubc84\uc804\uc73c\ub85c \ub530\ub77c\ud574\ubcf4\uc558\ub294\ub370, \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uac00 \ub098\uba74\uc11c \uc798 \ub418\uc9c0 \uc54a\uc558\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Build file '/Users/user/myproject/api/build.gradle.kts' line: 1\n\nPlugin [id: 'myproject.java-conventions'] was not found in any of the following sources:\n\n* Try:\n> Run with --info or --debug option to get more log output.\n> Run with --scan to get full insights.\n\n* Exception is:\norg.gradle.api.plugins.UnknownPluginException: Plugin [id: 'myproject.java-conventions'] was not found in any of the following sources:\n\n- Gradle Core Plugins (plugin is not in 'org.gradle' namespace)\n- Plugin Repositories (plugin dependency must include a version number for this source)\n...\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uc774 \ubb38\uc81c\ub294, ",(0,r.jsx)(e.code,{children:"buildSrc/build.gradle.kts"}),"\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ub9cc\ub4e4\uc5b4\uc8fc\uba74 \ud574\uacb0\ub41c\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"plugins {\n    `kotlin-dsl`\n}\n\nrepositories {\n    // for kotlin-dsl plugin\n    gradlePluginPortal()\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\ud574\ub2f9 \ubb38\uc11c\ud654 \ubc84\uadf8\ub294 ",(0,r.jsx)(e.a,{href:"https://github.com/gradle/gradle/issues/19667",children:"gradle/gradle#19667"}),"\ub85c \ub4f1\ub85d\ub418\uc5b4 \uc788\ub2e4. (\uc774 \uc790\uc2dd\ub4e4 \u3160\u3160)"]}),"\n",(0,r.jsx)(e.h2,{id:"\ubb38\uc81c-2-\ud50c\ub7ec\uadf8\uc778-\ubc84\uc804-\uc9c0\uc815-\ubd88\uac00",children:"\ubb38\uc81c 2: \ud50c\ub7ec\uadf8\uc778 \ubc84\uc804 \uc9c0\uc815 \ubd88\uac00"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),"\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ud50c\ub7ec\uadf8\uc778 \uc124\uc815\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud588\ub354\ub2c8 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uac00 \ub0ac\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Invalid plugin request [id: 'org.springframework.boot', version: '2.6.4']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.springframework.boot' is an implementation dependency of project ':buildSrc'.\nInvalid plugin request [id: 'io.spring.dependency-management', version: '1.0.11.RELEASE']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'io.spring.dependency-management' is an implementation dependency of project ':buildSrc'.\nInvalid plugin request [id: 'org.jetbrains.kotlin.jvm', version: '1.6.10']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.jetbrains.kotlin.jvm' is an implementation dependency of project ':buildSrc'.\nInvalid plugin request [id: 'org.jetbrains.kotlin.plugin.spring', version: '1.6.10']. Plugin requests from precompiled scripts must not include a version number. Please remove the version from the offending request and make sure the module containing the requested plugin 'org.jetbrains.kotlin.plugin.spring' is an implementation dependency of project ':buildSrc'.\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uc77c\ub2e8 ",(0,r.jsx)(e.code,{children:"plugins {}"})," \ube14\ub7ed\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \ubc84\uc804\uc744 \uc81c\uac70\ud588\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'plugins {\n    id("org.springframework.boot")\n    id("io.spring.dependency-management")\n    kotlin("jvm")\n    kotlin("plugin.spring")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\uadfc\ub370 \uadf8\ub7ec\uba74 \ud50c\ub7ec\uadf8\uc778 \ubc84\uc804\uc744 \uc5b4\ub5bb\uac8c \uc9c0\uc815\ud574\uc57c \ud560\uae4c? \ub2f5\uc740 ",(0,r.jsx)(e.code,{children:"buildSrc/build.gradle.kts"}),"\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc758\uc874\uc131\uc744 \ucd94\uac00\ud558\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n    implementation("org.springframework.boot:spring-boot-gradle-plugin:2.6.4")\n    implementation("io.spring.gradle:dependency-management-plugin:1.0.11.RELEASE")\n    implementation("org.jetbrains.kotlin:kotlin-gradle-plugin:1.6.10")\n    implementation("org.jetbrains.kotlin:kotlin-allopen:1.6.10")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\ucc38\uace0\ub85c \uc5ec\uae30\uc5d0\ub294 \ud50c\ub7ec\uadf8\uc778 ID\uac00 \uc544\ub2c8\ub77c, Maven \uc88c\ud45c\ub97c \ucc3e\uc544\uc11c \uc801\uc5b4\uc8fc\uc5c8\ub2e4. Maven \uc88c\ud45c\ub294 ",(0,r.jsx)(e.a,{href:"https://plugins.gradle.org/",children:"plugins.gradle.org"}),"\uc5d0\uc11c \ud50c\ub7ec\uadf8\uc778 ID\ub85c \uac80\uc0c9\ud574\uc11c \ucc3e\ub294\ub2e4."]}),"\n",(0,r.jsxs)(e.p,{children:["\uc608\ub97c \ub4e4\uc5b4 ",(0,r.jsx)(e.a,{href:"https://plugins.gradle.org/plugin/org.springframework.boot",children:(0,r.jsx)(e.code,{children:"org.springframework.boot"})}),'\ub97c \ucc3e\uc544\uc11c \ub4e4\uc5b4\uac00\ubcf4\uba74 "Using legacy plugin application:" \uc544\ub798\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ub418\uc5b4\uc788\ub2e4.']}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-groovy",children:'buildscript {\n  ...\n  dependencies {\n    //         v~~~~ \uc774 \ubd80\ubd84!\n    classpath "org.springframework.boot:spring-boot-gradle-plugin:2.6.4"\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\ud50c\ub7ec\uadf8\uc778 ID\ub9cc \uac00\uc9c0\uace0 \ud560 \uc218 \uc788\ub294 \ub354 \uc88b\uc740 \ubc29\ubc95\uc774 \uc788\uc744 \uc218\ub3c4 \uc788\ub294\ub370 \ucc3e\uc544\ubcf4\uc9c4 \uc54a\uc558\ub2e4. \ub05d!"})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>t});var r=i(6540);const o={},s=r.createContext(o);function l(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);