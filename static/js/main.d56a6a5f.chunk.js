(this.webpackJsonpthe_shoppies=this.webpackJsonpthe_shoppies||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),s=r.n(c),a=r(6),i=r.n(a),o=(r(13),r(3)),d=r(5),l=r.n(d),u=r(7),b=r(2),j=(r(15),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)([]),i=Object(o.a)(a,2),d=i[0],j=i[1],h=Object(c.useState)({}),p=Object(o.a)(h,1)[0],f=function(e){var t=Object(c.useRef)({}),r={status:"idle",error:null,data:[]},n=Object(c.useReducer)((function(e,t){switch(t.type){case"FETCHING":return Object(b.a)(Object(b.a)({},r),{},{status:"fetching"});case"FETCHED":return Object(b.a)(Object(b.a)({},r),{},{status:"fetched",data:t.payload});case"FETCH_ERROR":return Object(b.a)(Object(b.a)({},r),{},{status:"error",error:t.payload});default:return e}}),r),s=Object(o.a)(n,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){var r=!1;if(e)return function(){var n=Object(u.a)(l.a.mark((function n(){var c,s,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i({type:"FETCHING"}),!t.current[e]){n.next=6;break}c=t.current[e],i({type:"FETCHED",payload:c}),n.next=24;break;case 6:return n.prev=6,n.next=9,fetch(e);case 9:return s=n.sent,n.next=12,s.json();case 12:if(a=n.sent,t.current[e]=a,!r){n.next=16;break}return n.abrupt("return");case 16:i({type:"FETCHED",payload:a}),n.next=24;break;case 19:if(n.prev=19,n.t0=n.catch(6),!r){n.next=23;break}return n.abrupt("return");case 23:i({type:"FETCH_ERROR",payload:n.t0.message});case 24:case"end":return n.stop()}}),n,null,[[6,19]])})));return function(){return n.apply(this,arguments)}}()(),function(){r=!0}}),[e]),a}(r&&"https://www.omdbapi.com/?s=".concat(r,"&apikey=").concat("3da302e6")),x=f.status,g=f.data,m=f.error,O=g.Search;return Object(n.jsx)("div",{class:"bg-gray-50 bg-cover h-screen",children:Object(n.jsxs)("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{class:"text-4xl font-bold leading-tight text-green-500",children:"The Shoppies"})}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.search.value;t&&(s(t),e.target.search.value="")},children:[Object(n.jsx)("input",{class:"border-2 border-gray-300 mt-10 bg-white h-10 px-5 pr-16 rounded-lg text-l focus:outline-none",type:"text",autoFocus:!0,autoComplete:"off",name:"search",placeholder:"Enter Movie Title"}),Object(n.jsxs)("button",{class:"py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 ml-5",children:[" ","Search"," "]})]}),Object(n.jsxs)("div",{class:"grid grid-cols-2 gap-4",children:[Object(n.jsxs)("div",{children:["idle"===x&&Object(n.jsxs)("div",{class:"mt-5",children:[" ","Let's get started by searching for a movie!"," "]}),"error"===x&&Object(n.jsx)("div",{children:m}),"fetching"===x&&Object(n.jsx)("div",{class:"round animate-spin w-5 h-5 border-2 border-black mt-5",children:" "}),"fetched"===x&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{class:"mt-5 font-bold text-lg mb-5 text-green-500",children:[" ",'Search Results For "',r,'"'," "]}),"Movie not found!"===g.Error&&Object(n.jsxs)("div",{children:[" ",g.Error," Try Again! "]}),"Too many results."===g.Error&&Object(n.jsxs)("div",{children:[" ",g.Error," Try Again! "]}),"True"===g.Response&&O.map((function(e,t){return Object(n.jsxs)("div",{class:"bg-green-50 flex justify-between items-center mb-4 font-medium pl-3 ",children:[e.Title," (",e.Year,")",Object(n.jsxs)("button",{class:"disabled:opacity-50 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 active:bg-green-700",onClick:function(){d.length<=4?function(e,t,r){var n=d.concat({name:t,imdbID:e});j(n),p[e]=!0}(e.imdbID,e.Title):alert("5 Nominations Reached")},disabled:p[e.imdbID],children:["Add"," "]})]},t)}))]})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{class:"mt-5 font-bold text-green-500 text-lg mb-5",children:[" ","Nominations:"," "]}),d.map((function(e,t){return Object(n.jsxs)("div",{class:"bg-green-50 flex justify-between items-center mb-4",children:[e.name,Object(n.jsx)("button",{class:" py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 active:bg-red-700",onClick:function(){return function(e,t,r){var n=d.filter((function(t){return t.imdbID!==e}));j(n),p[e]=!1}(e.imdbID,e.Title)},children:"Remove"})]},t)}))]})]})]})})}),h=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.d56a6a5f.chunk.js.map