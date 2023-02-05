"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[4475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,f=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={layout:"post",title:"\ub098\uc758 k3s \uad6c\uc131 \ub458\ub7ec\ubcf4\uae30",tags:["kubernetes","sysadmin"]},l=void 0,o={permalink:"/2023/01/22/k3s",source:"@site/blog/2023-01-22-k3s.md",title:"\ub098\uc758 k3s \uad6c\uc131 \ub458\ub7ec\ubcf4\uae30",description:"\uac1c\uc778 \uc11c\ubc84 \uc6b4\uc601\uc758 \uc5ed\uc0ac (TMI \ub300\ubc29\ucd9c)",date:"2023-01-22T00:00:00.000Z",formattedDate:"2023\ub144 1\uc6d4 22\uc77c",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"sysadmin",permalink:"/tags/sysadmin"}],readingTime:9.715,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\ub098\uc758 k3s \uad6c\uc131 \ub458\ub7ec\ubcf4\uae30",tags:["kubernetes","sysadmin"]},nextItem:{title:"Gradle Convention Plugins \uc0bd\uc9c8\uae30",permalink:"/2022/03/04/gradle-convention-plugins"}},s={authorsImageUrls:[]},p=[{value:"\uac1c\uc778 \uc11c\ubc84 \uc6b4\uc601\uc758 \uc5ed\uc0ac (TMI \ub300\ubc29\ucd9c)",id:"\uac1c\uc778-\uc11c\ubc84-\uc6b4\uc601\uc758-\uc5ed\uc0ac-tmi-\ub300\ubc29\ucd9c",level:2},{value:"\uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uc640 TLS \uc778\uc99d\uc11c",id:"\uc778\uadf8\ub808\uc2a4-\ucee8\ud2b8\ub864\ub7ec\uc640-tls-\uc778\uc99d\uc11c",level:2},{value:"\ubaa8\ub2c8\ud130\ub9c1",id:"\ubaa8\ub2c8\ud130\ub9c1",level:2},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968",level:2},{value:"\uc778\ud504\ub77c \ud615\uc0c1 \uad00\ub9ac",id:"\uc778\ud504\ub77c-\ud615\uc0c1-\uad00\ub9ac",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac1c\uc778-\uc11c\ubc84-\uc6b4\uc601\uc758-\uc5ed\uc0ac-tmi-\ub300\ubc29\ucd9c"},"\uac1c\uc778 \uc11c\ubc84 \uc6b4\uc601\uc758 \uc5ed\uc0ac (TMI \ub300\ubc29\ucd9c)"),(0,a.kt)("p",null,"\uac1c\uc778 \uc11c\ubc84\ub97c \uc6b4\uc601\ud574\uc628\uc9c0\ub3c4 \uac70\uc758 10\uc5ec\ub144\uc774 \ub118\uc5b4\uac00\uace0 \uc788\ub2e4. \uba87\uba87 \ucde8\ubbf8\ub85c \uc6b4\uc601\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \ub3cc\ub9ac\uac70\ub098 ",(0,a.kt)("a",{parentName:"p",href:"https://tt-rss.org/"},"RSS \ub9ac\ub354"),", Mastodon \uc778\uc2a4\ud134\uc2a4 \ub4f1 \uac1c\uc778\uc801\uc778 \uc11c\ube44\uc2a4\ub97c \ub744\uc6b0\ub294 \ub370\uc5d0 \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4. \ubb34\ub8cc \ud06c\ub808\ub527\uc744 \ubc1b\uac70\ub098 \ud574\uc11c \uc800\ub834\ud558\uac8c \uc6b4\uc601\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 \uc0dd\uae38 \ub54c\ub9c8\ub2e4 \uc5ec\ub7ec \ud638\uc2a4\ud305 \uc11c\ube44\uc2a4\ub97c \uc62e\uaca8\ub2e4\ub2c8\uace4 \ud588\ub2e4. (\uc0dd\uac01\ub098\ub294 \uac83\ub9cc: \uce74\ud39824, DigitalOcean, Linode, GCE, EC2) \uc9c0\uae08\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/lightsail/"},"Lightsail"),"\uc5d0 \uc815\ucc29\ud588\ub2e4."),(0,a.kt)("p",null,"\uc774\ub807\ub2e4\ubcf4\ub2c8 \uc5b8\uc81c\ub4e0 \ud638\uc2a4\ud305 \uc11c\ube44\uc2a4\ub97c \uc62e\uae38 \uc218 \uc788\uac8c \ud574\ub458 \ud544\uc694\ub97c \ub290\uaf08\ub2e4. \ub2e8\uc21c\ud788 \uc124\uc815 \ubc29\ubc95\uc744 \uae30\ub85d\ud574 \ub450\ub294 \uac74 \uc2e4\uc218\uc758 \uc5ec\uc9c0\uac00 \ub9ce\uace0, \ucd08\uae30 \uc124\uc815 \uc774\ud6c4\uc5d0 \ubc14\uafbc \ub0b4\uc6a9 \uc5c5\ub370\uc774\ud2b8\ub97c \uc78a\uae30 \uc27d\ub2e4. \uc9c1\uc811 \uc11c\ubc84\uc5d0 \ub4e4\uc5b4\uac00\uc11c \ubb54\uac00 \uc218\uc815\ud558\uae30\ubcf4\ub2e4\ub294 \ud615\uc0c1 \uad00\ub9ac\uac00 \uac00\ub2a5\ud55c \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc5b4\uc11c \ucc98\uc74c\uc5d0\ub294 \ub2f9\uc2dc\uc5d0 \uc775\uc219\ud588\ub358 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dittos/ansibles"},"Ansible"),"\ub85c \uad00\ub9ac\ub97c \ud588\ub2e4. \ud558\uc9c0\ub9cc \uc2dc\uc2a4\ud15c \uc804\uc5ed\uc5d0 \uc124\uce58\ud55c \ud328\ud0a4\uc9c0\uc5d0 \uc758\uc874\ud558\ub3c4\ub85d \ud558\ub2e4\ubcf4\ub2c8 OS \ubc84\uc804\uc774 \ubc14\ub00c\uac70\ub098 \ud558\uba74 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc558\ub2e4."),(0,a.kt)("p",null,"\uacb0\uad6d \ud658\uacbd\uc758 \uc601\ud5a5\uc744 \ub35c \ubc1b\uac8c \ud558\ub824\uba74 Docker\ub97c \uc0ac\uc6a9\ud574\uc57c\uaca0\ub2e4 \uc0dd\uac01\ud588\ub2e4. \ubb3c\ub860 Ansible\ub85c Docker \ucee8\ud14c\uc774\ub108\ub97c \uad00\ub9ac\ud558\ub294 \uac8c \ubd88\uac00\ub2a5\ud558\uc9c0\ub294 \uc54a\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc911\ub2e8 \uc5c6\uc774 \uc11c\ube44\uc2a4\ub97c \uc7ac\uc2dc\uc791(\ub864\ub9c1 \uc5c5\ub370\uc774\ud2b8)\ud558\ub294 \ub4f1 \uc870\uae08 \ubcf5\uc7a1\ud55c \uc791\uc5c5\uc744 \ud558\uae30\ub294 \uc5b4\ub835\ub2e4. \ub2f9\uc2dc Kubernetes\ub294 \ub2e8\uc77c \uc11c\ubc84\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \uc124\uc815\uc774 \uc27d\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 Docker Swarm\uc744 \uc7a0\uc2dc \uc2dc\ub3c4\ud574\ubd24\uc73c\ub098 \uc5ec\ub7ec \uac00\uc9c0\ub85c \uc544\uc26c\uc6b4 \uc810\uc774 \ub9ce\uc544\uc11c \ub300\ucda9 \ubc29\uce58\ud574\ub193\uace0 \uc2dc\uac04\uc774 \ud758\ub800\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\ub358 \uc911 ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s"),"\ub77c\ub294 \uac00\ubccd\uace0 \ub2e8\uc77c \uc11c\ubc84\uc5d0 \uc124\uce58 \uac00\ub2a5\ud55c Kubernetes \ubc30\ud3ec\ud310\uc774 \ub098\uc654\ub2e4\ub294 \uc18c\uc2dd\uc744 \uc811\ud558\uace0 \uc2dc\ud5d8\ud574\ubd24\ub294\ub370 \uaf64\ub098 \ub9cc\uc871\uc2a4\ub7ec\uc6e0\ub2e4. \uc124\uce58\ub3c4 \uac04\ub2e8\ud574\uc11c \uc88b\uc558\ub2e4. (\uba85\ub839\uc5b4 \ud558\ub098\uba74 \ucda9\ubd84: ",(0,a.kt)("inlineCode",{parentName:"p"},"curl -sfL https://get.k3s.io | sh -"),") \ub300\uae30 \uc0c1\ud0dc\uc5d0\uc11c\ub3c4 \uba38\uc2e0 \uc790\uc6d0\uc744 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ubb38\uc81c\ub294 \uc788\uc9c0\ub9cc \uadf8 \uc815\ub3c4\ub294 \ud3b8\ub9ac\ud568\uacfc \ud0c0\ud611\ud560 \uc218 \uc788\ub294 \ubd80\ubd84\uc774\ub77c\uace0 \ubcf4\uace0 \uc9c0\uae08\uae4c\uc9c0 \uc815\ucc29\ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4."),(0,a.kt)("p",null,"\ubb3c\ub860 \uc9c1\uc811 \uc11c\ubc84\ub97c \uc6b4\uc601\ud558\ub294 \uac8c Vercel\uc774\ub098 fly.io \uac19\uc740 PaaS\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc5d0 \ube44\ud574 \ud6a8\uc728\uc774 \ub5a8\uc5b4\uc9c0\ub294 \uc77c\uc778 \uac74 \ub9de\ub2e4. \uadf8\ub798\ub3c4 \uc778\ud504\ub77c \uacf5\ubd80\ub3c4 \ub418\uace0 \ucde8\ubbf8 \uc0dd\ud65c\ub85c\ub294 \ub098\uc058\uc9c0 \uc54a\uc740 \uac83 \uac19\ub2e4."),(0,a.kt)("h2",{id:"\uc778\uadf8\ub808\uc2a4-\ucee8\ud2b8\ub864\ub7ec\uc640-tls-\uc778\uc99d\uc11c"},"\uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\uc640 TLS \uc778\uc99d\uc11c"),(0,a.kt)("p",null,"Kubernetes\uc5d0\uc11c \uc6f9 \uc11c\ube44\uc2a4\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc778\uadf8\ub808\uc2a4\ub85c \uc678\ubd80\uc5d0 \ub178\ucd9c\ud558\uac8c \ub418\uace0 \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc124\uce58\ud574\uc57c \ud55c\ub2e4. k3s\uc5d0\ub294 Traefik\uc774 \uc778\uadf8\ub808\uc2a4 \ucee8\ud2b8\ub864\ub7ec\ub85c \uae30\ubcf8 \uc124\uce58\ub418\ub294\ub370 \ub098\ub294 \uc775\uc219\ud55c ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"ingress-nginx"),"\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4. Traefik\uc744 \uc124\uce58\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 k3s\uc744 \ucc98\uc74c \uc124\uce58\ud560 \ub54c ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/reference/server-config#kubernetes-components"},(0,a.kt)("inlineCode",{parentName:"a"},"--disable traefik")," \uc635\uc158"),"\uc744 \uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"ingress-nginx\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \ud0c0\uc785\uc758 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uace0 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/networking#service-load-balancer"},"k3s\uc758 ServiceLB"),"\uc5d0 \uc758\ud574 \ud638\uc2a4\ud2b8 \uc678\ubd80\uc5d0\uc11c \uc811\uc18d\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4. \ubb3c\ub860 Lightsail\uc758 \ubc29\ud654\ubcbd \uc124\uc815\uc5d0\uc11c\ub3c4 80, 443 \ud3ec\ud2b8\ub97c \uc5f4\uc5b4\uc918\uc57c \ud55c\ub2e4. Lightsail \uc778\uc2a4\ud134\uc2a4\uac00 \ubc14\ub00c\uc5b4\ub3c4 IP\uac00 \uadf8\ub300\ub85c\uc774\ub3c4\ub85d \uace0\uc815 IP\ub97c \ud560\ub2f9\ud558\uace0, DNS\ub294 \uc9c1\uc811 \uc11c\ubc84 IP\ub97c \uac00\ub9ac\ud0a4\uac8c \ud55c\ub2e4."),(0,a.kt)("p",null,"AWS\uc758 \ub85c\ub4dc \ubc38\ub7f0\uc11c\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 TLS \uc778\uc99d\uc11c\ub294 \uc9c1\uc811 \ubc1c\uae09\ud574\uc57c \ud55c\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),"\ub97c \uc774\uc6a9\ud574\uc11c Let's Encrypt \uc778\uc99d\uc11c\ub97c \uc790\ub3d9 \ubc1c\uae09, \uc790\ub3d9 \uac31\uc2e0\ud558\uace0 \uc788\ub2e4. \uc0c8 \uc11c\ube0c\ub3c4\uba54\uc778\uc5d0 \ub300\ud55c \uc778\uc99d\uc11c\uac00 \ud544\uc694\ud558\uba74 Ingress\uc5d0 \uc5b4\ub178\ud14c\uc774\uc158\ub9cc \ub2ec\uc544\uc8fc\uba74 \ub41c\ub2e4."),(0,a.kt)("h2",{id:"\ubaa8\ub2c8\ud130\ub9c1"},"\ubaa8\ub2c8\ud130\ub9c1"),(0,a.kt)("p",null,"\ucc98\uc74c\uc5d0 \ubcc4 \uc0dd\uac01 \uc5c6\uc774 \uc775\uc219\ud55c Prometheus Operator\ub97c \uc124\uce58\ud588\ub2e4\uac00 \ub9ac\uc18c\uc2a4 \ub0ad\ube44\uac00 \uc2ec\ud574\uc11c \uc0ad\uc81c\ud558\uace0 \uadf8\ub0e5 \uc0b4\uace0 \uc788\uc5c8\ub294\ub370, \ucd5c\uadfc \uc2e4\ud589\ud558\ub294 \uc11c\ube44\uc2a4\uac00 \ub9ce\uc544\uc9c0\ub2c8 \ub2e4\uc2dc \ud544\uc694\uc131\uc744 \ub290\uaf08\ub2e4."),(0,a.kt)("p",null,"\ud68c\uc0ac \uc778\ud504\ub77c\uc5d0\uc11c \uc4f0\ub294 \uac78 \ubcf4\uace0 \uc54c\uac8c \ub41c VictoriaMetrics\ub97c \ud55c \ubc88 \uae54\uc544\ubd24\ub294\ub370 \uac00\ubccd\uace0 \uc798 \uc791\ub3d9\ud55c\ub2e4! VictoriaMetrics\ub3c4 \uc624\ud37c\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uac8c \uad8c\uc7a5\ud558\ub294 \ubc29\uc2dd \uac19\uc9c0\ub9cc, \uc624\ud37c\ub808\uc774\ud130 \uc790\uccb4\uc758 \uc624\ubc84\ud5e4\ub4dc\ub3c4 \uc904\uc774\uace0 \uc2f6\uc5b4\uc11c \ub2e8\uc77c \ud504\ub85c\uc138\uc2a4\uc778 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.victoriametrics.com/guides/k8s-monitoring-via-vm-single.html"},"VictoriaMetrics Single"),"\uc744 \ub744\uc6b0\ub294 \ubc29\ud5a5\uc73c\ub85c \ud574\ubcf4\uc558\ub2e4."),(0,a.kt)("p",null,"VictoriaMetrics\ub294 \ub531 Prometheus\uc640 \uac19\uc774 \uc9c0\ud45c \uc218\uc9d1, \uc800\uc7a5\ub9cc \ud558\ub294 \uc5ed\ud560\uc774\uc5b4\uc11c \uc9c0\ud45c\ub97c \ubcf4\uace0 \uc2f6\uc73c\uba74 Grafana\ub3c4 \uc124\uce58\ud574\uc57c \ud55c\ub2e4. \uc774 \uc5ed\uc2dc ",(0,a.kt)("a",{parentName:"p",href:"https://docs.victoriametrics.com/guides/k8s-monitoring-via-vm-single.html"},"\ud29c\ud1a0\ub9ac\uc5bc \ubb38\uc11c"),"\uc5d0 \ub098\uc628\ub300\ub85c \ud558\uba74 \ub41c\ub2e4. \uc678\ubd80\uc5d0\uc11c Grafana\uc5d0 \uc811\uc18d\ud558\uac8c \ud558\ub824\uba74 \uc778\uc99d\uc744 \ubd99\uc774\ub4e0\uc9c0 \ud574\uc57c \ud558\ub294\ub370 \uadc0\ucc2e\uc544\uc11c \uc77c\ub2e8 ",(0,a.kt)("a",{parentName:"p",href:"https://tailscale.com/kb/1185/kubernetes/#sample-proxy"},"Tailscale \ud504\ub85d\uc2dc"),"\ub97c \ub2ec\uc544\ub193\uace0 Tailscale VPN \ub0b4\uc5d0\uc11c\ub9cc \ub178\ucd9c\ud574 \ub450\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ub85c\uadf8\ub3c4 \uc624\ub798 \ubcf4\uad00\ud558\uba74 \uc88b\uae34 \ud558\uaca0\uc9c0\ub9cc \ub2f9\uc7a5\uc740 \ud544\uc694\uac00 \uc5c6\uc5b4\uc11c \uadf8\ub0e5 \ub450\uace0 \uc788\ub2e4. \ub9cc\uc57d \ud544\uc694\ud558\ub2e4\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Loki"),"\ub97c \uc368\ubcfc\uc9c0\ub3c4..."),(0,a.kt)("h2",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640-\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968"),(0,a.kt)("p",null,"\ub0b4\uac00 \ub3cc\ub9ac\ub294 \ub300\ubd80\ubd84\uc758 \uc11c\ube44\uc2a4\uac00 PostgreSQL\uc5d0 \uc758\uc874\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 k3s\uc5d0 \ud558\ub098\ub97c \uc124\uce58\ud574\uc11c \uacf5\uc720\ud558\uace0 \uc788\ub2e4. \ud30c\ub4dc\uac00 \uc7ac\uc2dc\uc791\ub418\uc5b4\ub3c4 \ub370\uc774\ud130\uac00 \ub0a0\uc544\uac00\uba74 \uc548\ub418\ub2c8 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968\uc744 \ub9c8\uc6b4\ud2b8\ud574\uc57c \ud558\ub294\ub370, \uc774 \ub610\ud55c k3s\uc5d0\uc11c \uae30\ubcf8 \uc81c\uacf5\ud558\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/storage#setting-up-the-local-storage-provider"},"Local Storage Provider"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4. (\uc608\uc804\uc5d0\ub294 \uae30\ubcf8 \ud0d1\uc7ac\uac00 \uc544\ub2c8\uc5c8\ub294\ub370 \uc5b8\uc820\uac00\ubd80\ud130 \uae30\ubcf8\uc801\uc73c\ub85c \uc124\uce58\ub41c\ub2e4. \uc5ec\uae30\uc11c \ub610 TMI, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/pull/87"},"CPU\ub97c \ub9ce\uc774 \uc7a1\uc544\uba39\ub294 \ubc84\uadf8"),"\ub97c \uc218\uc815\ud55c \uc801\uc774 \uc788\ub2e4 \ud83d\ude0e)"),(0,a.kt)("p",null,"\ud638\uc2a4\ud2b8 \uba38\uc2e0 \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/local-path-provisioner")," \ub514\ub809\ud1a0\ub9ac \ubc11\uc5d0 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ub9e4\uc6b0 \ub2e8\uc21c\ud55c \uad6c\uc870\uc774\ubbc0\ub85c \ud30c\ub4dc\uac00 \ub2e4\ub978 \uba38\uc2e0\uc73c\ub85c \uc62e\uaca8\ub2e4\ub2d0 \uc218 \uc5c6\ub294 \ubb38\uc81c\uac00 \uc788\uc9c0\ub9cc \uc5b4\ucc28\ud53c \ub178\ub4dc\ub97c \ud55c \uac1c\ub9cc \uc0ac\uc6a9\ud560 \uac83\uc774\ubbc0\ub85c \uc804\ud600 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\ub294\ub2e4. \ub178\ub4dc\ub97c \ucd94\uac00\ud558\ub354\ub77c\ub3c4 \ucee8\ud2b8\ub864 \ud50c\ub808\uc778\uc774 \uc788\ub294 \ub178\ub4dc\uc5d0\uc11c\ub9cc DB\ub97c \ub3cc\ub9ac\uba74 \uc624\ucf00\uc774."),(0,a.kt)("p",null,"DB \ubc31\uc5c5\uc740 \ubcc4\ub3c4\ub85c \ud558\uc9c0 \uc54a\uace0, Lightsail\uc758 \ubc31\uc5c5 \uae30\ub2a5\uc744 \ucf1c\ub450\uc5c8\ub2e4. \ub9e4\uc77c \ub514\uc2a4\ud06c \uc2a4\ub0c5\uc0f7\uc744 \ub5a0\uc8fc\uace0 \uc77c\uc8fc\uc77c \uac04 \uc720\uc9c0\ud55c\ub2e4."),(0,a.kt)("h2",{id:"\uc778\ud504\ub77c-\ud615\uc0c1-\uad00\ub9ac"},"\uc778\ud504\ub77c \ud615\uc0c1 \uad00\ub9ac"),(0,a.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc2dc\uc2a4\ud15c \uad6c\uc131 \uc694\uc18c\ub294 Helm \ucc28\ud2b8\ub85c \uc124\uce58\ud558\uace0 \uc788\ub2e4. \uac1c\uc778\uc801\uc73c\ub85c Helm\uc744 \uc369 \uc88b\uc544\ud558\uc9c4 \uc54a\uc9c0\ub9cc (YAML\uc744 \ud15c\ud50c\ub9ac\ud305 \ud560 \ubbf8\uce5c \uc0dd\uac01\uc744 \ub300\uccb4 \ub204\uac00 \ud588\uc744\uae4c?) Kubernetes \ud658\uacbd\uc758 \uc0ac\uc2e4\uc0c1 \ud45c\uc900\uc774\uae30 \ub54c\ubb38\uc5d0 \uc5b4\uca54 \uc218 \uc5c6\uc774 \ud0c0\ud611\uc744 \ud574\uc57c \ud55c\ub2e4. \ub0b4\uac00 \uc9c1\uc811 \ud328\ud0a4\uc9d5\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\ub294 \uac70\uc758 Kustomize\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc544\ubb34\ud2bc \uc5ec\ub7ec \uac1c\uc758 Helm \ucc28\ud2b8\ub97c \uc124\uce58\ud574\uc57c \ud558\uace0, \ub9e4\ubc88 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud560 \uc218\ub294 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ",(0,a.kt)("a",{parentName:"p",href:"https://helmfile.readthedocs.io/en/latest/"},"Helmfile"),"\ub85c Helm \ucc28\ud2b8\uc758 \ubaa9\ub85d\uacfc \ud30c\ub77c\ubbf8\ud130\ub97c \uad00\ub9ac\ud55c\ub2e4. \uac00\ub2a5\ud558\uba74 \uc9c1\uc811 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),"\uc774\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"\ub85c \uc870\uc791\ud558\ub294 \uac74 \uc9c0\uc591\ud558\uace0 Helmfile\ub9cc\uc73c\ub85c \uad00\ub9ac\ud558\ub824\uace0 \ub178\ub825\ud55c\ub2e4. \ubaa8\ub4e0 \uc124\uc815\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dittos/k8s/blob/master/helm/"},"\ub098\uc758 Git \uc800\uc7a5\uc18c"),"\uc5d0 \uc798 \uc62c\ub824\ub450\uace0 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc544\uc9c1 \uae54\ub054\ud558\uac8c \uc815\ub9ac\ud558\uc9c0 \ubabb\ud55c \ubd80\ubd84\uc774 DB \uc554\ud638 \ub4f1 Helmfile\uc5d0 \uc8fc\uc785\ud560 \ube44\ubc00 \uc815\ubcf4\ub97c \uad00\ub9ac\ud558\ub294 \uac83\uc774\ub2e4. \uc77c\ub2e8\uc740 Git\uc5d0\ub294 \ucee4\ubc0b\ud558\uc9c0 \uc54a\ub294 \ub0b4 \ub85c\uceec \uba38\uc2e0\uc5d0\ub9cc \uc788\ub294 \ud30c\uc77c\uc5d0 \ub123\uc5b4\ub450\uace0 \uc788\ub2e4. \ub9cc\uc57d \ub0b4 \ub85c\uceec \uba38\uc2e0\uc774 \ubd88\uc758\uc758 \uc0ac\uace0\ub85c \ub0a0\uc544\uac00\ub354\ub77c\ub3c4 k8s Secret\uc5d0\ub294 \ub0a8\uc544\uc788\uc5b4\uc11c \ubcf5\uad6c \uac00\ub2a5\ud558\ubbc0\ub85c \ud070 \ubb38\uc81c\ub294 \uc5c6\uc744 \uac83\uc73c\ub85c \uc0dd\uac01\ud55c\ub2e4."))}m.isMDXComponent=!0}}]);