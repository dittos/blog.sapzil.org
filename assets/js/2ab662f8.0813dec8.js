"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[6269],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(1030),i=["components"],c={layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",tags:["react","javascript","web"]},s=void 0,p={permalink:"/2016/03/20/react-internals-utils",source:"@site/blog/2016-03-20-react-internals-utils.mdx",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",description:"\ubcf8\uaca9\uc801\uc73c\ub85c \ucf54\ub4dc\ub97c \uc77d\uc73c\ub824\uace0 \ud558\ub2c8 \ubcf5\uc7a1\ud55c \uac1c\ub150\uc740 \uc544\ub2cc\ub370 \uc775\uc219\ud558\uc9c0 \uc54a\uc544 \uac78\ub9ac\ub294 \ubd80\ubd84\ub4e4\uc774 \uc788\uc5b4\uc11c \ud655\uc2e4\ud788 \uc9da\uace0 \ub118\uc5b4\uac00\ub824\uace0 \ud569\ub2c8\ub2e4.",date:"2016-03-20T00:00:00.000Z",formattedDate:"2016\ub144 3\uc6d4 20\uc77c",tags:[{label:"react",permalink:"/tags/react"},{label:"javascript",permalink:"/tags/javascript"},{label:"web",permalink:"/tags/web"}],readingTime:5.715,truncated:!1,authors:[],frontMatter:{layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \uc720\ud2f8\ub9ac\ud2f0\ub4e4",tags:["react","javascript","web"]},prevItem:{title:"\uc560\ub2c8\uba54\ud0c0\uc758 React \uc11c\ubc84 \ub80c\ub354\ub9c1 \uc544\ud0a4\ud14d\uccd0",permalink:"/2016/07/29/animeta-react-ssr"},nextItem:{title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - ReactElement",permalink:"/2016/03/17/react-internals-elements"}},u={authorsImageUrls:[]},m=[{value:"\ud074\ub798\uc2a4 \uc120\uc5b8",id:"\ud074\ub798\uc2a4-\uc120\uc5b8",level:2},{value:"\uc758\uc874\uc131 \uc8fc\uc785",id:"\uc758\uc874\uc131-\uc8fc\uc785",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158",id:"\ud2b8\ub79c\uc7ad\uc158",level:2},{value:"\ud480\ub9c1",id:"\ud480\ub9c1",level:2},{value:"\ubc30\uce58",id:"\ubc30\uce58",level:2}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{mdxType:"TOC"}),(0,o.kt)("p",null,"\ubcf8\uaca9\uc801\uc73c\ub85c \ucf54\ub4dc\ub97c \uc77d\uc73c\ub824\uace0 \ud558\ub2c8 \ubcf5\uc7a1\ud55c \uac1c\ub150\uc740 \uc544\ub2cc\ub370 \uc775\uc219\ud558\uc9c0 \uc54a\uc544 \uac78\ub9ac\ub294 \ubd80\ubd84\ub4e4\uc774 \uc788\uc5b4\uc11c \ud655\uc2e4\ud788 \uc9da\uace0 \ub118\uc5b4\uac00\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ud074\ub798\uc2a4-\uc120\uc5b8"},"\ud074\ub798\uc2a4 \uc120\uc5b8"),(0,o.kt)("p",null,"React \uc0dd\ud0dc\uacc4\uc5d0\uc11c\ub294 \ucd5c\uc2e0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud45c\uc900\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ubcf4\ud1b5\uc774\uc9c0\ub9cc React \uc790\uccb4\ub294 ES5\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c ES2015 \ud074\ub798\uc2a4\uac00 \uc544\ub2cc \ud504\ub85c\ud1a0\ud0c0\uc785 \uc0c1\uc18d\uc744 \uc8fc\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84 \ub2e4\uc74c\uacfc \uac19\uc740 \ud328\ud134\uc73c\ub85c \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function SomeClass() {\n  // ...\n}\n\nvar Mixin = {\n  // SomeClass\uc758 \uba54\uc18c\ub4dc\ub4e4\n};\n\nassign(\n  SomeClass.prototype,\n  SomeMixin, // SomeMixin\uc5d0 \uc815\uc758\ub41c \uba54\uc18c\ub4dc\ub97c \ubbf9\uc2a4\uc778\ud55c\ub2e4.\n  Mixin\n);\n")),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"assign")," \ud568\uc218\ub294 ES2015\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},"Object.assign"),"\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc758\uc874\uc131-\uc8fc\uc785"},"\uc758\uc874\uc131 \uc8fc\uc785"),(0,o.kt)("p",null,"React\uc758 \uc77c\ubd80 \ubaa8\ub4c8\uc740 \uc5ec\ub7ec \ud50c\ub7ab\ud3fc\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uc2e4\uc81c \uad6c\ud604 \ud074\ub798\uc2a4\ub97c \uc8fc\uc785(inject)\ud560 \uc218 \uc788\uac8c \uc124\uacc4\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ubaa8\ub4c8\uc740 \uc5f4\uc5b4\ubd10\ub3c4 \uc2e4\uc81c \uad6c\ud604\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc5b4\uc11c \ub2f9\ud669\ud560 \uc218 \uc788\ub294\ub370\uc694. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/dom/shared/ReactDefaultInjection.js"},"ReactDefaultInjection \ubaa8\ub4c8"),"\uc5d0\uc11c \uc5b4\ub5a4 \uad6c\ud604 \ud074\ub798\uc2a4\uac00 \uc8fc\uc785\ub418\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 React DOM \ud658\uacbd\uc5d0\uc11c \uc800\ub807\uac8c \uc8fc\uc785\ub418\ub294 \uac83\uc774\uace0, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/0.22-stable/Libraries/ReactNative/ReactNativeDefaultInjection.js"},"React Native\ub294 \ub2e4\ub978 \ud074\ub798\uc2a4\ub97c \uc8fc\uc785"),"\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158"},"\ud2b8\ub79c\uc7ad\uc158"),(0,o.kt)("p",null,"React\uc758 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc5b4\ub5a4 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uae30 \uc804\uacfc \ud6c4\uc5d0 \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uac10\uc2f8\uc90d\ub2c8\ub2e4. \ud568\uc218\ub97c \uac10\uc2f8\ub294 \ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c(wrapper)\ub294 \ud568\uc218 \uc218\ud589 \uc911\uc5d0 \uc608\uc678\uac00 \ub098\ub3c4 \ud56d\uc0c1 \ud638\ucd9c\ub418\ub3c4\ub85d \ub418\uc5b4 \uc788\uc5b4\uc11c \uc678\ubd80 \uc790\uc6d0\uc758 \uc0c1\ud0dc\ub97c \uc548\uc804\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uba70 \uac01\uac01 \ud568\uc218 \uc2e4\ud589 \uc804\uacfc \ud6c4\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/shared/utils/Transaction.js#L234"},"Transaction.Mixin"),"\uc744 \ubbf9\uc2a4\uc778\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158 \ub798\ud37c\uc758 \ubc30\uc5f4\uc744 \ub9ac\ud134\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"getTransactionWrappers")," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"perform")," \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c \ud2b9\uc815 \ud568\uc218\ub97c \ud2b8\ub79c\uc7ad\uc158 \uc548\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc758 \uc608\uc81c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Transaction Wrappers\nvar A = {\n  initialize: function() {\n    console.log('A.initialize')\n  },\n  close: function() {\n    console.log('A.close')\n  }\n};\nvar B = {\n  initialize: function() {\n    console.log('B.initialize')\n  },\n  close: function() {\n    console.log('B.close')\n  }\n};\n\n// Transaction\nfunction Tx() {\n  this.reinitializeTransaction();\n}\nassign(Tx.prototype, Transaction.Mixin, {\n  getTransactionWrappers: function() {\n    return [A, B];\n  }\n});\n\nfunction f(a, b) {\n  console.log('f(' + a + ', ' + b + ')')\n  throw new Error('error!')\n  console.log('f end')\n}\n\nvar tx = new Tx();\ntx.perform(\n  // Tx \uc548\uc5d0\uc11c \uc2e4\ud589\ud560 \ud568\uc218\n  f,\n  // \ud568\uc218\uc758 this context\ub97c \uc9c0\uc815\n  null,\n  // \ud568\uc218\uc758 \uc778\uc790\ub97c \uc9c0\uc815\n  1, 2\n);\n")),(0,o.kt)("p",null,"\uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub85c\uadf8\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A.initialize\nB.initialize\nf(1, 2)\nA.close\nB.close\nError: error!\n    ... stack trace ...\n")),(0,o.kt)("h2",{id:"\ud480\ub9c1"},"\ud480\ub9c1"),(0,o.kt)("p",null,"\uc790\uc8fc \ud560\ub2f9\ub418\ub294 \uac1d\uccb4\ub97c \uc0ac\uc6a9\uc774 \ub05d\ub09c \ub4a4 \ud574\uc81c\ud558\uc9c0 \uc54a\uace0 \ub2e4\uc2dc \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pool_%28computer_science%29"},"\ud480\ub9c1"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/shared/utils/PooledClass.js"},"PooledClass \ubaa8\ub4c8"),"\uc774 \uac1d\uccb4 \ud480\ub9c1\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud074\ub798\uc2a4\uc5d0 \ud480\ub9c1\uc744 \ucd94\uac00\ud558\ub824\uba74, \uac1d\uccb4\uac00 \ud480\uc5d0 \ubc18\ud658\ub420 \ub54c \uac1d\uccb4\uc758 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"destructor")," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud558\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"PooledClass.addPoolingTo"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud480\ub9c1\uc774 \ucd94\uac00\ub41c \ud074\ub798\uc2a4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"getPooled")," \ud568\uc218\ub85c \ud480\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud480\uc5d0\uc11c \uac00\uc838\uc628 \uc778\uc2a4\ud134\uc2a4\ub294 \uc0ac\uc6a9\uc774 \ub05d\ub09c \ub4a4\uc5d0 \ubc18\ub4dc\uc2dc ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," \ud568\uc218\ub85c \ubc18\ud658\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function SomeClass() {\n  console.log('construct')\n}\nassign(SomeClass.prototype, {\n  destructor: function() {\n    // \uac1d\uccb4\uac00 \ud574\uc81c\ub420 \ub54c \ucd08\uae30\ud654\n    console.log('release')\n  }\n});\nPooledClass.addPoolingTo(SomeClass);\n\nvar inst = SomeClass.getPooled(null); // `construct` \ucd9c\ub825\nSomeClass.release(inst); // `release` \ucd9c\ub825\nvar inst2 = SomeClass.getPooled(null); // \uc544\ubb34\uac83\ub3c4 \ucd9c\ub825\ub418\uc9c0 \uc54a\uc74c!\nconsole.log(inst === inst2); // true\n")),(0,o.kt)("h2",{id:"\ubc30\uce58"},"\ubc30\uce58"),(0,o.kt)("p",null,"\uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5f0\uc1c4\uc801\uc73c\ub85c \uc5ec\ub7ec\ubc88 \uc5c5\ub370\uc774\ud2b8\ub420 \ub54c, \ub9c8\uc9c0\ub9c9 \ud55c\ubc88\ub9cc \uc2e4\uc81c\ub85c \ub80c\ub354\ub9c1\uc744 \ud560 \uc218 \uc788\ub2e4\uba74 \ud6a8\uc728\uc801\uc77c \uac83\uc785\ub2c8\ub2e4. React\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub97c \ubc30\uce58\ub85c \ubb36\uc5b4\uc11c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub80c\ub354\ub9c1 \uc791\uc5c5\uc740 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L110-L113"},"ReactUpdates.batchedUpdates")," \ud568\uc218\ub97c \ud1b5\ud574 \uc2e4\ud589\ub429\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," \uac19\uc740 \uba54\uc18c\ub4dc\ub294 \ubc14\ub85c \ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uace0 \uc5c5\ub370\uc774\ud2b8 \ud050\uc5d0\ub9cc \ucd94\uac00\ud569\ub2c8\ub2e4. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L214-L233"},"ReactUpdates.enqueueUpdate"),") ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\ub97c \ud638\ucd9c\ud558\ub354\ub77c\ub3c4 \ubcc0\uacbd\ub41c \uc0c1\ud0dc\ub97c \ubc14\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state"),"\ub85c \uc77d\uc744 \uc218 \uc5c6\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. \ubc30\uce58\uac00 \ub05d\ub098\uba74, \uc313\uc5ec\uc788\ub358 \uc5c5\ub370\uc774\ud2b8\uac00 \ud55c\ubc88\uc5d0 \ucc98\ub9ac\ub429\ub2c8\ub2e4. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactUpdates.js#L187-L212"},"ReactUpdates.flushBatchedUpdates"),")"),(0,o.kt)("p",null,"\ubc30\uce58 \uc804\ub7b5\uc740 \uc8fc\uc785\ub418\ub294 \uc758\uc874\uc131\uc774\uba70 \uae30\ubcf8 \ubc30\uce58 \uc804\ub7b5\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.2/src/renderers/shared/reconciler/ReactDefaultBatchingStrategy.js"},"ReactDefaultBatchingStrategy"),"\uc5d0 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},1030:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React \uc18c\uc2a4\ucf54\ub4dc \uc77d\uae30 \uc2dc\ub9ac\uc988")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/2016/03/09/react-internals-modules/"},"\ubaa8\ub4c8 \uc2dc\uc2a4\ud15c")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/2016/03/17/react-internals-elements/"},"ReactElement")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/2016/03/20/react-internals-utils/"},"\uc720\ud2f8\ub9ac\ud2f0\ub4e4"))),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);