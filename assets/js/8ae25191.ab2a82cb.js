"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[5079],{8281:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(4848),t=n(8453);const s={layout:"post",title:"Windows 10 Home\uc5d0 Docker Desktop \uc124\uce58\ud558\uae30",tags:["docker","windows"]},i=void 0,c={permalink:"/2019/06/09/docker-desktop-for-windows-home",source:"@site/blog/2019-06-09-docker-desktop-for-windows-home.md",title:"Windows 10 Home\uc5d0 Docker Desktop \uc124\uce58\ud558\uae30",description:"Docker Desktop for Windows\ub97c \uc124\uce58\ud558\ub824\uba74 Hyper-V\ub97c \uc9c0\uc6d0\ud558\ub294 OS\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. Home\uc740 \uc5ec\uae30\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c, VirtualBox \uae30\ubc18\uc758 \ub808\uac70\uc2dc Docker Toolbox\ub97c \uc0ac\uc6a9\ud558\ub77c\uace0 \uce5c\uc808\ud558\uac8c \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc800\ub294 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc4f0\uace0 \uc2f6\uc5c8\uae30\uc5d0 \ubc29\ubc95\uc774 \uc5c6\uc744\uae4c \ucc3e\uc544\ubcf4\ub358 \uc911 Docker \ud3ec\ub7fc\uc758 \ud55c \uae00\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\ud574\ubcf4\ub2c8\uae4c \uc798 \ub418\uc5b4\uc11c \uc815\ub9ac\ud574 \ub461\ub2c8\ub2e4. (\uc5b4\uca4c\uba74 \uc708\ub3c4\uc6b0 \ub77c\uc774\uc13c\uc2a4 \uc704\ubc18\uc77c \uc218\ub3c4 \uc788\uc9c0\ub9cc...)",date:"2019-06-09T00:00:00.000Z",tags:[{inline:!0,label:"docker",permalink:"/tags/docker"},{inline:!0,label:"windows",permalink:"/tags/windows"}],readingTime:2.085,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Windows 10 Home\uc5d0 Docker Desktop \uc124\uce58\ud558\uae30",tags:["docker","windows"]},unlisted:!1,prevItem:{title:"\ub098\ub3c4 MSA \ud55c\ubc88 \ud574\ubcf4\uc790 (1)",permalink:"/2019/12/29/microservices-1"},nextItem:{title:"Kotlin\uc5d0\uc11c JPA \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud560 \uc810 (2) - Embeddable, IdClass",permalink:"/2018/08/26/kotlin-jpa-pitfalls-embeddable"}},d={authorsImageUrls:[]},l=[{value:"1\ub2e8\uacc4: Hyper-V \uc124\uce58",id:"1\ub2e8\uacc4-hyper-v-\uc124\uce58",level:2},{value:"2\ub2e8\uacc4: Docker \uc778\uc2a4\ud1a8\ub7ec\uc758 \uc708\ub3c4\uc6b0 \uc5d0\ub514\uc158 \uccb4\ud06c \uc6b0\ud68c",id:"2\ub2e8\uacc4-docker-\uc778\uc2a4\ud1a8\ub7ec\uc758-\uc708\ub3c4\uc6b0-\uc5d0\ub514\uc158-\uccb4\ud06c-\uc6b0\ud68c",level:2},{value:"3\ub2e8\uacc4: \uc124\uce58\uac00 \uc798 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778",id:"3\ub2e8\uacc4-\uc124\uce58\uac00-\uc798-\ub418\uc5c8\ub294\uc9c0-\ud655\uc778",level:2}];function a(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://docs.docker.com/docker-for-windows/install/",children:"Docker Desktop for Windows"}),"\ub97c \uc124\uce58\ud558\ub824\uba74 Hyper-V\ub97c \uc9c0\uc6d0\ud558\ub294 OS\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. Home\uc740 \uc5ec\uae30\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c, VirtualBox \uae30\ubc18\uc758 \ub808\uac70\uc2dc ",(0,r.jsx)(o.a,{href:"https://docs.docker.com/toolbox/overview/",children:"Docker Toolbox"}),"\ub97c \uc0ac\uc6a9\ud558\ub77c\uace0 \uce5c\uc808\ud558\uac8c \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc800\ub294 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc4f0\uace0 \uc2f6\uc5c8\uae30\uc5d0 \ubc29\ubc95\uc774 \uc5c6\uc744\uae4c \ucc3e\uc544\ubcf4\ub358 \uc911 ",(0,r.jsx)(o.a,{href:"https://forums.docker.com/t/installing-docker-on-windows-10-home/11722/25",children:"Docker \ud3ec\ub7fc\uc758 \ud55c \uae00"}),"\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\ud574\ubcf4\ub2c8\uae4c \uc798 \ub418\uc5b4\uc11c \uc815\ub9ac\ud574 \ub461\ub2c8\ub2e4. (\uc5b4\uca4c\uba74 \uc708\ub3c4\uc6b0 \ub77c\uc774\uc13c\uc2a4 \uc704\ubc18\uc77c \uc218\ub3c4 \uc788\uc9c0\ub9cc...)"]}),"\n",(0,r.jsx)(o.h2,{id:"1\ub2e8\uacc4-hyper-v-\uc124\uce58",children:"1\ub2e8\uacc4: Hyper-V \uc124\uce58"}),"\n",(0,r.jsxs)(o.p,{children:["\ub2e4\uc74c \uc2a4\ud06c\ub9bd\ud2b8\ub97c ",(0,r.jsx)(o.code,{children:".bat"})," \ud655\uc7a5\uc790\uc758 \ud30c\uc77c\ub85c \uc800\uc7a5\ud55c \ub2e4\uc74c \uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bat",children:'pushd "%~dp0"\ndir /b %SystemRoot%\\servicing\\Packages\\*Hyper-V*.mum >hyper-v.txt\nfor /f %%i in (\'findstr /i . hyper-v.txt 2^>nul\') do dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"\ndel hyper-v.txt\nDism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL\npause\n'})}),"\n",(0,r.jsx)(o.p,{children:"\uc57d\uac04\uc758 \uc2dc\uac04\uc774 \uc9c0\ub098\uba74 \uc124\uce58\uac00 \uc644\ub8cc\ub418\uace0 \uc7ac\ubd80\ud305 \ud558\ub77c\uace0 \ub098\uc635\ub2c8\ub2e4. \uc7ac\ubd80\ud305\uc744 \ud569\uc2dc\ub2e4."}),"\n",(0,r.jsx)(o.h2,{id:"2\ub2e8\uacc4-docker-\uc778\uc2a4\ud1a8\ub7ec\uc758-\uc708\ub3c4\uc6b0-\uc5d0\ub514\uc158-\uccb4\ud06c-\uc6b0\ud68c",children:"2\ub2e8\uacc4: Docker \uc778\uc2a4\ud1a8\ub7ec\uc758 \uc708\ub3c4\uc6b0 \uc5d0\ub514\uc158 \uccb4\ud06c \uc6b0\ud68c"}),"\n",(0,r.jsx)(o.p,{children:"Hyper-V\ub97c \ucf1c\ub3c4 Docker \uc778\uc2a4\ud1a8\ub7ec\uac00 \uc9c0\uc6d0\ud558\ub294 \uc708\ub3c4\uc6b0 \ubc84\uc804\uc778\uc9c0 \ud655\uc778\ud558\uae30 \ub54c\ubb38\uc5d0 \uc6b0\ud68c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(o.p,{children:["\ub808\uc9c0\uc2a4\ud2b8\ub9ac \ud3b8\uc9d1\uae30(",(0,r.jsx)(o.code,{children:"regedit"}),")\uc744 \ucf1c\uace0 ",(0,r.jsx)(o.code,{children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion"}),"\uc5d0 \uac00\uc11c ",(0,r.jsx)(o.code,{children:"EditionID"}),"\uc744 ",(0,r.jsx)(o.code,{children:"Professional"}),"\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(o.p,{children:["\uc774\uc81c \uc778\uc2a4\ud1a8\ub7ec\ub97c \uc2e4\ud589\ud558\uba74 \uc124\uce58\uac00 \uc798 \ub420 \uac83\uc785\ub2c8\ub2e4. ",(0,r.jsx)(o.strong,{children:"\uc124\uce58\uac00 \ub05d\ub09c \ub2e4\uc74c \ud574\ub2f9 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uac12\uc744 \uc6d0\ub798\ub300\ub85c \ub3cc\ub824\ub193\uc73c\uc138\uc694!"})]}),"\n",(0,r.jsx)(o.h2,{id:"3\ub2e8\uacc4-\uc124\uce58\uac00-\uc798-\ub418\uc5c8\ub294\uc9c0-\ud655\uc778",children:"3\ub2e8\uacc4: \uc124\uce58\uac00 \uc798 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778"}),"\n",(0,r.jsx)(o.p,{children:"Docker Desktop\uc744 \uc2e4\ud589\ud558\uace0, \uba85\ub839 \ud504\ub86c\ud504\ud2b8\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc785\ub825\ud574\uc11c \uc798 \ub418\ub294\uc9c0 \ud655\uc778\ud574 \ubd05\ub2c8\ub2e4."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"docker run hello-world\n"})})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var r=n(6540);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);