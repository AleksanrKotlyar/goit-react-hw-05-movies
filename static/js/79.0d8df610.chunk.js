"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{7038:function(t,e,r){r.d(e,{x:function(){return c}});var n=r(6444),a=r(407),c=(0,n.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.Cg)},9079:function(t,e,r){r.r(e),r.d(e,{default:function(){return k}});var n,a,c=r(5861),u=r(885),o=r(4687),s=r.n(o),i=r(437),p=r(2791),f=r(7689),l=r(7038),h=r(168),v=r(6444),d=(0,v.ZP)("li")(n||(n=(0,h.Z)(["\n  margin-top: ","px;\n"])),(function(t){return t.theme.space[4]})),x=(0,v.ZP)("p")(a||(a=(0,h.Z)(["\n  margin-top: ","px;\n"])),(function(t){return t.theme.space[3]})),m=r(9014),g=r(184),k=function(){var t=(0,f.UO)().movieId,e=(0,p.useState)(null),r=(0,u.Z)(e,2),n=r[0],a=r[1];if((0,p.useEffect)((function(){(0,c.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.WB)(t);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,m.ZP)("".concat(e.t0),{duration:1e3,position:"top-right",style:{"background-color":"red"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),n)return(0,g.jsx)(g.Fragment,{children:n.length>0?(0,g.jsx)(l.x,{as:"ul",bg:"#ff990030",p:"8px",children:null===n||void 0===n?void 0:n.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,g.jsxs)(d,{children:[(0,g.jsx)(x,{children:(0,g.jsxs)("b",{children:["Author: ",r," "]})}),(0,g.jsx)(x,{children:n})]},e)}))}):(0,g.jsx)("div",{children:"No information."})})}},437:function(t,e,r){r.d(e,{BQ:function(){return s},Dw:function(){return v},Hg:function(){return p},Mn:function(){return x},WB:function(){return g},z1:function(){return l}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="a3dd0056fa523609f3ab9fe8602576dd";function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem(!0)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,u.ZP.get("/genre/movie/list?language=en-US&api_key=".concat(o));case 5:if(200===(e=t.sent).status){t.next=8;break}return t.abrupt("return");case 8:localStorage.setItem("genresDataArray",JSON.stringify(e.data.genres)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("/trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("/movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("search/movie?api_key=".concat(o,"&query='").concat(e,"'"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=79.0d8df610.chunk.js.map