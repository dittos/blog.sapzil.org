"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[4434],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),b=a,d=m["".concat(i,".").concat(b)]||m[b]||c[b]||p;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<p;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8994:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],s={layout:"post",title:"RxJS\ub85c React \ucef4\ud3ec\ub10c\ud2b8 \uc0c1\ud0dc \uad00\ub9ac\ud558\uae30",tags:["rxjs","react","javascript","web","reactive"]},i=void 0,o={permalink:"/2016/12/15/react-with-rx",source:"@site/blog/2016-12-15-react-with-rx.md",title:"RxJS\ub85c React \ucef4\ud3ec\ub10c\ud2b8 \uc0c1\ud0dc \uad00\ub9ac\ud558\uae30",description:"\ucd5c\uadfc UI \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 Rx \ud328\ud134\uc774 \ub9ce\uc774 \uc4f0\uc774\uace0 \uc788\uc2b5\ub2c8\ub2e4. React\ub294 Rx\uc640 \uc774\ub984\uc740 \ube44\uc2b7\ud558\uc9c0\ub9cc \uc0c1\ud0dc\ub97c \ub2e4\ub8e8\ub294 \ubc29\uc2dd\uc740 \uba85\ub839\ud615\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4. \uc0c1\ud0dc\ub97c \ucd5c\uc18c\ud654\ud558\uace0 \ucd5c\ub300\ud55c \ubc14\uae65\uc73c\ub85c \ubc00\uc5b4\ub0b4\ub294 \uc2dd\uc73c\ub85c \ubb38\uc81c\ub97c \ud68c\ud53c\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uc5b4\ucc0c\ub418\uc5c8\ub4e0 \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ub2e4\ub904\uc57c \ud558\ub294 \uc0c1\ud669\uc774 \uc624\uace4 \ud569\ub2c8\ub2e4.",date:"2016-12-15T00:00:00.000Z",formattedDate:"2016\ub144 12\uc6d4 15\uc77c",tags:[{label:"rxjs",permalink:"/tags/rxjs"},{label:"react",permalink:"/tags/react"},{label:"javascript",permalink:"/tags/javascript"},{label:"web",permalink:"/tags/web"},{label:"reactive",permalink:"/tags/reactive"}],readingTime:8.405,truncated:!1,authors:[],frontMatter:{layout:"post",title:"RxJS\ub85c React \ucef4\ud3ec\ub10c\ud2b8 \uc0c1\ud0dc \uad00\ub9ac\ud558\uae30",tags:["rxjs","react","javascript","web","reactive"]},prevItem:{title:"RESTful API \uc11c\ubc84 \ud14c\uc2a4\ud2b8\ud558\uae30",permalink:"/2017/03/12/testing-restful-api-servers"},nextItem:{title:"Jersey 2.x\uc5d0 \ub0b4\uc7a5\ub41c \uc758\uc874\uc131 \uc8fc\uc785 \uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30",permalink:"/2016/08/04/jersey-hk2"}},u={authorsImageUrls:[]},c=[{value:"RxJS \uc124\uce58\ud558\uae30",id:"rxjs-\uc124\uce58\ud558\uae30",level:2},{value:"DOM \uc774\ubca4\ud2b8\ub97c Observable\ub85c \ud45c\ud604\ud558\uae30",id:"dom-\uc774\ubca4\ud2b8\ub97c-observable\ub85c-\ud45c\ud604\ud558\uae30",level:2},{value:"<code>props</code>\uc5d0 \ub530\ub77c \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",id:"props\uc5d0-\ub530\ub77c-\ub124\ud2b8\uc6cc\ud06c-\uc694\uccad\uc744-\ud558\ub294-\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"<code>props</code>\ub97c Observable\ub85c \ud45c\ud604\ud558\uae30",id:"props\ub97c-observable\ub85c-\ud45c\ud604\ud558\uae30",level:2},{value:"GitHub API \ud638\ucd9c",id:"github-api-\ud638\ucd9c",level:2},{value:"\uc5f0\uc0b0\uc790\ub97c \ubd99\uc5ec\uc11c \uc798(?) \ucc98\ub9ac\ud558\uae30",id:"\uc5f0\uc0b0\uc790\ub97c-\ubd99\uc5ec\uc11c-\uc798-\ucc98\ub9ac\ud558\uae30",level:2},{value:"\uc785\ub825\ucc3d\uacfc \ud569\uce58\uae30",id:"\uc785\ub825\ucc3d\uacfc-\ud569\uce58\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],m={toc:c};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ucd5c\uadfc UI \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 Rx \ud328\ud134\uc774 \ub9ce\uc774 \uc4f0\uc774\uace0 \uc788\uc2b5\ub2c8\ub2e4. React\ub294 Rx\uc640 \uc774\ub984\uc740 \ube44\uc2b7\ud558\uc9c0\ub9cc \uc0c1\ud0dc\ub97c \ub2e4\ub8e8\ub294 \ubc29\uc2dd\uc740 \uba85\ub839\ud615\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4. ",(0,p.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/lifting-state-up.html"},"\uc0c1\ud0dc\ub97c \ucd5c\uc18c\ud654\ud558\uace0 \ucd5c\ub300\ud55c \ubc14\uae65\uc73c\ub85c \ubc00\uc5b4\ub0b4\ub294 \uc2dd"),"\uc73c\ub85c \ubb38\uc81c\ub97c \ud68c\ud53c\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uc5b4\ucc0c\ub418\uc5c8\ub4e0 \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ub2e4\ub904\uc57c \ud558\ub294 \uc0c1\ud669\uc774 \uc624\uace4 \ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub3c4 Rx\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud574\uc11c \ud55c\ubc88 \uc2dc\ub3c4\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. React\uc5d0 \uc775\uc219\ud558\ub2e4\ub294 \uac00\uc815\uc744 \ud558\uace0 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4. (Rx\uc5d0 \ub300\ud574 \uc798 \ubaa8\ub974\uc2e0\ub2e4\uba74 \ub2e4\ub978 \uae00\uc744 \uba87 \uac1c \uc77d\uc5b4\ubcf4\uace0 \uc624\uc2dc\uba74 \uc88b\uc2b5\ub2c8\ub2e4)"),(0,p.kt)("h2",{id:"rxjs-\uc124\uce58\ud558\uae30"},"RxJS \uc124\uce58\ud558\uae30"),(0,p.kt)("p",null,"(\uc774 \uae00\uc740 \uc5bc\ub9c8 \uc804 \uc815\uc2dd \ubc84\uc804\uc774 \ub098\uc628 ",(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/"},"RxJS 5"),"\ub97c \uae30\uc900\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.)"),(0,p.kt)("p",null,"npm\uc758 ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rxjs"},"rxjs")," \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\uba74 \ub429\ub2c8\ub2e4. (",(0,p.kt)("inlineCode",{parentName:"p"},"rx"),"\ub77c\ub294 \ud328\ud0a4\uc9c0\ub3c4 \uc788\ub294\ub370 \uc774\ucabd\uc740 RxJS \uad6c\ubc84\uc804\uc774\ubbc0\ub85c \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.)"),(0,p.kt)("h2",{id:"dom-\uc774\ubca4\ud2b8\ub97c-observable\ub85c-\ud45c\ud604\ud558\uae30"},"DOM \uc774\ubca4\ud2b8\ub97c Observable\ub85c \ud45c\ud604\ud558\uae30"),(0,p.kt)("p",null,"RxJS\uc5d0\ub294 DOM \ub178\ub4dc\uc758 \uc774\ubca4\ud2b8\ub97c \uc9c1\uc811 \uad6c\ub3c5\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc774 \uc81c\uacf5\ub418\uc9c0\ub9cc \uc5ec\uae30\uc11c\ub294 \uc9c1\uc811 React\uc758 \uc774\ubca4\ud2b8\ub97c Observable\ub85c \ubc14\uafd4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/class/es6/Subject.js~Subject.html"},"Subject"),"\ub97c \ub9cc\ub4e4\uace0 \uc785\ub825 \ub0b4\uc6a9\uc774 \ubc14\ub014 \ub54c\ub9c8\ub2e4 ",(0,p.kt)("inlineCode",{parentName:"p"},"next")," \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec Observer\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4."),(0,p.kt)("p",null,"Subject\ub294 Observable\uc774\uae30\ub3c4 \ud558\ubbc0\ub85c \uad6c\ub3c5\ud574\uc11c state\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\ubd05\ub2c8\ub2e4. \uc5ec\uae30\uae4c\uc9c0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c EventEmitter\uc640 \ub2e4\ub97c \uac83\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import * as Rx from 'rxjs';\n\nclass EventsExample extends React.Component {\n    constructor() {\n        super();\n        this.state = { text: '' };\n        this.text$ = new Rx.Subject();\n    }\n\n    render() {\n        return (\n            <div>\n                <input onChange={e => this.text$.next(e.target.value)} />\n                {this.state.text}\n            </div>\n        );\n    }\n\n    componentDidMount() {\n        this.text$.subscribe(text => this.setState({ text }));\n    }\n}\n")),(0,p.kt)("p",null,"\uc774\ubca4\ud2b8\ub97c \ubc14\ub85c \uad6c\ub3c5\ud558\ub294 \ub300\uc2e0 \uc911\uac04\uc5d0 \uc5f0\uc0b0\uc790\ub97c \ub123\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. ",(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter"},"filter"),"\ub85c \uae38\uc774\uac00 2\uae00\uc790 \uc774\uc0c1\uc77c \ub54c\ub9cc \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uace0, ",(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map"},"map"),"\uc73c\ub85c \ub4a4\uc5d0 \ubb38\uc790\uc5f4\uc744 \ub367\ubd99\uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ub807\uac8c \ud568\uc218\ud615 \uc5f0\uc0b0\uc790\ub97c \ud1b5\ud574 \uc774\ubca4\ud2b8 \uc2a4\ud2b8\ub9bc\uc744 \uc6d0\ud558\ub294 \ud615\ud0dc\ub85c \ubcc0\ud615\ud560 \uc218 \uc788\ub294 \uac83\uc774 Rx\uc758 \uc7a5\uc810\uc785\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"filter")," \uc678\uc5d0\ub3c4 \uc5ec\ub7ec\uac00\uc9c0 \uac15\ub825\ud55c \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"class EventsExample extends React.Component {\n    // ...\n\n    componentDidMount() {\n        this.text$\n            .filter(text => text.length >= 2)\n            .map(text => text + '!')\n            .subscribe(text => this.setState({ text }));\n    }\n}\n")),(0,p.kt)("h2",{id:"props\uc5d0-\ub530\ub77c-\ub124\ud2b8\uc6cc\ud06c-\uc694\uccad\uc744-\ud558\ub294-\ucef4\ud3ec\ub10c\ud2b8"},(0,p.kt)("inlineCode",{parentName:"h2"},"props"),"\uc5d0 \ub530\ub77c \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,p.kt)("p",null,"\uc5ec\uae30\uc11c\ubd80\ud130\ub294 \uac80\uc0c9\uc5b4\ub97c props\ub85c \ubc1b\uc544\uc11c GitHub API\ub97c \ud638\ucd9c\ud558\uace0 \ubc1b\uc544\uc628 \ub370\uc774\ud130\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc740 \ube44\ub3d9\uae30 \uc791\uc5c5\uc774\uae30 \ub54c\ubb38\uc5d0 \uc5ec\ub7ec\uac00\uc9c0 \ubcf5\uc7a1\ud55c \uc0c1\ud669\uc744 \ucc98\ub9ac\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\uc751\ub2f5\uc744 \ubc1b\uae30 \uc804\uc5d0 \ub2e4\ub978 \uac80\uc0c9\uc5b4\uac00 props\ub85c \ub4e4\uc5b4\uc624\uba74 \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\uc774\uc804 \uc694\uccad\uc758 \uc751\ub2f5\uc774 \uc0c8 \uc694\uccad\uc758 \uc751\ub2f5\ubcf4\ub2e4 \ub2a6\uac8c \ub3c4\ucc29\ud558\uba74 \ubb34\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4. (\ub610\ub294, \uc0c8 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74\uc11c \uc774\uc804 \uc694\uccad\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4.)"),(0,p.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 \ub2e4\uc2dc \uc694\uccad\uc744 \ubcf4\ub0b4\ubd05\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},"\uc7ac\uc2dc\ub3c4 \uc911\uc5d0\ub3c4 \ub2e4\ub978 \uac80\uc0c9\uc5b4\uac00 props\ub85c \ub4e4\uc5b4\uc624\uba74 \uc7ac\uc2dc\ub3c4\ub97c \uc911\ub2e8\ud569\ub2c8\ub2e4.")),(0,p.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\uc5d0 Rx\ub97c \uc774\uc6a9\ud558\uba74 \uae54\ub054\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"props\ub97c-observable\ub85c-\ud45c\ud604\ud558\uae30"},(0,p.kt)("inlineCode",{parentName:"h2"},"props"),"\ub97c Observable\ub85c \ud45c\ud604\ud558\uae30"),(0,p.kt)("p",null,"\uba3c\uc800 \uac80\uc0c9\uc5b4\uac00 props\uc5d0\uc11c \ub4e4\uc5b4\uc624\ubbc0\ub85c \uc774\ub97c Observable\ub85c \ub9cc\ub4e4 \uac83\uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc704\uc5d0\uc11c\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c Subject\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,p.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps")," \ub77c\uc774\ud504\uc0ac\uc774\ud074 \uba54\uc18c\ub4dc\uac00 \ubd88\ub9b4 \ub54c\ub9c8\ub2e4 \uc0c8 props\ub97c \uc804\ud30c\ud569\ub2c8\ub2e4. \ucd08\uae30\uac12\uc744 \ub098\ud0c0\ub0b4\uae30 \uc704\ud574 ",(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/class/es6/BehaviorSubject.js~BehaviorSubject.html"},"BehaviorSubject"),"\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,p.kt)("inlineCode",{parentName:"p"},"map")," \uc5f0\uc0b0\uc790\ub85c ",(0,p.kt)("inlineCode",{parentName:"p"},"props"),"\uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"query")," \ud504\ub85c\ud37c\ud2f0\ub9cc\uc744 \ucde8\ud588\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"class SearchExample extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { data: null };\n        this.props$ = new Rx.BehaviorSubject(props);\n    }\n\n    componentWillReceiveProps(nextProps) {\n        this.props$.next(nextProps);\n    }\n\n    componentWillUnmount() {\n        this.props$.complete();\n    }\n\n    render() {\n        const data = this.state.data;\n        return <ul>{data && data.map(item => <li>{item.login}</li>)}</ul>;\n    }\n\n    componentDidMount() {\n        const query$ = this.props$.map(props => props.query);\n        query$.subscribe(query => console.log(query));\n    }\n}\n")),(0,p.kt)("h2",{id:"github-api-\ud638\ucd9c"},"GitHub API \ud638\ucd9c"),(0,p.kt)("p",null,"RxJS\uc758 AjaxObservable\ub85c GitHub API\ub97c \ud638\ucd9c\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. RxJS 5\uac00 \ub098\uc628\uc9c0 \uc544\uc9c1 \uc5bc\ub9c8 \ub418\uc9c0 \uc54a\uc544\uc11c \ubb38\uc11c\ud654\uac00 \uc81c\ub300\ub85c \ub418\uc5b4\uc788\uc9c0 \uc54a\uc740\ub370 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// \uc8fc\uc758: subscribe\ub97c \ud560 \ub54c\ub9c8\ub2e4 \uc694\uccad\uc744 \uc804\uc1a1\ud568\nRx.Observable.ajax.get('https://api.github.com/search/users?q=dittos')\n    .map(r => r.response.items)\n    .subscribe(data => console.log(data));\n")),(0,p.kt)("p",null,"\uc774\uc81c ",(0,p.kt)("inlineCode",{parentName:"p"},"query"),"\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \uc694\uccad\uc744 \ubcf4\ub0b4\ub824\uba74 \uac01 ",(0,p.kt)("inlineCode",{parentName:"p"},"query"),"\ub97c ",(0,p.kt)("a",{parentName:"p",href:"http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap"},"mergeMap"),"\ud558\uc5ec AjaxObservable\ub85c \ubc14\uafd4\uc90d\ub2c8\ub2e4. (",(0,p.kt)("inlineCode",{parentName:"p"},"flatMap"),"\uc73c\ub85c \ubd88\ub9ac\uae30\ub3c4 \ud558\ub294 \uc5f0\uc0b0\uc790\uc785\ub2c8\ub2e4.)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"class SearchExample extends React.Component {\n    // ...\n\n    componentDidMount() {\n        const query$ = this.props$.map(props => props.query);\n        const result$ = query$.mergeMap(query => {\n            if (query === '')\n                return Rx.Observable.of(null);\n            else\n                return Rx.Observable.ajax.get('https://api.github.com/search/users?q=' + query)\n                    .map(r => r.response.items);\n        });\n        result$.subscribe(data => this.setState({ data }));\n    }\n}\n")),(0,p.kt)("h2",{id:"\uc5f0\uc0b0\uc790\ub97c-\ubd99\uc5ec\uc11c-\uc798-\ucc98\ub9ac\ud558\uae30"},"\uc5f0\uc0b0\uc790\ub97c \ubd99\uc5ec\uc11c \uc798(?) \ucc98\ub9ac\ud558\uae30"),(0,p.kt)("p",null,"\uc704\uc5d0\uc11c \ub098\uc5f4\ud55c \uc694\uad6c\uc0ac\ud56d\uc744 \ub9cc\uc871\ud558\uae30 \uc704\ud574 Rx \uc5f0\uc0b0\uc790\ub97c \ucd94\uac00\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\uc774\uc804 \uc694\uccad\uc758 \uc751\ub2f5\uc774 \uc0c8 \uc694\uccad\uc758 \uc751\ub2f5\ubcf4\ub2e4 \ub2a6\uac8c \ub3c4\ucc29\ud558\uba74 \ubb34\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4"),(0,p.kt)("inlineCode",{parentName:"li"},"mergeMap"),"\uc740 \uc694\uccad\uc774 \ub4e4\uc5b4\uac04 \uc21c\uc11c\ub97c \ub530\uc9c0\uc9c0 \uc54a\uace0 \uc751\ub2f5\uc774 \ub3c4\ucc29\ud558\ub294 \ub300\ub85c \ubfdc\uc5b4\ub0c5\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"li"},"switchMap"),"\uc73c\ub85c \ubcc0\uacbd\ud574\uc11c \uc774\uc804 \uc694\uccad\uc744 \ucde8\uc18c\ud558\ub3c4\ub85d \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (",(0,p.kt)("inlineCode",{parentName:"li"},"switchMap"),"\uc740 ",(0,p.kt)("inlineCode",{parentName:"li"},"flatMapLatest"),"\ub85c \ubd88\ub9ac\uae30\ub3c4 \ud569\ub2c8\ub2e4.)"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 \ub2e4\uc2dc \uc694\uccad\uc744 \ubcf4\ub0b4\ubd05\ub2c8\ub2e4"),(0,p.kt)("inlineCode",{parentName:"li"},"retry"),"\ub97c \uc801\uc6a9\ud558\uba74 Observable\uc774 \uc2e4\ud328 \uc0c1\ud0dc\ub85c \ub05d\ub0ac\uc744 \ub54c \ub2e4\uc2dc Observable\uc744 \uad6c\ub3c5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\uc7ac\uc2dc\ub3c4 \uc911\uc5d0\ub3c4 \ub2e4\ub978 \uac80\uc0c9\uc5b4\uac00 props\ub85c \ub4e4\uc5b4\uc624\uba74 \uc7ac\uc2dc\ub3c4\ub97c \uc911\ub2e8\ud569\ub2c8\ub2e4."),"\n\uc774\ubbf8 ",(0,p.kt)("inlineCode",{parentName:"li"},"switchMap"),"\uc73c\ub85c \ubcc0\uacbd\ud588\uc73c\ubbc0\ub85c \uc790\ub3d9\uc73c\ub85c \uc7ac\uc2dc\ub3c4\uac00 \uc911\ub2e8\ub429\ub2c8\ub2e4. :)")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"class SearchExample extends React.Component {\n    // ...\n\n    componentDidMount() {\n        const query$ = this.props$.map(props => props.query);\n        const result$ = query$.switchMap(query => {\n            if (query === '')\n                return Rx.Observable.of(null);\n            else\n                return Rx.Observable.ajax.get('https://api.github.com/search/users?q=' + query)\n                    .map(r => r.response.items)\n                    .retry(3);\n        });\n        result$.subscribe(data => this.setState({ data }));\n    }\n}\n")),(0,p.kt)("h2",{id:"\uc785\ub825\ucc3d\uacfc-\ud569\uce58\uae30"},"\uc785\ub825\ucc3d\uacfc \ud569\uce58\uae30"),(0,p.kt)("p",null,"\ucc98\uc74c\uc758 DOM \uc774\ubca4\ud2b8 \uc608\uc81c\uc640 \uacb0\ud569\ud558\uc5ec \uc804\uccb4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc644\uc131\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"text$"),"\uc5d0 ",(0,p.kt)("inlineCode",{parentName:"p"},"debounceTime")," \uc5f0\uc0b0\uc790\ub97c \uc801\uc6a9\ud574\uc11c \uac80\uc0c9 \uc694\uccad\uc774 \ub108\ubb34 \ube60\ub974\uac8c \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"class EventsExample extends React.Component {\n    constructor() {\n        super();\n        this.state = { text: '' };\n        this.text$ = new Rx.Subject();\n    }\n\n    render() {\n        return (\n            <div>\n                <input onChange={e => this.text$.next(e.target.value)} />\n                <SearchExample query={this.state.text} />\n            </div>\n        );\n    }\n\n    componentDidMount() {\n        this.text$.debounceTime(200)\n            .subscribe(text => this.setState({ text }));\n    }\n}\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"http://codepen.io/dittos/pen/QGZewb"},"CodePen"),"\uc5d0\uc11c \uc2e4\ud589\ud574\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,p.kt)("p",null,"React\uc5d0\uc11c \ubcf5\uc7a1\ud55c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud574\uc57c \ud560 \ub54c RxJS\ub97c \uc0ac\uc6a9\ud574\ubcf4\ub294 \uac83\ub3c4 \ub098\uc058\uc9c0 \uc54a\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \uc0c1\ud0dc\ub97c \ucd5c\uc18c\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uba3c\uc800 \uc0dd\uac01\ud574\ubcf4\ub294 \uac8c \uc911\uc694\ud569\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);