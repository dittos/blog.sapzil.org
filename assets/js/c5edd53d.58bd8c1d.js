"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[9254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=l,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(7462),l=(n(7294),n(3905));const a={layout:"post",title:"Gradle\uc5d0\uc11c \uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30",tags:["gradle","build-tools"]},i=void 0,o={permalink:"/2018/06/20/gradle-subproject-grouping",source:"@site/blog/2018-06-20-gradle-subproject-grouping.md",title:"Gradle\uc5d0\uc11c \uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30",description:"\ud55c \ubb38\uc7a5\uc73c\ub85c \uc694\uc57d\uc774 \uc798 \uc548\ub3fc\uc11c \uc81c\ubaa9\uc774 \uc774\uc0c1\ud55c\ub370, \uc77d\uc5b4\ubcf4\uc2dc\uba74 \ubb54\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",date:"2018-06-20T00:00:00.000Z",formattedDate:"2018\ub144 6\uc6d4 20\uc77c",tags:[{label:"gradle",permalink:"/tags/gradle"},{label:"build-tools",permalink:"/tags/build-tools"}],readingTime:3.42,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Gradle\uc5d0\uc11c \uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30",tags:["gradle","build-tools"]},prevItem:{title:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810 (2) - Embeddable, IdClass",permalink:"/2018/08/26/kotlin-jpa-pitfalls-embeddable"},nextItem:{title:"Maven\uc758 Transitive Dependency \uae38\ub4e4\uc774\uae30",permalink:"/2018/01/21/taming-maven-transitive-dependencies"}},p={authorsImageUrls:[]},d=[{value:"Gradle \uba40\ud2f0\ud504\ub85c\uc81d\ud2b8 \uae30\ucd08",id:"gradle-\uba40\ud2f0\ud504\ub85c\uc81d\ud2b8-\uae30\ucd08",level:2},{value:"\uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30",id:"\uc11c\ube0c-\ud504\ub85c\uc81d\ud2b8\ub97c-\ud55c-\ub514\ub809\ud1a0\ub9ac\uc5d0-\ubab0\uc544\ub123\uae30",level:2},{value:"\uc790\uc138\ud55c \uc791\ub3d9 \uc6d0\ub9ac",id:"\uc790\uc138\ud55c-\uc791\ub3d9-\uc6d0\ub9ac",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud55c \ubb38\uc7a5\uc73c\ub85c \uc694\uc57d\uc774 \uc798 \uc548\ub3fc\uc11c \uc81c\ubaa9\uc774 \uc774\uc0c1\ud55c\ub370, \uc77d\uc5b4\ubcf4\uc2dc\uba74 \ubb54\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"gradle-\uba40\ud2f0\ud504\ub85c\uc81d\ud2b8-\uae30\ucd08"},"Gradle \uba40\ud2f0\ud504\ub85c\uc81d\ud2b8 \uae30\ucd08"),(0,l.kt)("p",null,"\uc77c\ub2e8 \uac04\ub2e8\ud558\uac8c Gradle\uc5d0\uc11c \uba40\ud2f0\ud504\ub85c\uc81d\ud2b8 \uc124\uc815 \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\uc2dc\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"model"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"util")," \uc138 \uac00\uc9c0 \uc11c\ube0c\ud504\ub85c\uc81d\ud2b8\ub85c \ub098\ub208\ub2e4\uace0 \ud558\uba74 \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"util/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"settings.gradle"))),(0,l.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.gradle"),"\uc5d0 \ubaa8\ub4e0 \uc11c\ube0c\ud504\ub85c\uc81d\ud2b8\ub97c \uc120\uc5b8\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'rootProject.name = "example"\n\ninclude("model")\ninclude("server")\ninclude("util")\n')),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \ub9cc\uc57d ",(0,l.kt)("inlineCode",{parentName:"p"},"server"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"model"),"\uc744 \ucc38\uc870\ud558\uace0\uc790 \ud55c\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"server/build.gradle"),"\uc5d0\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    compile(project(":model"))\n}\n')),(0,l.kt)("p",null,"\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc11c\ube0c-\ud504\ub85c\uc81d\ud2b8\ub97c-\ud55c-\ub514\ub809\ud1a0\ub9ac\uc5d0-\ubab0\uc544\ub123\uae30"},"\uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30"),(0,l.kt)("p",null,"\ubcf4\ud1b5 Git \uc800\uc7a5\uc18c\uc5d0\ub294 \ucf54\ub4dc\ub9cc \uc788\ub294\uac8c \uc544\ub2c8\ub77c \ub2e4\ub978 \uac83\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubaa8\uc544\ub454 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \ub514\ub809\ud1a0\ub9ac \uac19\uc740 \uac83\uc778\ub370, \uc774\uac8c Gradle \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc640 \uc11e\uc5ec\uc788\uc73c\uba74 \uae30\ubd84\uc774 \ub098\uc069\ub2c8\ub2e4. (\uac1c\uc778 \ucde8\ud5a5)"),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \ub9cc\uc57d \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uacbd\ud558\uace0 \uc2f6\ub2e4\uba74,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scripts/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"subprojects/")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"util/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"settings.gradle"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"settings.gradle"),"\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ubc14\ub00c\uace0..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'rootProject.name = "example"\n\ninclude("subprojects:model")\ninclude("subprojects:server")\ninclude("subprojects:util")\n')),(0,l.kt)("p",null,"\ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\ub97c \ucc38\uc870\ud560\ub54c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"p"},'project(":subprojects:model")'),"\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"subprojects:"),"\ub97c \uaf2d \ubd99\uc5ec\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\ud589\ud788\ub3c4 Gradle\uc740 \ub17c\ub9ac\uc801\uc778 \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c\uc640 \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\ub97c \ub2e4\ub974\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.gradle"),"\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'rootProject.name = "example"\n\ninclude("model")\ninclude("server")\ninclude("util")\n\nfor (project in rootProject.children) {\n    project.projectDir = file("subprojects/${project.name}")\n}\n')),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc11c\ube0c\ud504\ub85c\uc81d\ud2b8\ub07c\ub9ac \ucc38\uc870\ud560 \ub54c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"p"},'project(":model")'),"\ucc98\ub7fc \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc790\uc138\ud55c-\uc791\ub3d9-\uc6d0\ub9ac"},"\uc790\uc138\ud55c \uc791\ub3d9 \uc6d0\ub9ac"),(0,l.kt)("p",null,"\uc77c\ub2e8 \uc800\ub807\uac8c \ud574\uc11c \uc798 \ub3cc\uc544\uac00\ub294 \uac83\uc740 \ud655\uc778\ud588\ub294\ub370 \uc5b4\ub5bb\uac8c \ud574\uc11c \ub418\ub294 \uac83\uc778\uc9c0 \uc880 \ub354 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"settings.gradle"),"\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \ubcc0\uc218, \ud568\uc218\ub294 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html"},"Settings")," \uac1d\uccb4\uc5d0 \ub300\uc751\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rootProject"),"\ub294 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/javadoc/org/gradle/api/initialization/ProjectDescriptor.html"},"ProjectDescriptor")," \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html#org.gradle.api.initialization.Settings:include(java.lang.String%5B%5D)"},(0,l.kt)("inlineCode",{parentName:"a"},"include(String...)")),"\uc744 \ud638\ucd9c\ud558\uba74 \ud574\ub2f9 \uc774\ub984\uc758 \ud504\ub85c\uc81d\ud2b8\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"rootProject"),"\uc5d0 \uc790\uc2dd\uc73c\ub85c \ucd94\uac00\ub418\uace0 \ucd94\uac00\ub41c \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"projectDir"),"\uc740 \ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uacfc \uac19\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ubbc0\ub85c, \uba3c\uc800 ",(0,l.kt)("inlineCode",{parentName:"li"},"include"),"\ub97c \ud55c \ub2e4\uc74c ",(0,l.kt)("inlineCode",{parentName:"li"},"rootProject.children"),"\uc73c\ub85c \uc804\uccb4 ",(0,l.kt)("inlineCode",{parentName:"li"},"ProjectDescriptor"),"\ub97c \ubc1b\uc544\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\uac00 \uc5ec\ub7ec \uacc4\uce35\uc774\ub77c\uba74 \ud504\ub85c\uc81d\ud2b8 \uacc4\uce35\uc744 \ud0d0\uc0c9\ud574\uc57c\uaca0\uad70\uc694.)"),(0,l.kt)("li",{parentName:"ul"},"\uac01 ",(0,l.kt)("inlineCode",{parentName:"li"},"ProjectDescriptor"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"li"},"projectDir"),"\uc744 \uc2e4\uc81c \uc6d0\ud558\ub294 \ub514\ub809\ud1a0\ub9ac\ub85c \uc124\uc815\ud574\uc8fc\uba74 \ubaa9\uc801\uc744 \ub2ec\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (",(0,l.kt)("inlineCode",{parentName:"li"},"projectDir"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"java.io.File")," \ud0c0\uc785\uc774\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"file(...)")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.)")))}m.isMDXComponent=!0}}]);