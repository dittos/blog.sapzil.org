"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[2867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),h=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=h(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||p;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var h=2;h<p;h++)l[h]=a[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const p={layout:"post",title:"GraphQL \uc0b4\ud3b4\ubcf4\uae30",tags:["graphql"]},l=void 0,i={permalink:"/2015/09/01/graphql-rfc",source:"@site/blog/2015-09-01-graphql-rfc.md",title:"GraphQL \uc0b4\ud3b4\ubcf4\uae30",description:"Status Quo",date:"2015-09-01T00:00:00.000Z",formattedDate:"2015\ub144 9\uc6d4 1\uc77c",tags:[{label:"graphql",permalink:"/tags/graphql"}],readingTime:13.405,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"GraphQL \uc0b4\ud3b4\ubcf4\uae30",tags:["graphql"]},prevItem:{title:"Thinking in GraphQL (\ubc88\uc5ed)",permalink:"/2015/10/07/thinking-in-graphql"},nextItem:{title:"GraphQL\uacfc Relay: \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc758 \ubbf8\ub798",permalink:"/2015/05/15/graphql-and-relay"}},o={authorsImageUrls:[]},h=[{value:"Status Quo",id:"status-quo",level:2},{value:"GraphQL\uc774\ub780?",id:"graphql\uc774\ub780",level:2},{value:"\uc2e4\ub809\uc158 \uc138\ud2b8(selection set)",id:"\uc2e4\ub809\uc158-\uc138\ud2b8selection-set",level:3},{value:"\uc778\uc790(argument)",id:"\uc778\uc790argument",level:3},{value:"\uc2e4\ub809\uc158 \uc138\ud2b8\uc758 \uc911\ucca9",id:"\uc2e4\ub809\uc158-\uc138\ud2b8\uc758-\uc911\ucca9",level:3},{value:"\uc65c \ubaa8\ub4e0 \ud544\ub4dc\ub97c \ubc18\ub4dc\uc2dc \uba85\uc2dc\ud574\uc57c \ud560\uae4c?",id:"\uc65c-\ubaa8\ub4e0-\ud544\ub4dc\ub97c-\ubc18\ub4dc\uc2dc-\uba85\uc2dc\ud574\uc57c-\ud560\uae4c",level:3},{value:"\ucffc\ub9ac \ub8e8\ud2b8(query root)",id:"\ucffc\ub9ac-\ub8e8\ud2b8query-root",level:3},{value:"\ud504\ub798\uadf8\uba3c\ud2b8(fragment)",id:"\ud504\ub798\uadf8\uba3c\ud2b8fragment",level:3},{value:"\ubba4\ud14c\uc774\uc158(mutation)",id:"\ubba4\ud14c\uc774\uc158mutation",level:3},{value:"Relay\uc758 GraphQL \ud655\uc7a5",id:"relay\uc758-graphql-\ud655\uc7a5",level:2},{value:"\ucee4\ub125\uc158(connection)",id:"\ucee4\ub125\uc158connection",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2}],u={toc:h};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status-quo"},"Status Quo"),(0,r.kt)("p",null,"\uc774\uc804\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"http://dittos.github.io/2015/05/15/graphql-and-relay/"},"GraphQL\uacfc Relay"),"\uc5d0 \ub300\ud574 \uae00\uc744 \uc37c\uc2b5\ub2c8\ub2e4. \uadf8\ub54c\ub294 GraphQL\uacfc Relay\uc758 \uc2e4\uccb4\uac00 \uc5c6\uc5c8\ub294\ub370 2015\ub144 7\uc6d4\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=WQLzZf34FJ8"},"ReactEurope \ucee8\ud37c\ub7f0\uc2a4\uc5d0\uc11c GraphQL RFC\uac00 \uacf5\uac1c"),"\ub418\uc5c8\uace0 8\uc6d4\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/react/blog/2015/08/11/relay-technical-preview.html"},"Relay Technical Preview\uac00 \uacf5\uac1c"),"\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\ub098 \uc774 \uae30\uc220\ub4e4\uc774 \uacf5\uac1c\ub41c \uc9c0 2\ub2ec\ub3c4 \ucc44 \uc9c0\ub098\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0, \uc544\uc9c1 \uc9c4\uc9c0\ud558\uac8c \uc4f0\uae30\uc5d0\ub294 \uc0dd\ud0dc\uacc4\uac00 \uc804\ubc18\uc801\uc73c\ub85c \ubbf8\uc219\ud55c \uc0c1\ud669\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud604\uc7ac \uc131\uc219\ud55c GraphQL \uad6c\ud604\uc774 \ub808\ud37c\ub7f0\uc2a4 \uad6c\ud604\uc778 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js"},"graphql-js")," \ubfd0\uc774\uc5b4\uc11c \ub2f9\uc7a5 GraphQL\uc744 \uc9c0\uc6d0\ud558\ub294 \uc11c\ubc84\ub97c \uc791\uc131\ud558\uae30\uac00 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c GraphQL\uc758 \ud30c\uc774\uc36c \uad6c\ud604\uc778 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dittos/graphqllib"},"graphqllib"),"\ub97c \ub9cc\ub4e4\uace0 \uc788\uc9c0\ub9cc \uc9c4\ub3c4\uac00 \ub354\ub518 \ud3b8\uc785\ub2c8\ub2e4. \ucc98\uc74c\uc5d0 graphql-js\ub97c \ud3ec\ud305\ud558\uba70 \uc2dc\uc791\ud588\ub294\ub370, graphql-js\uc758 API\uac00 \uc790\uc8fc \ubc14\ub00c\uc5b4 \ub530\ub77c\uac00\uc9c0 \ubabb\ud558\ub294 \uc0c1\ud669\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c \uc6f9\uc774 \uc544\ub2cc \ud658\uacbd\uc744 \uc704\ud55c GraphQL \ud074\ub77c\uc774\uc5b8\ud2b8 \uad6c\ud604\uc774 \uc544\uc9c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc544\uc11c, \uadf8 \ucabd\ub3c4 \uc5f0\uad6c\uac00 \ud544\uc694\ud574 \ubcf4\uc785\ub2c8\ub2e4. \ud398\uc774\uc2a4\ubd81\uc5d0\uc11c \uc880 \ub354 \uc5ec\ub7ec\uac00\uc9c0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uacf5\uac1c\ud574\uc8fc\uba74 \ud574\uacb0\ub418\ub9ac\ub77c \uc0dd\uac01\ud569\ub2c8\ub2e4. (\uc5bc\ub9c8 \uc804\uc5d0 C++ \ud30c\uc11c \uad6c\ud604\uc778 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql/libgraphqlparser"},"libgraphqlparser"),"\ub3c4 \uacf5\uac1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.)"),(0,r.kt)("p",null,"\uc5b4\uca0c\ub4e0 \uc774\uc81c \uc2e4\uc81c \ubb38\uc11c\uc640 \ucf54\ub4dc\ub97c \ubcfc \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\uc804\uc5d0 \uc560\ub9e4\ud588\ub358 \uac83\uc774 \uba85\ud655\ud574\uc84c\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c GraphQL\uc5d0 \ub300\ud574 \uc81c\ub300\ub85c \ub2e4\uc2dc \uc18c\uac1c\ud574\uc11c \uc608\uc804 \uae00\uc744 \ubcf4\uac15\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/graphql/"},"RFC \uc2a4\ud399 \ubb38\uc11c"),"\ub294 \uc0c1\ub2f9\ud788 \uaca9\uc2dd \uc788\uac8c \uc4f0\uc5ec \uc788\uae30 \ub54c\ubb38\uc5d0(\uc5b4\ub835\uc9c0\ub294 \uc54a\uc9c0\ub9cc), \uc2a4\ud399 \ubb38\uc11c\ub9cc \uc77d\uc5b4\uc11c\ub294 GraphQL\uc774 \uc5b4\ub5a4 \uac83\uc778\uc9c0 \uae08\ubc29 \uac10\uc774 \uc624\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c GraphQL \uc2a4\ud399\uc744 \uc911\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ub418\ub294 \ubd80\ubd84\ub9cc \ub9e4\uc6b0 \uac04\ub2e8\ud788 \uc694\uc57d\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"graphql\uc774\ub780"},"GraphQL\uc774\ub780?"),(0,r.kt)("p",null,"GraphQL\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c\uc9c0 \uae30\uc220\ud560 \uc218 \uc788\ub294 \ucffc\ub9ac \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 REST API\uc5d0\uc11c\ub294 \uc2e4\uc81c \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud45c\uc2dc\ud558\ub294 \ud615\ud0dc\uc640 API \ud504\ub85c\ud1a0\ucf5c\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. (\uc2ec\uc9c0\uc5b4, \uc758\ub3c4\uc801\uc73c\ub85c \ubdf0\uc640 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc124\uacc4\ud558\ub294 \ud3b8\uc785\ub2c8\ub2e4.) \uc774\uc640 \ub2ec\ub9ac GraphQL\uc740 ",(0,r.kt)("em",{parentName:"p"},"\ucffc\ub9ac\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 UI \uacc4\uce35 \uad6c\uc870\uc640 \uc720\uc0ac\ud558\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")," \ub530\ub77c\uc11c \ucffc\ub9ac\uac00 \ud558\ub098\uc758 \ucee4\ub2e4\ub780 \ud2b8\ub9ac\ub97c \uc774\ub8f9\ub2c8\ub2e4."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/public/img/2015-08-31-graphql-example.jpg",alt:"GraphQL \ucffc\ub9ac\uc758 \uc608"}),(0,r.kt)("figcaption",null,"\uc0ac\uc6a9\uc790 \ud504\ub85c\ud544 \ucef4\ud3ec\ub10c\ud2b8\ub97c GraphQL \ucffc\ub9ac\ub85c \ub098\ud0c0\ub0b8 \uc608 (courtesy of ",(0,r.kt)("a",{href:"https://speakerdeck.com/laneyk/mutations-in-relay?slide=43"},"Laney Kuenzel"),")")),(0,r.kt)("p",null,"GraphQL\uc740 ",(0,r.kt)("em",{parentName:"p"},"\uc2a4\ud0a4\ub9c8\uac00 \ubbf8\ub9ac \uc815\uc758\ub418\uc5b4 \uc788\ub294 \uac15\ud0c0\uc785 \uc5b8\uc5b4\uc785\ub2c8\ub2e4.")," \ud0c0\uc785\uc740 \uc815\uc801 \ubd84\uc11d\uc73c\ub85c \uc2e4\uc218\ub97c \uc904\uc774\ub294\ub370\ub3c4 \ub3c4\uc6c0\uc744 \uc8fc\uc9c0\ub9cc, \ubb34\uc5c7\ubcf4\ub2e4 \uadf8 \uc790\uccb4\ub85c \ubb38\uc11c\uc758 \uc5ed\ud560\ub3c4 \ud558\ubbc0\ub85c \uac1c\ubc1c\uc790 \uc0ac\uc774\uc758 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc5d0\ub3c4 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c introspection\uc744 \ud1b5\ud574 \uc2a4\ud0a4\ub9c8 \uc815\ubcf4\ub97c GraphQL\ub85c \ucffc\ub9ac\ud560 \uc218 \uc788\uace0, \uc774\ub97c \uc774\uc6a9\ud574 \ud234\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://raw.githubusercontent.com/graphql/graphiql/master/resources/graphiql.png",alt:"GraphiQL"}),(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://github.com/graphql/graphiql"},"GraphiQL")," \u2014 Introspection\uc744 \uc0ac\uc6a9\ud558\ub294 GraphQL IDE")),(0,r.kt)("h3",{id:"\uc2e4\ub809\uc158-\uc138\ud2b8selection-set"},"\uc2e4\ub809\uc158 \uc138\ud2b8(selection set)"),(0,r.kt)("p",null,"\uac1d\uccb4\uc758 \uc5b4\ub5a4 \ud544\ub4dc\ub97c \uc120\ud0dd\ud560 \uac83\uc778\uc9c0 \uc2e4\ub809\uc158 \uc138\ud2b8\ub85c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uac00\uc7a5 \uac04\ub2e8\ud55c \ud615\ud0dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    id\n    text\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \ud544\ub4dc\ub97c \uc120\ud0dd\ud558\ub294 \ucffc\ub9ac\uc785\ub2c8\ub2e4. \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 JSON \ud615\uc2dd\uc758 \uacb0\uacfc\uac00 \ub098\uc62c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "id": 42,\n    "text": "Hello, world!"\n}\n')),(0,r.kt)("h3",{id:"\uc778\uc790argument"},"\uc778\uc790(argument)"),(0,r.kt)("p",null,"\ud544\ub4dc\uc5d0\ub294 \uc778\uc790\ub97c \ub118\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    pictureURL(width: 50, height: 50)\n}\n")),(0,r.kt)("p",null,"\ucc38\uace0\ub85c GraphQL\uc740 SQL \uac19\uc740 \uac15\ub825\ud55c \ucffc\ub9ac \uc5b8\uc5b4\ub294 \uc544\ub2d9\ub2c8\ub2e4. GraphQL \ud45c\uc900\uc5d0\uc11c\ub294 \uc778\uc790\uc5d0 \ub530\ub978 \uc2e4\uc81c \ubc18\ud658\uac12\uc758 \uc2dc\ub9e8\ud2f1\uc740 \uc815\ud574\uc838\uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. (",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),"\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \uac19\uc740 \uac83\uc774 \ub530\ub85c \uc5c6\uace0, \uc778\uc790\uc758 \uc774\ub984\uc740 GraphQL \ud45c\uc900 \uc785\uc7a5\uc5d0\uc11c\ub294 \uc784\uc758\uc758 \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4.)"),(0,r.kt)("p",null,"\ubcc4\uba85(alias)\uc73c\ub85c \ud544\ub4dc \uc774\ub984\uc744 \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac19\uc740 \ud544\ub4dc\ub97c \ub2e4\ub978 \uc778\uc790\ub85c \uac00\uc838\uc62c \ub54c\ub3c4 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    fullName: name\n    smallPic: profilePic(size: 64)\n    bigPic: profilePic(size: 1024)\n}\n")),(0,r.kt)("h3",{id:"\uc2e4\ub809\uc158-\uc138\ud2b8\uc758-\uc911\ucca9"},"\uc2e4\ub809\uc158 \uc138\ud2b8\uc758 \uc911\ucca9"),(0,r.kt)("p",null,"\ub9cc\uc57d \ud544\ub4dc\uac00 \uac1d\uccb4\ub098 \ub9ac\uc2a4\ud2b8 \ud0c0\uc785(\uc2a4\uce7c\ub77c\uac00 \uc544\ub2cc \ud0c0\uc785)\uc774\ub77c\uba74 \ud558\uc704 \uac1d\uccb4\uc758 \uc2e4\ub809\uc158 \uc138\ud2b8\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubc18\ub4dc\uc2dc")," \uba85\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    id\n    text\n    author {\n        name\n        pictureURL(width: 50, height: 50)\n        posts {\n            id\n            text\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"\uc65c-\ubaa8\ub4e0-\ud544\ub4dc\ub97c-\ubc18\ub4dc\uc2dc-\uba85\uc2dc\ud574\uc57c-\ud560\uae4c"},"\uc65c \ubaa8\ub4e0 \ud544\ub4dc\ub97c \ubc18\ub4dc\uc2dc \uba85\uc2dc\ud574\uc57c \ud560\uae4c?"),(0,r.kt)("p",null,"\uae30\uc874\uc5d0 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 GraphQL\ub85c \ud45c\ud604\ud574\ubcf4\ub824 \ud558\uba74 \ubaa8\ub4e0 \ud544\ub4dc\ub97c \uba85\uc2dc\ud558\ub294 \uac83\uc774 \uc0dd\uac01\ubcf4\ub2e4 \uadc0\ucc2e\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc81c\uac00 \uc0dd\uac01\ud558\uae30\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\uaf2d \ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \uac00\uc838\uc624\ubbc0\ub85c \uc131\ub2a5\uc5d0 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4.")," \ud1b5\uc2e0\ud558\ub294 \ub370\uc774\ud130 \uc591\uc744 \uc808\uc57d\ud560 \uc218 \uc788\uace0 \uc11c\ubc84\uc5d0\uc11c\ub3c4 \ub0ad\ube44\ub418\ub294 \uc790\uc6d0\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud544\ub4dc\ub97c \uc694\uccad\ud588\ub294\uc9c0 \ubd84\uba85\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("em",{parentName:"li"},"\ud544\ub4dc\uac00 \uc751\ub2f5\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc758 \ubaa8\ud638\ud568\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")," \ud544\ub4dc\uac00 \ub4e4\uc5b4\uc624\uc9c0 \uc54a\uc558\uc744 \ub54c \uc2e4\uc81c \uc11c\ubc84 \uc0c1\uc5d0\uc11c \uadf8 \ud544\ub4dc\uac00 \ube44\uc5b4\uc788\uc744 \uc218\ub3c4 \uc788\uace0 \uc694\uccad\ud55c \ud45c\ud604 \ubc29\uc2dd\uc5d0\uc11c \uc0dd\ub7b5\ub418\uc5c8\uc744 \uc218\ub3c4 \uc788\ub294\ub370, \ubaa8\ub4e0 \ud544\ub4dc\ub97c \uba85\uc2dc\ud558\uba74 \uc774\ub7f0 \ubb38\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"\ucffc\ub9ac-\ub8e8\ud2b8query-root"},"\ucffc\ub9ac \ub8e8\ud2b8(query root)"),(0,r.kt)("p",null,"\uc55e\uc11c \uc0b4\ud3b4\ubcf8 \uc608\uc81c\ub4e4\uc740 \uc774\ubbf8 \uc5b4\ub5a4 \uac1d\uccb4\uac00 \uc8fc\uc5b4\uc84c\ub2e4\uace0 \uac00\uc815\ud558\uace0 \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc774 \ucd5c\uc0c1\uc704 \uac1d\uccb4\ub294 \uc5b4\ub514\uc11c \uc624\ub294 \uac83\uc77c\uae4c\uc694. \uc77c\ubc18\uc801\uc778 REST API\ub77c\uba74 URL\ub85c \ub9ac\uc18c\uc2a4\ub97c \ucc3e\uac8c \ub418\uc9c0\ub9cc, GraphQL API\ub294 \ud558\ub098\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ucee8\ubca4\uc158\uc785\ub2c8\ub2e4. (\uac15\uc81c\ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4)"),(0,r.kt)("p",null,"GraphQL \ucffc\ub9ac\uc758 \uac00\uc7a5 \ubc14\uae65 \uc2e4\ub809\uc158 \uc138\ud2b8\ub294 '\ucffc\ub9ac \ub8e8\ud2b8' \uac1d\uccb4\ub85c\ubd80\ud130 \uc2dc\uc791\ud558\ub3c4\ub85d \uc815\ud574\uc838 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c GraphQL \uc11c\ubc84\ub294 ",(0,r.kt)("em",{parentName:"p"},"\ucffc\ub9ac \ub8e8\ud2b8\uc5d0 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc2dc\uc791\uc810\ub4e4\uc744 \ub178\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")," \uac00\ub839 \ud604\uc7ac \uc0ac\uc6a9\uc790\ub098 \ud2b9\uc815 ID\uc758 \uae00\uc744 \uac00\uc838\uc624\ub294 \uac83 \ub4f1\uc774\uaca0\uc9c0\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    # \ub098\ub294 \ub204\uad6c\uc778\uac00?\n    me {\n        name\n    }\n\n    # id=42\uc778 \uae00 \ucc3e\uae30\n    post(id: "42") {\n        title\n    }\n}\n')),(0,r.kt)("h3",{id:"\ud504\ub798\uadf8\uba3c\ud2b8fragment"},"\ud504\ub798\uadf8\uba3c\ud2b8(fragment)"),(0,r.kt)("p",null,"\uac19\uc740 \uc2e4\ub809\uc158 \uc138\ud2b8\uac00 \ud55c \ucffc\ub9ac \uc548\uc5d0\uc11c \uc911\ubcf5\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud55c \ud654\uba74\uc5d0 \uae00\uc4f4\uc774\uc758 \ud504\ub85c\ud544\uacfc \ub313\uae00 \uc791\uc131\uc790\uc758 \ud504\ub85c\ud544\uc774 \ub098\uc624\ub294\ub370 \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc4f4\ub2e4\uba74 \uac19\uc740 \ud544\ub4dc\uac00 \ud544\uc694\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774\ub54c ",(0,r.kt)("em",{parentName:"p"},"\ud504\ub798\uadf8\uba3c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc911\ubcf5\uc744 \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# GraphQL \ubb38\uc11c\uc5d0 \ucffc\ub9ac \ud558\ub098\ub9cc \uc788\ub294 \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \uba85\uc2dc\uc801\uc73c\ub85c \ucffc\ub9ac\uc784\uc744 \ub098\ud0c0\ub0b4\uc57c \ud569\ub2c8\ub2e4.\nquery sampleQuery {\n    post(id: "4") {\n        id\n        text\n        author { ...basicUserInfo }\n    }\n    users {\n        ...basicUserInfo\n    }\n}\n\n# User \ud0c0\uc785\uc5d0 \ub300\ud55c \ud504\ub798\uadf8\uba3c\ud2b8\uc784\uc744 \uba85\uc2dc\ud588\uc2b5\ub2c8\ub2e4.\nfragment basicUserInfo on User {\n    name\n    pictureURL(width: 50, height: 50)\n}\n')),(0,r.kt)("p",null,"\uc774\ucc98\ub7fc \ud504\ub798\uadf8\uba3c\ud2b8\ub294 \uc870\ud569\uc774 \uac00\ub2a5\ud55c\ub370, \uc774\ub294 ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/relay/"},"Relay")," \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ud575\uc2ec \uae30\ub2a5\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uac01 \ubdf0\ub9c8\ub2e4 \ud504\ub798\uadf8\uba3c\ud2b8\ub97c \uac00\uc9c0\uace0 \uc788\uace0, \uc774 \ud504\ub798\uadf8\uba3c\ud2b8\ub4e4\uc774 \ubdf0 \uacc4\uce35\uc758 \uac00\uc7a5 \uc544\ub798\uc5d0\uc11c\ubd80\ud130 \uc870\ud569\ub418\uc5b4 \ud558\ub098\uc758 \ud070 GraphQL \ucffc\ub9ac\ub97c \uad6c\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"GraphQL\uc740 \ub2e4\ud615\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc778\ud130\ud398\uc774\uc2a4\ub85c \uacf5\ud1b5 \ud544\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\uace0, \uc720\ub2c8\uc628(union) \ud0c0\uc785\uc73c\ub85c \uc5ec\ub7ec \ud0c0\uc785\uc744 \ud558\ub098\ub85c \ubb36\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"\uc5ec\ub7ec \ud0c0\uc785\uc744 \uac00\uc9c0\ub294 \ud544\ub4dc\ub3c4 \ud504\ub798\uadf8\uba3c\ud2b8\uc758 \ud0c0\uc785 \uc870\uac74\uc73c\ub85c \uad6c\ubcc4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"query samplePolymorphicQuery {\n    timeline {\n        data { # data\ub294 Post \ub610\ub294 User\uc758 \ub9ac\uc2a4\ud2b8\n            # \uc778\ub77c\uc778 \ud504\ub798\uadf8\uba3c\ud2b8, Post \ud0c0\uc785\uc77c \ub54c\n            ... on Post {\n                title\n            }\n\n            # \ud504\ub798\uadf8\uba3c\ud2b8 \ucc38\uc870. User \ud0c0\uc785\uc77c \ub54c\n            ...basicUserInfo\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"\ubba4\ud14c\uc774\uc158mutation"},"\ubba4\ud14c\uc774\uc158(mutation)"),(0,r.kt)("p",null,"GraphQL\uc740 \ub370\uc774\ud130\uc758 \uc77d\uae30 \uc678\uc5d0 \uc4f0\uae30(\ubcc0\ud615)\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ucffc\ub9ac\uc640 \ubba4\ud14c\uc774\uc158\uc740 \uac70\uc758 \uac19\uc740 \ubb38\ubc95\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \ucffc\ub9ac\ub294 \ud544\ub4dc\ub97c \uc21c\uc11c \uc5c6\uc774 \ud3c9\uac00\ud558\ub294 \ubc18\uba74 ",(0,r.kt)("em",{parentName:"p"},"\ubba4\ud14c\uc774\uc158\uc758 \ud544\ub4dc\ub294 \ud56d\uc0c1 \uc21c\uc11c\ub300\ub85c \ud3c9\uac00\ud569\ub2c8\ub2e4.")," \ub610\ud55c \ucffc\ub9ac\uac00 \ucffc\ub9ac \ub8e8\ud2b8\ub85c\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \uac83\ucc98\ub7fc \ubba4\ud14c\uc774\uc158\uc740 \ubba4\ud14c\uc774\uc158 \ub8e8\ud2b8\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mutation sampleMutation {\n    setName(name: "Zuck") {\n        newName\n    }\n}\n')),(0,r.kt)("h2",{id:"relay\uc758-graphql-\ud655\uc7a5"},"Relay\uc758 GraphQL \ud655\uc7a5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/relay/"},"Relay"),"\ub294 GraphQL\uacfc React\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uae30 \uc704\ud55c \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4. GraphQL\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc778 \ucffc\ub9ac \uc2dc\uc2a4\ud15c\ub9cc \uc815\uc758\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ud604\ud558\ub824\uba74 \uc5b4\ub290 \uc815\ub3c4 \uc815\ud574\uc9c4 \ucee8\ubca4\uc158\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/relay/docs/graphql-relay-specification.html#content"},"Relay\uc5d0\uc11c \uc815\uc758\ud55c \ucee8\ubca4\uc158"),"\uc774 \uaf2d Relay\ub97c \uc4f0\ub294 \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\ub3c4 \uc4f8\ub9cc\ud558\uae30 \ub54c\ubb38\uc5d0 \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc81c\ubaa9\uc744 '\ud655\uc7a5'\uc774\ub77c\uace0 \uc801\uae34 \ud588\uc9c0\ub9cc GraphQL\uc744 \ud655\uc7a5\ud55c\ub2e4\uae30\ubcf4\ub2e4 \uba87\uac00\uc9c0 \uc81c\uc57d \uc870\uac74\uc744 \ucd94\uac00\ud588\ub2e4\uace0 \ubcf4\ub294 \uac83\uc774 \uc880 \ub354 \uc815\ud655\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ucee4\ub125\uc158connection"},"\ucee4\ub125\uc158(connection)"),(0,r.kt)("p",null,"\uc77c\ub300\ub2e4 \uad00\uacc4\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud55c \ucee8\ubca4\uc158\uc785\ub2c8\ub2e4. Post \ud558\uc704\uc758 Comment \ucf5c\ub809\uc158\uc744 \uac00\uc838\uc624\ub294 \uc608\ub97c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    comments(first: 5) { # CommentConnection\n        edges { # CommentEdge\n            cursor\n            node { # Comment\n                author { name }\n                text\n            }\n        }\n        pageInfo {\n            hasNextPage\n            hasPreviousPage\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\uba3c\uc800, \ucee4\ub125\uc158\uc744 \ub9ac\ud134\ud558\ub294 \ud544\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"first"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"after"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"last"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"before")," \uc778\uc790\ub97c \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},'comments(first: 5, after: "some cursor")'),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},'first 5 comments after "some cursor"'),"\ucc98\ub7fc \uc77d\uc73c\uba74 \ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"some cursor")," \uc774\ud6c4\uc758 \ub313\uae00 5\uac1c\ub97c \uac00\uc838\uc624\ub294 \ucffc\ub9ac\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\ub125\uc158 \ud0c0\uc785\uc758 \uc774\ub984\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection"),"\uc73c\ub85c \ub05d\ub098\uc57c \ud558\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"edges"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"pageInfo")," \ud544\ub4dc\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edges"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," \ud544\ub4dc\ub97c \uac00\uc9c0\uace0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Edge"),"\ub85c \ub05d\ub098\ub294 \uc774\ub984\uc758 \ud0c0\uc785\uc758 \ub9ac\uc2a4\ud2b8\ub97c \ub9ac\ud134\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),"\ub294 \ud56d\ubaa9\uc758 \uc2e4\uc81c \uac12\uc774\uace0 ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor"),"\ub294 \uacb0\uacfc\ub97c \ud398\uc774\uc9c0\ub85c \ub098\ub220 \ud0d0\uc0c9\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uac12\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageInfo"),"\ub294 \ud604\uc7ac \uac00\uc838\uc628 \ub370\uc774\ud130\ubcf4\ub2e4 \uc55e/\ub4a4\ub85c \ub370\uc774\ud130\uac00 \ub354 \uc788\ub294\uc9c0 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ub354-\uc54c\uc544\ubcf4\uae30"},"\ub354 \uc54c\uc544\ubcf4\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://facebook.github.io/graphql/"},"GraphQL (Working Draft)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-js"},"graphql-js"),": GraphQL\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub808\ud37c\ub7f0\uc2a4 \uad6c\ud604\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://facebook.github.io/relay/"},"Relay"),": GraphQL\uacfc React\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \uc218 \uc788\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-relay-js"},"graphql-relay-js"),": graphql-js\uc5d0 Relay\uc758 GraphQL \ucee8\ubca4\uc158\uc744 \uc81c\uacf5\ud558\ub294 \ubaa8\ub4c8\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://graphql-swapi.parseapp.com/graphiql/"},"graphql-swapi"),": GraphQL \ubc84\uc804\uc758 ",(0,r.kt)("a",{parentName:"li",href:"http://swapi.co"},"SWAPI"),"\ub97c GraphQL \ucffc\ub9ac \ube0c\ub77c\uc6b0\uc800\uc778 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphiql"},"GraphiQL"),"\ub85c \uc9c1\uc811 \ucffc\ub9ac\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\uc870\ub97c \uc774\ud574\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);