"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[1869],{6887:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=n(4848),s=n(8453);const t={layout:"post",title:"\ub098\ub3c4 MSA \ud55c\ubc88 \ud574\ubcf4\uc790 (1)",tags:["microservice","architecture","distributed"],image:"public/img/2019-12-msa.jpg"},c=void 0,l={permalink:"/2019/12/29/microservices-1",source:"@site/blog/2019-12-29-microservices-1.md",title:"\ub098\ub3c4 MSA \ud55c\ubc88 \ud574\ubcf4\uc790 (1)",description:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub294 \ucd5c\uc18c 5\ub144 \uc804\ubd80\ud130 \uafb8\uc900\ud788 \ub4e4\ub824\uc654\ub358 \uac78\ub85c \uae30\uc5b5\ud55c\ub2e4. \ud558\uc9c0\ub9cc \ud68c\uc0ac\uc5d0\uc11c \ud558\ub358 \ud504\ub85c\uc81d\ud2b8\uac00 (MSA\ub77c\uace0 \ud558\uae30\ub294 \uc870\uae08 \ubb50\ud558\uc9c0\ub9cc \uc5b4\uca0c\ub4e0) \uc5ec\ub7ec \uc11c\ube44\uc2a4\uc758 \uc870\ud569\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc5c8\ub294\ub370, \ub098\uc05c \uacbd\ud5d8\uc744 \ub9ce\uc774 \ud574\uc11c \ub9c9\uc5f0\ud55c \uac70\ubd80\uac10\uc774 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \uc11c\ube44\uc2a4\ub97c \uc5b4\ub5bb\uac8c \uc798 \ub098\ub204\ub294 \uac83\uc774 \uc88b\uc740\uc9c0 \uac00\ub054 \uc0dd\uac01\ud574\ubcf4\uae34 \ud588\uc5b4\ub3c4 '\uc6ec\ub9cc\ud558\uba74 \ubaa8\ub178\ub9ac\uc2a4\uac00 \ub0ab\uc9c0'\ub77c\ub294 \ub9c8\uc74c\uac00\uc9d0\uc73c\ub85c \uc0b4\uc544\uc654\ub2e4. (DHH\uac00 \uc791\uc131\ud55c The Majestic Monolith\ub77c\ub294 \uae00\uc758 \uc601\ud5a5\ub3c4 \uc5b4\ub290 \uc815\ub3c4 \uc788\uc5c8\ub2e4.)",date:"2019-12-29T00:00:00.000Z",tags:[{inline:!0,label:"microservice",permalink:"/tags/microservice"},{inline:!0,label:"architecture",permalink:"/tags/architecture"},{inline:!0,label:"distributed",permalink:"/tags/distributed"}],readingTime:12.215,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\ub098\ub3c4 MSA \ud55c\ubc88 \ud574\ubcf4\uc790 (1)",tags:["microservice","architecture","distributed"],image:"public/img/2019-12-msa.jpg"},unlisted:!1,prevItem:{title:"\u2018\uc21c\uc218 \ud568\uc218\ud615\u2019 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Nix \ub9db\ubcf4\uae30",permalink:"/2021/05/09/nix"},nextItem:{title:"Windows 10 Home\uc5d0 Docker Desktop \uc124\uce58\ud558\uae30",permalink:"/2019/06/09/docker-desktop-for-windows-home"}},a={authorsImageUrls:[]},h=[{value:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub1cc\ud53c\uc15c",id:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0-\ub300\ud55c-\ub1cc\ud53c\uc15c",level:2},{value:"\ubd84\uc0b0 \ud2b8\ub79c\uc7ad\uc158",id:"\ubd84\uc0b0-\ud2b8\ub79c\uc7ad\uc158",level:3},{value:"\uc11c\ube44\uc2a4 \uac04 \ud1b5\uc2e0",id:"\uc11c\ube44\uc2a4-\uac04-\ud1b5\uc2e0",level:3},{value:"API \ud1b5\ud569",id:"api-\ud1b5\ud569",level:3},{value:"\ubc30\ud3ec\uc640 \ud14c\uc2a4\ud2b8",id:"\ubc30\ud3ec\uc640-\ud14c\uc2a4\ud2b8",level:3},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub294 \ucd5c\uc18c 5\ub144 \uc804\ubd80\ud130 \uafb8\uc900\ud788 \ub4e4\ub824\uc654\ub358 \uac78\ub85c \uae30\uc5b5\ud55c\ub2e4. \ud558\uc9c0\ub9cc \ud68c\uc0ac\uc5d0\uc11c \ud558\ub358 \ud504\ub85c\uc81d\ud2b8\uac00 (MSA\ub77c\uace0 \ud558\uae30\ub294 \uc870\uae08 \ubb50\ud558\uc9c0\ub9cc \uc5b4\uca0c\ub4e0) \uc5ec\ub7ec \uc11c\ube44\uc2a4\uc758 \uc870\ud569\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc5c8\ub294\ub370, \ub098\uc05c \uacbd\ud5d8\uc744 \ub9ce\uc774 \ud574\uc11c \ub9c9\uc5f0\ud55c \uac70\ubd80\uac10\uc774 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \uc11c\ube44\uc2a4\ub97c \uc5b4\ub5bb\uac8c \uc798 \ub098\ub204\ub294 \uac83\uc774 \uc88b\uc740\uc9c0 \uac00\ub054 \uc0dd\uac01\ud574\ubcf4\uae34 \ud588\uc5b4\ub3c4 '\uc6ec\ub9cc\ud558\uba74 \ubaa8\ub178\ub9ac\uc2a4\uac00 \ub0ab\uc9c0'\ub77c\ub294 \ub9c8\uc74c\uac00\uc9d0\uc73c\ub85c \uc0b4\uc544\uc654\ub2e4. (DHH\uac00 \uc791\uc131\ud55c ",(0,r.jsx)(i.a,{href:"https://m.signalvnoise.com/the-majestic-monolith/",children:"The Majestic Monolith"}),"\ub77c\ub294 \uae00\uc758 \uc601\ud5a5\ub3c4 \uc5b4\ub290 \uc815\ub3c4 \uc788\uc5c8\ub2e4.)"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"/public/img/2019-12-msa.jpg",alt:"Monolithic vs Microservices"}),(0,r.jsx)("figcaption",{children:"\uacb0\uad6d \ub2e4 \ub625\uc778\uac00\u2026"})]}),"\n",(0,r.jsx)(i.p,{children:"\uc138\uc6d4\uc774 \ud758\ub7ec \ud68c\uc0ac\uc5d0\uc11c \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uac8c \ub418\uc5c8\uace0 \uc774\uc804\uc758 \uacbd\ud5d8\uc744 \ubc18\uba74\uad50\uc0ac \uc0bc\uc544 \uc774\ubc88\uc5d0\ub294 \ud558\ub098\uc758 \ucf54\ub4dc\ubca0\uc774\uc2a4\uc5d0\uc11c \ucd5c\ub300\ud55c \uc11c\ube44\uc2a4\ub97c \ub098\ub204\uc9c0 \uc54a\uc558\ub2e4. \ucd08\uae30\uc5d0 \ud504\ub85c\uc81d\ud2b8\ub97c \ube60\ub974\uac8c \uc9c4\ud589\ud560 \uc218 \uc788\uc5c8\uace0 \uc9c0\uae08\ub3c4 \uc5b4\ub290 \uc815\ub3c4 \ub808\uac70\uc2dc\uac00 \uc313\uc774\uae34 \ud588\uc9c0\ub9cc \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub294\ub370 \ud06c\uac8c \ubb34\ub9ac\ub294 \uc5c6\ub294 \uc0c1\ud0dc\ub2e4. (\ub2e4\ub978 \ud300\uc6d0\ub4e4\uc740 \uc5b4\ub5bb\uac8c \uc0dd\uac01\ud558\ub294\uc9c0 \ubaa8\ub974\uaca0\ub2e4 \u3160\u3160)"}),"\n",(0,r.jsx)(i.p,{children:"\ud558\uc9c0\ub9cc \uc0ac\uc5c5 \uce21 \uc774\ud574\ub2f9\uc0ac\uc790\uac00 \ub9ce\uc544\uc9c0\uace0 \ud300\uc6d0\ub3c4 \ub298\uc5b4\ub098\uba74\uc11c \uc11c\ub85c \ub2e4\ub978 \uae30\ub2a5 \uc601\uc5ed\uc758 \ub9b4\ub9ac\uc988 \uc2a4\ucf00\uc904\uc774 \uc11c\ub85c \uaf2c\uc774\uae30 \uc2dc\uc791\ud588\ub2e4. \uc5b4\ub5a4 \uae30\ub2a5 \uc601\uc5ed \ud558\ub098\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc131\ub2a5 \ubb38\uc81c\uac00 \uc11c\ube44\uc2a4 \uc804\uccb4\uc5d0 \uc601\ud5a5\uc744 \uc8fc\ub294 \uc77c\uc774 \uc0dd\uae30\uae30\ub3c4 \ud588\ub2e4. \uadf8\ub7ec\ub2e4\ubcf4\ub2c8 \uc11c\ube44\uc2a4\ub97c \uc801\uc808\ud788 \ub098\ub204\uba74 \ub3c5\ub9bd\uc801\uc778 \ubc30\ud3ec\uac00 \uac00\ub2a5\ud560 \uc218\ub3c4 \uc788\uaca0\ub2e4\ub294 \uc0dd\uac01\uc5d0 MSA\uc5d0 \ub300\ud574 \ub2e4\uc2dc \uad00\uc2ec\uc774 \uc0dd\uacbc\ub2e4. \ub610 \ub2e4\ub978 \uacc4\uae30\ub85c\ub294 \uc774\uc804\ubcf4\ub2e4 MSA\ub85c \uc804\ud658\ud558\ub294 \uc0ac\ub840\uac00 \ub9ce\uc774 \ubcf4\uc774\uace0, \ucc44\uc6a9\uacf5\uace0\uc5d0\ub3c4 'MSA \uacbd\ud5d8\uc790' \uac19\uc740 \ub9d0\uc774 \ub4f1\uc7a5\ud558\uae30 \uc2dc\uc791\ud558\ub294 \ubd84\uc704\uae30\uc5d0 \uc57d\uac04\uc758 \uc704\uae30\uac10\uc744 \ub290\uaf08\ub358 \uac83\ub3c4 \uc788\ub2e4."}),"\n",(0,r.jsxs)(i.p,{children:["\uadf8\ub9ac\ud558\uc5ec MSA \uae30\ubc18\uc758 \uc5f0\uc2b5 \ud504\ub85c\uc81d\ud2b8\ub97c \ud574\ubd10\uc57c\uaca0\ub2e4\uace0 \ub9c8\uc74c\uba39\uc5c8\ub2e4. \uac00\uc7a5 \uba3c\uc800 \ud504\ub85c\uc81d\ud2b8 \uc8fc\uc81c\ub97c \uc815\ud588\ub294\ub370, \ubb38\uc81c \uc601\uc5ed\uc774 \ucda9\ubd84\ud788 \ubcf5\uc7a1\ud574\uc57c \ud55c\ub2e4\ub294 \uc0dd\uac01\uc774 \uc788\uc5c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud22c\ub450\ub9ac\uc2a4\ud2b8 \uc571\uc774\ub77c\uba74 \uba38\ub9ac\ub97c \ucd5c\ub300\ud55c \uc9dc\ub0b4\ub3c4 \ud604\uc2e4\uc5d0\uc11c\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc744 \ubc95\ud55c \uc774\uc0c1\ud55c \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc11c\ube44\uc2a4\ub97c \uc5ec\ub7ec \uac1c\ub85c \ub098\ub204\uae30 \ud798\ub4e4\ub2e4\uace0 \ubd24\ub2e4. \uacb0\ub860\uc740 ",(0,r.jsx)(i.a,{href:"https://watcha.com/",children:"\uc653\ucc60"})," (\uc653\ucc60 \ud50c\ub808\uc774 \ub9d0\uace0!)\ub97c \ubca0\ub07c\uae30\ub85c \ud588\ub2e4. \uc624\ub798 \ud574\uc624\ub358 \uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8\uc640 \ube44\uc2b7\ud574\uc11c \uad6c\uc870\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uac00 \uc5b4\ub290 \uc815\ub3c4 \uc788\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ub0b4\uac8c\ub294 \uaf64 \uc790\uc5f0\uc2a4\ub7ec\uc6b4 \uc120\ud0dd\uc774\ub2e4. \ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc740 ",(0,r.jsx)(i.code,{children:"microservices"})," + ",(0,r.jsx)(i.code,{children:"watcha"})," = ",(0,r.jsx)(i.code,{children:"matcha"}),"\ub85c \uc815\ud588\ub2e4."]}),"\n",(0,r.jsx)(i.h2,{id:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0-\ub300\ud55c-\ub1cc\ud53c\uc15c",children:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ub1cc\ud53c\uc15c"}),"\n",(0,r.jsx)(i.p,{children:"MSA\uc5d0 \ub300\ud574 \ub098\ub984\ub300\ub85c \uc815\uc758\ub97c \ub0b4\ub824\uc57c \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa9\ud45c\uac00 \uc880 \ub354 \ud655\uc2e4\ud574\uc9c8 \uac83\uc774\ub2e4. \ub0b4\uac00 \uc0dd\uac01\ud558\uae30\uc5d0 \ub300\ucda9 \ub2e4\uc74c \uc870\uac74\uc744 \ub9cc\uc871\ud558\uba74 \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub77c\uace0 \ubd80\ub974\ub294 \uac83 \uac19\ub2e4."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\ub2e4\ub978 \uc11c\ube44\uc2a4\uc640\ub294 \ub124\ud2b8\uc6cc\ud06c\ub85c \ud1b5\uc2e0: OS \ud504\ub85c\uc138\uc2a4\ub97c \ub2e4\ub978 \uc11c\ube44\uc2a4\uc640 \uacf5\uc720\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,r.jsx)(i.li,{children:"\ub3c5\ub9bd\uc801\uc778 \ubc30\ud3ec\uac00 \uac00\ub2a5\ud55c \ub2e8\uc704: \ub2e4\ub978 \uc11c\ube44\uc2a4\uc640 \uc758\uc874 \uad00\uacc4\uc77c \uc218\ub294 \uc788\uc9c0\ub9cc \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0."}),"\n",(0,r.jsx)(i.li,{children:"(\ub17c\ub9ac\uc801\uc778) \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub2e4\ub978 \uc11c\ube44\uc2a4\uc640 \uacf5\uc720\ud558\uc9c0 \uc54a\uc74c: \uac19\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 Foreign Key\ub97c \uac78\uac70\ub098 \ud14c\uc774\ube14\uc744 Join\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"\uc774\ub7ec\ud55c \uc870\uac74 \ub54c\ubb38\uc5d0 \ubc1c\uc0dd\ud560 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc5b4\ub824\uc6c0\uc774 \uc788\uace0, \uc5b4\ub5bb\uac8c \ud574\uacb0\ud560 \uc9c0 \uc544\uc774\ub514\uc5b4\uac00 \uc788\ub294 \uac83\ub3c4 \uc788\uace0 \uc5c6\ub294 \uac83\ub3c4 \uc788\ub2e4. (\uc5c6\ub2e4\uba74 \uacf5\ubd80\ud558\uac8c \ub420 \uc601\uc5ed\uc774\ub2e4.) \ud558\ub098\uc529 \uc0b4\ud3b4\ubcf4\uc790."}),"\n",(0,r.jsx)(i.h3,{id:"\ubd84\uc0b0-\ud2b8\ub79c\uc7ad\uc158",children:"\ubd84\uc0b0 \ud2b8\ub79c\uc7ad\uc158"}),"\n",(0,r.jsx)(i.p,{children:"\uac00\uc7a5 \uace8\uce58\uc544\ud50c \uac83 \uac19\uc740 \ubb38\uc81c\ub294 \ub370\uc774\ud130\uc758 \uc77c\uad00\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \uac83\uc774\ub2e4. \uc774\uc804\uc5d0\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud2b8\ub79c\uc7ad\uc158\uc774 \ubcf4\uc7a5\ud574\uc8fc\ub358 \uc6d0\uc790\uc131\uc744 \uc783\uc5b4\ubc84\ub9ac\uae30 \ub54c\ubb38\uc774\ub2e4. \uc11c\ube44\uc2a4 A\uac00 \ub2f4\ub2f9\ud558\ub294 \ub370\uc774\ud130\uc640 \uc11c\ube44\uc2a4 B\uac00 \ub2f4\ub2f9\ud558\ub294 \ub370\uc774\ud130\ub97c \ud568\uaed8 \ubcc0\uacbd\ud574\uc57c \ud55c\ub2e4\uba74, A\uc758 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\uace0 \ub098\uc11c B\uc758 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud560 \uac83\uc774\ub2e4. \ud558\uc9c0\ub9cc,"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"\uc678\ubd80\uc5d0\uc11c\ub294 A\uc758 \ub370\uc774\ud130\ub294 \ubcc0\uacbd\ub418\uc5c8\uc9c0\ub9cc B\uc758 \ub370\uc774\ud130\ub294 \uc544\uc9c1 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub97c \ubcfc \uc218 \uc788\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsx)(i.li,{children:"A\uc758 \ub370\uc774\ud130 \ubcc0\uacbd\uc740 \uc131\uacf5\ud588\uc9c0\ub9cc B\uc758 \uc7a5\uc560\ub85c B\uc758 \ub370\uc774\ud130 \ubcc0\uacbd\uc740 \uc2e4\ud328\ud588\ub2e4\uba74 A\uc640 B\uc758 \uc0c1\ud0dc\ub294 \uc77c\uad00\uc131\uc774 \uae68\uc9c4 \ucc44\ub85c \ub0a8\uc544\uc788\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsx)(i.li,{children:"A\uc758 \ub370\uc774\ud130 \ubcc0\uacbd\uc740 \uc131\uacf5\ud588\uc9c0\ub9cc B\uc758 \ub370\uc774\ud130 \ubcc0\uacbd\uc774 \uc131\ub9bd\ud558\ub294 \uc81c\uc57d \uc870\uac74\uc774 \ub354\uc774\uc0c1 \uc131\ub9bd\ud558\uc9c0 \uc54a\uc73c\uba74 A\ub97c \uc6d0\ub798 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub824\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"1\ubc88 \ubb38\uc81c\ub294 \uc911\uac04 \uc0c1\ud0dc\uac00 \ubcf4\uc5ec\ub3c4 \ubb38\uc81c\uac00 \uc5c6\ub3c4\ub85d \uc11c\ube44\uc2a4 \uacbd\uacc4\ub97c \uc798 \ub098\ub220\uc11c \ud68c\ud53c\ud560 \uc218 \uc788\ub2e4\uace0 \ubcf8\ub2e4. \ud558\uc9c0\ub9cc \ud68c\ud53c\ud560 \uc218 \uc5c6\ub2e4\uba74?"}),"\n",(0,r.jsxs)(i.p,{children:["2\ubc88 \ubb38\uc81c\ub294 A\uc758 \ub370\uc774\ud130 \ubcc0\uacbd\uacfc \ud568\uaed8 \uc6d0\uc790\uc801\uc73c\ub85c \uc774\ubca4\ud2b8\ub97c \ubc1c\ud589\ud558\uba74 \ub420 \uac83 \uac19\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub97c \ubc1b\uc544\uc11c \ud655\uc2e4\ud788 \uc131\uacf5\ud560 \ub54c\uae4c\uc9c0 B\uc5d0 \ub370\uc774\ud130 \ubcc0\uacbd\uc744 \uc804\ud30c\ud574\uc8fc\ub294 \ub140\uc11d\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4. \uc6d0\uc790\uc801\uc778 \uc774\ubca4\ud2b8 \ubc1c\ud589\uc744 \uc704\ud574\uc11c\ub294 DB\uc5d0 \uc774\ubca4\ud2b8\ub97c \uac19\uc774 \uc4f0\ub294 \ubc29\ubc95(",(0,r.jsx)(i.a,{href:"https://microservices.io/patterns/data/transactional-outbox.html",children:"outbox \ud328\ud134"}),"), DB\uc758 \ub370\uc774\ud130 \ubcc0\uacbd \uc774\ubca4\ud2b8\ub97c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95(",(0,r.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Change_data_capture",children:"change data capture"}),"), \ubcc0\uacbd \uc790\uccb4\ub97c \uc774\ubca4\ud2b8\ub85c \ub098\ud0c0\ub0b4\ub294 \ubc29\ubc95(\uc774\ubca4\ud2b8 \uc18c\uc2f1) \ub4f1\uc774 \uc788\uc744 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsxs)(i.p,{children:["3\ubc88 \ubb38\uc81c\ub294 ",(0,r.jsx)(i.a,{href:"https://microservices.io/patterns/data/saga.html",children:"saga \ud328\ud134"}),"\uc744 \uc801\uc6a9\ud558\uba74 \ub41c\ub2e4\uace0 \ub4e4\uc740 \uc801\uc774 \uc788\ub294\ub370 \ubb54\uc9c0 \uc798 \ubaa8\ub974\ub2c8 \uc54c\uc544\ubd10\uc57c \ud560 \uac83 \uac19\ub2e4."]}),"\n",(0,r.jsx)(i.h3,{id:"\uc11c\ube44\uc2a4-\uac04-\ud1b5\uc2e0",children:"\uc11c\ube44\uc2a4 \uac04 \ud1b5\uc2e0"}),"\n",(0,r.jsx)(i.p,{children:"\uc11c\ube44\uc2a4\ub07c\ub9ac \ud1b5\uc2e0\ud558\ub824\uba74 \uc798 \uc815\uc758\ub41c API\uac00 \ud544\uc694\ud558\ub2e4. RESTful API\ub97c \uc0ac\uc6a9\ud560 \uac83\uc778\uc9c0, gRPC\ub97c \uc0ac\uc6a9\ud560 \uac83\uc778\uc9c0, \uc11c\ube44\uc2a4 \ucf54\ub4dc \uc0ac\uc774\uc5d0 \ud504\ub85c\ud1a0\ucf5c\uc740 \uc5b4\ub5a4 \uc2dd\uc73c\ub85c \uacf5\uc720\ud558\uace0 \ud504\ub85c\ud1a0\ucf5c \ubc84\uc804 \uad00\ub9ac\ub294 \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uc9c0 \ub4f1\uc758 \uace0\ubbfc\uc744 \ud574\uc57c\ud55c\ub2e4."}),"\n",(0,r.jsxs)(i.p,{children:["\uc11c\ube44\uc2a4\ub07c\ub9ac \ub124\ud2b8\uc6cc\ud06c\ub85c \ud1b5\uc2e0\ud55c\ub2e4\ub294 \uac83\uc740 \ub354\uc774\uc0c1 \ub2e4\ub978 \uc11c\ube44\uc2a4\ub97c \ubbff\uc744 \uc218 \uc5c6\ub2e4\ub294 \ub9d0\uc774\ub2e4. \uc5b8\uc81c\ub098 \uc11c\ube44\uc2a4 \ud638\ucd9c\uc774 \uc2e4\ud328\ud560 \uc218 \uc788\ub2e4\uace0 \uac00\uc815\ud574\uc57c \ud55c\ub2e4. \uc5ec\ub7ec \uc11c\ube44\uc2a4\uac00 \uc758\uc874\ud558\ub294 \uc11c\ube44\uc2a4\uac00 \ub290\ub824\uc9c0\uba74 \uc11c\ube44\uc2a4 \uc804\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc7a5\uc560\uac00 \uc804\ud30c\ub418\ub294 \uac83\uc744 \ubbf8\ub9ac \ucc28\ub2e8\ud560 \ud544\uc694\uac00 \uc788\ub2e4. (",(0,r.jsx)(i.a,{href:"https://microservices.io/patterns/reliability/circuit-breaker.html",children:"circuit breaker"}),")"]}),"\n",(0,r.jsxs)(i.p,{children:["\ub610\ud55c \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uacfc \ub2ec\ub9ac \uc11c\ube44\uc2a4 \ud638\ucd9c\uc740 \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4\uac00 \ub0a8\ub294 \uac83\uc774 \uc544\ub2c8\ubbc0\ub85c \uae30\uc874 \ub3c4\uad6c\ub85c\ub294 \ub514\ubc84\uae45\uc774 \uc5b4\ub824\uc6cc\uc9c8 \uc218 \uc788\ub2e4. \uc774\ub97c \uc704\ud574 \uc5ec\ub7ec \uc11c\ube44\uc2a4\uc5d0 \uac78\uce5c \uc791\uc5c5\uc744 \ucd94\uc801\ud574\uc57c \ud55c\ub2e4. (",(0,r.jsx)(i.a,{href:"https://microservices.io/patterns/observability/distributed-tracing.html",children:"distributed tracing"}),")"]}),"\n",(0,r.jsx)(i.h3,{id:"api-\ud1b5\ud569",children:"API \ud1b5\ud569"}),"\n",(0,r.jsx)(i.p,{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c '\ud654\uba74'\uc744 \uadf8\ub9ac\uae30 \uc704\ud574\uc11c\ub294 \uc5ec\ub7ec \uc11c\ube44\uc2a4\uc5d0 \ubd84\uc0b0\ub418\uc5b4 \uc788\ub294 \ub370\uc774\ud130\ub97c \uac01\uac01 \uac00\uc838\uc640\uc11c \uc801\uc808\ud788 \ud569\uccd0\uc57c \ud55c\ub2e4. \ud558\uc9c0\ub9cc \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \uc5b4\ub290 \uc11c\ube44\uc2a4\uc5d0 \uc788\ub294\uc9c0 \uc54c\uc544\uc57c \ud55c\ub2e4\uba74 \ubd88\ud3b8\ud560 \uac83\uc774\ub2e4. \uadf8\ub9ac\uace0 \ub0b4\ubd80 \uad6c\uc870\uac00 \ubcc0\ud560 \ub54c \uc678\ubd80 API\uc758 \uc18c\ube44\uc790\uac00 \ubaa8\ub450 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5b4\uc57c \ud558\ub294 \ubb38\uc81c\ub3c4 \uc788\ub2e4."}),"\n",(0,r.jsx)(i.p,{children:"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc678\ubd80\uc5d0\uc11c \uc624\ub294 \ubaa8\ub4e0 API \uc694\uccad\uc744 \ubc1b\uc544\uc8fc\ub294 API \uac8c\uc774\ud2b8\uc6e8\uc774\ub97c \ub3c4\uc785\ud560 \uc218 \uc788\uc744 \uac83\uc774\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc\uac00 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \ud615\ud0dc\ub85c \ub370\uc774\ud130\ub97c \ud1b5\ud569\ud574\uc11c \ub0b4\ub824\uc8fc\ub294 \uc5ed\ud560\uc774\ub2e4. \uac00\ub2a5\ud558\ub2e4\uba74 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \uac00\uc838\uc62c \uc218 \uc788\ub3c4\ub85d GraphQL\uc744 \ud65c\uc6a9\ud574\ubcf4\uba74 \uc88b\uaca0\ub2e4."}),"\n",(0,r.jsx)(i.p,{children:"\ub610\ud55c \ubaa8\ub4e0 \uc694\uccad\uc774 API \uac8c\uc774\ud2b8\uc6e8\uc774\ub97c \ud1b5\ud574 \ub4e4\uc5b4\uc628\ub2e4\uba74 \uc778\uc99d \ucc98\ub9ac\ub97c API \uac8c\uc774\ud2b8\uc6e8\uc774\uc5d0\uc11c\ub9cc \ud558\uace0 \ub0b4\ubd80 \uc11c\ube44\uc2a4\ub4e4\uc740 \uac80\uc99d\ub41c \uc544\uc774\ub374\ud2f0\ud2f0\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uac83 \uac19\ub2e4. \ubcf4\uc548\uc0c1 \uc88b\uc740 \uad6c\uc870\uc778\uc9c0\ub294 \ubaa8\ub974\uaca0\ub2e4."}),"\n",(0,r.jsx)(i.h3,{id:"\ubc30\ud3ec\uc640-\ud14c\uc2a4\ud2b8",children:"\ubc30\ud3ec\uc640 \ud14c\uc2a4\ud2b8"}),"\n",(0,r.jsx)(i.p,{children:"\uace0\ubbfc\ud560 \uac83\uc774 \ub9ce\ub2e4."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\uc11c\ube44\uc2a4\ub9c8\ub2e4 \ub2e4\ub978 \uc18c\uc2a4 \ucf54\ub4dc \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud560\uc9c0, \uc544\ub2c8\uba74 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \ud55c \uc800\uc7a5\uc18c\uc5d0\uc11c \uad00\ub9ac\ud560 \uac83\uc778\uc9c0"}),"\n",(0,r.jsx)(i.li,{children:"\uc11c\ube44\uc2a4 \uac04\uc5d0 \ucf54\ub4dc\ub97c \uacf5\uc720\ud560 \uac83\uc778\uc9c0 \ub9d0 \uac83\uc778\uc9c0"}),"\n",(0,r.jsx)(i.li,{children:"\uc0c8\ub85c\uc6b4 \uc11c\ube44\uc2a4\ub97c \uc27d\uac8c \ucd94\uac00\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uc9c0"}),"\n",(0,r.jsx)(i.li,{children:"\uac1c\ubc1c\ud560 \ub54c \uc5ec\ub7ec \uac1c\uc758 \uc11c\ube44\uc2a4\ub97c \uc27d\uac8c \ub744\uc6b0\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uc9c0"}),"\n",(0,r.jsx)(i.li,{children:"\uc5ec\ub7ec \uc11c\ube44\uc2a4\uc5d0 \uac78\uce5c \ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uad6c\uc131\ud560 \uac83\uc778\uc9c0"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"\ub9c8\uce58\uba70",children:"\ub9c8\uce58\uba70"}),"\n",(0,r.jsx)(i.p,{children:"\ud63c\uc790\uc11c \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98\ub97c \uad6c\uc131\ud558\uba74 \ub2f9\uc5f0\ud788 \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc640 \uac19\uc740 \uacbd\ud5d8\uc744 \uc5bb\uc9c0\ub294 \ubabb\ud560 \uac83\uc774\ub2e4. \ud2b9\ud788 \uc11c\ube44\uc2a4 \ubd84\ub9ac \ub2e8\uc704\uc5d0 \ub300\ud55c \ube44\uc988\ub2c8\uc2a4\uc801 \uc81c\uc57d\uc870\uac74\uc774 \uc5c6\uae30 \ub54c\ubb38\uc774\ub2e4. \uadf8\ub798\ub3c4 \uc55e\uc11c \ub098\uc5f4\ud55c \uac83\ucc98\ub7fc \uc11c\ube44\uc2a4\ub97c \ubd84\ub9ac\ud558\uba74 \uc0dd\uae38 \uae30\uc220\uc801\uc778 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uacbd\ud5d8\uc740 \ud574\ubcfc \uc218 \uc788\uc744\uac70\ub77c\uace0 \ubd24\ub2e4. MSA\uc5d0 \ub300\ud55c \ub9ce\uc740 \uc790\ub8cc\uac00 \uc788\uc9c0\ub9cc \uc9c1\uc811 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uc9c0 \uc54a\uc73c\uba74 \uc54c \uc218 \uc5c6\ub294 \ubd80\ubd84\uc5d0 \ubd80\ub52a\ud600\ubcf4\ub294 \uac83\uc774 \ubaa9\ud45c\ub2e4."}),"\n",(0,r.jsx)(i.p,{children:"\ub2e4\uc74c \uae00\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\uc5d0 \uc7a1\uc740 \uc124\uacc4\uc5d0 \ub300\ud574 \uc18c\uac1c\ud574 \ubcfc \uc608\uc815\uc774\ub2e4."})]})}function o(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var r=n(6540);const s={},t=r.createContext(s);function c(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);