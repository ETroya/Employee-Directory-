(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(17),s=n.n(r),a=(n(24),n(25),n(0));var i=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"navbar flex-column",children:Object(a.jsx)("a",{className:"navbar-brand text-center mt-3",href:"/",children:"Employee Directory"})})})};n(27);var o=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};n(28);var l=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("span",{children:"Employee Directory"})})},j=n(8),u=n.n(j),b=n(4),d=n(18),f=n(6);n(30),n(31);var h=function(e){return Object(a.jsx)("div",{className:"searchBar text-center",children:Object(a.jsx)("input",{type:"search",onKeyUp:e.filterTableBySearch,ref:e.inputValueRef})})},O=n(19),x=n.n(O);var m=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(f.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)([]),O=Object(f.a)(j,2),m=O[0],p=O[1];function v(){return(v=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://randomuser.me/api/?nat=ca&results=100");case 3:t=e.sent,console.log(t),r(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]);var y=Object(b.a)(n),g=Object(c.useRef)();return null!==o&&("name"===o&&(y=Object(b.a)(n.map((function(e){return e})))).sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})),"age"===o&&(y=Object(b.a)(n.map((function(e){return e})))).sort((function(e,t){return e.dob.date<t.dob.date?-1:e.dob.date>t.dob.date?1:0})),y.sort((function(e,t){return e[o]<t[o]?-1:e[o]>t[o]?1:0}))),Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{inputValueRef:g,filterTableBySearch:function(){var e=g.current.value;console.log("sortedResults",y),console.log("[inputValue] ".concat(e));var t=(y=Object(b.a)(n.map((function(e){return e})))).filter((function(t){return t.name.first.toLowerCase().indexOf(e.toLowerCase())>-1}));p(t)}}),Object(a.jsxs)("table",{className:"container table table-striped",id:"myTable",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Image"}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsxs)("button",{type:"button",onClick:function(){return l("name")},children:["Name ",Object(a.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsxs)("button",{type:"button",onClick:function(){return l("cell")},children:["Phone ",Object(a.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsxs)("button",{type:"button",onClick:function(){return l("email")},children:["Email ",Object(a.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsxs)("button",{type:"button",onClick:function(){return l("age")},children:["Age ",Object(a.jsx)("i",{className:"fas fa-caret-down"})]})})]})}),Object(a.jsx)("tbody",{children:m.length>0?m.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:Object(a.jsx)("img",{src:e.picture.thumbnail,alt:"unknown"})}),Object(a.jsxs)("td",{id:"name",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.cell}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.dob.date.substring(0,10)})]},e.login.username)})):y.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:Object(a.jsx)("img",{src:e.picture.thumbnail,alt:"unknown"})}),Object(a.jsxs)("td",{id:"name",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.cell}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.dob.date.substring(0,10)})]},e.login.username)}))})]})]})};var p=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsx)(o,{children:Object(a.jsx)(m,{})}),Object(a.jsx)(l,{})]})};s.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.308924d4.chunk.js.map