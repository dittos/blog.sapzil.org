"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[7533],{2403:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=i(4848),t=i(8453);const r={layout:"post",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",tags:["linux","python","sysadmin","web","backend"]},s=void 0,c={permalink:"/2014/09/21/python-web-app-deploy",source:"@site/blog/2014-09-21-python-web-app-deploy.md",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",description:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c \uace0\ub824\ud560 \uc810\ub4e4\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\uc548\uc774 \ub9ce\uc73c\uba74 \uace0\ubbfc\uc774 \ub418\ub294\ub370\uc694. \uba4b\uc9c0\uac8c '\ubca0\uc2a4\ud2b8 \ud504\ub799\ud2f0\uc2a4'\ub97c \uc81c\uc2dc\ud558\uba74 \uc88b\uaca0\uc9c0\ub9cc \uc544\uc9c1 \uadf8\ub7ec\uae30\uc5d4 \ub9ce\uc774 \ubd80\uc871\ud558\uace0, \uc774 \uae00\uc5d0\uc11c\ub294 \uc81c\uac00 \uc120\ud0dd\ud55c \ubc29\uc2dd\uacfc \uc774\uc720\ub97c \uc815\ub9ac\ud574\uc11c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4.",date:"2014-09-21T00:00:00.000Z",tags:[{inline:!0,label:"linux",permalink:"/tags/linux"},{inline:!0,label:"python",permalink:"/tags/python"},{inline:!0,label:"sysadmin",permalink:"/tags/sysadmin"},{inline:!0,label:"web",permalink:"/tags/web"},{inline:!0,label:"backend",permalink:"/tags/backend"}],readingTime:10.48,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",tags:["linux","python","sysadmin","web","backend"]},unlisted:!1,prevItem:{title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",permalink:"/2015/05/15/graphql-and-relay"},nextItem:{title:"Upstart\ub85c \uc624\ub798 \ub3c4\ub294 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac\ud558\uae30",permalink:"/2014/08/12/upstart"}},d={authorsImageUrls:[]},a=[{value:"\uc6b4\uc601\uccb4\uc81c: Ubuntu",id:"\uc6b4\uc601\uccb4\uc81c-ubuntu",level:2},{value:"WSGI \uc11c\ubc84: Gunicorn",id:"wsgi-\uc11c\ubc84-gunicorn",level:2},{value:"\ud504\ub85c\uc138\uc2a4 \uad00\ub9ac: Upstart",id:"\ud504\ub85c\uc138\uc2a4-\uad00\ub9ac-upstart",level:2},{value:"\uc6f9 \uc11c\ubc84: nginx",id:"\uc6f9-\uc11c\ubc84-nginx",level:2},{value:"\ucf54\ub4dc \ubc30\ud3ec: Git",id:"\ucf54\ub4dc-\ubc30\ud3ec-git",level:2},{value:"\ud30c\uc774\uc36c \ud328\ud0a4\uc9c0: virtualenv\uc5d0 \uc9c1\uc811 \uc124\uce58",id:"\ud30c\uc774\uc36c-\ud328\ud0a4\uc9c0-virtualenv\uc5d0-\uc9c1\uc811-\uc124\uce58",level:2},{value:"\uc815\uc801 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec",id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\ubc30\ud3ec",level:2},{value:"\uce90\uc2dc \uad00\ub9ac \uc804\ub7b5: URL \uae30\ubc18",id:"\uce90\uc2dc-\uad00\ub9ac-\uc804\ub7b5-url-\uae30\ubc18",level:3},{value:"\ub0b4\ub824\uc8fc\ub294 \uacf3: \uc608\uc0b0\uc5d0 \ub530\ub77c",id:"\ub0b4\ub824\uc8fc\ub294-\uacf3-\uc608\uc0b0\uc5d0-\ub530\ub77c",level:3},{value:"\uc804\ucc98\ub9ac: \uc0c1\ud669\uc5d0 \ub530\ub77c",id:"\uc804\ucc98\ub9ac-\uc0c1\ud669\uc5d0-\ub530\ub77c",level:3},{value:"\uc624\ub958 \ucd94\uc801: Sentry",id:"\uc624\ub958-\ucd94\uc801-sentry",level:2},{value:"\ub354 \uc0dd\uac01\ud574\ubcfc \uac83\ub4e4",id:"\ub354-\uc0dd\uac01\ud574\ubcfc-\uac83\ub4e4",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c \uace0\ub824\ud560 \uc810\ub4e4\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\uc548\uc774 \ub9ce\uc73c\uba74 \uace0\ubbfc\uc774 \ub418\ub294\ub370\uc694. \uba4b\uc9c0\uac8c '\ubca0\uc2a4\ud2b8 \ud504\ub799\ud2f0\uc2a4'\ub97c \uc81c\uc2dc\ud558\uba74 \uc88b\uaca0\uc9c0\ub9cc \uc544\uc9c1 \uadf8\ub7ec\uae30\uc5d4 \ub9ce\uc774 \ubd80\uc871\ud558\uace0, \uc774 \uae00\uc5d0\uc11c\ub294 \uc81c\uac00 \uc120\ud0dd\ud55c \ubc29\uc2dd\uacfc \uc774\uc720\ub97c \uc815\ub9ac\ud574\uc11c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.h2,{id:"\uc6b4\uc601\uccb4\uc81c-ubuntu",children:["\uc6b4\uc601\uccb4\uc81c: ",(0,l.jsx)(n.a,{href:"http://ubuntu.com/",children:"Ubuntu"})]}),"\n",(0,l.jsx)(n.p,{children:"\uc77c\ubc18\uc801\uc73c\ub85c CentOS \uc544\ub2c8\uba74 Ubuntu\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Ubuntu\ub97c \uc120\ud0dd\ud55c \uac00\uc7a5 \ud070 \uc774\uc720\ub294 '\uc775\uc219\ud574\uc11c'\uc785\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub294 \ub2e4\uc591\ud55c \uc368\ub4dc \ud30c\ud2f0 \ud328\ud0a4\uc9c0(PPA)\uc5d0 \uc27d\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4\ub294 \uc810, \uadf8\ub9ac\uace0 \uac1c\ubc1c \ud658\uacbd\uc73c\ub85c Ubuntu \ub370\uc2a4\ud06c\ud0d1\uc744 \uc0ac\uc6a9\ud558\uba74 \ubc30\ud3ec\ud560 \ub54c \ud658\uacbd \ub9de\ucd94\uae30 \ud6e8\uc52c \uc218\uc6d4\ud558\ub2e4\ub294 \uc810\uc774 \uc788\uaca0\uc2b5\ub2c8\ub2e4. (CentOS\ub97c \ub370\uc2a4\ud06c\ud0d1\uc73c\ub85c \uc4f0\uc2e0\ub2e4\uba74\uc57c \ub9d0\ub9ac\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4...) \ubc84\uc804\uc740 \uad73\uc774 LTS\ub97c \uace0\uc9d1\ud560 \ud544\uc694 \uc5c6\uc774 \uc801\ub2f9\ud788 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc4f0\uba74 \ub418\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.h2,{id:"wsgi-\uc11c\ubc84-gunicorn",children:["WSGI \uc11c\ubc84: ",(0,l.jsx)(n.a,{href:"http://gunicorn.org/",children:"Gunicorn"})]}),"\n",(0,l.jsx)(n.p,{children:"WSGI \uc11c\ubc84\ub85c\ub294 uWSGI \ub610\ub294 Gunicorn\uc774 \ub9ce\uc774 \uc4f0\uc785\ub2c8\ub2e4. uWSGI\ub294 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ud30c\ub77c\ubbf8\ud130\ub3c4 \ub9ce\uace0 \uc131\ub2a5\ub3c4 \uc88b\uae34 \ud558\uc9c0\ub9cc, Gunicorn\uc740 \uc131\ub2a5\uc774 \ud06c\uac8c \ub4a4\uc9c0\uc9c0 \uc54a\uc73c\uba74\uc11c \ud6e8\uc52c \uac04\ub2e8\ud574\uc11c \uad00\ub9ac\ud558\uae30\uac00 \uc218\uc6d4\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 uWSGI\ub294 graceful reload\uac00 \uc548\ub3fc\uc11c \uc7ac\uc2dc\uc791\ud560 \ub54c \ub2e4\uc6b4\ud0c0\uc784\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4. (\ud574\uacb0 \ubc29\ubc95\uc774 \uc788\ub2e4\uba74 \uc54c\ub824\uc8fc\uc138\uc694.)"}),"\n",(0,l.jsxs)(n.h2,{id:"\ud504\ub85c\uc138\uc2a4-\uad00\ub9ac-upstart",children:["\ud504\ub85c\uc138\uc2a4 \uad00\ub9ac: ",(0,l.jsx)(n.a,{href:"http://upstart.ubuntu.com/",children:"Upstart"})]}),"\n",(0,l.jsxs)(n.p,{children:["\ub300\uc548\uc774\ub77c\uba74 ",(0,l.jsx)(n.a,{href:"http://supervisord.org/",children:"supervisord"}),"\uac00 \uc788\uaca0\uc9c0\ub9cc Upstart\ub294 Ubuntu\uc5d0 \uae30\ubcf8\uc73c\ub85c \ub4e4\uc5b4\uc788\uc5b4\uc11c \ub35c \uadc0\ucc2e\uc8e0. Upstart\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\uc73c\uc2dc\uba74 ",(0,l.jsx)(n.a,{href:"/2014/08/12/upstart/",children:"\uc800\ubc88\uc5d0 \uc4f4 \uae00"}),"\uc744 \ucc38\uace0\ud558\uc138\uc694. \uc55e\uc73c\ub85c Ubuntu\uac00 systemd\ub85c \uc804\ud658\ud55c\ub2e4\uba74 systemd\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uaca0\uc8e0."]}),"\n",(0,l.jsxs)(n.h2,{id:"\uc6f9-\uc11c\ubc84-nginx",children:["\uc6f9 \uc11c\ubc84: ",(0,l.jsx)(n.a,{href:"http://nginx.com/",children:"nginx"})]}),"\n",(0,l.jsx)(n.p,{children:"\uc774 \uc120\ud0dd\uc740 \ub531\ud788 \ub17c\ub780\uc758 \uc5ec\uc9c0\uac00 \uc5c6\uc744 \uac81\ub2c8\ub2e4. \ub9ac\ubc84\uc2dc \ud504\ub85d\uc2dc\uc640 \uc815\uc801 \ub9ac\uc18c\uc2a4 \uc11c\ube59\uc5d0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\ub9cc \ubc18\ub4dc\uc2dc Apache\ub85c \ub3cc\ub824\uc57c \ud558\ub294 \ub808\uac70\uc2dc\uac00 \uc788\ub2e4\uba74 \uc608\uc678\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\ucf54\ub4dc-\ubc30\ud3ec-git",children:"\ucf54\ub4dc \ubc30\ud3ec: Git"}),"\n",(0,l.jsxs)(n.p,{children:["\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc744 \ub54c \uc5b4\ub5bb\uac8c \ubc1b\uc544\uc62c \uac83\uc778\uac00 \ud558\ub294 \uc774\uc57c\uae30\uc785\ub2c8\ub2e4. \uc815\uc11d\ub300\ub85c(?) \ud558\uc790\uba74 Git \uc791\uc5c5 \uc0ac\ubcf8\uacfc \uc2e4\uc81c \uc11c\ube44\uc2a4\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74, ",(0,l.jsx)(n.code,{children:"git pull"}),"\uc744 \ud558\ub294 \ub3d9\uc548 \ucf54\ub4dc\uc758 \uc911\uac04 \uc0c1\ud0dc\uac00 \ub178\ucd9c\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc774\uc804 \ubc84\uc804\uc758 \ud15c\ud50c\ub9bf \ud30c\uc77c\uacfc \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 \ud15c\ud50c\ub9bf \ud30c\uc77c\uc774 \uacf5\uc874\ud558\uac8c \ub41c\ub2e4\uba74 \uc11c\ube44\uc2a4\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub300\ubd80\ubd84 \uc544\uc8fc \uc7a0\uae50 \ubc1c\uc0dd\ud558\ub294 \uc77c\uc774\uace0, \ud15c\ud50c\ub9bf \uce90\uc2f1\uc744 \ucf1c\ub294 \ub4f1 \uc6b0\ud68c\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc5b4\uc11c \ud070 \ubb38\uc81c\uac00 \ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.p,{children:["virtualenv\ub098 \uc124\uc815 \ud30c\uc77c \ub4f1\uc744 \uc5b4\ub514\uc5d0 \uc704\uce58\uc2dc\ud0ac \uac83\uc778\uc9c0\ub3c4 \uace0\ubbfc\ud558\uac8c \ub429\ub2c8\ub2e4. \ub9ce\uc740 \uacbd\uc6b0 Git \uc791\uc5c5 \uc0ac\ubcf8 \uc548\uc5d0 \ub9cc\ub4e4\uac8c \ub418\ub294\ub370, \uadf8\ub7f0 \uacbd\uc6b0 ",(0,l.jsx)(n.code,{children:".gitignore"})," \ud30c\uc77c\uc5d0 \ud655\uc2e4\ud788 \ucd94\uac00\ud558\uc5ec \uc800\uc7a5\uc18c\uc5d0 \ub4e4\uc5b4\uac00\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:"\ub3cc\uc544\uac00\ub294 \uc11c\ube44\uc2a4\uac00 \ub9ce\uc744\uc218\ub85d \ud5f7\uac08\ub9ac\uc9c0 \uc54a\ub3c4\ub85d \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub97c \ud1b5\uc77c\ud558\uba74 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \uac00\uae09\uc801 \uc124\uc815 \ud30c\uc77c \ub4f1\uc758 \uc704\uce58\ub098 \ud30c\uc77c\uba85\uc744 \uac15\uc81c\ud558\uc9c0 \ub9d0\uace0 \ud658\uacbd \ubcc0\uc218\uc5d0\uc11c \uc77d\ub3c4\ub85d \ud558\ub294 \ud3b8\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\ud30c\uc774\uc36c-\ud328\ud0a4\uc9c0-virtualenv\uc5d0-\uc9c1\uc811-\uc124\uce58",children:"\ud30c\uc774\uc36c \ud328\ud0a4\uc9c0: virtualenv\uc5d0 \uc9c1\uc811 \uc124\uce58"}),"\n",(0,l.jsx)(n.p,{children:"\uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubc14\uc774\ub108\ub9ac \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \ubcc4\ub85c \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77c\ub2e8 virtualenv\ub85c \uaca9\ub9ac\ud560 \uc218\ub3c4 \uc5c6\uace0, \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2d0 \uac00\ub2a5\uc131\uc774 \ub9e4\uc6b0 \ub192\uace0, \uc5b8\uc81c \uc5c5\ub370\uc774\ud2b8\uac00 \ub420\uc9c0\ub3c4 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ubc30\ud3ec \ub300\uc0c1 \uc11c\ubc84\uac00 \ub9ce\ub2e4\uba74 \ube4c\ub4dc \uc2dc\uac04\uc774 \ub0ad\ube44\ub418\ub2c8\uae4c \uc9c1\uc811 \ud328\ud0a4\uc9d5\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:["\ucd94\uac00\ub85c, \uc758\uc874\uc131\uc744 ",(0,l.jsx)(n.code,{children:"setup.py"}),"\ub85c \uad00\ub9ac\ud560\uc9c0 \uc544\ub2c8\uba74 ",(0,l.jsx)(n.code,{children:"requirements.txt"}),"\ub97c \uc0ac\uc6a9\ud560\uc9c0\ub3c4 \uc120\ud0dd\ud574\uc57c \ud558\ub294\ub370\uc694. \uc774 \ucabd\uc740 \ud2b9\ubcc4\ud788 \uc120\ud638\ud558\ub294 \ubc29\uc2dd\uc774 \uc788\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9ce\uc740 \uacbd\uc6b0\uc5d0 ",(0,l.jsx)(n.code,{children:"requirements.txt"}),"\ub85c\ub9cc \uad00\ub9ac\ud574\ub3c4 \ucda9\ubd84\ud569\ub2c8\ub2e4. \uc5b4\uca0c\ub4e0 \uad00\ub9ac\uac00 \ub418\uace0 \uc788\ub2e4\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h2,{id:"\uc815\uc801-\ub9ac\uc18c\uc2a4-\ubc30\ud3ec",children:"\uc815\uc801 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec"}),"\n",(0,l.jsx)(n.h3,{id:"\uce90\uc2dc-\uad00\ub9ac-\uc804\ub7b5-url-\uae30\ubc18",children:"\uce90\uc2dc \uad00\ub9ac \uc804\ub7b5: URL \uae30\ubc18"}),"\n",(0,l.jsxs)(n.p,{children:["\ub9ac\uc18c\uc2a4\uac00 \uac31\uc2e0\ub418\uc5c8\uc744 \ub54c \ube0c\ub77c\uc6b0\uc800\uc758 \uce90\uc2dc\ub97c \uc5b4\ub5bb\uac8c \ubb34\ud6a8\ud654 \ud560 \uac83\uc778\uc9c0 \uace0\ub824\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4. \uac00\uc7a5 \ud655\uc2e4\ud55c \ubc29\ubc95\uc740 \ub9ac\uc18c\uc2a4\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 URL\uc744 \ubc14\uafb8\ub294 \uac83\uc785\ub2c8\ub2e4. \uc544\uc608 \ud30c\uc77c\uba85\uc744 \ubc14\uafb8\uac70\ub098 \uc8fc\uc18c \ub4a4\uc5d0 \ucffc\ub9ac \ubb38\uc790\uc5f4\uc744 \ubd99\uc5ec\uc11c (",(0,l.jsx)(n.code,{children:"?v=3"}),"\ucc98\ub7fc) URL\uc774 \ubc14\ub00c\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \uc774\ub7f0 \uc77c\uc744 \uc190\uc73c\ub85c \ud558\uba74 \uc2e4\uc218\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uc73c\ubbc0\ub85c \uac00\uae09\uc801 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 Expiry \ud5e4\ub354\ub97c \ub9e4\uc6b0 \uae38\uac8c \uc7a1\uc544 \uc11c\ubc84\uc5d0 \uc804\ud600 \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uc9c0 \uc54a\uac8c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc5b4 \uc131\ub2a5\uc0c1 \uc774\ub4dd\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.h3,{id:"\ub0b4\ub824\uc8fc\ub294-\uacf3-\uc608\uc0b0\uc5d0-\ub530\ub77c",children:"\ub0b4\ub824\uc8fc\ub294 \uacf3: \uc608\uc0b0\uc5d0 \ub530\ub77c"}),"\n",(0,l.jsx)(n.p,{children:"\uc11c\ubc84\uac00 \ud55c\uad6d\uc5d0 \uc788\uace0, \uc811\uc18d\uc790\ub3c4 \ubaa8\ub450 \ud55c\uad6d \uac70\uc8fc\uc790\ub77c\uba74 \uadf8\ub0e5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uac19\uc740 \uc11c\ubc84\uc5d0\uc11c \ub0b4\ub824\uc8fc\uba74 \ub418\ubbc0\ub85c \ud2b9\ubcc4\ud788 \uace0\ub824\ud560 \uac83\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc11c\ubc84\uc640 \uc811\uc18d\uc790\uc758 \uc704\uce58\uac00 \ub2e4\ub974\uace0 \ucda9\ubd84\ud55c \uc608\uc0b0\uc774 \uc788\ub2e4\uba74 CDN\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"CDN\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 S3\uc640 \uac19\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\uc5d0 \ud30c\uc77c\uc744 \uc62c\ub9b4\uc9c0, \uc544\ub2c8\uba74 \uc77c\ubc18 \uc6f9 \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec \uc2dc \ucd94\uac00\uc801\uc778 \ub9ac\uc18c\uc2a4 \ubc30\ud3ec \uacfc\uc815\uc774 \ud544\uc694\ud558\uc9c0\ub9cc \ud6e8\uc52c \uc548\uc815\uc801\uc774\ub77c\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"\uc804\ucc98\ub9ac-\uc0c1\ud669\uc5d0-\ub530\ub77c",children:"\uc804\ucc98\ub9ac: \uc0c1\ud669\uc5d0 \ub530\ub77c"}),"\n",(0,l.jsx)(n.p,{children:"\ucd5c\uadfc \uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc5d0\uc11c\ub294 SASS\ub098 CoffeeScript\ucc98\ub7fc \uc804\ucc98\ub9ac \uacfc\uc815\uc774 \ud544\uc694\ud55c \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \ucd94\uc138\uc785\ub2c8\ub2e4. \ud06c\uac8c \uc138 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 \ubbf8\ub9ac \ube4c\ub4dc: \ubc30\ud3ec\ud560 \uc11c\ubc84 \uc218\uac00 \ub9ce\uc744 \ub54c \uc720\ub9ac\ud569\ub2c8\ub2e4. \ud63c\uc790 \uac1c\ubc1c\ud558\ub294 \uc11c\ube44\uc2a4\ub77c\uba74 \uc544\uc608 Git \uc800\uc7a5\uc18c\uc5d0 \uac19\uc774 \ucee4\ubc0b\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub97c \ud1b5\ud574 \ub9ac\uc18c\uc2a4\ub97c \ub0b4\ub824\uc904 \uacbd\uc6b0, \uc5b4\ucc28\ud53c \uc5c5\ub85c\ub4dc\ud558\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud558\ubbc0\ub85c \uc5c5\ub85c\ub4dc\ud558\uae30 \uc804\uc5d0 \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\ube44\uc2a4\ud558\ub294 \uc11c\ubc84\uc5d0\uc11c \ubbf8\ub9ac \uc624\ud504\ub77c\uc778 \ube4c\ub4dc: Git \ud6c5 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc9c0\uc815\ud574\ub450\uba74 \ud3b8\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc640 \ubb34\uad00\ud558\ubbc0\ub85c \uc548\uc804\ud558\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:["\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc5d0\uc11c \uc628\ub77c\uc778 \ube4c\ub4dc: ",(0,l.jsx)(n.a,{href:"http://webassets.readthedocs.org/",children:"webassets"})," \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uac00 \uad00\ub9ac\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc11c\ubc84 \uad6c\ub3d9\uc774 \ub290\ub824\uc9c0\uac70\ub098 \uc11c\ube44\uc2a4\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc73c\ubbc0\ub85c \ucd94\ucc9c\ud558\ub294 \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"\uc624\ub958-\ucd94\uc801-sentry",children:["\uc624\ub958 \ucd94\uc801: ",(0,l.jsx)(n.a,{href:"https://getsentry.com/",children:"Sentry"})]}),"\n",(0,l.jsx)(n.p,{children:"\uc2e4\uc81c \uc11c\ube44\uc2a4\ub97c \uc2dc\uc791\ud558\uba74 \ud14c\uc2a4\ud2b8\ud560 \ub54c\ub294 \ubc1c\uacac\ud558\uc9c0 \ubabb\ud588\ub358 \uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Sentry\ub97c \ud1b5\ud574 \uc624\ub958\ub97c \uc218\uc9d1\ud558\uba74 \ub9ce\uc740 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c \ub85c\uac70\uc640 \uc5f0\ub3d9\ud574\uc11c \uce58\uba85\uc801\uc778 \uc624\ub958\ub294 \uc544\ub2c8\uc9c0\ub9cc \uc608\uc678\uc801\uc778 \uc0c1\ud669\uc5d0 \ub85c\uadf8\ub97c \ub0a8\uae30\uac8c \ud558\uba74 \ube44\uc0c1\uc2dc\uc5d0 \ub300\ucc98\ud560 \uc218 \uc788\uc5b4 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\ub354-\uc0dd\uac01\ud574\ubcfc-\uac83\ub4e4",children:"\ub354 \uc0dd\uac01\ud574\ubcfc \uac83\ub4e4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ubc30\ud3ec \uc790\ub3d9\ud654: ",(0,l.jsx)(n.a,{href:"http://www.fabfile.org/",children:"Fabric"}),"\uc73c\ub85c \uc6d0\uaca9 \ubc30\ud3ec\ub97c \uc790\ub3d9\ud654\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\uc11c\ubc84 \uc124\uc815 \uc790\ub3d9\ud654: Chef, Puppet\uc774\ub098 ",(0,l.jsx)(n.a,{href:"http://www.ansible.com",children:"Ansible"})," \ub4f1\uc744 \uc0ac\uc6a9\ud574\uc11c \uc11c\ubc84 \uc138\ud305 \uacfc\uc815\uc744 \ud615\uc0c1 \uad00\ub9ac/\uc790\ub3d9\ud654\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1: ",(0,l.jsx)(n.a,{href:"http://newrelic.com/",children:"New Relic"}),"\uc774 \uad49\uc7a5\ud788 \uc88b\uc9c0\ub9cc, \uac00\uaca9\uc774 \ub9cc\ub9cc\uce58 \uc54a\uc544\uc11c \uc544\uc9c1 \uc801\uc808\ud55c \ub300\uc548\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\ubc84 \uc811\uc18d \uad8c\ud55c\uacfc \ubbfc\uac10\ud55c \uc815\ubcf4 \uad00\ub9ac"}),"\n",(0,l.jsx)(n.li,{children:"\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c \uad00\ub9ac"}),"\n",(0,l.jsx)(n.li,{children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 / \uba54\ubaa8\ub9ac \uce90\uc2dc"}),"\n",(0,l.jsxs)(n.li,{children:["\ubc31\uadf8\ub77c\uc6b4\ub4dc \uc6cc\ucee4 (",(0,l.jsx)(n.a,{href:"http://www.celeryproject.org/",children:"Celery"}),") / \uba54\uc2dc\uc9c0 \ud050"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var l=i(6540);const t={},r=l.createContext(t);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);