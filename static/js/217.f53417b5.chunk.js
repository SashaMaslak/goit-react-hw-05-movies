"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[217],{9055:function(n,t,r){r.d(t,{x:function(){return o}});var e=r(6444),a=r(407),o=(0,e.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK,a.cp)},3535:function(n,t,r){r.d(t,{z:function(){return p}});var e,a,o=r(168),i=r(6444),u=i.ZP.div(e||(e=(0,o.Z)(["\ndisplay: flex;\n"]))),c=i.ZP.button(a||(a=(0,o.Z)(["\nmargin: 15px auto;\n  padding: 8px 16px;\n  border-radius: 3px;\n  background-color: #34ebae;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #000;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n    box-shadow: 5px 5px 5px #ff00ff;\n    transition: box-shadow .25s linear;\n   }\n"]))),s=r(184),p=function(n){var t=n.handleLoadMore;return(0,s.jsx)(u,{children:(0,s.jsx)(c,{type:"button",onClick:t,children:"LoadMore"})})}},3174:function(n,t,r){r.d(t,{Z:function(){return v}});var e,a,o,i,u=r(501),c=r(6871),s=r(168),p=r(6444),f=p.ZP.ul(e||(e=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 32px;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\n  text-align: center;\n  border-radius: 10px;\n  :hover {\n    cursor: pointer;\n    box-shadow: 10px 10px 10px #ff00ff;\n    transition: box-shadow .25s linear;\n  }\n"]))),d=p.ZP.img(o||(o=(0,s.Z)(["\n  margin: auto;\n  border-radius: 8px;\n  margin-bottom: 10px;\n"]))),x=p.ZP.h3(i||(i=(0,s.Z)(["\n  padding: 8px;\n"]))),h=r(1607),b=r(9055),m=r(184),v=function(n){var t=n.movies,r=(0,c.TH)();return(0,m.jsx)(b.x,{as:h.r.as.s,p:h.r.space[5],children:(0,m.jsx)(f,{children:t.map((function(n){return(0,m.jsx)(l,{children:(0,m.jsxs)(u.OL,{to:"/movie/".concat(n.id),state:{from:r},children:[(0,m.jsx)(d,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",alt:""}),(0,m.jsx)(x,{children:n.original_title})]})},n.id)}))})})}},6217:function(n,t,r){r.r(t),r.d(t,{default:function(){return _}});var e,a,o,i,u=r(2982),c=r(885),s=r(2791),p=r(501),f=r(168),l=r(6444),d=l.ZP.div(e||(e=(0,f.Z)(["\n   display: flex;\n   margin: auto;\n"]))),x=l.ZP.form(a||(a=(0,f.Z)(["\n   margin: auto;\n"]))),h=l.ZP.input(o||(o=(0,f.Z)(["\n   margin-right: 16px;\n   font-size: 18px;\n   &:hover {\n    box-shadow: 5px 5px 5px #ff00ff;\n    transition: box-shadow .25s linear;\n   }\n"]))),b=l.ZP.button(i||(i=(0,f.Z)(["\n   font-size: 18px;\n   background-color: #34ebae;\n   &:hover {\n    box-shadow: 5px 5px 5px #ff00ff;\n    transition: box-shadow .25s linear;\n   }\n"]))),m=r(184),v=function(n){var t=n.onSubmit;return(0,m.jsx)(d,{children:(0,m.jsxs)(x,{onSubmit:t,children:[(0,m.jsx)(h,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,m.jsx)(b,{type:"submit",children:"Search"})]})})},g=r(3174),y=r(2180),Z=r(1607),w=r(9055),j=r(3535),k=r(7793),_=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,s.useState)(1),o=(0,c.Z)(a,2),i=o[0],f=o[1],l=(0,s.useState)(!1),d=(0,c.Z)(l,2),x=d[0],h=d[1],b=(0,p.lr)(),_=(0,c.Z)(b,2),S=_[0],P=_[1];(0,s.useEffect)((function(){var n=S.get("query");if(null!==n&&void 0!==n&&n.trim()){h(!0),(0,y.bs)(n,i).then((function(n){e((function(t){return 1===i?n:[].concat((0,u.Z)(t),(0,u.Z)(n))})).catch((function(n){return console.log(n)})).finally((function(){return h(!1)}))})).catch((function(n){return console.log(n)})).finally((function(){return h(!1)}))}}),[S,i]);return(0,m.jsxs)(w.x,{as:Z.r.as.m,p:Z.r.space[4],children:[(0,m.jsx)(v,{onSubmit:function(n){n.preventDefault(),P({query:n.currentTarget.elements.query.value})}}),x&&(0,m.jsx)(k.a,{}),(0,m.jsxs)(s.Suspense,{fallback:null,children:[(0,m.jsx)(g.Z,{movies:r}),!!r.length&&!x&&(0,m.jsx)(j.z,{handleLoadMore:function(){f((function(n){return n+1}))}})]})]})}},2180:function(n,t,r){r.d(t,{Bt:function(){return d},KS:function(){return s},bs:function(){return p},y:function(){return l},yW:function(){return f}});var e=r(5861),a=r(7757),o=r.n(a),i=r(4569),u=r.n(i);u().defaults.baseURL="https://api.themoviedb.org/3";var c="b1ed6db84db5d6eba5aed4dde918fe90",s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/week?api_key=".concat(c,"&page=").concat(t,"&language=en"));case 2:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t,r){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(r));case 2:return e=n.sent,a=e.data.results,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2982:function(n,t,r){r.d(t,{Z:function(){return o}});var e=r(907);var a=r(181);function o(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=217.f53417b5.chunk.js.map