"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[2262],{8407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(4848),r=t(8453),c=t(6870);const a={layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",tags:["react","javascript","web"]},i=void 0,l={permalink:"/2016/03/20/react-internals-utils",source:"@site/blog/2016-03-20-react-internals-utils.mdx",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",description:"\ubcf8\uaca9\uc801\uc73c\ub85c \ucf54\ub4dc\ub97c \uc77d\uc73c\ub824\uace0 \ud558\ub2c8 \ubcf5\uc7a1\ud55c \uac1c\ub150\uc740 \uc544\ub2cc\ub370 \uc775\uc219\ud558\uc9c0 \uc54a\uc544 \uac78\ub9ac\ub294 \ubd80\ubd84\ub4e4\uc774 \uc788\uc5b4\uc11c \ud655\uc2e4\ud788 \uc9da\uace0 \ub118\uc5b4\uac00\ub824\uace0 \ud569\ub2c8\ub2e4.",date:"2016-03-20T00:00:00.000Z",tags:[{inline:!0,label:"react",permalink:"/tags/react"},{inline:!0,label:"javascript",permalink:"/tags/javascript"},{inline:!0,label:"web",permalink:"/tags/web"}],readingTime:5.715,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",tags:["react","javascript","web"]},unlisted:!1,prevItem:{title:"\uc560\ub2c8\uba54\ud0c0\uc758 React \uc11c\ubc84 \ub80c\ub354\ub9c1 \uc544\ud0a4\ud14d\uccd0",permalink:"/2016/07/29/animeta-react-ssr"},nextItem:{title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - ReactElement",permalink:"/2016/03/17/react-internals-elements"}},o={authorsImageUrls:[]},d=[...c.RM,{value:"\ud074\ub798\uc2a4 \uc120\uc5b8",id:"\ud074\ub798\uc2a4-\uc120\uc5b8",level:2},{value:"\uc758\uc874\uc131 \uc8fc\uc785",id:"\uc758\uc874\uc131-\uc8fc\uc785",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158",id:"\ud2b8\ub79c\uc7ad\uc158",level:2},{value:"\ud480\ub9c1",id:"\ud480\ub9c1",level:2},{value:"\ubc30\uce58",id:"\ubc30\uce58",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"\ubcf8\uaca9\uc801\uc73c\ub85c \ucf54\ub4dc\ub97c \uc77d\uc73c\ub824\uace0 \ud558\ub2c8 \ubcf5\uc7a1\ud55c \uac1c\ub150\uc740 \uc544\ub2cc\ub370 \uc775\uc219\ud558\uc9c0 \uc54a\uc544 \uac78\ub9ac\ub294 \ubd80\ubd84\ub4e4\uc774 \uc788\uc5b4\uc11c \ud655\uc2e4\ud788 \uc9da\uace0 \ub118\uc5b4\uac00\ub824\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\ud074\ub798\uc2a4-\uc120\uc5b8",children:"\ud074\ub798\uc2a4 \uc120\uc5b8"}),"\n",(0,s.jsx)(n.p,{children:"React \uc0dd\ud0dc\uacc4\uc5d0\uc11c\ub294 \ucd5c\uc2e0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud45c\uc900\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ubcf4\ud1b5\uc774\uc9c0\ub9cc React \uc790\uccb4\ub294 ES5\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c ES2015 \ud074\ub798\uc2a4\uac00 \uc544\ub2cc \ud504\ub85c\ud1a0\ud0c0\uc785 \uc0c1\uc18d\uc744 \uc8fc\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84 \ub2e4\uc74c\uacfc \uac19\uc740 \ud328\ud134\uc73c\ub85c \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function SomeClass() {\n  // ...\n}\n\nvar Mixin = {\n  // SomeClass\uc758 \uba54\uc18c\ub4dc\ub4e4\n};\n\nassign(\n  SomeClass.prototype,\n  SomeMixin, // SomeMixin\uc5d0 \uc815\uc758\ub41c \uba54\uc18c\ub4dc\ub97c \ubbf9\uc2a4\uc778\ud55c\ub2e4.\n  Mixin\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c ",(0,s.jsx)(n.code,{children:"assign"})," \ud568\uc218\ub294 ES2015\uc758 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",children:"Object.assign"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc758\uc874\uc131-\uc8fc\uc785",children:"\uc758\uc874\uc131 \uc8fc\uc785"}),"\n",(0,s.jsxs)(n.p,{children:["React\uc758 \uc77c\ubd80 \ubaa8\ub4c8\uc740 \uc5ec\ub7ec \ud50c\ub7ab\ud3fc\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uc2e4\uc81c \uad6c\ud604 \ud074\ub798\uc2a4\ub97c \uc8fc\uc785(inject)\ud560 \uc218 \uc788\uac8c \uc124\uacc4\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ubaa8\ub4c8\uc740 \uc5f4\uc5b4\ubd10\ub3c4 \uc2e4\uc81c \uad6c\ud604\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc5b4\uc11c \ub2f9\ud669\ud560 \uc218 \uc788\ub294\ub370\uc694. ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/dom/shared/ReactDefaultInjection.js",children:"ReactDefaultInjection \ubaa8\ub4c8"}),"\uc5d0\uc11c \uc5b4\ub5a4 \uad6c\ud604 \ud074\ub798\uc2a4\uac00 \uc8fc\uc785\ub418\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 React DOM \ud658\uacbd\uc5d0\uc11c \uc800\ub807\uac8c \uc8fc\uc785\ub418\ub294 \uac83\uc774\uace0, ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/0.22-stable/Libraries/ReactNative/ReactNativeDefaultInjection.js",children:"React Native\ub294 \ub2e4\ub978 \ud074\ub798\uc2a4\ub97c \uc8fc\uc785"}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\ud2b8\ub79c\uc7ad\uc158",children:"\ud2b8\ub79c\uc7ad\uc158"}),"\n",(0,s.jsx)(n.p,{children:"React\uc758 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc5b4\ub5a4 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uae30 \uc804\uacfc \ud6c4\uc5d0 \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uac10\uc2f8\uc90d\ub2c8\ub2e4. \ud568\uc218\ub97c \uac10\uc2f8\ub294 \ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c(wrapper)\ub294 \ud568\uc218 \uc218\ud589 \uc911\uc5d0 \uc608\uc678\uac00 \ub098\ub3c4 \ud56d\uc0c1 \ud638\ucd9c\ub418\ub3c4\ub85d \ub418\uc5b4 \uc788\uc5b4\uc11c \uc678\ubd80 \uc790\uc6d0\uc758 \uc0c1\ud0dc\ub97c \uc548\uc804\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c\ub294 ",(0,s.jsx)(n.code,{children:"initialize"}),"\uc640 ",(0,s.jsx)(n.code,{children:"close"})," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uba70 \uac01\uac01 \ud568\uc218 \uc2e4\ud589 \uc804\uacfc \ud6c4\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/shared/utils/Transaction.js#L234",children:"Transaction.Mixin"}),"\uc744 \ubbf9\uc2a4\uc778\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c\uc758 \ubc30\uc5f4\uc744 \ub9ac\ud134\ud558\ub294 ",(0,s.jsx)(n.code,{children:"getTransactionWrappers"})," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 ",(0,s.jsx)(n.code,{children:"perform"})," \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c \ud2b9\uc815 \ud568\uc218\ub97c \ud2b8\ub79c\uc7ad\uc158 \uc548\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uc758 \uc608\uc81c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Transaction Wrappers\nvar A = {\n  initialize: function() {\n    console.log('A.initialize')\n  },\n  close: function() {\n    console.log('A.close')\n  }\n};\nvar B = {\n  initialize: function() {\n    console.log('B.initialize')\n  },\n  close: function() {\n    console.log('B.close')\n  }\n};\n\n// Transaction\nfunction Tx() {\n  this.reinitializeTransaction();\n}\nassign(Tx.prototype, Transaction.Mixin, {\n  getTransactionWrappers: function() {\n    return [A, B];\n  }\n});\n\nfunction f(a, b) {\n  console.log('f(' + a + ', ' + b + ')')\n  throw new Error('error!')\n  console.log('f end')\n}\n\nvar tx = new Tx();\ntx.perform(\n  // Tx \uc548\uc5d0\uc11c \uc2e4\ud589\ud560 \ud568\uc218\n  f,\n  // \ud568\uc218\uc758 this context\ub97c \uc9c0\uc815\n  null,\n  // \ud568\uc218\uc758 \uc778\uc790\ub97c \uc9c0\uc815\n  1, 2\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub85c\uadf8\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"A.initialize\nB.initialize\nf(1, 2)\nA.close\nB.close\nError: error!\n    ... stack trace ...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ud480\ub9c1",children:"\ud480\ub9c1"}),"\n",(0,s.jsxs)(n.p,{children:["\uc790\uc8fc \ud560\ub2f9\ub418\ub294 \uac1d\uccb4\ub97c \uc0ac\uc6a9\uc774 \ub05d\ub09c \ub4a4 \ud574\uc81c\ud558\uc9c0 \uc54a\uace0 \ub2e4\uc2dc \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Pool_%28computer_science%29",children:"\ud480\ub9c1"}),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/shared/utils/PooledClass.js",children:"PooledClass \ubaa8\ub4c8"}),"\uc774 \uac1d\uccb4 \ud480\ub9c1\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ud074\ub798\uc2a4\uc5d0 \ud480\ub9c1\uc744 \ucd94\uac00\ud558\ub824\uba74, \uac1d\uccb4\uac00 \ud480\uc5d0 \ubc18\ud658\ub420 \ub54c \uac1d\uccb4\uc758 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\ub294 ",(0,s.jsx)(n.code,{children:"destructor"})," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uace0 ",(0,s.jsx)(n.code,{children:"PooledClass.addPoolingTo"}),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud480\ub9c1\uc774 \ucd94\uac00\ub41c \ud074\ub798\uc2a4\ub294 ",(0,s.jsx)(n.code,{children:"getPooled"})," \ud568\uc218\ub85c \ud480\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud480\uc5d0\uc11c \uac00\uc838\uc628 \uc778\uc2a4\ud134\uc2a4\ub294 \uc0ac\uc6a9\uc774 \ub05d\ub09c \ub4a4\uc5d0 \ubc18\ub4dc\uc2dc ",(0,s.jsx)(n.code,{children:"release"})," \ud568\uc218\ub85c \ubc18\ud658\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function SomeClass() {\n  console.log('construct')\n}\nassign(SomeClass.prototype, {\n  destructor: function() {\n    // \uac1d\uccb4\uac00 \ud574\uc81c\ub420 \ub54c \ucd08\uae30\ud654\n    console.log('release')\n  }\n});\nPooledClass.addPoolingTo(SomeClass);\n\nvar inst = SomeClass.getPooled(null); // `construct` \ucd9c\ub825\nSomeClass.release(inst); // `release` \ucd9c\ub825\nvar inst2 = SomeClass.getPooled(null); // \uc544\ubb34\uac83\ub3c4 \ucd9c\ub825\ub418\uc9c0 \uc54a\uc74c!\nconsole.log(inst === inst2); // true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ubc30\uce58",children:"\ubc30\uce58"}),"\n",(0,s.jsx)(n.p,{children:"\uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5f0\uc1c4\uc801\uc73c\ub85c \uc5ec\ub7ec\ubc88 \uc5c5\ub370\uc774\ud2b8\ub420 \ub54c, \ub9c8\uc9c0\ub9c9 \ud55c\ubc88\ub9cc \uc2e4\uc81c\ub85c \ub80c\ub354\ub9c1\uc744 \ud560 \uc218 \uc788\ub2e4\uba74 \ud6a8\uc728\uc801\uc77c \uac83\uc785\ub2c8\ub2e4. React\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub97c \ubc30\uce58\ub85c \ubb36\uc5b4\uc11c \ucc98\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\ub80c\ub354\ub9c1 \uc791\uc5c5\uc740 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L110-L113",children:"ReactUpdates.batchedUpdates"})," \ud568\uc218\ub97c \ud1b5\ud574 \uc2e4\ud589\ub429\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"setState"})," \uac19\uc740 \uba54\uc18c\ub4dc\ub294 \ubc14\ub85c \ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uace0 \uc5c5\ub370\uc774\ud2b8 \ud050\uc5d0\ub9cc \ucd94\uac00\ud569\ub2c8\ub2e4. (",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L214-L233",children:"ReactUpdates.enqueueUpdate"}),") ",(0,s.jsx)(n.code,{children:"setState"}),"\ub97c \ud638\ucd9c\ud558\ub354\ub77c\ub3c4 \ubcc0\uacbd\ub41c \uc0c1\ud0dc\ub97c \ubc14\ub85c ",(0,s.jsx)(n.code,{children:"this.state"}),"\ub85c \uc77d\uc744 \uc218 \uc5c6\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. \ubc30\uce58\uac00 \ub05d\ub098\uba74, \uc313\uc5ec\uc788\ub358 \uc5c5\ub370\uc774\ud2b8\uac00 \ud55c\ubc88\uc5d0 \ucc98\ub9ac\ub429\ub2c8\ub2e4. (",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L187-L212",children:"ReactUpdates.flushBatchedUpdates"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["\ubc30\uce58 \uc804\ub7b5\uc740 \uc8fc\uc785\ub418\ub294 \uc758\uc874\uc131\uc774\uba70 \uae30\ubcf8 \ubc30\uce58 \uc804\ub7b5\uc740 ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactDefaultBatchingStrategy.js",children:"ReactDefaultBatchingStrategy"}),"\uc5d0 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6870:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>c});var s=t(4848),r=t(8453);const c=[];function a(e){const n={a:"a",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"React \uc18c\uc2a4\ucf54\ub4dc \uc77d\uae30 \uc2dc\ub9ac\uc988"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/2016/03/09/react-internals-modules/",children:"\ubaa8\ub4c8 \uc2dc\uc2a4\ud15c"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/2016/03/17/react-internals-elements/",children:"ReactElement"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/2016/03/20/react-internals-utils/",children:"\uc720\ud2f8\ub9ac\ud2f0\ub4e4"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},c=s.createContext(r);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);