"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[925],{925:function(e,t,r){r.r(t);var n=r(885),s=r(2791),i=r(4353),o=r(364),u=r(7773),l=r(184),c=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.chat.status}));return(0,s.useEffect)((function(){return e((0,u.WE)()),function(){e((0,u.R7)())}}),[e]),(0,l.jsxs)("div",{style:{height:"80vh",width:"60vw"},children:["error"===t&&(0,l.jsx)("div",{children:"Some error occured. Please refresh the page"}),(0,l.jsx)(a,{}),(0,l.jsx)(d,{})]})},a=function(){var e=(0,o.v9)((function(e){return e.chat.messages})),t=(0,o.v9)((function(e){return e.profilePage.profile.userId})),r=(0,s.useRef)(null),i=(0,s.useState)(!1),u=(0,n.Z)(i,2),c=u[0],a=u[1];return(0,s.useEffect)((function(){var e;c&&(null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[c,e]),(0,s.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]),(0,l.jsxs)("div",{style:{height:"350px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<400?!c&&a(!0):c&&a(!1)},children:[e.map((function(e,r){return t===e.userId?(0,l.jsx)(f,{message:e,pos:"right"},e.id):(0,l.jsx)(f,{message:e,pos:"left"},e.id)})),(0,l.jsx)("div",{ref:r})]})},f=s.memo((function(e){var t=e.message,r=e.pos;return(0,l.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid white",flexDirection:"column",alignItems:"left"===r?"flex-start":"flex-end"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:t.photo?t.photo:i,alt:"avatar",style:{width:"30px"}}),(0,l.jsx)("b",{children:t.userName})]}),t.message]})})),d=function(){var e=(0,s.useState)(""),t=(0,n.Z)(e,2),r=t[0],i=t[1],c=(0,o.I0)(),a=(0,o.v9)((function(e){return e.chat.status}));function f(){""!==r&&(c((0,u.bG)(r)),i("")),i("")}return(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,l.jsx)("div",{children:(0,l.jsx)("textarea",{onKeyDown:function(e){13===e.keyCode&&""!==r.trim()&&f()},style:{resize:"none",height:"60px",width:"50vw"},onChange:function(e){return i(e.currentTarget.value)},value:r})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{disabled:"ready"!==a,onClick:function(){return f()},children:"Send"})})]})};t.default=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(c,{})})}}}]);
//# sourceMappingURL=925.22cc1b8f.chunk.js.map