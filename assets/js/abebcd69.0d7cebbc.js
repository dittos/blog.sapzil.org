"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[4645],{683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=s(4848),i=s(8453);const l={layout:"post",title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",tags:["graphql","relay","javascript","web"]},t=void 0,c={permalink:"/2015/05/15/graphql-and-relay",source:"@site/blog/2015-05-15-graphql-and-relay.md",title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",description:"Facebook\uc740 React.js Conf 2015\uc5d0\uc11c Relay\uc640 GraphQL\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uae30\uc220\uc744 \uacf5\uac1c\ud588\uc2b5\ub2c8\ub2e4. (\uac19\uc740 \ub0a0 \ubc1c\ud45c\ub41c React Native \ub54c\ubb38\uc5d0 \uc57d\uac04 \ubb3b\ud78c \uac83\ub3c4 \uac19\uc9c0\ub9cc...) \uc544\uc9c1 \uacf5\uac1c\ub41c \ucf54\ub4dc\ub294 \uc5c6\ub294\ub370, \uc62c\ud574 \uc548\uc5d0 \uc624\ud508\uc18c\uc2a4\ub85c \ub9b4\ub9ac\uc988 \uc608\uc815\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.",date:"2015-05-15T00:00:00.000Z",tags:[{inline:!0,label:"graphql",permalink:"/tags/graphql"},{inline:!0,label:"relay",permalink:"/tags/relay"},{inline:!0,label:"javascript",permalink:"/tags/javascript"},{inline:!0,label:"web",permalink:"/tags/web"}],readingTime:11.635,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",tags:["graphql","relay","javascript","web"]},unlisted:!1,prevItem:{title:"GraphQL \uc0b4\ud3b4\ubcf4\uae30",permalink:"/2015/09/01/graphql-rfc"},nextItem:{title:"\ud30c\uc774\uc36c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc30\ud3ec: \uace0\ub824\ud560 \uc810\ub4e4",permalink:"/2014/09/21/python-web-app-deploy"}},a={authorsImageUrls:[]},o=[{value:"N+1 \ucffc\ub9ac \ubb38\uc81c",id:"n1-\ucffc\ub9ac-\ubb38\uc81c",level:2},{value:"\ub2e8\uc77c \ud398\uc774\uc9c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",id:"\ub2e8\uc77c-\ud398\uc774\uc9c0-\uc560\ud50c\ub9ac\ucf00\uc774\uc158",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8\uc640 \ub370\uc774\ud130 \ud398\uce6d",id:"\ucef4\ud3ec\ub10c\ud2b8\uc640-\ub370\uc774\ud130-\ud398\uce6d",level:2},{value:"Relay",id:"relay",level:2},{value:"\ub354 \uc77d\uc5b4\ubcf4\uae30",id:"\ub354-\uc77d\uc5b4\ubcf4\uae30",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Facebook\uc740 React.js Conf 2015\uc5d0\uc11c ",(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html",children:"Relay\uc640 GraphQL"}),"\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uae30\uc220\uc744 \uacf5\uac1c\ud588\uc2b5\ub2c8\ub2e4. (\uac19\uc740 \ub0a0 \ubc1c\ud45c\ub41c React Native \ub54c\ubb38\uc5d0 \uc57d\uac04 \ubb3b\ud78c \uac83\ub3c4 \uac19\uc9c0\ub9cc...) \uc544\uc9c1 \uacf5\uac1c\ub41c \ucf54\ub4dc\ub294 \uc5c6\ub294\ub370, \uc62c\ud574 \uc548\uc5d0 \uc624\ud508\uc18c\uc2a4\ub85c \ub9b4\ub9ac\uc988 \uc608\uc815\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uac1c\uc778\uc801\uc73c\ub85c\ub294 \ucd5c\uadfc \uba87\ub144 \ub3d9\uc548 \uace0\ubbfc\ud558\ub358 \ubb38\uc81c\ub97c \uc81c\ub300\ub85c \ub41c \ubc29\ubc95\uc73c\ub85c \ud574\uacb0\ud574\uc904 \uac83\uc73c\ub85c \ubcf4\uc5ec\uc11c \uad49\uc7a5\ud788 \ud070 \uae30\ub300\ub97c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c \uc81c\uac00 \uc65c \uc774\ub807\uac8c \ud765\ubd84(...)\ud558\uace0 \uc788\ub294\uc9c0 \uc124\uba85\ud574\ubcf4\ub824 \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"n1-\ucffc\ub9ac-\ubb38\uc81c",children:"N+1 \ucffc\ub9ac \ubb38\uc81c"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://secure.phabricator.com/book/phabcontrib/article/n_plus_one/",children:"N+1 \ucffc\ub9ac \ubb38\uc81c"}),"\ub294 ORM\uc744 \uc0ac\uc6a9\ud574\uc11c DB\uc5d0 \uc811\uadfc\ud560 \ub54c \uc790\uc8fc \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uaf64 \uc798 \uc54c\ub824\uc9c4 \ubb38\uc81c\uc774\uae34 \ud558\uc9c0\ub9cc \uac04\ub2e8\ud788 \uc608\ub97c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uac8c\uc2dc\ud310\uc758 \uae00 \ubaa9\ub85d\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uc774\ub984\uc744 \ud45c\uc2dc\ud574\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. \uac00\uc7a5 \uac04\ub2e8\ud558\uac8c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4. (Django\ub85c \uc608\ub97c \ub4e4\uc5c8\uc9c0\ub9cc, \ub2e4\ub978 \uc2a4\ud0dd\uc5d0\uc11c\ub3c4 \ube44\uc2b7\ud558\uaca0\uc8e0.)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# views.py\ndef list_post(request):\n  posts = Post.objects.order_by('-id')\n  return render_template('list.html', posts=posts)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-django",children:"{% raw %}\n{# list.html #}\n{% for post in posts %}\n  {{ post.title }} by {{ post.user.name }}\n{% endfor %}\n{% endraw %}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774 \uacbd\uc6b0, \ub8e8\ud504 \uc548\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"post.user"}),"\ub97c \uac00\uc838\uc624\ub294 \ucffc\ub9ac\ub97c \ub2e4\uc2dc \ub0a0\ub9ac\uac8c \ub418\ubbc0\ub85c \uae00\uc758 \uac2f\uc218\ub9cc\ud07c \ucffc\ub9ac\uac00 \ub354 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,r.jsx)(n.strong,{children:"N+1 \ucffc\ub9ac"})," \ubb38\uc81c\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \uae00 \ubaa9\ub85d\uc744 \uac00\uc838\uc62c \ub54c \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub3c4 \ud568\uaed8 \uac00\uc838\uc624\ub3c4\ub85d \ud569\ub2c8\ub2e4. (JOIN\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uaca0\uc8e0.)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# views.py\ndef list_post(request):\n  posts = Post.objects.order_by('-id') \\\n    .select_related('user') # \ucd94\uac00!\n  return render_template('list.html', posts=posts)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc81c \ud55c\ubc88\uc758 \ucffc\ub9ac\ub9cc\uc73c\ub85c \uae00 \ubaa9\ub85d\uacfc \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc788\uac8c \ub418\uc5c8\ub124\uc694! \uadf8\ub7f0\ub370 \uc798 \uc0dd\uac01\ud574\ubcf4\uba74 \ubbf8\ubb18\ud55c \ubb38\uc81c\uc810\uc774 \uba87 \uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4\uac00 \ud544\uc694\ud558\ub2e4\ub294 \uc0ac\uc2e4\uc740 ",(0,r.jsx)(n.code,{children:"list.html"})," \ud15c\ud50c\ub9bf\uc774 \uc54c\uace0 \uc788\ub294\ub370, \uc2e4\uc81c\ub85c \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ubbf8\ub9ac \uac00\uc838\uc624\ub294 \ucf54\ub4dc\ub294 ",(0,r.jsx)(n.code,{children:"views.py"}),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uad00\uc2ec\uc0ac\uc758 \ubd84\ub9ac(separation of concerns)\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\ud15c\ud50c\ub9bf\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc758 \uc774\ub984\ub9cc \ud544\uc694\ud55c\ub370, \ucffc\ub9ac\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc758 \ubaa8\ub4e0 \ud544\ub4dc\ub97c \uac00\uc838\uc624\uac8c \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\ub9cc\uc57d ",(0,r.jsx)(n.code,{children:"views.py"}),"\ub97c \uc0ac\uc6a9\uc790\uc758 \uc774\ub984 \ud544\ub4dc\ub9cc \uac00\uc838\uc624\ub3c4\ub85d \uace0\uce5c\ub2e4\uba74, ",(0,r.jsx)(n.code,{children:"list.html"}),"\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \ub2e4\ub978 \ud544\ub4dc\uac00 \ud544\uc694\ud574\uc84c\uc744 \ub54c ",(0,r.jsx)(n.code,{children:"views.py"}),"\ub3c4 \uc218\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc989 ",(0,r.jsx)(n.code,{children:"views.py"}),"\uc640 ",(0,r.jsx)(n.code,{children:"list.html"})," \uc0ac\uc774\uc5d0 \ubcf4\uc774\uc9c0 \uc54a\ub294 \uc758\uc874\uc131\uc774 \uc0dd\uae30\uac8c \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc0ac\uc2e4 \ubcf4\ud1b5 DB \uc11c\ubc84\ub294 \uc6f9 \uc11c\ubc84\uc640 \ub9e4\uc6b0 \uac00\uae4c\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 N+1 \ucffc\ub9ac \ubb38\uc81c\ub85c \uc778\ud55c \uc624\ubc84\ud5e4\ub4dc\uac00 \uc5c4\uccad\ub098\uac8c \ud06c\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc55e\uc11c \uc81c\uae30\ud55c \ubb38\uc81c\ub294 \uc0ac\uc18c\ud55c \uac83\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ub2e8\uc77c-\ud398\uc774\uc9c0-\uc560\ud50c\ub9ac\ucf00\uc774\uc158",children:"\ub2e8\uc77c \ud398\uc774\uc9c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"}),"\n",(0,r.jsx)(n.p,{children:"\uc9c0\uae08\uc740 2015\ub144\uc774\uc8e0! \uc11c\ubc84\uc5d0\uc11c HTML\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc740 \ub108\ubb34 \uad6c\ub2e5\ub2e4\ub9ac \uac19\uad70\uc694. (\ub11d\ub2f4~ \u314e\u314e) \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c API \uc11c\ubc84\uc640 \ud1b5\uc2e0\ud574\uc11c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uadf8\ub824\ubd05\uc2dc\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc81c \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud655\uc2e4\ud558\uac8c \ubd84\ub9ac\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ud15c\ud50c\ub9bf\uc5d0\uc11c \ub370\uc774\ud130\uac00 \ud544\uc694\ud574\uc84c\uc744\ub54c lazy\ud558\uac8c \uac00\uc838\uc624\ub294 \ubc29\uc2dd\uc740 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc911\uac04\uc5d0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \ub2e4\uc2dc API \uc11c\ubc84\uc5d0\uc11c \uac00\uc838\uc624\ub294 \uac83\uc740 \ub108\ubb34 \ubd80\ub2f4\uc774 \ud07d\ub2c8\ub2e4. \uc989 N+1 \ucffc\ub9ac \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uba74 \uc548\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud55c\ubc88\uc758 API \uc694\uccad\uc73c\ub85c \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \ubaa8\ub450 \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\ubcf4\ud1b5\uc758 REST API\ub77c\uba74 \uc774\ub7f0 \uacbd\uc6b0\uc5d0 \uae00 \ubaa9\ub85d\uc5d0 \ubb34\uc870\uac74 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ubd99\uc5ec\uc11c \ud574\uacb0\ud558\uac8c \ub429\ub2c8\ub2e4. \uc880 \ub354 \uc138\ubc00\ud55c \uc870\uc815\uc774 \ud544\uc694\ud558\ub2e4\uba74 ",(0,r.jsx)(n.code,{children:"?include_user=true"}),"\uc640 \uac19\uc740 \ud30c\ub77c\ubbf8\ud130\ub85c \ucf1c\uace0 \ub04c \uc218 \uc788\uac8c \ud558\uac70\ub098, \uc0ac\uc6a9\uc790 \uc815\ubcf4\uc5d0\uc11c \uc77c\ubd80 \ud544\uc694\ud55c \ud544\ub4dc\ub9cc \ub4e4\uc5b4\uc788\ub294 \ud615\ud0dc\uc640 \uc804\uccb4 \ud544\ub4dc\uac00 \ub4e4\uc5b4\uc788\ub294 \ud615\ud0dc\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uac8c \ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc544\ub2c8\uba74 \uae00 \ubaa9\ub85d '\ubdf0'\ub97c \uc704\ud55c \ubcc4\ub3c4\uc758 API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uaca0\uc8e0."]}),"\n",(0,r.jsx)(n.p,{children:"\ubb38\uc81c\ub294 \uc774\ub7ec\ud55c \uc694\uad6c\uc0ac\ud56d\uc774 \uaf64 \uc790\uc8fc \ubc1c\uc0dd\ud568\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uadf8\ub54c\uadf8\ub54c ad hoc\ud558\uac8c \uc801\ub2f9\ud788 \ud574\uacb0\ub9cc \ud558\uace0 \ub118\uc5b4\uac00\uac8c \ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc8fc\uc758\ub97c \uae30\uc6b8\uc774\uc9c0 \uc54a\uc73c\uba74 \uae08\ubc29 \uc77c\uad00\uc131 \uc5c6\ub294 API\uac00 \ub418\uc5b4\ubc84\ub9bd\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc8fc\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uad6c\ud604\ud558\ub2e4\uac00 \uc11c\ubc84\uc5d0\uc11c \ub0b4\ub824\uc8fc\ub294 \ub370\uc774\ud130\uc5d0 \ube60\uc9c4 \uac8c \uc788\ub2e4\ub294 \uac83\uc744 \uc54c\uac8c \ub418\uc8e0. \ub9cc\uc57d \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84\ub97c \uad6c\ud604\ud558\ub294 \ud300\uc774 \ub2e4\ub974\ub2e4\uba74 \uace0\uc2a4\ub780\ud788 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ube44\uc6a9 \uc99d\uac00\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub9cc\uc57d SQL \ucffc\ub9ac\ucc98\ub7fc \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc11c\ubc84\uc758 \ub370\uc774\ud130 \ud615\uc2dd\uc744 \uacb0\uc815\ud560 \uc218 \uc788\ub294 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc774 \uc788\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694?"}),"\n",(0,r.jsx)(n.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc5d0\uc11c \uc81c\uae30\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc8fc\ub294 \uac83\uc774 ",(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html",children:"GraphQL"}),"\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc740 GraphQL \ucffc\ub9ac\uc758 \uc608\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"{\n  user(id: 3500401) {\n    id,\n    name,\n    isViewerFriend,\n    profilePicture(size: 50)  {\n      uri,\n      width,\n      height\n    }\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc704\uc640 \uac19\uc740 \ucffc\ub9ac\ub294 \ub2e4\uc74c\uc758 JSON \uc751\ub2f5 \ud615\uc2dd\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "user" : {\n    "id": 3500401,\n    "name": "Jing Chen",\n    "isViewerFriend": true,\n    "profilePicture": {\n      "uri": "http://someurl.cdn/pic.jpg",\n      "width": 50,\n      "height": 50\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\uc544\uc9c1 \uc790\uc138\ud788 \uacf5\uac1c\ub41c \ubc14\ub294 \uc5c6\uc9c0\ub9cc, \uc11c\ubc84\uc5d0\uc11c GraphQL \ud0c0\uc785 \uc2dc\uc2a4\ud15c\uc5d0 \ub530\ub77c \uc2a4\ud0a4\ub9c8\ub97c \uc815\uc758\ud558\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc6d0\ud558\ub294 \ud615\uc2dd\ub300\ub85c \ucffc\ub9ac\uac00 \uac00\ub2a5\ud558\ub2e4\uace0 \ud569\ub2c8\ub2e4. \ub610\ud55c GraphQL\uc740 Facebook\uc758 \ubaa8\ubc14\uc77c \uc571\uc774 HTML5 \uae30\ubc18\uc5d0\uc11c \ub124\uc774\ud2f0\ube0c\ub85c \uc62e\uaca8\uac08 \ub54c \ucbe4\ubd80\ud130 \uc0ac\uc6a9\ub418\uc5c8\ub2e4\uace0 \ud558\ub2c8 Facebook \uc815\ub3c4\ub85c \ucda9\ubd84\ud788 \ubcf5\uc7a1\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub3c4 \uc798 \ud45c\ud604\ud560 \uc218 \uc788\uc744 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\uba70, \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc678\uc758 \uc601\uc5ed\uc5d0\uc11c\ub3c4 \uc4f8\ubaa8\uac00 \uc788\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ucef4\ud3ec\ub10c\ud2b8\uc640-\ub370\uc774\ud130-\ud398\uce6d",children:"\ucef4\ud3ec\ub10c\ud2b8\uc640 \ub370\uc774\ud130 \ud398\uce6d"}),"\n",(0,r.jsx)(n.p,{children:"\uc544\uae4c \uae00 \ubaa9\ub85d \uc608\uc81c\uc5d0\uc11c \ub098\uc654\ub358 \ud15c\ud50c\ub9bf\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uace0 \uad00\ub9ac\ud558\uae30 \ud3b8\ud558\ub3c4\ub85d \uc5ec\ub7ec \uac1c\uc758 '\ucef4\ud3ec\ub10c\ud2b8'\ub85c \ubd84\ub9ac\ud55c\ub2e4\uace0 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc740 \uacc4\uce35 \uad6c\uc870\ub97c \ub9cc\ub4e4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["PostList","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["PostItem","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UserInfo"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["PostItem","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UserInfo"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"UserInfo"}),"\ub294 \uc791\uc131\uc790\uc758 \uc774\ub984\uc744, ",(0,r.jsx)(n.code,{children:"PostItem"}),"\uc5d0\uc11c\ub294 \uae00 \uc81c\ubaa9\uc744 \ubcf4\uc5ec\uc900\ub2e4\uace0 \ud569\uc2dc\ub2e4. \uc774\ub54c ",(0,r.jsx)(n.code,{children:"PostItem"}),"\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\uc5d0 \uc791\uc131\uc790 \uc774\ub984\uc744 \ub118\uaca8\uc918\uc57c \ud558\ubbc0\ub85c ",(0,r.jsx)(n.code,{children:"PostList"}),"\uc5d0\uc11c \uae00 \ubaa9\ub85d\uc744 \uac00\uc838\uc62c \ub54c \uc791\uc131\uc790\uc758 \uc774\ub984\ub3c4 \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\ub9cc\uc57d ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\uc5d0\uc11c \uc791\uc131\uc790\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4\ub3c4 \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694? \uc2e4\uc81c\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf54\ub4dc\ub294 ",(0,r.jsx)(n.code,{children:"PostList"}),"\uc5d0 \uc788\uc73c\ubbc0\ub85c, ",(0,r.jsx)(n.code,{children:"PostList"}),"\uc5d0\uc11c \uc791\uc131\uc790\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uac00\uc838\uc624\ub3c4\ub85d \uc218\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,r.jsx)(n.code,{children:"PostList"}),"\ub294 ",(0,r.jsx)(n.code,{children:"PostItem"}),"\ub9cc\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \ucc38\uc870\ud558\uace0 \uc788\uc73c\ubbc0\ub85c ",(0,r.jsx)(n.code,{children:"PostList"}),"\uc640 ",(0,r.jsx)(n.code,{children:"UserInfo"})," \uc0ac\uc774\uc5d0\ub294 \ubcf4\uc774\uc9c0 \uc54a\ub294 \uc758\uc874 \uad00\uacc4\uac00 \uc0dd\uae30\uac8c \ub429\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\ub97c \ud3ec\ud568\ud55c \ucef4\ud3ec\ub10c\ud2b8\uac00 ",(0,r.jsx)(n.code,{children:"PostList"})," \ubfd0\uc774\ub77c\uba74 \uad1c\ucc2e\uc744\uc9c0\ub3c4 \ubaa8\ub974\uc9c0\ub9cc \ub354 \ub9ce\uc740 \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub418\uace0 \uc788\ub2e4\uba74 \ubaa8\ub4e0 \uc0ac\uc6a9\ucc98\ub97c \ucc3e\uc544\uc11c \uc218\uc815\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \ud798\ub4e0 \uc77c\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h2,{id:"relay",children:"Relay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html",children:"Relay"}),"\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc704\ud55c \ub370\uc774\ud130 \uad00\ub9ac \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4. Relay\uc758 \uc911\uc694\ud55c \ud2b9\uc9d5\uc740 \uac01 \ucef4\ud3ec\ub10c\ud2b8",(0,r.jsx)(n.strong,{children:"\ub9c8\ub2e4"})," \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uc120\uc5b8\ud558\uace0, \ucef4\ud3ec\ub10c\ud2b8\uc758 \uacc4\uce35 \uad6c\uc870\ub97c \ub530\ub77c\uc11c \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\ub85c ",(0,r.jsx)(n.strong,{children:"\uc804\ub2ec"})," \ubc0f \uc870\ud569\ud558\uc5ec \ub2e8\uc77c GraphQL \ucffc\ub9ac\ub85c \ub9cc\ub4e4\uc5b4 \uc900\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. (\uadf8\ub798\uc11c \uc774\ub984\uc774 Relay\uc778 \uac83\uc774\uc8e0!)"]}),"\n",(0,r.jsxs)(n.p,{children:["\ubc29\uae08 \uc804\uc5d0 \uc0b4\ud3b4\ubcf4\uc558\ub358 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \ubcf4\uc774\uc9c0 \uc54a\ub294 \uc758\uc874\uc131 \ubb38\uc81c\ub3c4 Relay\uc758 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\ub294 \uc0ac\uc6a9\uc790\uc758 \uc774\ub984\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"PostItem"}),"\uc740 ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\uc5d0\uc11c \ud544\uc694\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\uc640 \uae00\uc758 \uc81c\ubaa9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"PostList"}),"\ub294 ",(0,r.jsx)(n.code,{children:"PostItem"}),"\uc5d0\uc11c \ud544\uc694\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uba74 \ub429\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"UserInfo"}),"\uc5d0\uc11c \ud504\ub85c\ud544 \uc0ac\uc9c4\uc774 \ud544\uc694\ud574\uc9c4\ub2e4\uba74 ",(0,r.jsx)(n.code,{children:"UserInfo"})," \ucef4\ud3ec\ub10c\ud2b8\ub9cc \uc218\uc815\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\ubfd0\ub9cc \uc544\ub2c8\ub77c \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud560 \ub54c \uc11c\ubc84\uc758 \uc751\ub2f5\uc774 \uc624\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc218\uc815\uc0ac\ud56d\uc744 \ubc18\uc601\ud574\uc8fc\ub294 \uae30\ub2a5(optimistic update), \ub370\uc774\ud130\uc758 \uc77c\ubd80\ubd84\ub9cc \uce90\uc2dc\uc5d0\uc11c \ubbf8\ub9ac \uac00\uc838\uc62c \uc218 \uc788\ub294 \uae30\ub2a5 \ub4f1\ub3c4 \uc81c\uacf5\ud560 \uac83\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \uad6c\ud604\uc774 \uc5b4\ub5bb\uac8c \ub420\uc9c0\ub294 \uc54c \uc218 \uc5c6\uc9c0\ub9cc \uc790\uc5f0\uc2a4\ub7fd\uac8c \uac00\ub2a5\ud558\ub2e4\uba74 \uc815\ub9d0 \ud3b8\ub9ac\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://itunes.apple.com/kr/app/facebook-groups/id931735837?mt=8",children:"Facebook Groups"})," iOS \uc571\uc5d0\uc11c Relay\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uace0 \ud569\ub2c8\ub2e4. (React Native \uc571\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4)"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"https://reactjs.org/static/relay-architecture-1c7e934642028c84d5af545a945394ef-de0cd.png",alt:"Relay Architecture"}),(0,r.jsxs)("figcaption",{children:["Relay \uc544\ud0a4\ud14d\uccd0 ",(0,r.jsx)("a",{href:"https://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html#the-relay-architecture",children:"(\ucd9c\ucc98)"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\ub354-\uc77d\uc5b4\ubcf4\uae30",children:"\ub354 \uc77d\uc5b4\ubcf4\uae30"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html",children:"React Blog - Introducing Relay and GraphQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html",children:"React Blog - Building The Facebook News Feed With Relay"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html",children:"React Blog - GraphQL Introduction"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://youtu.be/X6YbAKiLCLU?t=10m46s",children:"F8 2015 - React Native & Relay: Bringing Modern Web Techniques to Mobile"})," (\ub3d9\uc601\uc0c1 / 10:46~)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://gist.github.com/wincent/598fa75e22bdfa44cf47",children:"Unofficial Relay FAQ"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://hueypetersen.com/posts/2015/02/02/first-thoughts-on-graph-ql/",children:"First Thoughts on GraphQL"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);