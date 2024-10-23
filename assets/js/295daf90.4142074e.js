"use strict";(self.webpackChunksapzil_org=self.webpackChunksapzil_org||[]).push([[3229],{7624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(4848),r=n(8453);const i={layout:"post",title:"SQL \ud2b8\ub79c\uc7ad\uc158 - \ubbff\ub294 \ub3c4\ub07c\uc5d0 \ubc1c\ub4f1 \ucc0d\ud78c\ub2e4",tags:["database"]},o=void 0,c={permalink:"/2017/04/01/do-not-trust-sql-transaction",source:"@site/blog/2017-04-01-do-not-trust-sql-transaction.md",title:"SQL \ud2b8\ub79c\uc7ad\uc158 - \ubbff\ub294 \ub3c4\ub07c\uc5d0 \ubc1c\ub4f1 \ucc0d\ud78c\ub2e4",description:"RDBMS\ub97c \uc4f0\ub294 \uc774\uc720 \uc911 \ud558\ub098\ub294 \ud2b8\ub79c\uc7ad\uc158\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc RDBMS\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub108\ubb34 \ubbff\ub2e4\uac00\ub294 \uae5c\uc9dd \ub180\ub784 \uc77c\uc774 \ubc8c\uc5b4\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",date:"2017-04-01T00:00:00.000Z",tags:[{inline:!0,label:"database",permalink:"/tags/database"}],readingTime:5.81,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"SQL \ud2b8\ub79c\uc7ad\uc158 - \ubbff\ub294 \ub3c4\ub07c\uc5d0 \ubc1c\ub4f1 \ucc0d\ud78c\ub2e4",tags:["database"]},unlisted:!1,prevItem:{title:"Diff Monster\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4",permalink:"/2017/07/10/diffmonster"},nextItem:{title:"RESTful API \uc11c\ubc84 \ud14c\uc2a4\ud2b8\ud558\uae30",permalink:"/2017/03/12/testing-restful-api-servers"}},a={authorsImageUrls:[]},d=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\uc65c\uc8e0?",id:"\uc65c\uc8e0",level:2},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45",level:2},{value:"Isolation level \ub192\uc774\uae30",id:"isolation-level-\ub192\uc774\uae30",level:3},{value:"<code>SELECT FOR UPDATE</code> \uc0ac\uc6a9",id:"select-for-update-\uc0ac\uc6a9",level:3},{value:"<code>UPDATE</code> \ud55c\ubc88\uc5d0 \ubaa8\ub4e0 \uac83\uc744 \ucc98\ub9ac",id:"update-\ud55c\ubc88\uc5d0-\ubaa8\ub4e0-\uac83\uc744-\ucc98\ub9ac",level:3},{value:"\ub099\uad00\uc801(optimistic) \ub77d",id:"\ub099\uad00\uc801optimistic-\ub77d",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"RDBMS\ub97c \uc4f0\ub294 \uc774\uc720 \uc911 \ud558\ub098\ub294 \ud2b8\ub79c\uc7ad\uc158\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc RDBMS\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub108\ubb34 \ubbff\ub2e4\uac00\ub294 \uae5c\uc9dd \ub180\ub784 \uc77c\uc774 \ubc8c\uc5b4\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/public/img/lsm.jpg",alt:"\uad6d\ubbfc \uc5ec\ub7ec\ubd84 \uc548\uc2ec\ud558\uc2ed\uc2dc\uc624"}),(0,s.jsxs)("figcaption",{children:["??? : ",(0,s.jsx)("a",{href:"https://librewiki.net/wiki/%EC%9D%B4%EC%8A%B9%EB%A7%8C",children:"\uad6d\ubbfc \uc5ec\ub7ec\ubd84 \uc548\uc2ec\ud558\uc2ed\uc2dc\uc624"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,s.jsx)(t.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc774 \uc5bc\ud54f \ubcf4\uba74 \ubb34\ud574\ud574 \ubcf4\uc774\ub294 \ucf54\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'# CREATE TABLE account (id integer, money integer, state text);\n# INSERT INTO account (id, money, state) VALUES (1, 10, \'poor\');\n\ntx = begin()\nstate = tx.query("SELECT state FROM account WHERE id = 1")\nif state == "poor":\n    tx.query("UPDATE account SET state = \'rich\', money = money * 1000 WHERE id = 1")\ntx.commit()\n'})}),"\n",(0,s.jsx)(t.p,{children:"\uc774\ub7f0 \ucf54\ub4dc\uac00 \ub3d9\uc2dc\uc5d0 \ub2e4\uc74c \uc21c\uc11c\ub85c \uc2e4\ud589\ub418\uba74 \uc5b4\ub5a4 \uc77c\uc774 \ubc8c\uc5b4\uc9c8\uae4c\uc694?"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\ud2b8\ub79c\uc7ad\uc158 A"}),(0,s.jsx)(t.th,{children:"\ud2b8\ub79c\uc7ad\uc158 B"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BEGIN"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SELECT state FROM account WHERE id = 1"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"BEGIN"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"SELECT state FROM account WHERE id = 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"COMMIT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"COMMIT"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"money\uac00 10,000,000\uc774 \ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.h2,{id:"\uc65c\uc8e0",children:"\uc65c\uc8e0?"}),"\n",(0,s.jsxs)(t.p,{children:["SQL \ud45c\uc900\uc5d0\uc11c isolation level\uc740 READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE \ub124 \uac00\uc9c0\uc785\ub2c8\ub2e4.\nSERIALIZABLE\uc774 \uac00\uc7a5 \ub192\uc740 \uaca9\ub9ac\uc218\uc900\uc774\uc9c0\ub9cc \uc131\ub2a5 \uc0c1\uc758 \uc774\uc720\ub85c ",(0,s.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html",children:"MySQL (InnoDB)\uc740 REPEATABLE READ"}),", ",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/static/transaction-iso.html",children:"PostgreSQL\uc740 READ COMMITTED"}),"\uac00 \uae30\ubcf8\uac12\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\ub7ec\ud55c \uae30\ubcf8 isolation level\uc5d0\uc11c ",(0,s.jsx)(t.code,{children:"UPDATE"})," \ucffc\ub9ac\ub294 \ub300\uc0c1 \ub808\ucf54\ub4dc\ub97c \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc774 \uba3c\uc800 \uc5c5\ub370\uc774\ud2b8\ud55c \ub4a4 \ucee4\ubc0b\ub41c \uacbd\uc6b0 \uc5c5\ub370\uc774\ud2b8 \ub41c \ub370\uc774\ud130\ub97c \ubcf4\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["... a target row might have already been updated (or deleted or locked) by another concurrent transaction by the time it is found. In this case, the would-be updater will wait for the first updating transaction to commit or roll back (if it is still in progress). ... If the first updater commits, the second updater ... ",(0,s.jsx)(t.strong,{children:"will attempt to apply its operation to the updated version of the row."})," ",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/static/transaction-iso.html#XACT-READ-COMMITTED",children:"(Postgres \ubb38\uc11c)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The snapshot of the database state applies to SELECT statements within a transaction, not necessarily to DML statements. If you insert or modify some rows and then commit that transaction, a DELETE or UPDATE statement issued from another concurrent REPEATABLE READ transaction could affect those just-committed rows, even though the session could not query them. ",(0,s.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-consistent-read.html",children:"(MySQL \ubb38\uc11c)"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\ud574\uacb0\ucc45",children:"\ud574\uacb0\ucc45"}),"\n",(0,s.jsx)(t.h3,{id:"isolation-level-\ub192\uc774\uae30",children:"Isolation level \ub192\uc774\uae30"}),"\n",(0,s.jsx)(t.p,{children:"MySQL\uc5d0\uc11c\ub294 SERIALIZABLE \ubc16\uc5d0 \ub2f5\uc774 \uc5c6\ub294\ub370 \uc774 \uacbd\uc6b0\uc5d0 \ud56d\uc0c1 \ub77d\uc774 \uac78\ub9ac\ubbc0\ub85c \ud604\uc2e4\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \ud798\ub4ed\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:["Postgres\ub294 REPEATABLE READ\ub85c \uc62c\ub9ac\uba74 \uc774\ub7ec\ud55c \ubb38\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \ud2b8\ub79c\uc7ad\uc158 A\uac00 ",(0,s.jsx)(t.code,{children:"UPDATE"}),"\ub97c \uc2dc\ub3c4\ud560 \ub54c \ud2b8\ub79c\uc7ad\uc158\uc774 \uc911\ub2e8\ub418\uc5b4 \ubc84\ub9ac\ubbc0\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub2e8\uc5d0\uc11c \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\uc74c\ubd80\ud130 \uc7ac\uc2dc\ub3c4\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["a target row might have already been updated (or deleted or locked) by another concurrent transaction by the time it is found. In this case, the repeatable read transaction will wait for the first updating transaction to commit or roll back (if it is still in progress). ... if the first updater commits (and actually updated or deleted the row, not just locked it) then the repeatable read transaction ",(0,s.jsx)(t.strong,{children:"will be rolled back"})," with the message ",(0,s.jsx)(t.code,{children:"ERROR:  could not serialize access due to concurrent update"})," because a repeatable read transaction cannot modify or lock rows changed by other transactions after the repeatable read transaction began. ",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/static/transaction-iso.html#XACT-REPEATABLE-READ",children:"(Postgres \ubb38\uc11c)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"select-for-update-\uc0ac\uc6a9",children:[(0,s.jsx)(t.code,{children:"SELECT FOR UPDATE"})," \uc0ac\uc6a9"]}),"\n",(0,s.jsxs)(t.p,{children:["\uc5c5\ub370\uc774\ud2b8 \ud560 \ub808\ucf54\ub4dc\ub97c \uac00\uc838\uc62c \ub54c ",(0,s.jsx)(t.code,{children:"SELECT"})," \ucffc\ub9ac \ub300\uc2e0 ",(0,s.jsx)(t.code,{children:"SELECT FOR UPDATE"})," \ubb38\uc744 \uc0ac\uc6a9\ud558\uba74 \ub77d\uc774 \uac78\ub9bd\ub2c8\ub2e4.\n\uadf8\ub7ec\uba74 \ud2b8\ub79c\uc7ad\uc158 B\uac00 \uc77d\uae30\ub97c \uc2dc\ub3c4\ud560 \ub54c \ud2b8\ub79c\uc7ad\uc158 A\uac00 \ucee4\ubc0b (\ub610\ub294 \ub864\ubc31)\ub418\uae30\uae4c\uc9c0 \uae30\ub2e4\ub9ac\uac8c \ub418\ubbc0\ub85c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.h3,{id:"update-\ud55c\ubc88\uc5d0-\ubaa8\ub4e0-\uac83\uc744-\ucc98\ub9ac",children:[(0,s.jsx)(t.code,{children:"UPDATE"})," \ud55c\ubc88\uc5d0 \ubaa8\ub4e0 \uac83\uc744 \ucc98\ub9ac"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SELECT"}),"\ub97c \ud558\uc9c0 \ub9d0\uace0 ",(0,s.jsx)(t.code,{children:"UPDATE account SET state = 'rich', money = money * 1000 WHERE id = 1 AND state = 'poor'"}),"\uc640 \uac19\uc774 \ucc98\ub9ac\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ud558\uba74 \ub85c\uc9c1\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c SQL\ub85c \uc62e\uaca8\uac00\uae30\ub294 \ud558\uc9c0\ub9cc \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ucee4\ubc0b\ub41c \ub370\uc774\ud130\ub97c \uae30\uc900\uc73c\ub85c \uc791\ub3d9\ud574\uc11c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.h3,{id:"\ub099\uad00\uc801optimistic-\ub77d",children:"\ub099\uad00\uc801(optimistic) \ub77d"}),"\n",(0,s.jsxs)(t.p,{children:["\ud14c\uc774\ube14\uc5d0 \ubc84\uc804 \ud544\ub4dc\ub97c \ucd94\uac00\ud574\uc11c ",(0,s.jsx)(t.code,{children:"SELECT"}),"\ud560 \ub54c \uac00\uc838\uc635\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,s.jsx)(t.code,{children:"UPDATE"}),"\ud560 \ub54c WHERE \uc808\uc5d0 \uae30\uc874 \ubc84\uc804\uc744 \ucd94\uac00\ud558\uace0 +1\ub41c \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \ub41c \ub808\ucf54\ub4dc \uc218\ub97c \uac80\uc0ac\ud574\uc11c 0\uac1c\ub77c\uba74 \ub2e4\ub978 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ubc84\uc804\uc774 \ubcc0\uacbd\ub41c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c ",(0,s.jsx)(t.strong,{children:"\ucda9\ub3cc"}),"\uc744 \uac10\uc9c0\ud55c \uacbd\uc6b0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub2e8\uc5d0\uc11c \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\uc74c\ubd80\ud130 \uc7ac\uc2dc\ub3c4\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html/ch05.html",children:"ORM\uc5d0\uc11c \ub099\uad00\uc801 \ub77d \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,s.jsx)(t.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,s.jsx)(t.p,{children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc740 \ub2e4\uc74c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ucc98\ub9ac \ud6c4 \ub2e4\uc2dc \uc4f0\ub294 \uacbd\uc6b0\uc5d0 \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);