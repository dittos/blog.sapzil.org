"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[1480],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,k=m["".concat(i,".").concat(f)]||m[f]||u[f]||c;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=r(1030),p=["components"],i={layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c",tags:["react","javascript","web"]},l=void 0,s={permalink:"/2016/03/09/react-internals-modules",source:"@site/blog/2016-03-09-react-internals-modules.mdx",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c",description:"React \uc18c\uc2a4 \ucf54\ub4dc\ub294 \uc870\uae08 \ud2b9\uc774\ud55c \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud574\uc11c \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc5c6\uc73c\uba74 \uad6c\uc870\ub97c \ud30c\uc545\ud558\uae30\uac00 \ud798\ub4ed\ub2c8\ub2e4.",date:"2016-03-09T00:00:00.000Z",formattedDate:"2016\ub144 3\uc6d4 9\uc77c",tags:[{label:"react",permalink:"/tags/react"},{label:"javascript",permalink:"/tags/javascript"},{label:"web",permalink:"/tags/web"}],readingTime:2.7,truncated:!1,authors:[],frontMatter:{layout:"post",title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c",tags:["react","javascript","web"]},prevItem:{title:"React \uc18c\uc2a4 \ucf54\ub4dc \uc77d\uae30 - ReactElement",permalink:"/2016/03/17/react-internals-elements"},nextItem:{title:"uWSGI\uc758 \uace0\uae09 \uae30\ub2a5\ub4e4",permalink:"/2015/10/24/advanced-uwsgi"}},u={authorsImageUrls:[]},m=[],f={toc:m};function k(e){var t=e.components,i=(0,a.Z)(e,p);return(0,c.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(o.ZP,{mdxType:"TOC"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react"},"React \uc18c\uc2a4 \ucf54\ub4dc"),"\ub294 \uc870\uae08 \ud2b9\uc774\ud55c \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud574\uc11c \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc5c6\uc73c\uba74 \uad6c\uc870\ub97c \ud30c\uc545\ud558\uae30\uac00 \ud798\ub4ed\ub2c8\ub2e4."),(0,c.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc18c\uc2a4 \ucf54\ub4dc\ub294 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/v15.0.0-rc.1/src"},"src/"),"\uc5d0 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \ud30c\uc77c\ub4e4\uc744 \uc5f4\uc5b4\ubcf4\uba74 CommonJS\ucc98\ub7fc ",(0,c.kt)("inlineCode",{parentName:"p"},"require")," \ud568\uc218\ub85c \ubaa8\ub4c8\uc744 \ubd88\ub7ec\uc624\uace0 ",(0,c.kt)("inlineCode",{parentName:"p"},"module.exports"),"\uc5d0 \ub123\uc740 \uac12\uc774 \uc678\ubd80\uc5d0 \uacf5\uac1c\ub418\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 ",(0,c.kt)("inlineCode",{parentName:"p"},"require"),"\ud560 \ub54c\uc758 \ubaa8\ub4c8 \uacbd\ub85c\uac00 \ub514\ub809\ud1a0\ub9ac\ub97c \ube80 \ubaa8\ub4c8\uba85\ub9cc\uc73c\ub85c \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.1/src/React.js"},"src/React.js"),"\uc5d0\uc11c ",(0,c.kt)("inlineCode",{parentName:"p"},"require('ReactDOM')"),"\ub97c \ud558\ub294\ub370 \uc2e4\uc81c \uc774 \ubaa8\ub4c8\uc740 ",(0,c.kt)("inlineCode",{parentName:"p"},"src/renderers/dom/ReactDOM.js"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,c.kt)("p",null,"\uc774\ub294 React\uac00 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/node-haste"},"\ud398\uc774\uc2a4\ubd81 \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c"),"\uc73c\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uac01 \ud30c\uc77c\uc5d0 \ubcf4\uba74 ",(0,c.kt)("inlineCode",{parentName:"p"},"@providesModule"),"\uc774\ub77c\ub294 \uc8fc\uc11d\uc774 \ub2ec\ub824\uc788\ub294\ub370 \uc5ec\uae30\uc5d0 \uc788\ub294 \uc774\ub984\uc774 \ud574\ub2f9 \ud30c\uc77c\uc758 \ubaa8\ub4c8\uba85\uc774 \ub429\ub2c8\ub2e4. (\ub300\ubd80\ubd84 \ud30c\uc77c\uba85\uacfc \ub3d9\uc77c\ud55c \uac83\uc73c\ub85c \uc0dd\uac01\ub429\ub2c8\ub2e4.) \ub610\ud55c \uc77c\ubd80 \ubaa8\ub4c8\uc740 React\uac00 \uc544\ub2c8\ub77c \ud398\uc774\uc2a4\ubd81\uc758 JavaScript \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/fbjs"},"fbjs"),"\uc5d0 \ub4e4\uc5b4\uc788\uc73c\ubbc0\ub85c React \uc800\uc7a5\uc18c\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc5c6\ub294 \uacbd\uc6b0 \uc0b4\ud3b4\ubd10\uc57c \ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,"\ud55c\uac00\uc9c0 \ud301\uc73c\ub85c, GitHub\uc758 \ud30c\uc77c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",(0,c.kt)("kbd",null,"t")," \ud0a4\ub97c \ub204\ub974\uba74 \ud30c\uc77c\uba85\uc73c\ub85c \uc800\uc7a5\uc18c \uc804\uccb4\ub97c \uac80\uc0c9\ud560 \uc218 \uc788\uc5b4 \uc2e4\uc81c \ud30c\uc77c\uc744 \ube60\ub974\uac8c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (",(0,c.kt)("a",{parentName:"p",href:"https://help.github.com/articles/using-keyboard-shortcuts/#source-code-browsing"},"GitHub \ub2e8\ucd95\ud0a4"),")"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"npm\uc758 react \ud328\ud0a4\uc9c0"),"\ub97c \uc124\uce58\ud574\ubcf4\uba74 ",(0,c.kt)("inlineCode",{parentName:"p"},"lib/")," \ub514\ub809\ud1a0\ub9ac \uc548\uc5d0 \ubaa8\ub4e0 \ubaa8\ub4c8\uc774 \ud50c\ub7ab\ud558\uac8c \ub4e4\uc5b4\uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 npm \ud328\ud0a4\uc9c0\uc758 \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub294 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/v15.0.0-rc.1/packages/react"},"packages/ \ub514\ub809\ud1a0\ub9ac")," \uc548\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacb0\ub860\uc801\uc73c\ub85c npm\uc758 react \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810\uc740 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.1/packages/react/react.js"},"packages/react/react.js"),"\uc774\uace0 \uc774\ub294 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/v15.0.0-rc.1/src/React.js"},"src/React.js"),"\ub97c \uadf8\ub300\ub85c \ub178\ucd9c\ud569\ub2c8\ub2e4."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"npm\uc758 react \ud328\ud0a4\uc9c0",src:r(2901).Z,width:"1032",height:"1030"})),(0,c.kt)("p",null,"\uc694\uc57d\ud558\uba74,"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"require('blahblah')"),"\ub294 react \uc800\uc7a5\uc18c \uc5b4\ub518\uac00\uc5d0 \uc788\ub294 ",(0,c.kt)("inlineCode",{parentName:"li"},"blahblah.js"),"\ub97c \ucc38\uc870\ud55c\ub2e4."),(0,c.kt)("li",{parentName:"ul"},"react \uc800\uc7a5\uc18c\uc5d0 \uc5c6\uc73c\uba74 fbjs \uc800\uc7a5\uc18c\uc5d0 \uc788\ub2e4."),(0,c.kt)("li",{parentName:"ul"},"npm \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810\uc740 ",(0,c.kt)("inlineCode",{parentName:"li"},"packages/")," \ub514\ub809\ud1a0\ub9ac \uc548\uc5d0 \uc788\ub2e4.")))}k.isMDXComponent=!0},1030:function(e,t,r){r.d(t,{ZP:function(){return i}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],p={toc:[]};function i(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"React \uc18c\uc2a4\ucf54\ub4dc \uc77d\uae30 \uc2dc\ub9ac\uc988")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/2016/03/09/react-internals-modules/"},"\ubaa8\ub4c8 \uc2dc\uc2a4\ud15c")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/2016/03/17/react-internals-elements/"},"ReactElement")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/2016/03/20/react-internals-utils/"},"\uc720\ud2f8\ub9ac\ud2f0\ub4e4"))),(0,c.kt)("hr",null))}i.isMDXComponent=!0},2901:function(e,t,r){t.Z=r.p+"assets/images/2016-03-npm-react-bf38c920a8be915f4d6fe1577b566376.png"}}]);