(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(4),a=n.n(c),o=(n(14),n(3)),i=n.n(o),l=n(5),h=n(6),u=n(7),d=n(9),j=n(8),f=(n(16),n(17),n(0));function m(e){var t=e.monster;return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("img",{src:"https://robohash.org/".concat(t.id,".gif?set=set2")}),Object(f.jsxs)("h2",{children:[" ",t.name," "]}),Object(f.jsx)("p",{children:t.email})]})}var p=function(e){var t=e.monsters;return Object(f.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(f.jsx)(m,{monster:e},e.id)}))})};n(19);var x=function(e){var t=e.handleChange,n=e.placeholder;return Object(f.jsx)("input",{type:"search",placeholder:n,style:b,onChange:t,className:"search "})},b={margin:"20px"},v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({monsters:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsx)("h1",{style:{fontFamily:"'Bigelow Rules', cursive",fontSize:"100px",color:"#95DADA"},children:"Monsters Rolodex"}),Object(f.jsx)(x,{placeholder:"Search Monsters",handleChange:this.handleChange}),r<=0?Object(f.jsx)("h1",{style:{color:"#fff"},children:" No items match your search "}):Object(f.jsx)(p,{monsters:r})]})}}]),n}(r.Component);a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7bb2419a.chunk.js.map