"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[1565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=m(a),c=l,u=k["".concat(o,".").concat(c)]||k[c]||d[c]||r;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={layout:"post",title:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810 (2) - Embeddable, IdClass",tags:["database","jpa","kotlin","java","spring","backend"]},i=void 0,p={permalink:"/2018/08/26/kotlin-jpa-pitfalls-embeddable",source:"@site/blog/2018-08-26-kotlin-jpa-pitfalls-embeddable.md",title:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810 (2) - Embeddable, IdClass",description:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810\uc744 \uc4f4 \uc774\ud6c4\ub85c \uc9c1\uc7a5\uc5d0\uc11c \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub3c4 Kotlin + JPA\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub2e4\ubcf4\ub2c8 \uc880 \ub354 \uace0\uae09 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uace0 \ub610 \uc5ec\ub7ec\uac00\uc9c0 \uc0c8\ub85c\uc6b4 \uc5b4\ub824\uc6c0\uc5d0 \ubd80\ub52a\ud614\uc2b5\ub2c8\ub2e4.",date:"2018-08-26T00:00:00.000Z",formattedDate:"2018\ub144 8\uc6d4 26\uc77c",tags:[{label:"database",permalink:"/tags/database"},{label:"jpa",permalink:"/tags/jpa"},{label:"kotlin",permalink:"/tags/kotlin"},{label:"java",permalink:"/tags/java"},{label:"spring",permalink:"/tags/spring"},{label:"backend",permalink:"/tags/backend"}],readingTime:9.45,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810 (2) - Embeddable, IdClass",tags:["database","jpa","kotlin","java","spring","backend"]},prevItem:{title:"Windows 10 Home\uc5d0 Docker Desktop \uc124\uce58\ud558\uae30",permalink:"/2019/06/09/docker-desktop-for-windows-home"},nextItem:{title:"Gradle\uc5d0\uc11c \uc11c\ube0c \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubab0\uc544\ub123\uae30",permalink:"/2018/06/20/gradle-subproject-grouping"}},o={authorsImageUrls:[]},m=[{value:"Embeddable",id:"embeddable",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"Embedded\uc640 null",id:"embedded\uc640-null",level:3},{value:"\uac19\uc740 \ud0c0\uc785\uc758 Embedded \uc18d\uc131\uc744 \uc5ec\ub7ec \uac1c \uc120\uc5b8\ud558\uae30",id:"\uac19\uc740-\ud0c0\uc785\uc758-embedded-\uc18d\uc131\uc744-\uc5ec\ub7ec-\uac1c-\uc120\uc5b8\ud558\uae30",level:3},{value:"IdClass",id:"idclass",level:2},{value:"IdClass\uc640 ImplicitNamingStrategy",id:"idclass\uc640-implicitnamingstrategy",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/2017/11/02/kotlin-jpa-pitfalls/"},"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810"),"\uc744 \uc4f4 \uc774\ud6c4\ub85c \uc9c1\uc7a5\uc5d0\uc11c \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub3c4 Kotlin + JPA\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub2e4\ubcf4\ub2c8 \uc880 \ub354 \uace0\uae09 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uace0 \ub610 \uc5ec\ub7ec\uac00\uc9c0 \uc0c8\ub85c\uc6b4 \uc5b4\ub824\uc6c0\uc5d0 \ubd80\ub52a\ud614\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"embeddable"},"Embeddable"),(0,l.kt)("p",null,"\uae30\uac04(\uc2dc\uc791 \ub0a0\uc9dc, \ub05d \ub0a0\uc9dc)\uc774\ub098 \uc88c\ud45c(X, Y) \ub4f1 \ud56d\uc0c1 \uac19\uc774 \ub2e4\ub2c8\ub294 \uac12\ub4e4\uc744 \uac1d\uccb4\ub85c \ubb36\uc5b4\uc11c Entity\uc758 \uc18d\uc131\uc73c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uac1d\uccb4\uc758 \ud074\ub798\uc2a4\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Embeddable")," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ubd99\uc5ec\uc11c \uc120\uc5b8\ud558\uace0, Entity\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Embedded")," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ubd99\uc5ec\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc608\uc81c \ucf54\ub4dc\ub97c \ubcf4\uba74,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Embeddable\ndata class Coordinate(\n  var x: Int,\n  var y: Int\n)\n")),(0,l.kt)("p",null,"\uc640 \uac19\uc774 \uc120\uc5b8\ud558\uace0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ndata class Marker(\n  @get:Id\n  var id: Int,\n\n  @get:Embedded\n  var coordinate: Coordinate\n)\n")),(0,l.kt)("p",null,"\ucc98\ub7fc \uac00\uc838\ub2e4 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Coordinate"),"\uc5d0 \ub300\ud55c \uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14\uc774 \uc0dd\uae30\uc9c0 \uc54a\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"Marker")," \ud14c\uc774\ube14\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \uceec\ub7fc\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc8fc\uc758\uc0ac\ud56d"},"\uc8fc\uc758\uc0ac\ud56d"),(0,l.kt)("p",null,"Embeddable \ud074\ub798\uc2a4\ub3c4 ",(0,l.kt)("a",{parentName:"p",href:"/2017/11/02/kotlin-jpa-pitfalls/"},"\uc774\uc804 \uae00"),"\uc5d0\uc11c \uc124\uba85\ud55c Entity \ud074\ub798\uc2a4\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub2e4\uc74c \uc18d\uc131\uc744 \ub9cc\uc871\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc0dd\uc131\uc790(\uc778\uc790 \uc5c6\ub294 \uc0dd\uc131\uc790)\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4. ","\u2192"," ",(0,l.kt)("a",{parentName:"li",href:"http://kotlinlang.org/docs/reference/compiler-plugins.html#jpa-support"},"kotlin-jpa \ucef4\ud30c\uc77c\ub7ec \ud50c\ub7ec\uadf8\uc778")," \ucd94\uac00"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"final"),"\uc774\uba74 \uc548\ub41c\ub2e4. ","\u2192"," ",(0,l.kt)("a",{parentName:"li",href:"http://kotlinlang.org/docs/reference/compiler-plugins.html#all-open-compiler-plugin"},"kotlin-allopen \ucef4\ud30c\uc77c\ub7ec \ud50c\ub7ec\uadf8\uc778"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"javax.persistence.Embeddable")," \ucd94\uac00"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\ud37c\ud2f0\uc5d0\ub294 getter\uc640 setter\uac00 \uc874\uc7ac\ud574\uc57c \ud55c\ub2e4. ","\u2192"," ",(0,l.kt)("inlineCode",{parentName:"li"},"val"),"\uc774 \uc544\ub2c8\ub77c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"var"),"\ub85c \uc120\uc5b8"))),(0,l.kt)("h3",{id:"embedded\uc640-null"},"Embedded\uc640 null"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/javaee/jpa-spec/issues/42"},"JPA \uc2a4\ud399\uc5d0 \uc758\ud558\uba74 Embedded \uc18d\uc131\uc740 null\uc774 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")," \ud558\uc9c0\ub9cc Hibernate \uac19\uc740 \uad6c\ud604\uccb4\ub4e4\uc740 null\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2f9\uc5f0\ud788 \uc77c\ub2e8 Kotlin\uc5d0\uc11c nullable \ud0c0\uc785\uc73c\ub85c \uc218\uc815\ud574\uc57c null\uc744 \ub123\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ndata class Marker(\n  @get:Id\n  var id: Int,\n\n  @get:Embedded\n  var coordinate: Coordinate? // <- nullable \ud0c0\uc785\uc73c\ub85c \uc218\uc815\n)\n")),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \uc2e4\uc81c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8\uc5d0\uc11c\ub3c4 \uceec\ub7fc\uc744 nullable\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7f0\ub370 Hibernate\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\ub294 \uacbd\uc6b0(",(0,l.kt)("inlineCode",{parentName:"p"},"hbm2ddl.auto")," \uc0ac\uc6a9\uc2dc), Embeddable\uc5d0 \uc18d\ud55c \uceec\ub7fc\uc740 \ubb34\uc870\uac74 not null \uceec\ub7fc\uc774 \ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815\ud558\uba74 nullable \uceec\ub7fc\uc774 \uc0dd\uc131\ub418\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Embeddable\ndata class Coordinate(\n  @get:Column\n  var x: Int,\n  @get:Column\n  var y: Int\n)\n")),(0,l.kt)("p",null,"\ucc38\uace0\ub85c, Embeddable \ud074\ub798\uc2a4\uc758 \uc5b4\ub178\ud14c\uc774\uc158 \uc704\uce58 (\ud544\ub4dc vs \ud504\ub85c\ud37c\ud2f0)\ub294 \ud3ec\ud568\ub41c Entity \ud074\ub798\uc2a4\uc758 \uc5b4\ub178\ud14c\uc774\uc158 \uc704\uce58\ub97c \ub530\ub77c\uac11\ub2c8\ub2e4. \uc55e\uc758 \uc608\uc81c\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"Marker"),"\ub294 \ud504\ub85c\ud37c\ud2f0(getter)\uc5d0 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ub2ec\uc558\uae30 \ub54c\ubb38\uc5d0 Embeddable\uc5d0\uc11c\ub3c4 getter\uc5d0 \ub2ec\uc544\uc57c \uc778\uc2dd\uc774 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kotlin\uc5d0\uc11c JPA \uad00\ub828 \uc5b4\ub178\ud14c\uc774\uc158\uc740 \ubb34\uc870\uac74 ",(0,l.kt)("inlineCode",{parentName:"strong"},"@get:"),"\uc73c\ub85c \ub2ec\uc544\uc57c \ud55c\ub2e4"),"\uace0 \uae30\uc5b5\ud574\ub450\uba74 \ud63c\ub780\uc774 \uc801\uc740 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uac19\uc740-\ud0c0\uc785\uc758-embedded-\uc18d\uc131\uc744-\uc5ec\ub7ec-\uac1c-\uc120\uc5b8\ud558\uae30"},"\uac19\uc740 \ud0c0\uc785\uc758 Embedded \uc18d\uc131\uc744 \uc5ec\ub7ec \uac1c \uc120\uc5b8\ud558\uae30"),(0,l.kt)("p",null,"Kotlin\uacfc\ub294 \ubb34\uad00\ud558\uc9c0\ub9cc \uc54c\uc544\ub450\uba74 \uc88b\uc740 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ndata class Line(\n  @get:Id\n  var id: Int,\n\n  @get:Embedded\n  var start: Coordinate,\n\n  @get:Embedded\n  var end: Coordinate\n)\n")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc120\uc5b8\ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"start"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"\uac00 \ub3d9\uc77c\ud55c \uceec\ub7fc ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"\ub97c \uac00\uc9c0\ub824\uace0 \ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'org.hibernate.MappingException: Repeated column in mapping for entity: org.sapzil.jpa.Line column: x (should be mapped with insert="false" update="false")\n')),(0,l.kt)("p",null,"\uc815\uc11d \ud574\uacb0 \ubc29\ubc95\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javaee/6/api/javax/persistence/AttributeOverride.html"},"@AttributeOverride"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uc9c0\ub9cc \uc774\ub7f0 \uc18d\uc131\uc774 \ub9ce\uc544\uc9c0\uba74 \uc77c\uc77c\ud788 \ub2ec\uae30\ub294 \uadc0\ucc2e\uc2b5\ub2c8\ub2e4. \uc774 \ub54c ",(0,l.kt)("inlineCode",{parentName:"p"},"ImplicitNamingStrategy"),"\ub97c \uc774\uc6a9\ud558\uba74 \uc790\ub3d9\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"start_x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"end_x"),"\uc640 \uac19\uc774 prefix \ubd99\uc740 \uceec\ub7fc\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"Spring\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"spring.jpa.hibernate.naming.implicit-strategy")," \ud504\ub85c\ud37c\ud2f0\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"org.hibernate.boot.model.naming.ImplicitNamingStrategyComponentPathImpl"),"\ub85c \uc9c0\uc815\ud558\uac70\ub098, ",(0,l.kt)("inlineCode",{parentName:"p"},"ImplicitNamingStrategyComponentPathImpl"),"\uc744 Bean\uc73c\ub85c \uc8fc\uc785\ud558\uc5ec \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"idclass"},"IdClass"),(0,l.kt)("p",null,"JPA\uc5d0\uc11c \ubcf5\ud569 \uae30\ubcf8\ud0a4(composite primary key)\ub97c \ub9e4\ud551\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"@IdClass")," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 PK\uac00 \ub420 \uc18d\uc131\uc5d0 \ubaa8\ub450 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\ub97c \ubd99\uc774\uace0, PK\uc758 \uc18d\uc131\uc744 \ubaa8\ub450 \uac00\uc9c4 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"@IdClass")," \uc5b4\ub178\ud14c\uc774\uc158\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\n@IdClass(Name::class)\ndata class Person(\n    @get:Id\n    var firstName: String,\n    @get:Id\n    var lastName: String,\n    var phoneNumber: String\n)\n")),(0,l.kt)("p",null,"\uc5b4\ub5a4 \ud074\ub798\uc2a4\ub97c IdClass\ub85c \uc0ac\uc6a9\ud558\ub824\uba74 Serializable \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud574\uc57c \ub3fc\uc11c \ucc98\uc74c\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc120\uc5b8\ud574 \ubd24\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Name(var firstName: String, var lastName: String) : Serializable\n")),(0,l.kt)("p",null,"\uadf8\ub7ac\ub354\ub2c8 \uac1d\uccb4\ub97c \uc800\uc7a5\ud558\ub824\uace0 \ud560 \ub54c \uc774\ub7f0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"java.lang.IllegalArgumentException: No argument provided for a required parameter: parameter #0 firstName of fun <init>(kotlin.String, kotlin.String): org.sapzil.jpa.Name\n    at kotlin.reflect.jvm.internal.KCallableImpl.callDefaultMethod(KCallableImpl.kt:138)\n    at kotlin.reflect.jvm.internal.KCallableImpl.callBy(KCallableImpl.kt:110)\n    at org.springframework.beans.BeanUtils$KotlinDelegate.instantiateClass(BeanUtils.java:765)\n    at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:170)\n    at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:124)\n    ...\n")),(0,l.kt)("p",null,"\uba54\uc2dc\uc9c0\ub97c \ubcf4\ub2c8 \uc544\ubb34\ub798\ub3c4 Spring\uc774 \uc0dd\uc131\uc790\uc5d0 \uc778\uc790\ub97c \ub118\uae30\uc9c0 \uc54a\uace0 \uac1d\uccb4\ub97c \ub9cc\ub4e4\ub824\uace0 \ud574\uc11c \uadf8\ub7f0 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc778\uc790\ub97c \ubc1b\uc9c0 \uc54a\ub294 \uc0dd\uc131\uc790\ub97c \ucd94\uac00\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Name(var firstName: String, var lastName: String) : Serializable {\n    constructor() : this("", "")\n}\n')),(0,l.kt)("p",null,"\uadf8\ub7ac\ub294\ub370\ub3c4 \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4\uc5d0 \ub098\ud0c0\ub09c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework/blob/d553ddc5b3a657adebad04d9f3c7d466fbdd7b05/spring-beans/src/main/java/org/springframework/beans/BeanUtils.java#L122-L124"},"BeanUtils\uc758 \ucf54\ub4dc"),"\ub97c \ubcf4\uba74..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Constructor<T> ctor = (KotlinDetector.isKotlinType(clazz) ?\n        KotlinDelegate.getPrimaryConstructor(clazz) : clazz.getDeclaredConstructor());\nreturn instantiateClass(ctor);\n")),(0,l.kt)("p",null,"Kotlin \ud074\ub798\uc2a4\uc77c \uacbd\uc6b0 Primary Constructor\ub97c \ucc3e\uac8c \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/classes.html#constructors"},"Primary Constructor"),"\ub294 \ud074\ub798\uc2a4 \uc120\uc5b8 \ud5e4\ub354\uc5d0 \uac19\uc774 \uc120\uc5b8\ub418\ub294 \uc0dd\uc131\uc790\ub97c \ub9d0\ud569\ub2c8\ub2e4. \ubc29\uae08 \ucd94\uac00\ud55c \uc778\uc790 \uc5c6\ub294 \uc0dd\uc131\uc790\ub294 Secondary Constructor\uc774\uae30 \ub54c\ubb38\uc5d0 \uc778\uc2dd\ub418\uc9c0 \uc54a\uc740 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c data class\ub97c \ud3ec\uae30\ud574\uc57c \ud558\ub098... \uc0dd\uac01\ud558\uace0 \uc788\uc5c8\ub294\ub370, \uad6c\uae00\ub9c1\ud558\ub358 \uc911 ",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/mchlstckl/4f9602b5d776878f48f0"},"Gist"),"\ub97c \ud558\ub098 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4. \uacb0\ub860\uc740 \uc0dd\uc131\uc790\uc758 \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130\uc5d0 \uae30\ubcf8\uac12\uc744 \uc9c0\uc815\ud558\uba74 \ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Name(var firstName: String = "", var lastName: String = "") : Serializable\n')),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 Primary Constructor\ub97c \uc778\uc790 \uc5c6\uc774 \ud638\ucd9c\ud560 \uc218 \uc788\uac8c \ub418\uc5b4\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \uc800\uc7a5\uc774 \ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"idclass\uc640-implicitnamingstrategy"},"IdClass\uc640 ImplicitNamingStrategy"),(0,l.kt)("p",null,"(Kotlin\uacfc\ub294 \ubb34\uad00\ud55c \ub0b4\uc6a9\uc774\uc9c0\ub9cc) \uc55e\uc11c \uc124\uba85\ud55c\ub300\ub85c ImplicitNamingStrategy\ub97c \ubcc0\uacbd\ud558\uba74 IdClass\ub97c \uc0ac\uc6a9\ud560 \ub54c \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ImplicitNamingStrategyComponentPathImpl"),"\uc744 \uc0ac\uc6a9\ud560 \ub54c, \uc704\uc758 \uc608\uc81c\ub300\ub85c \ubaa8\ub378\uc744 \uc120\uc5b8\ud55c \ud6c4 \uc800\uc7a5\ud558\ub824\uace0 \ud558\uba74 \uc774\ub807\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'org.h2.jdbc.JdbcSQLException: NULL not allowed for column "_IDENTIFIER_MAPPER_FIRST_NAME"; SQL statement:\ninsert into person (phone_number, id_first_name, id_last_name) values (?, ?, ?) [23502-197]\n')),(0,l.kt)("p",null,"\uba3c\uc800 \uceec\ub7fc \uc774\ub984 \uc55e\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"id_"),"\uac00 \ubd99\uc740 \uac83\ub3c4 \uc774\uc0c1\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"_identifier_mapper_first_name"),"\uc774\ub77c\ub294 \uc774\uc0c1\ud55c \uceec\ub7fc\uc774 \uc0dd\uae34 \uac83\ub3c4 \ubb38\uc81c\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"IdClass\ub97c \uc9c0\uc815\ud558\uba74 Hibernate\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"_identifierMapper"),"\ub77c\ub294 \uc228\uc740 \uc18d\uc131\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc989 ",(0,l.kt)("inlineCode",{parentName:"p"},"id.firstName"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"_identifierMapper.firstName")," \uac19\uc740 \uc18d\uc131\uc774 \uc0dd\uae30\ub294 \uac74\ub370\uc694. \uae30\ubcf8 ImplicitNamingStrategy\uc5d0\uc11c\ub294 \uc18d\uc131 \uacbd\ub85c\uc758 \ub9c8\uc9c0\ub9c9 \ubd80\ubd84\ub9cc \ucde8\ud558\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \uc5c6\uc9c0\ub9cc, \uc6b0\ub9ac\ub294 \uc18d\uc131 \uacbd\ub85c\ub97c \ubaa8\ub450 \ub098\ud0c0\ub0b4\ub294 \uc804\ub7b5\uc73c\ub85c \ubcc0\uacbd\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7f0 \uc774\uc0c1\ud55c \uc77c\uc774 \ubc8c\uc5b4\uc9c4 \uac81\ub2c8\ub2e4. (\uacb0\uad6d\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://hibernate.atlassian.net/browse/HHH-11427"},"HHH-11427 \ubc84\uadf8")," \ub54c\ubb38\uc785\ub2c8\ub2e4.)"),(0,l.kt)("p",null,"\uc774\uac83\uc744 \uc81c\ub300\ub85c \ud574\uacb0\ud558\ub824\uba74 ImplicitNamingStrategy\uc758 \uad6c\ud604\uc744 \uc218\uc815\ud574\uc57c\uaca0\uc9c0\ub9cc, \uac04\ub2e8\ud558\uac8c\ub294 \uceec\ub7fc\uba85\uc744 \uc9c1\uc811 \uc9c0\uc815\ud574\uc11c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\n@IdClass(Name::class)\ndata class Person(\n    @get:Id\n    @get:Column(name = "first_name") // <- \uceec\ub7fc\uba85 \uc9c0\uc815\n    var firstName: String,\n    @get:Id\n    @get:Column(name = "last_name") // <- \uceec\ub7fc\uba85 \uc9c0\uc815\n    var lastName: String,\n    var phoneNumber: String\n)\n')),(0,l.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://kotlinlang.org/docs/reference/compiler-plugins.html#jpa-support"},"kotlin-jpa \ucef4\ud30c\uc77c\ub7ec \ud50c\ub7ec\uadf8\uc778")," \uc0ac\uc6a9\ud558\uc790."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://kotlinlang.org/docs/reference/compiler-plugins.html#all-open-compiler-plugin"},"kotlin-allopen \ucef4\ud30c\uc77c\ub7ec \ud50c\ub7ec\uadf8\uc778")," \uc0ac\uc6a9\ud558\uc790. (",(0,l.kt)("inlineCode",{parentName:"li"},"javax.persistence.Embeddable")," \ucd94\uac00\ud574\uc8fc\uc790.)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Embeddable"),"\uc758 \uc18d\uc131\uc740 ",(0,l.kt)("inlineCode",{parentName:"li"},"var"),"\ub85c \uc120\uc5b8\ud558\uc790."),(0,l.kt)("li",{parentName:"ul"},"\uc18d\uc131\uc5d0 \uc5b4\ub178\ud14c\uc774\uc158 \ubd99\uc77c \ub54c\ub294 getter\uc5d0 \ubd99\uc774\uc790. (",(0,l.kt)("inlineCode",{parentName:"li"},"@get:"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IdClass"),"\uc758 \uc0dd\uc131\uc790\uc5d0\ub294 \ubaa8\ub450 \uae30\ubcf8\uac12\uc744 \ub2ec\uc544\uc8fc\uc790."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ImplicitNamingStrategyComponentPathImpl")," \uc4f0\uba74 \ud3b8\ub9ac\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ImplicitNamingStrategyComponentPathImpl"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"li"},"IdClass")," \uac19\uc774 \uc4f0\ub824\uba74 \uceec\ub7fc\uba85\uc744 \uc9c0\uc815\ud574\uc8fc\uc790.")))}d.isMDXComponent=!0}}]);