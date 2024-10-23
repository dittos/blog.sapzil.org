"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[574],{1235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(4848),a=t(8453);const r={layout:"post",title:"jQuery to React",tags:["jquery","react","javascript","web"]},i=void 0,c={permalink:"/2014/08/10/jquery-to-react",source:"@site/blog/2014-08-10-jquery-to-react.md",title:"jQuery to React",description:"\uc5c5\ub370\uc774\ud2b8: React 0.13\uc5d0 \ub9de\ucdb0 \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4. (2015\ub144 5\uc6d4 14\uc77c)",date:"2014-08-10T00:00:00.000Z",tags:[{inline:!0,label:"jquery",permalink:"/tags/jquery"},{inline:!0,label:"react",permalink:"/tags/react"},{inline:!0,label:"javascript",permalink:"/tags/javascript"},{inline:!0,label:"web",permalink:"/tags/web"}],readingTime:13.87,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"jQuery to React",tags:["jquery","react","javascript","web"]},unlisted:!1,prevItem:{title:"Upstart\ub85c \uc624\ub798 \ub3c4\ub294 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac\ud558\uae30",permalink:"/2014/08/12/upstart"}},d={authorsImageUrls:[]},l=[{value:"\uccab \uac78\uc74c",id:"\uccab-\uac78\uc74c",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8",id:"\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"DOM ready \uc774\ubca4\ud2b8 \uc5c6\uc560\uae30",id:"dom-ready-\uc774\ubca4\ud2b8-\uc5c6\uc560\uae30",level:2},{value:"submit \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec",id:"submit-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec",level:2},{value:"DOM \ucffc\ub9ac \uc5c6\uc560\uae30",id:"dom-\ucffc\ub9ac-\uc5c6\uc560\uae30",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8 \uac04 \ud1b5\uc2e0",id:"\ucef4\ud3ec\ub10c\ud2b8-\uac04-\ud1b5\uc2e0",level:2},{value:"append \uc5c6\uc560\uae30",id:"append-\uc5c6\uc560\uae30",level:2},{value:"\ub370\uc774\ud130\uc640 \ud45c\ud604 \ubd84\ub9ac",id:"\ub370\uc774\ud130\uc640-\ud45c\ud604-\ubd84\ub9ac",level:2},{value:"\ucd5c\uc885 \ucf54\ub4dc",id:"\ucd5c\uc885-\ucf54\ub4dc",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\uc5c5\ub370\uc774\ud2b8: React 0.13\uc5d0 \ub9de\ucdb0 \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4. (2015\ub144 5\uc6d4 14\uc77c)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://facebook.github.io/react/",children:"React"}),"\ub294 Facebook\uc5d0\uc11c \ub9cc\ub4e0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 UI \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uac04\ub2e8\ud55c jQuery \ucf54\ub4dc\ub97c React \uc571\uc73c\ub85c \uc870\uae08\uc529 \ubc14\uafd4\uac00\uba74\uc11c React\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ub3d5\ub294 \uac83\uc774 \uc774 \uae00\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \ub9db\ubcf4\uae30 \uc815\ub3c4\ub85c \uc0dd\uac01\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. ",(0,s.jsx)(n.a,{href:"http://open.bekk.no/from-jquery-to-backbone",children:"Step by step from jQuery to Backbone"}),"\uc5d0\uc11c \uc544\uc774\ub514\uc5b4\ub97c \ucc28\uc6a9\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uc2dc\uc791\ud558\uae30\uc5d0 \uc55e\uc11c \uc608\uc81c\ub85c \uc0ac\uc6a9\ud560 \ub9c8\ud06c\uc5c5 \ubc0f jQuery \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<body>\n    <div class=\"new-status\">\n        <h2>New monolog</h2>\n        <form action=\"\">\n            <textarea></textarea><br>\n            <input type=\"submit\" value=\"Post\">\n        </form>\n    </div>\n\n    <div class=\"statuses\">\n        <h2>Monologs</h2>\n        <ul></ul>\n    </div>\n\n    <script src=\"http://code.jquery.com/jquery-1.11.0.min.js\"><\/script>\n    <script>\n    $(document).ready(function() {\n        $('.new-status form').submit(function(e) {\n            e.preventDefault();\n\n            $.ajax({\n                url: '/status',\n                type: 'POST',\n                dataType: 'json',\n                data: { text: $('.new-status').find('textarea').val() },\n                success: function(data) {\n                    $('.statuses').append('<li>' + data.text + '</li>');\n                    $('.new-status').find('textarea').val('');\n                }\n            });\n        });\n    });\n    <\/script>\n</body>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uad6c\ud604\ud55c \uaf64\ub098 \ud3c9\ubc94\ud55c \ucf54\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uae00 \ub0b4\uc6a9\uc744 \uc785\ub825\ud560 \uc218 \uc788\ub294 \uce78\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"\ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\ud55c \ub0b4\uc6a9\uc744 \uc11c\ubc84\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"\uc694\uccad\uc774 \uc131\uacf5\ud558\uba74 \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud55c \uae00\uc744 \ub367\ubd99\uc774\uace0 \uc785\ub825\ucc3d\uc758 \ub0b4\uc6a9\uc744 \ube44\uc6c1\ub2c8\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uccab-\uac78\uc74c",children:"\uccab \uac78\uc74c"}),"\n",(0,s.jsxs)(n.p,{children:["React \ub77c\uc774\ube0c\ub7ec\ub9ac \ud30c\uc77c\uc744 \ubd88\ub7ec\uc624\uace0, \ub9c8\ud06c\uc5c5\uc744 React\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc77c\uc885\uc758 \ud15c\ud50c\ub9bf \uc5b8\uc5b4\uc778 ",(0,s.jsx)(n.strong,{children:"JSX"})," \ud615\uc2dd\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<body>\n    <script src="http://code.jquery.com/jquery-1.11.0.min.js"><\/script>\n    <script src="http://fb.me/react-0.13.3.js"><\/script>\n    <script src="http://fb.me/JSXTransformer-0.13.3.js"><\/script>\n    <script type="text/jsx">\n    React.render(\n        <div className="app">\n            <div className="new-status">\n                <h2>New monolog</h2>\n                <form action="">\n                    <textarea /><br />\n                    <input type="submit" value="Post" />\n                </form>\n            </div>\n\n            <div className="statuses">\n                <h2>Monologs</h2>\n                <ul></ul>\n            </div>\n        </div>\n    , document.body);\n\n    $(document).ready(function() {\n        // \uc544\uae4c \ucf54\ub4dc \uadf8\ub300\ub85c\n    });\n    <\/script>\n</body>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["JSX\ub97c \uc0ac\uc6a9\ud558\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc640 HTML \ucf54\ub4dc\ub97c \uc11e\uc744 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. JSX \ucf54\ub4dc\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,s.jsx)(n.code,{children:'<a href="http://example.com/"><b>Link</b></a>'}),"\ub294 ",(0,s.jsx)(n.code,{children:"React.createElement('a', {href: \"http://example.com/\"}, React.createElement('b', null, \"Link\"))"}),"\ub85c \ubc14\ub01d\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["React\uc640 \ud568\uaed8 \ud3ec\ud568\uc2dc\ud0a8 JSXTransformer\uac00 \uc774\ub7ec\ud55c \ubcc0\ud658 \uc791\uc5c5\uc744 \ud574\uc90d\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c ",(0,s.jsx)(n.code,{children:'type="text/jsx"'}),"\uc778 ",(0,s.jsx)(n.code,{children:"<script>"})," \ud0dc\uadf8\ub97c \ucc3e\uc544\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"JSX\ub294 HTML\uacfc \ube44\uc2b7\ud558\uae34 \ud558\uc9c0\ub9cc \uc57d\uac04 \ub2e4\ub985\ub2c8\ub2e4. \ub2e4\uc18c \ud5f7\uac08\ub9b4 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uba87\uac00\uc9c0 \uc0ac\ud56d\ub9cc \uc8fc\uc758\ud558\uba74 \ub429\ub2c8\ub2e4. \ucc98\uc74c\uc758 HTML \ub9c8\ud06c\uc5c5\uacfc \ub2ec\ub77c\uc9c4 \ubd80\ubd84\uc744 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud55c\ubc88 \uc5f4\ub9b0 \ud0dc\uadf8\ub294 \ubc18\ub4dc\uc2dc \ub2eb\uc544\uc57c \ud569\ub2c8\ub2e4: ",(0,s.jsx)(n.code,{children:"<br>"}),"\uacfc ",(0,s.jsx)(n.code,{children:"<input>"}),"\uc774 ",(0,s.jsx)(n.code,{children:"<br />"}),", ",(0,s.jsx)(n.code,{children:"<input />"}),"\uc73c\ub85c \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc77c\ubd80 \uc18d\uc131\uc758 \uc774\ub984\uc774 \ub2e4\ub985\ub2c8\ub2e4: ",(0,s.jsx)(n.code,{children:"class"}),"\uac00 ",(0,s.jsx)(n.code,{children:"className"}),"\uc73c\ub85c \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4. (",(0,s.jsx)(n.a,{href:"http://reactkr.github.io/react/docs/tags-and-attributes-ko-KR.html",children:"\uc804\uccb4 \ubaa9\ub85d"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["\ucd5c\uc0c1\uc704 \ub178\ub4dc\uac00 \ud544\uc694\ud569\ub2c8\ub2e4: \ub530\ub77c\uc11c ",(0,s.jsx)(n.code,{children:'<div className="app">'}),"\uc73c\ub85c \ud55c\ubc88 \uac10\uc30c\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"React.render"})," \ud568\uc218\ub294 \uccab\ubc88\uc9f8 \uc778\uc790\ub85c \ubc1b\uc740 JSX \ucf54\ub4dc\ub97c \ub450\ubc88\uc9f8 \uc778\uc790\uc758 DOM \ub178\ub4dc\uc5d0 \ucd9c\ub825\ud574\uc90d\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"document.body"}),", \uc989 ",(0,s.jsx)(n.code,{children:"<body>"})," \ud0dc\uadf8\uc5d0 \ub9c8\ud06c\uc5c5\uc744 \ucd9c\ub825\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\ucef4\ud3ec\ub10c\ud2b8",children:"\ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsxs)(n.p,{children:["React\uac00 \uc81c\uacf5\ud558\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \uae30\ub2a5\uc740 ",(0,s.jsx)(n.strong,{children:"\ucef4\ud3ec\ub10c\ud2b8"}),"\uc785\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud1b5\ud574 UI \uc694\uc18c\ub97c \ucd94\uc0c1\ud654\ud558\uace0 \uc870\ub9bd\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. \ub9d0\ub85c \uc124\uba85\ud558\uba74 \uc5b4\ub824\uc6b0\ub2c8 \ucf54\ub4dc\ub97c \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'var NewStatus = React.createClass({\n    render: function() {\n        return <div className="new-status">\n            <h2>New monolog</h2>\n            <form action="">\n                <textarea /><br />\n                <input type="submit" value="Post" />\n            </form>\n        </div>;\n    }\n});\n\nvar App = React.createClass({\n    render: function() {\n        return <div className="app">\n            <NewStatus />\n            <div className="statuses">\n                <h2>Monologs</h2>\n                <ul></ul>\n            </div>\n        </div>;\n    }\n});\n\nReact.render(<App />, document.body);\n\n$(document).ready(function() {\n    // \uc544\uae4c \ucf54\ub4dc \uadf8\ub300\ub85c\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\uc571 \uc804\uccb4\ub97c ",(0,s.jsx)(n.code,{children:"App"})," \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc9d1\uc5b4\ub123\uace0, \uae00 \uc785\ub825 \ud3fc\uc744 ",(0,s.jsx)(n.code,{children:"NewStatus"})," \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd84\ub9ac\ud588\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"React.createClass"})," \ud568\uc218\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc120\uc5b8\ud558\uace0, ",(0,s.jsx)(n.strong,{children:"render"})," \uba54\uc18c\ub4dc\uc5d0\uc11c JSX \ucf54\ub4dc\ub97c \ub9ac\ud134\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"dom-ready-\uc774\ubca4\ud2b8-\uc5c6\uc560\uae30",children:"DOM ready \uc774\ubca4\ud2b8 \uc5c6\uc560\uae30"}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\uc81c\ub294 jQuery\ub97c \uc4f0\ub358 \ubd80\ubd84\uc744 \ud558\ub098\uc529 \uc5c6\uc560\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uba3c\uc800 ",(0,s.jsx)(n.code,{children:"$(document).ready(...)"}),"\ub97c \uc5c6\uc560\ubcfc\uae4c\uc694?"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var NewStatus = React.createClass({\n    render: function() {\n        // \uc544\uae4c \ucf54\ub4dc \uadf8\ub300\ub85c\n    },\n    componentDidMount: function() {\n        $('.new-status form').submit(function(e) {\n            e.preventDefault();\n\n            $.ajax({\n                url: '/status',\n                type: 'POST',\n                dataType: 'json',\n                data: { text: $('.new-status').find('textarea').val() },\n                success: function(data) {\n                    $('.statuses').append('<li>' + data.text + '</li>');\n                    $('.new-status').find('textarea').val('');\n                }\n            });\n        });\n    }\n});\n\n...\n\n//$(document).ready(function() {\n//    ...\n//});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NewStatus"})," \ucef4\ud3ec\ub10c\ud2b8\uc758 ",(0,s.jsx)(n.strong,{children:"componentDidMount"})," \uba54\uc18c\ub4dc\ub85c DOM ready \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \ub0b4\uc6a9\uc744 \uc62e\uacbc\uc2b5\ub2c8\ub2e4. componentDidMount \uba54\uc18c\ub4dc\ub294 DOM \ub178\ub4dc\uac00 \uc2e4\uc81c\ub85c \ubb38\uc11c\uc5d0 \ucd94\uac00\ub41c \uc774\ud6c4\uc5d0 \ud638\ucd9c\ub418\ubbc0\ub85c, \uc774\uc804 \ucf54\ub4dc\uc640 \uac19\uc740 \ub3d9\uc791\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"submit-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec",children:"submit \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"}),"\n",(0,s.jsxs)(n.p,{children:["JSX\uc5d0\uc11c\ub294 \uc18d\uc131\uc5d0 \ubb38\uc790\uc5f4 \ub300\uc2e0 JS \ud45c\ud604\uc2dd\uc744 \ubc14\ub85c \ub123\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc774\uc6a9\ud558\uba74 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ud568\uc218\ub97c ",(0,s.jsx)(n.code,{children:"<form>"})," \ud0dc\uadf8\uc5d0 \ubc14\ub85c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"var NewStatus = React.createClass({\n    render: function() {\n        return <div className=\"new-status\">\n            <h2>New monolog</h2>\n-           <form action=\"\">\n+           <form action=\"\" onSubmit={this.handleSubmit}>\n                <textarea /><br />\n                <input type=\"submit\" value=\"Post\" />\n            </form>\n        </div>;\n    },\n-   componentDidMount: function() {\n-       $('.new-status form').submit(function(e) {\n+   handleSubmit: function(e) {\n            e.preventDefault();\n\n            $.ajax({\n                url: '/status',\n                type: 'POST',\n                dataType: 'json',\n                data: { text: $('.new-status').find('textarea').val() },\n                success: function(data) {\n                    $('.statuses').append('<li>' + data.text + '</li>');\n                    $('.new-status').find('textarea').val('');\n                }\n            });\n-       });\n    }\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c JS \ud45c\ud604\uc2dd\uc744 \uc18d\uc131\uc73c\ub85c \ub123\uc744 \ub54c\ub294 \ub530\uc634\ud45c \ub300\uc2e0 \uc911\uad04\ud638\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub355\ubd84\uc5d0 componentDidMount\uac00 \ud544\uc694 \uc5c6\uc5b4\uc84c\ub124\uc694."}),"\n",(0,s.jsx)(n.h2,{id:"dom-\ucffc\ub9ac-\uc5c6\uc560\uae30",children:"DOM \ucffc\ub9ac \uc5c6\uc560\uae30"}),"\n",(0,s.jsxs)(n.p,{children:["JSX \ud0dc\uadf8\uc5d0 ",(0,s.jsx)(n.code,{children:"ref"})," \uc18d\uc131\uc744 \ucd94\uac00\ud558\uba74 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc5d0\uc11c \uadf8 \ub178\ub4dc\uc5d0 \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"var NewStatus = React.createClass({\n    render: function() {\n        return <div className=\"new-status\">\n            <h2>New monolog</h2>\n            <form action=\"\" onSubmit={this.handleSubmit}>\n-               <textarea /><br />\n+               <textarea ref=\"text\" /><br />\n                <input type=\"submit\" value=\"Post\" />\n            </form>\n        </div>;\n    },\n    handleSubmit: function(e) {\n        e.preventDefault();\n\n+       var $text = $(React.findDOMNode(this.refs.text));\n        $.ajax({\n            url: '/status',\n            type: 'POST',\n            dataType: 'json',\n-           data: { text: $('.new-status').find('textarea').val() },\n+           data: { text: $text.val() },\n            success: function(data) {\n                $('.statuses').append('<li>' + data.text + '</li>');\n-               $('.new-status').find('textarea').val('');\n+               $text.val('');\n            }\n        });\n    }\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"React.findDOMNode"})," \ud568\uc218\ub294 \uc65c \ud544\uc694\ud55c \uac83\uc77c\uae4c\uc694? \uc0ac\uc2e4\uc740 ",(0,s.jsx)(n.code,{children:"<textarea>"})," \uac19\uc740 JSX \ud0dc\uadf8\ub3c4 React \ucef4\ud3ec\ub10c\ud2b8\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\ub294 DOM \ub178\ub4dc\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574 \ubcc4\ub3c4\uc758 \ud568\uc218\ub97c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\ucef4\ud3ec\ub10c\ud2b8-\uac04-\ud1b5\uc2e0",children:"\ucef4\ud3ec\ub10c\ud2b8 \uac04 \ud1b5\uc2e0"}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\uc81c ",(0,s.jsx)(n.code,{children:"$('.statuses')"}),"\ub97c \uc5c6\uc560\uc57c \ud558\ub294\ub370, ref\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc5b4\ub3c4 \uadf8\uac83\uc774 \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc18d\ud574 \uc788\uc5b4\uc11c \uc4f8 \uc218\uac00 \uc5c6\ub124\uc694. \uc5b4\ub5bb\uac8c \ud558\uba74 App \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc744\uae4c\uc694?"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"var NewStatus = React.createClass({\n    render: function() {\n        // \uadf8\ub300\ub85c\n    },\n    handleSubmit: function(e) {\n        e.preventDefault();\n\n+       var self = this;\n        var $text = $(React.findDOMNode(this.refs.text));\n        $.ajax({\n            url: '/status',\n            type: 'POST',\n            dataType: 'json',\n            data: { text: $text.val() },\n            success: function(data) {\n-               $('.statuses').append('<li>' + data.text + '</li>');\n+               self.props.onCreate(data);\n                $text.val('');\n            }\n        });\n    }\n});\n\nvar App = React.createClass({\n    render: function() {\n        return <div className=\"app\">\n-           <NewStatus />\n+           <NewStatus onCreate={this.handleCreate} />\n            <div className=\"statuses\">\n                <h2>Monologs</h2>\n-               <ul></ul>\n+               <ul ref=\"items\"></ul>\n            </div>\n        </div>;\n-   }\n+   },\n+   handleCreate: function(data) {\n+       $(React.findDOMNode(this.refs.items)).append('<li>' + data.text + '</li>');\n+   }\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["React\uc5d0\uc11c\ub294 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub370\uc774\ud130\uac00 \ud56d\uc0c1 \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd \ubc29\ud5a5\uc73c\ub85c\ub9cc \uc804\ub2ec\ub429\ub2c8\ub2e4. \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub370\uc774\ud130\ub97c \ub118\uaca8\uc904 \ub54c\ub294 ",(0,s.jsx)(n.strong,{children:"prop"}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. JSX \ud0dc\uadf8\uc758 \uc18d\uc131\uc744 \ubaa8\ub450 ",(0,s.jsx)(n.code,{children:"this.props"}),"\uc5d0\uc11c \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"onCreate"}),"\ub77c\ub294 \uc18d\uc131\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"handleCreate"})," \uba54\uc18c\ub4dc\ub97c \ub118\uaca8\uc8fc\uc5c8\uace0, NewStatus \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"this.props.onCreate"}),"\ub85c \uc811\uadfc\ud569\ub2c8\ub2e4. (JS\uc5d0\uc11c this\ub294 \uc2a4\ucf54\ud504\ub97c \ub530\ub974\uc9c0 \uc54a\uc73c\ubbc0\ub85c self\ub77c\ub294 \ubcc0\uc218\uc5d0 \uc784\uc2dc\ub85c \ub123\uc5c8\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\uc81c ",(0,s.jsx)(n.code,{children:"handleCreate"})," \ud568\uc218\uac00 App \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc18d\ud574\uc788\uc73c\ubbc0\ub85c ref\ub97c \ub9cc\ub4e4\uc5b4\uc11c ",(0,s.jsx)(n.code,{children:"<ul>"})," \uc694\uc18c\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"append-\uc5c6\uc560\uae30",children:"append \uc5c6\uc560\uae30"}),"\n",(0,s.jsx)(n.p,{children:"\uc774\uc81c \ub9ac\uc2a4\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\ub294 \ucf54\ub4dc\ub97c React\ub85c \ub300\uccb4\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uae30\uc874 \ucf54\ub4dc\uc758 \ub610 \ud55c\uac00\uc9c0 \ubb38\uc81c\ub294 HTML\uc744 \ud55c\ub540\ud55c\ub540 \ubb38\uc790\uc5f4\ub85c \ub9cc\ub4e4\uace0 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub9cc\uc57d \ub0b4\uc6a9\uc5d0 HTML\uc774 \ub4e4\uc5b4\uac04\ub2e4\uba74 XSS \ucde8\uc57d\uc810\uc774 \ubc1c\uc0dd\ud560 \uac81\ub2c8\ub2e4. JSX\ub294 \uc790\ub3d9\uc73c\ub85c HTML escape\ub97c \ud574\uc8fc\ub294\ub370, \uc774 \ucf54\ub4dc\ub97c JSX\ub85c \ubc14\uafc0 \uc218\ub294 \uc5c6\uc744\uae4c\uc694?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'var App = React.createClass({\n+   getInitialState: function() {\n+       return {items: []};\n+   },\n    render: function() {\n        return <div className="app">\n            <NewStatus onCreate={this.handleCreate} />\n            <div className="statuses">\n                <h2>Monologs</h2>\n-               <ul ref="items"></ul>\n+               <ul>{this.state.items}</ul>\n            </div>\n        </div>;\n    },\n    handleCreate: function(data) {\n-       $(React.findDOMNode(this.refs.items)).append(\'<li>\' + data.text + \'</li>\');\n+       this.setState({\n+           items: this.state.items.concat(<li>{data.text}</li>)\n+       });\n    }\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"React\uc5d0\uc11c\ub294 DOM\uc744 \uc9c1\uc811 \uc218\uc815\ud558\ub294 API\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8 \ub300\uc2e0 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc644\uc804\ud788 \uc0c8\ub85c \ub80c\ub354\ub9c1\ud560 \uc218\ub294 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc0c8\ub85c\uc6b4 \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\uae30 \uc804\uc5d0 \uc788\ub358 \uae30\uc874 \ud56d\ubaa9\ub4e4\uc744 \ubaa8\ub450 \uc800\uc7a5\ud558\uace0 \uc788\ub2e4\uba74, \uc0c8\ub85c \ub80c\ub354\ub9c1\ud560 \ub54c \uadf8 \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uac81\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c\ub294 \uae30\uc874 \ud56d\ubaa9\uc744 \uae30\uc5b5\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(n.strong,{children:"state"}),"\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"getInitialState"}),"\uc5d0\uc11c \ucd08\uae30\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uace0, \ub2e4\ub978 \uba54\uc18c\ub4dc\uc5d0\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"this.state"}),"\uc5d0 \uc811\uadfc\ud558\uc5ec \uac12\uc744 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",(0,s.jsx)(n.code,{children:"setState"})," \uba54\uc18c\ub4dc\ub85c \uac12\uc744 \uc218\uc815\ud558\uba74 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ub610 \ud55c \uac00\uc9c0 \uc0c8\ub85c\uc6b4 \uac1c\ub150\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud45c\ud604\uc2dd\uc744 JSX \ud0dc\uadf8\uc758 \ub0b4\uc6a9\uc5d0 \uc9d1\uc5b4\ub123\uc740 \uac83\uc785\ub2c8\ub2e4. \ubb38\uc790\uc5f4\uc774\ub098 \ubc30\uc5f4, \ub610\ub294 JSX \ucf54\ub4dc\ub97c \uc911\uad04\ud638\ub85c \uac10\uc2f8 \ub123\uc73c\uba74 \uadf8 \uc790\ub9ac\uc5d0 \ub4e4\uc5b4\uac11\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"state"}),"\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \ub80c\ub354\ub9c1\uc744 \ud558\uba74 \ub290\ub824\uc9c0\uc9c0 \uc54a\uc744\uae4c\uc694? \ubb3c\ub860 \uc9c1\uc811 DOM\uc744 \uc218\uc815\ud558\ub294 \uac83\ub9cc\ud07c \ube60\ub974\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc, React\uac00 \uae30\uc874\uc5d0 \ub80c\ub354\ub9c1 \ub41c \ub0b4\uc6a9\uacfc \uc0c8\ub85c \ub80c\ub354\ub9c1 \ub420 \ub0b4\uc6a9\uc744 \ube44\uad50\ud558\uc5ec \ubc14\ub010 \ubd80\ubd84\ub9cc \ub80c\ub354\ub9c1\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0c1\ub2f9\ud788 \ube60\ub985\ub2c8\ub2e4. \ub610\ud55c \ucc28\uc774\uc810\ub9cc \ubc18\uc601\ub418\uae30 \ub54c\ubb38\uc5d0, App \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ub418\uc5b4\ub3c4 NewStatus \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub4e4\uc5b4\uc788\ub294 ",(0,s.jsx)(n.code,{children:"<textarea>"}),"\uc758 \ub0b4\uc6a9\uc774\ub098 \uc120\ud0dd \uc0c1\ud0dc\uac00 \uc0ac\ub77c\uc9c0\uc9c0 \uc54a\uace0 \uc720\uc9c0\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\ub370\uc774\ud130\uc640-\ud45c\ud604-\ubd84\ub9ac",children:"\ub370\uc774\ud130\uc640 \ud45c\ud604 \ubd84\ub9ac"}),"\n",(0,s.jsxs)(n.p,{children:["\uc9c0\uae08\uc740 ",(0,s.jsx)(n.code,{children:"this.state.items"}),"\uc5d0 JSX \ucf54\ub4dc\ub97c \ubc14\ub85c \uc9d1\uc5b4\ub123\uc5c8\uc9c0\ub9cc, \uc774\ub807\uac8c \ud558\uba74 \ub098\uc911\uc5d0 \ub2e4\ub978 \ub9c8\ud06c\uc5c5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c \ubb38\uc81c\uac00 \uc0dd\uae38 \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ucd94\uac00\ub41c \ud56d\ubaa9\ub9cc \ub2e4\ub978 \uc2a4\ud0c0\uc77c\ub85c \ubcf4\uc5ec\uc8fc\uace0 \uc2f6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694."]}),"\n",(0,s.jsx)(n.p,{children:"\ub530\ub77c\uc11c state\uc5d0\ub294 \uc21c\uc218\ud55c \ub370\uc774\ud130\ub9cc \ub123\uace0, JSX\ub294 \ubaa8\ub450 render \uba54\uc18c\ub4dc \uc548\uc5d0\uc11c \uc0dd\uc131\ud558\ub3c4\ub85d \uc218\uc815\ud569\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'var App = React.createClass({\n    getInitialState: function() {\n        return {items: []};\n    },\n    render: function() {\n        return <div className="app">\n            <NewStatus onCreate={this.handleCreate} />\n            <div className="statuses">\n                <h2>Monologs</h2>\n-               <ul>{this.state.items}</ul>\n+               <ul>{this.state.items.map(function(item) {\n+                   return <li>{item.text}</li>;\n+               })}</ul>\n            </div>\n        </div>;\n    },\n    handleCreate: function(data) {\n        this.setState({\n-           items: this.state.items.concat(<li>{data.text}</li>)\n+           items: this.state.items.concat(data)\n        });\n    }\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\ucd5c\uc885-\ucf54\ub4dc",children:"\ucd5c\uc885 \ucf54\ub4dc"}),"\n",(0,s.jsx)(n.p,{children:"\uc544\uc9c1 jQuery\ub97c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc774 \uc870\uae08 \ub0a8\uc544\uc788\uae30\ub294 \ud558\uc9c0\ub9cc \uac70\uc758 \ub300\ubd80\ubd84\uc758 \ucf54\ub4dc\ub97c React\ub85c \uc804\ud658\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)("script",{src:"https://gist.github.com/dittos/ce26fdf91c7855ebd07f.js"}),"\n",(0,s.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,s.jsx)(n.p,{children:"\uc124\uba85\uc744 \uc704\ud574 \ub2e8\uc21c\ud55c \uc608\uc81c\ub97c \uc0ac\uc6a9\ud588\uae30 \ub54c\ubb38\uc5d0 React \ucf54\ub4dc\uac00 \uc6d0\ub798 \ucf54\ub4dc\ubcf4\ub2e4 \uc5b4\ub824\uc6cc \ubcf4\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc870\uae08 \ub354 \ubcf5\uc7a1\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e0\ub2e4\uba74 React\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud6e8\uc52c \uad00\ub9ac\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\ub610\ud55c \ub2e4\uc591\ud55c \uac1c\ub150\uc744 \ub2e4\ub8e8\ub824\uace0 \uad73\uc774 \uac70\uccd0\uac08 \ud544\uc694 \uc5c6\ub294 \uacfc\uc815\uc744 \uc77c\ubd80\ub7ec \ub123\uac70\ub098 \ubcf5\uc7a1\ud55c \uc124\uba85\uc744 \uc0dd\ub7b5\ud55c \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4. React\ub97c \uc81c\ub300\ub85c \uacf5\ubd80\ud558\uc2dc\ub824\uba74 ",(0,s.jsx)(n.a,{href:"http://facebook.github.io/react/docs/getting-started.html",children:"\uacf5\uc2dd \uc0ac\uc774\ud2b8\uc758 \ubb38\uc11c"}),"\ub97c \uc77d\uc73c\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["2015-05-14 \ucd94\uac00: React \ud55c\uad6d \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \ubc88\uc5ed\ud55c ",(0,s.jsx)(n.a,{href:"http://reactkr.github.io/react/docs/getting-started-ko-KR.html",children:"\ud55c\uad6d\uc5b4 \ubb38\uc11c"}),"\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);