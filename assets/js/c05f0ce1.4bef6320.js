"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[7500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={layout:"post",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",tags:["linux","python","sysadmin","web","backend"]},i=void 0,p={permalink:"/2014/09/21/python-web-app-deploy",source:"@site/blog/2014-09-21-python-web-app-deploy.md",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",description:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c \uace0\ub824\ud560 \uc810\ub4e4\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\uc548\uc774 \ub9ce\uc73c\uba74 \uace0\ubbfc\uc774 \ub418\ub294\ub370\uc694. \uba4b\uc9c0\uac8c '\ubca0\uc2a4\ud2b8 \ud504\ub799\ud2f0\uc2a4'\ub97c \uc81c\uc2dc\ud558\uba74 \uc88b\uaca0\uc9c0\ub9cc \uc544\uc9c1 \uadf8\ub7ec\uae30\uc5d4 \ub9ce\uc774 \ubd80\uc871\ud558\uace0, \uc774 \uae00\uc5d0\uc11c\ub294 \uc81c\uac00 \uc120\ud0dd\ud55c \ubc29\uc2dd\uacfc \uc774\uc720\ub97c \uc815\ub9ac\ud574\uc11c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4.",date:"2014-09-21T00:00:00.000Z",formattedDate:"2014\ub144 9\uc6d4 21\uc77c",tags:[{label:"linux",permalink:"/tags/linux"},{label:"python",permalink:"/tags/python"},{label:"sysadmin",permalink:"/tags/sysadmin"},{label:"web",permalink:"/tags/web"},{label:"backend",permalink:"/tags/backend"}],readingTime:10.48,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",tags:["linux","python","sysadmin","web","backend"]},prevItem:{title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",permalink:"/2015/05/15/graphql-and-relay"},nextItem:{title:"Upstart\ub85c \uc624\ub798 \ub3c4\ub294 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac\ud558\uae30",permalink:"/2014/08/12/upstart"}},u={authorsImageUrls:[]},o=[{value:"\uc6b4\uc601\uccb4\uc81c: Ubuntu",id:"\uc6b4\uc601\uccb4\uc81c-ubuntu",level:2},{value:"WSGI \uc11c\ubc84: Gunicorn",id:"wsgi-\uc11c\ubc84-gunicorn",level:2},{value:"\ud504\ub85c\uc138\uc2a4 \uad00\ub9ac: Upstart",id:"\ud504\ub85c\uc138\uc2a4-\uad00\ub9ac-upstart",level:2},{value:"\uc6f9 \uc11c\ubc84: nginx",id:"\uc6f9-\uc11c\ubc84-nginx",level:2},{value:"\ucf54\ub4dc \ubc30\ud3ec: Git",id:"\ucf54\ub4dc-\ubc30\ud3ec-git",level:2},{value:"\ud30c\uc774\uc36c \ud328\ud0a4\uc9c0: virtualenv\uc5d0 \uc9c1\uc811 \uc124\uce58",id:"\ud30c\uc774\uc36c-\ud328\ud0a4\uc9c0-virtualenv\uc5d0-\uc9c1\uc811-\uc124\uce58",level:2},{value:"\uc815\uc801 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec",id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\ubc30\ud3ec",level:2},{value:"\uce90\uc2dc \uad00\ub9ac \uc804\ub7b5: URL \uae30\ubc18",id:"\uce90\uc2dc-\uad00\ub9ac-\uc804\ub7b5-url-\uae30\ubc18",level:3},{value:"\ub0b4\ub824\uc8fc\ub294 \uacf3: \uc608\uc0b0\uc5d0 \ub530\ub77c",id:"\ub0b4\ub824\uc8fc\ub294-\uacf3-\uc608\uc0b0\uc5d0-\ub530\ub77c",level:3},{value:"\uc804\ucc98\ub9ac: \uc0c1\ud669\uc5d0 \ub530\ub77c",id:"\uc804\ucc98\ub9ac-\uc0c1\ud669\uc5d0-\ub530\ub77c",level:3},{value:"\uc624\ub958 \ucd94\uc801: Sentry",id:"\uc624\ub958-\ucd94\uc801-sentry",level:2},{value:"\ub354 \uc0dd\uac01\ud574\ubcfc \uac83\ub4e4",id:"\ub354-\uc0dd\uac01\ud574\ubcfc-\uac83\ub4e4",level:2}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c \uace0\ub824\ud560 \uc810\ub4e4\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\uc548\uc774 \ub9ce\uc73c\uba74 \uace0\ubbfc\uc774 \ub418\ub294\ub370\uc694. \uba4b\uc9c0\uac8c '\ubca0\uc2a4\ud2b8 \ud504\ub799\ud2f0\uc2a4'\ub97c \uc81c\uc2dc\ud558\uba74 \uc88b\uaca0\uc9c0\ub9cc \uc544\uc9c1 \uadf8\ub7ec\uae30\uc5d4 \ub9ce\uc774 \ubd80\uc871\ud558\uace0, \uc774 \uae00\uc5d0\uc11c\ub294 \uc81c\uac00 \uc120\ud0dd\ud55c \ubc29\uc2dd\uacfc \uc774\uc720\ub97c \uc815\ub9ac\ud574\uc11c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc6b4\uc601\uccb4\uc81c-ubuntu"},"\uc6b4\uc601\uccb4\uc81c: ",(0,a.kt)("a",{parentName:"h2",href:"http://ubuntu.com/"},"Ubuntu")),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c CentOS \uc544\ub2c8\uba74 Ubuntu\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Ubuntu\ub97c \uc120\ud0dd\ud55c \uac00\uc7a5 \ud070 \uc774\uc720\ub294 '\uc775\uc219\ud574\uc11c'\uc785\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub294 \ub2e4\uc591\ud55c \uc368\ub4dc \ud30c\ud2f0 \ud328\ud0a4\uc9c0(PPA)\uc5d0 \uc27d\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4\ub294 \uc810, \uadf8\ub9ac\uace0 \uac1c\ubc1c \ud658\uacbd\uc73c\ub85c Ubuntu \ub370\uc2a4\ud06c\ud0d1\uc744 \uc0ac\uc6a9\ud558\uba74 \ubc30\ud3ec\ud560 \ub54c \ud658\uacbd \ub9de\ucd94\uae30 \ud6e8\uc52c \uc218\uc6d4\ud558\ub2e4\ub294 \uc810\uc774 \uc788\uaca0\uc2b5\ub2c8\ub2e4. (CentOS\ub97c \ub370\uc2a4\ud06c\ud0d1\uc73c\ub85c \uc4f0\uc2e0\ub2e4\uba74\uc57c \ub9d0\ub9ac\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4...) \ubc84\uc804\uc740 \uad73\uc774 LTS\ub97c \uace0\uc9d1\ud560 \ud544\uc694 \uc5c6\uc774 \uc801\ub2f9\ud788 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc4f0\uba74 \ub418\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"wsgi-\uc11c\ubc84-gunicorn"},"WSGI \uc11c\ubc84: ",(0,a.kt)("a",{parentName:"h2",href:"http://gunicorn.org/"},"Gunicorn")),(0,a.kt)("p",null,"WSGI \uc11c\ubc84\ub85c\ub294 uWSGI \ub610\ub294 Gunicorn\uc774 \ub9ce\uc774 \uc4f0\uc785\ub2c8\ub2e4. uWSGI\ub294 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ud30c\ub77c\ubbf8\ud130\ub3c4 \ub9ce\uace0 \uc131\ub2a5\ub3c4 \uc88b\uae34 \ud558\uc9c0\ub9cc, Gunicorn\uc740 \uc131\ub2a5\uc774 \ud06c\uac8c \ub4a4\uc9c0\uc9c0 \uc54a\uc73c\uba74\uc11c \ud6e8\uc52c \uac04\ub2e8\ud574\uc11c \uad00\ub9ac\ud558\uae30\uac00 \uc218\uc6d4\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 uWSGI\ub294 graceful reload\uac00 \uc548\ub3fc\uc11c \uc7ac\uc2dc\uc791\ud560 \ub54c \ub2e4\uc6b4\ud0c0\uc784\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4. (\ud574\uacb0 \ubc29\ubc95\uc774 \uc788\ub2e4\uba74 \uc54c\ub824\uc8fc\uc138\uc694.)"),(0,a.kt)("h2",{id:"\ud504\ub85c\uc138\uc2a4-\uad00\ub9ac-upstart"},"\ud504\ub85c\uc138\uc2a4 \uad00\ub9ac: ",(0,a.kt)("a",{parentName:"h2",href:"http://upstart.ubuntu.com/"},"Upstart")),(0,a.kt)("p",null,"\ub300\uc548\uc774\ub77c\uba74 ",(0,a.kt)("a",{parentName:"p",href:"http://supervisord.org/"},"supervisord"),"\uac00 \uc788\uaca0\uc9c0\ub9cc Upstart\ub294 Ubuntu\uc5d0 \uae30\ubcf8\uc73c\ub85c \ub4e4\uc5b4\uc788\uc5b4\uc11c \ub35c \uadc0\ucc2e\uc8e0. Upstart\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2dc\uba74 ",(0,a.kt)("a",{parentName:"p",href:"/2014/08/12/upstart/"},"\uc800\ubc88\uc5d0 \uc4f4 \uae00"),"\uc744 \ucc38\uace0\ud558\uc138\uc694. \uc55e\uc73c\ub85c Ubuntu\uac00 systemd\ub85c \uc804\ud658\ud55c\ub2e4\uba74 systemd\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uaca0\uc8e0."),(0,a.kt)("h2",{id:"\uc6f9-\uc11c\ubc84-nginx"},"\uc6f9 \uc11c\ubc84: ",(0,a.kt)("a",{parentName:"h2",href:"http://nginx.com/"},"nginx")),(0,a.kt)("p",null,"\uc774 \uc120\ud0dd\uc740 \ub531\ud788 \ub17c\ub780\uc758 \uc5ec\uc9c0\uac00 \uc5c6\uc744 \uac81\ub2c8\ub2e4. \ub9ac\ubc84\uc2dc \ud504\ub85d\uc2dc\uc640 \uc815\uc801 \ub9ac\uc18c\uc2a4 \uc11c\ube59\uc5d0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ubc18\ub4dc\uc2dc Apache\ub85c \ub3cc\ub824\uc57c \ud558\ub294 \ub808\uac70\uc2dc\uac00 \uc788\ub2e4\uba74 \uc608\uc678\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ucf54\ub4dc-\ubc30\ud3ec-git"},"\ucf54\ub4dc \ubc30\ud3ec: Git"),(0,a.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc744 \ub54c \uc5b4\ub5bb\uac8c \ubc1b\uc544\uc62c \uac83\uc778\uac00 \ud558\ub294 \uc774\uc57c\uae30\uc785\ub2c8\ub2e4. \uc815\uc11d\ub300\ub85c(?) \ud558\uc790\uba74 Git \uc791\uc5c5 \uc0ac\ubcf8\uacfc \uc2e4\uc81c \uc11c\ube44\uc2a4\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74, ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull"),"\uc744 \ud558\ub294 \ub3d9\uc548 \ucf54\ub4dc\uc758 \uc911\uac04 \uc0c1\ud0dc\uac00 \ub178\ucd9c\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc774\uc804 \ubc84\uc804\uc758 \ud15c\ud50c\ub9bf \ud30c\uc77c\uacfc \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 \ud15c\ud50c\ub9bf \ud30c\uc77c\uc774 \uacf5\uc874\ud558\uac8c \ub41c\ub2e4\uba74 \uc11c\ube44\uc2a4\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub300\ubd80\ubd84 \uc544\uc8fc \uc7a0\uae50 \ubc1c\uc0dd\ud558\ub294 \uc77c\uc774\uace0, \ud15c\ud50c\ub9bf \uce90\uc2f1\uc744 \ucf1c\ub294 \ub4f1 \uc6b0\ud68c\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc5b4\uc11c \ud070 \ubb38\uc81c\uac00 \ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"virtualenv\ub098 \uc124\uc815 \ud30c\uc77c \ub4f1\uc744 \uc5b4\ub514\uc5d0 \uc704\uce58\uc2dc\ud0ac \uac83\uc778\uc9c0\ub3c4 \uace0\ubbfc\ud558\uac8c \ub429\ub2c8\ub2e4. \ub9ce\uc740 \uacbd\uc6b0 Git \uc791\uc5c5 \uc0ac\ubcf8 \uc548\uc5d0 \ub9cc\ub4e4\uac8c \ub418\ub294\ub370, \uadf8\ub7f0 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," \ud30c\uc77c\uc5d0 \ud655\uc2e4\ud788 \ucd94\uac00\ud558\uc5ec \uc800\uc7a5\uc18c\uc5d0 \ub4e4\uc5b4\uac00\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub3cc\uc544\uac00\ub294 \uc11c\ube44\uc2a4\uac00 \ub9ce\uc744\uc218\ub85d \ud5f7\uac08\ub9ac\uc9c0 \uc54a\ub3c4\ub85d \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub97c \ud1b5\uc77c\ud558\uba74 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \uac00\uae09\uc801 \uc124\uc815 \ud30c\uc77c \ub4f1\uc758 \uc704\uce58\ub098 \ud30c\uc77c\uba85\uc744 \uac15\uc81c\ud558\uc9c0 \ub9d0\uace0 \ud658\uacbd \ubcc0\uc218\uc5d0\uc11c \uc77d\ub3c4\ub85d \ud558\ub294 \ud3b8\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud30c\uc774\uc36c-\ud328\ud0a4\uc9c0-virtualenv\uc5d0-\uc9c1\uc811-\uc124\uce58"},"\ud30c\uc774\uc36c \ud328\ud0a4\uc9c0: virtualenv\uc5d0 \uc9c1\uc811 \uc124\uce58"),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubc14\uc774\ub108\ub9ac \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \ubcc4\ub85c \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77c\ub2e8 virtualenv\ub85c \uaca9\ub9ac\ud560 \uc218\ub3c4 \uc5c6\uace0, \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d0 \uac00\ub2a5\uc131\uc774 \ub9e4\uc6b0 \ub192\uace0, \uc5b8\uc81c \uc5c5\ub370\uc774\ud2b8\uac00 \ub420\uc9c0\ub3c4 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ubc30\ud3ec \ub300\uc0c1 \uc11c\ubc84\uac00 \ub9ce\ub2e4\uba74 \ube4c\ub4dc \uc2dc\uac04\uc774 \ub0ad\ube44\ub418\ub2c8\uae4c \uc9c1\uc811 \ud328\ud0a4\uc9d5\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucd94\uac00\ub85c, \uc758\uc874\uc131\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),"\ub85c \uad00\ub9ac\ud560\uc9c0 \uc544\ub2c8\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"\ub97c \uc0ac\uc6a9\ud560\uc9c0\ub3c4 \uc120\ud0dd\ud574\uc57c \ud558\ub294\ub370\uc694. \uc774 \ucabd\uc740 \ud2b9\ubcc4\ud788 \uc120\ud638\ud558\ub294 \ubc29\uc2dd\uc774 \uc788\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9ce\uc740 \uacbd\uc6b0\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"\ub85c\ub9cc \uad00\ub9ac\ud574\ub3c4 \ucda9\ubd84\ud569\ub2c8\ub2e4. \uc5b4\uca0c\ub4e0 \uad00\ub9ac\uac00 \ub418\uace0 \uc788\ub2e4\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\ubc30\ud3ec"},"\uc815\uc801 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec"),(0,a.kt)("h3",{id:"\uce90\uc2dc-\uad00\ub9ac-\uc804\ub7b5-url-\uae30\ubc18"},"\uce90\uc2dc \uad00\ub9ac \uc804\ub7b5: URL \uae30\ubc18"),(0,a.kt)("p",null,"\ub9ac\uc18c\uc2a4\uac00 \uac31\uc2e0\ub418\uc5c8\uc744 \ub54c \ube0c\ub77c\uc6b0\uc800\uc758 \uce90\uc2dc\ub97c \uc5b4\ub5bb\uac8c \ubb34\ud6a8\ud654 \ud560 \uac83\uc778\uc9c0 \uace0\ub824\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4. \uac00\uc7a5 \ud655\uc2e4\ud55c \ubc29\ubc95\uc740 \ub9ac\uc18c\uc2a4\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 URL\uc744 \ubc14\uafb8\ub294 \uac83\uc785\ub2c8\ub2e4. \uc544\uc608 \ud30c\uc77c\uba85\uc744 \ubc14\uafb8\uac70\ub098 \uc8fc\uc18c \ub4a4\uc5d0 \ucffc\ub9ac \ubb38\uc790\uc5f4\uc744 \ubd99\uc5ec\uc11c (",(0,a.kt)("inlineCode",{parentName:"p"},"?v=3"),"\ucc98\ub7fc) URL\uc774 \ubc14\ub00c\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \uc774\ub7f0 \uc77c\uc744 \uc190\uc73c\ub85c \ud558\uba74 \uc2e4\uc218\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uc73c\ubbc0\ub85c \uac00\uae09\uc801 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 Expiry \ud5e4\ub354\ub97c \ub9e4\uc6b0 \uae38\uac8c \uc7a1\uc544 \uc11c\ubc84\uc5d0 \uc804\ud600 \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uc9c0 \uc54a\uac8c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc5b4 \uc131\ub2a5\uc0c1 \uc774\ub4dd\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub0b4\ub824\uc8fc\ub294-\uacf3-\uc608\uc0b0\uc5d0-\ub530\ub77c"},"\ub0b4\ub824\uc8fc\ub294 \uacf3: \uc608\uc0b0\uc5d0 \ub530\ub77c"),(0,a.kt)("p",null,"\uc11c\ubc84\uac00 \ud55c\uad6d\uc5d0 \uc788\uace0, \uc811\uc18d\uc790\ub3c4 \ubaa8\ub450 \ud55c\uad6d \uac70\uc8fc\uc790\ub77c\uba74 \uadf8\ub0e5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uac19\uc740 \uc11c\ubc84\uc5d0\uc11c \ub0b4\ub824\uc8fc\uba74 \ub418\ubbc0\ub85c \ud2b9\ubcc4\ud788 \uace0\ub824\ud560 \uac83\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc11c\ubc84\uc640 \uc811\uc18d\uc790\uc758 \uc704\uce58\uac00 \ub2e4\ub974\uace0 \ucda9\ubd84\ud55c \uc608\uc0b0\uc774 \uc788\ub2e4\uba74 CDN\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"CDN\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 S3\uc640 \uac19\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\uc5d0 \ud30c\uc77c\uc744 \uc62c\ub9b4\uc9c0, \uc544\ub2c8\uba74 \uc77c\ubc18 \uc6f9 \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec \uc2dc \ucd94\uac00\uc801\uc778 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec \uacfc\uc815\uc774 \ud544\uc694\ud558\uc9c0\ub9cc \ud6e8\uc52c \uc548\uc815\uc801\uc774\ub77c\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc804\ucc98\ub9ac-\uc0c1\ud669\uc5d0-\ub530\ub77c"},"\uc804\ucc98\ub9ac: \uc0c1\ud669\uc5d0 \ub530\ub77c"),(0,a.kt)("p",null,"\ucd5c\uadfc \uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc5d0\uc11c\ub294 SASS\ub098 CoffeeScript\ucc98\ub7fc \uc804\ucc98\ub9ac \uacfc\uc815\uc774 \ud544\uc694\ud55c \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \ucd94\uc138\uc785\ub2c8\ub2e4. \ud06c\uac8c \uc138 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 \ubbf8\ub9ac \ube4c\ub4dc: \ubc30\ud3ec\ud560 \uc11c\ubc84 \uc218\uac00 \ub9ce\uc744 \ub54c \uc720\ub9ac\ud569\ub2c8\ub2e4. \ud63c\uc790 \uac1c\ubc1c\ud558\ub294 \uc11c\ube44\uc2a4\ub77c\uba74 \uc544\uc608 Git \uc800\uc7a5\uc18c\uc5d0 \uac19\uc774 \ucee4\ubc0b\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub97c \ud1b5\ud574 \ub9ac\uc18c\uc2a4\ub97c \ub0b4\ub824\uc904 \uacbd\uc6b0, \uc5b4\ucc28\ud53c \uc5c5\ub85c\ub4dc\ud558\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud558\ubbc0\ub85c \uc5c5\ub85c\ub4dc\ud558\uae30 \uc804\uc5d0 \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc11c\ube44\uc2a4\ud558\ub294 \uc11c\ubc84\uc5d0\uc11c \ubbf8\ub9ac \uc624\ud504\ub77c\uc778 \ube4c\ub4dc: Git \ud6c5 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc9c0\uc815\ud574\ub450\uba74 \ud3b8\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc640 \ubb34\uad00\ud558\ubbc0\ub85c \uc548\uc804\ud558\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc5d0\uc11c \uc628\ub77c\uc778 \ube4c\ub4dc: ",(0,a.kt)("a",{parentName:"li",href:"http://webassets.readthedocs.org/"},"webassets")," \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uac00 \uad00\ub9ac\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc11c\ubc84 \uad6c\ub3d9\uc774 \ub290\ub824\uc9c0\uac70\ub098 \uc11c\ube44\uc2a4\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc73c\ubbc0\ub85c \ucd94\ucc9c\ud558\ub294 \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\uc624\ub958-\ucd94\uc801-sentry"},"\uc624\ub958 \ucd94\uc801: ",(0,a.kt)("a",{parentName:"h2",href:"https://getsentry.com/"},"Sentry")),(0,a.kt)("p",null,"\uc2e4\uc81c \uc11c\ube44\uc2a4\ub97c \uc2dc\uc791\ud558\uba74 \ud14c\uc2a4\ud2b8\ud560 \ub54c\ub294 \ubc1c\uacac\ud558\uc9c0 \ubabb\ud588\ub358 \uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Sentry\ub97c \ud1b5\ud574 \uc624\ub958\ub97c \uc218\uc9d1\ud558\uba74 \ub9ce\uc740 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c \ub85c\uac70\uc640 \uc5f0\ub3d9\ud574\uc11c \uce58\uba85\uc801\uc778 \uc624\ub958\ub294 \uc544\ub2c8\uc9c0\ub9cc \uc608\uc678\uc801\uc778 \uc0c1\ud669\uc5d0 \ub85c\uadf8\ub97c \ub0a8\uae30\uac8c \ud558\uba74 \ube44\uc0c1\uc2dc\uc5d0 \ub300\ucc98\ud560 \uc218 \uc788\uc5b4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub354-\uc0dd\uac01\ud574\ubcfc-\uac83\ub4e4"},"\ub354 \uc0dd\uac01\ud574\ubcfc \uac83\ub4e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubc30\ud3ec \uc790\ub3d9\ud654: ",(0,a.kt)("a",{parentName:"li",href:"http://www.fabfile.org/"},"Fabric"),"\uc73c\ub85c \uc6d0\uaca9 \ubc30\ud3ec\ub97c \uc790\ub3d9\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc124\uc815 \uc790\ub3d9\ud654: Chef, Puppet\uc774\ub098 ",(0,a.kt)("a",{parentName:"li",href:"http://www.ansible.com"},"Ansible")," \ub4f1\uc744 \uc0ac\uc6a9\ud574\uc11c \uc11c\ubc84 \uc138\ud305 \uacfc\uc815\uc744 \ud615\uc0c1 \uad00\ub9ac/\uc790\ub3d9\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1: ",(0,a.kt)("a",{parentName:"li",href:"http://newrelic.com/"},"New Relic"),"\uc774 \uad49\uc7a5\ud788 \uc88b\uc9c0\ub9cc, \uac00\uaca9\uc774 \ub9cc\ub9cc\uce58 \uc54a\uc544\uc11c \uc544\uc9c1 \uc801\uc808\ud55c \ub300\uc548\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc811\uc18d \uad8c\ud55c\uacfc \ubbfc\uac10\ud55c \uc815\ubcf4 \uad00\ub9ac"),(0,a.kt)("li",{parentName:"ul"},"\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c \uad00\ub9ac"),(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 / \uba54\ubaa8\ub9ac \uce90\uc2dc"),(0,a.kt)("li",{parentName:"ul"},"\ubc31\uadf8\ub77c\uc6b4\ub4dc \uc6cc\ucee4 (",(0,a.kt)("a",{parentName:"li",href:"http://www.celeryproject.org/"},"Celery"),") / \uba54\uc2dc\uc9c0 \ud050")))}c.isMDXComponent=!0}}]);