"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[1692],{2054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(4848),r=t(8453);const s={layout:"post",title:"Jersey 2.x\uc5d0 \ub0b4\uc7a5\ub41c \uc758\uc874\uc131 \uc8fc\uc785 \uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30",tags:["java","jersey","dependency-injection"]},c=void 0,l={permalink:"/2016/08/04/jersey-hk2",source:"@site/blog/2016-08-04-jersey-hk2.md",title:"Jersey 2.x\uc5d0 \ub0b4\uc7a5\ub41c \uc758\uc874\uc131 \uc8fc\uc785 \uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30",description:"Jersey\ub294 Java\uc758 REST \uc6f9 \uc11c\ube44\uc2a4 \ud45c\uc900\uc778 JAX-RS\uc758 \ub808\ud37c\ub7f0\uc2a4 \uad6c\ud604\uccb4\uc785\ub2c8\ub2e4. Spring\uc758 \ubb34\uac70\uc6c0\uc774\ub098 \uc11c\ube14\ub9bf\uc744 \uc9c1\uc811 \uc4f8\ub54c\uc758 \ubc88\uac70\ub85c\uc6c0\uc774 \ub35c\ud574\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 Jersey\uc640 \uba87\uba87 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ud1b5\ud569\uc744 \uc81c\uacf5\ud558\ub294 Dropwizard\ub97c \uc4f0\uba74 REST \uc11c\ube44\uc2a4\ub97c \ube60\ub974\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",date:"2016-08-04T00:00:00.000Z",tags:[{inline:!0,label:"java",permalink:"/tags/java"},{inline:!0,label:"jersey",permalink:"/tags/jersey"},{inline:!0,label:"dependency-injection",permalink:"/tags/dependency-injection"}],readingTime:3.925,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Jersey 2.x\uc5d0 \ub0b4\uc7a5\ub41c \uc758\uc874\uc131 \uc8fc\uc785 \uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30",tags:["java","jersey","dependency-injection"]},unlisted:!1,prevItem:{title:"RxJS\ub85c React \ucef4\ud3ec\ub10c\ud2b8 \uc0c1\ud0dc \uad00\ub9ac\ud558\uae30",permalink:"/2016/12/15/react-with-rx"},nextItem:{title:"\uc560\ub2c8\uba54\ud0c0\uc758 React \uc11c\ubc84 \ub80c\ub354\ub9c1 \uc544\ud0a4\ud14d\uccd0",permalink:"/2016/07/29/animeta-react-ssr"}},a={authorsImageUrls:[]},o=[{value:"\ub9ac\uc18c\uc2a4\uc5d0 \uc758\uc874\uc131 \uc8fc\uc785",id:"\ub9ac\uc18c\uc2a4\uc5d0-\uc758\uc874\uc131-\uc8fc\uc785",level:2},{value:"\ubc14\uc778\ub529 \uc124\uc815",id:"\ubc14\uc778\ub529-\uc124\uc815",level:2},{value:"Mock \uac1d\uccb4 \uc8fc\uc785\ud574\uc11c \ud14c\uc2a4\ud2b8",id:"mock-\uac1d\uccb4-\uc8fc\uc785\ud574\uc11c-\ud14c\uc2a4\ud2b8",level:2},{value:"\ucc38\uace0 \ubb38\uc11c",id:"\ucc38\uace0-\ubb38\uc11c",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://jersey.java.net/",children:"Jersey"}),"\ub294 Java\uc758 REST \uc6f9 \uc11c\ube44\uc2a4 \ud45c\uc900\uc778 JAX-RS\uc758 \ub808\ud37c\ub7f0\uc2a4 \uad6c\ud604\uccb4\uc785\ub2c8\ub2e4. Spring\uc758 \ubb34\uac70\uc6c0\uc774\ub098 \uc11c\ube14\ub9bf\uc744 \uc9c1\uc811 \uc4f8\ub54c\uc758 \ubc88\uac70\ub85c\uc6c0\uc774 \ub35c\ud574\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 Jersey\uc640 \uba87\uba87 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ud1b5\ud569\uc744 \uc81c\uacf5\ud558\ub294 ",(0,i.jsx)(n.a,{href:"http://www.dropwizard.io/",children:"Dropwizard"}),"\ub97c \uc4f0\uba74 REST \uc11c\ube44\uc2a4\ub97c \ube60\ub974\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["Jersey 1.x\uc5d0\uc11c\ub294 ",(0,i.jsx)(n.a,{href:"https://jersey.java.net/documentation/1.19.1/chapter_deps.html#d4e1859",children:"Guice\uc640\uc758 \uc5f0\ub3d9\uc744 \uc9c0\uc6d0"}),"\ud588\ub294\ub370 2.0 \uc774\ud6c4\uc5d0\ub294 ",(0,i.jsx)(n.a,{href:"https://hk2.java.net/",children:"HK2"}),"\ub77c\ub294 \uc758\uc874\uc131 \uc8fc\uc785 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub0b4\uc7a5\ud558\uac8c \ub418\uba74\uc11c \ub2e4\ub978 \uc758\uc874\uc131 \uc8fc\uc785 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640\ub294 \ud1b5\ud569\uc774 \uc27d\uc9c0 \uc54a\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. Dropwizard\ub3c4 0.8.0\ubd80\ud130\ub294 Jersey 2.x\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubb54\uac00 \ub300\ucc45\uc774 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4. ",(0,i.jsx)(n.a,{href:"https://github.com/Squarespace/jersey2-guice",children:"jersey2-guice"})," \uac19\uc740 \ud574\uacb0\ucc45\ub3c4 \uc788\uc9c0\ub9cc \uadf8\ub0e5 HK2\ub97c \uadf8\ub300\ub85c \uc368\ub3c4 \ub418\uc9c0 \uc54a\uc744\uae4c \ud574\uc11c \uc870\uc0ac\ub97c \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"\ub9ac\uc18c\uc2a4\uc5d0-\uc758\uc874\uc131-\uc8fc\uc785",children:"\ub9ac\uc18c\uc2a4\uc5d0 \uc758\uc874\uc131 \uc8fc\uc785"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TwitterClient"}),"\ub77c\ub294 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \ub9ac\uc18c\uc2a4 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0 ",(0,i.jsx)(n.a,{href:"http://docs.oracle.com/javaee/7/api/javax/inject/Inject.html",children:"javax.inject.Inject"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ubd99\uc5ec\uc11c \uac1d\uccb4\ub97c \uc8fc\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Path("/tweets")\npublic class TweetsResource {\n    private final TwitterClient twitterClient;\n\n    @Inject\n    public TweetsResource(TwitterClient twitterClient) {\n        this.twitterClient = twitterClient;\n    }\n\n    // ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Guice\uc640 \ubcc4\ub85c \ub2e4\ub97c \uac83\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ud574\ubcf4\uc9c4 \uc54a\uc558\uc9c0\ub9cc \uc544\ub9c8 setter/field \uc778\uc81d\uc158\ub3c4 \uac00\ub2a5\ud560\uac81\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ubc14\uc778\ub529-\uc124\uc815",children:"\ubc14\uc778\ub529 \uc124\uc815"}),"\n",(0,i.jsxs)(n.p,{children:["Jersey\uc5d0\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,i.jsx)(n.a,{href:"https://jersey.java.net/apidocs/2.0/jersey/org/glassfish/jersey/server/ResourceConfig.html",children:"ResourceConfig"})," \uac1d\uccb4\uc5d0 \ub9ac\uc18c\uc2a4\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4. (Dropwizard\uc5d0\uc11c\ub294 ",(0,i.jsx)(n.code,{children:"Environment#jersey()"}),"\ub97c \ud1b5\ud574 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"ResourceConfig config = new ResourceConfig();\nconfig.register(TweetsResource.class);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\ub9c8\ucc2c\uac00\uc9c0\ub85c \ubc14\uc778\ub529 \uc124\uc815 \ub610\ud55c ",(0,i.jsx)(n.code,{children:"ResourceConfig"}),"\uc5d0 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Guice\uc758 ",(0,i.jsx)(n.code,{children:"AbstractModule"}),"\uacfc \uc720\uc0ac\ud55c ",(0,i.jsx)(n.a,{href:"https://hk2.java.net/hk2-api/apidocs/org/glassfish/hk2/utilities/binding/AbstractBinder.html",children:"AbstractBinder"}),"\ub97c \uc0c1\uc18d\ubc1b\uace0 \ubc14\uc778\ub529 DSL\uc744 \uc0ac\uc6a9\ud574\uc11c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"config.register(new AbstractBinder() {\n    // ...\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["HK2\uc758 \ubc14\uc778\ub529 DSL\ub3c4 Guice\uc640 \uc0c1\ub2f9\ud788 \ube44\uc2b7\ud55c\ub370, HK2\ub294 ",(0,i.jsx)(n.em,{children:"\uad6c\ud604\uc774 \uc55e\uc5d0 \uc624\uace0 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub4a4\uc5d0 \uc628\ub2e4"}),"\ub294 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. (HK2\uc758 \uc6a9\uc5b4\ub85c\ub294 \uc778\ud130\ud398\uc774\uc2a4 = contract, \uad6c\ud604 = service\uc785\ub2c8\ub2e4.)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bind(new TwitterClientImpl()).to(TwitterClient.class)"}),": TwitterClientImpl \uc778\uc2a4\ud134\uc2a4\ub97c TwitterClient \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ubc14\uc778\ub529"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bind(TwitterClientImpl.class).to(TwitterClient.class)"}),": TwitterClient \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad6c\ud604 \ud074\ub798\uc2a4\ub85c TwitterClientImpl\uc744 \ubc14\uc778\ub529 (\uc8fc\uc785 \uc2dc\ub9c8\ub2e4 \uc0c8\ub85c \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bind(TwitterClientImpl.class).to(TwitterClient.class).in(Singleton.class)"}),": TwitterClient \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad6c\ud604 \ud074\ub798\uc2a4\ub85c TwitterClientImpl\uc744 \ubc14\uc778\ub529 (\uc8fc\uc785 \uc2dc \ud558\ub098\uc758 \uc2f1\uae00\ud134 \uc778\uc2a4\ud134\uc2a4 \uacf5\uc720)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bindAsContract(TwitterClientImpl.class)"}),": ",(0,i.jsx)(n.code,{children:"bind(TwitterClientImpl.class).to(TwitterClientImpl.class)"}),"\uc640 \uac19\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\uadf8 \ubc16\uc5d0\ub3c4 ",(0,i.jsx)(n.a,{href:"https://hk2.java.net/hk2-api/apidocs/org/glassfish/hk2/utilities/binding/AbstractBinder.html#bindFactory%28java.lang.Class%29",children:"bindFactory"})," \uac19\uc740 \uac83\ub4e4\uc774 \uc81c\uacf5\ub418\ub294\ub370 HK2 \ubb38\uc11c\uac00 \uadf8\ub2e4\uc9c0 \uce5c\uc808\ud558\uc9c0 \uc54a\uc544\uc11c \uc644\uc804\ud788 \ud30c\uc545\ud558\uc9c0\ub294 \ubabb\ud588\uc9c0\ub9cc \uc6ec\ub9cc\ud558\uba74 \ubb38\uc81c\ub294 \uc5c6\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"mock-\uac1d\uccb4-\uc8fc\uc785\ud574\uc11c-\ud14c\uc2a4\ud2b8",children:"Mock \uac1d\uccb4 \uc8fc\uc785\ud574\uc11c \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsx)(n.p,{children:"Jersey \ud14c\uc2a4\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c\uc640 \uc801\ub2f9\ud55c Mock \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc11c TwitterClient\uc758 Mock \uac1d\uccb4\ub97c \uc8fc\uc785\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class HK2Demo extends JerseyTest {\n    TwitterClient twitterClient;\n\n    @Override protected Application configure() {\n        twitterClient = mock(TwitterClient.class);\n\n        ResourceConfig config = new ResourceConfig();\n        config.register(TweetsResource.class);\n        config.register(new AbstractBinder() {\n            @Override protected void configure() {\n                bind(twitterClient).to(TwitterClient.class);\n            }\n        });\n        return config;\n    }\n\n    @Test public void testPost() {\n        target("/tweets").request()\n            .post(Entity.form(new Form("message", "Hi!")));\n        verify(twitterClient).tweet("Hi!");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\ucc38\uace0-\ubb38\uc11c",children:"\ucc38\uace0 \ubb38\uc11c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jersey.java.net/documentation/latest/ioc.html",children:"Custom Injection and Lifecycle Management - Jersey User Guide"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);