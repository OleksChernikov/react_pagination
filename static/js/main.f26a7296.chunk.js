(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),r=c(3),i=c(1);c(9);var l=c(0),s=function(e){for(var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,r=Math.ceil(a/c),i=[],s=1;s<=r;s+=1)i.push(s);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:"page-item ".concat(t===i[0]&&"disabled"),children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":t===i.length-1,onClick:function(){t!==i[0]&&n(t-1)},children:"\xab"})}),i.map((function(e){return Object(l.jsx)("li",{className:"page-item ".concat(t===e&&"active"),children:Object(l.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(l.jsx)("li",{className:"page-item ".concat(t===i.length&&"disabled"),children:Object(l.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i.length-1,onClick:function(){t!==i.length&&n(t+1)},children:"\xbb"})})]})})},o=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),j=[3,5,10,20],d=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),c=a[0],t=a[1],n=Object(i.useState)(5),d=Object(r.a)(n,2),u=d[0],h=d[1],m=(c-1)*u+1,p=Math.min(c*u,42),g=function(){var e=(c-1)*u,a=e+u;return o.slice(e,a)}();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(m," - ").concat(p," of ").concat(42,")")}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:u,onChange:function(e){h(parseInt(e.target.value,10)),t(1)},children:j.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(s,{total:42,perPage:u,currentPage:c,onPageChange:function(e){return t(e)}}),g.map((function(e){return Object(l.jsx)("ul",{children:Object(l.jsx)("li",{"data-cy":"item",children:e})},e)}))]})};n.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.f26a7296.chunk.js.map