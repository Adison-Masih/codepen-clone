(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),l=(a(9),a(2)),s=(a(18),a(19),a(20),a(21),a(22),a(11)),u=a(12),i=a(7);a(29);var m=function(e){var t=e.displayName,a=e.language,o=e.value,r=e.onChange,m=Object(n.useState)(!0),p=Object(l.a)(m,2),d=p[0],f=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"editor-container ".concat(d?"":"collapsed")},c.a.createElement("div",{className:"editor-title"},t,c.a.createElement("button",{onClick:function(){return f((function(e){return!e}))},type:"button",className:"expand-collapse-button"},c.a.createElement(u.a,{icon:d?i.a:i.b}))),c.a.createElement(s.Controlled,{onBeforeChange:function(e,t,a){r(a)},value:d?o:"",className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:a,lineNumbers:!0,theme:"material",autofocus:!0,autocorrect:!0,autoCloseTags:!0,matchBrackets:!0,autoCloseBrackets:!0,extraKeys:{"Ctrl-Space":"autocomplete"},autoScroll:!0,autoCursor:!0}})))};var p=function(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!==e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(l.a)(c,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(r))}),[a,r]),[r,s]};var d=function(){var e=p("html","<h1>This Is A H1 Tag</h1>"),t=Object(l.a)(e,2),a=t[0],o=t[1],r=p("css","body{\n  \t        font-family: 'Segoe UI', sans-serif;\n}\n\nh1{\n      color: teal;\n}"),s=Object(l.a)(r,2),u=s[0],i=s[1],d=p("js","document.body.style.background  =  'aqua';"),f=Object(l.a)(d,2),g=f[0],b=f[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),y=v[0],E=v[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){E("\n    <html>\n      <body>".concat(a,"</body>\n      <style>").concat(u,"</style>\n      <script crossorigin>").concat(g,"<\/script>\n    </html>\n  "))}),250);return function(){return clearTimeout(e)}}),[a,u,g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(m,{language:"xml",displayName:"HTML",value:a,onChange:o}),c.a.createElement(m,{language:"css",displayName:"CSS",value:u,onChange:i}),c.a.createElement(m,{language:"javascript",displayName:"JS",value:g,onChange:b})),c.a.createElement("div",{className:"pane bottom-pane"},c.a.createElement("iframe",{srcDoc:y,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};r.a.render(c.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.121431b7.chunk.js.map