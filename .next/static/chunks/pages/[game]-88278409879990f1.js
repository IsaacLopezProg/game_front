(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{7417:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[game]",function(){return n(3115)}])},7146:function(e,t,n){"use strict";n.d(t,{DF:function(){return l},Kr:function(){return f},YK:function(){return x},H0:function(){return m}});var r=n(4051),s=n.n(r),a=n(5587),c=n(6486);function u(e,t,n,r,s,a,c){try{var u=e[a](c),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,s)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){u(a,r,s,c,o,"next",e)}function o(e){u(a,r,s,c,o,"throw",e)}c(void 0)}))}}var i="http://localhost:1337";function l(e,t,n){return p.apply(this,arguments)}function p(){return(p=o(s().mark((function e(t,n,r){var c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="".concat(i,"/favorites?users_permissions_user=").concat(t,"&game=").concat(n),e.next=4,(0,a.S)(c,null,r);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e,t,n){return d.apply(this,arguments)}function d(){return(d=o(s().mark((function e(t,n,r){var u,o,p,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t,n,r);case 3:if(u=e.sent,!((0,c.size)(u)>0)&&u){e.next=8;break}return e.abrupt("return","Este juego ya lo tienes en tu lista de favoritos");case 8:return o="".concat(i,"/favorites"),p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({users_permissions_user:t,game:n})},e.next=12,(0,a.S)(o,p,r);case 12:return f=e.sent,e.abrupt("return",f);case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function x(e,t,n){return h.apply(this,arguments)}function h(){return(h=o(s().mark((function e(t,n,r){var u,o,p,f,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t,n,r);case 3:if(u=e.sent,console.log(u),!((0,c.size)(u)>0)){e.next=13;break}return p="".concat(i,"/favorites/").concat(null===(o=u[0])||void 0===o?void 0:o._id),f={method:"DELETE",headers:{"Content-Type":"application/json"}},e.next=11,(0,a.S)(p,f,r);case 11:return d=e.sent,e.abrupt("return",d);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return(v=o(s().mark((function e(t,n){var r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i,"/favorites?users_permissions_user=").concat(t),e.next=4,(0,a.S)(r,null,n);case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},1761:function(e,t,n){"use strict";n.d(t,{Qp:function(){return o},Ip:function(){return l},s9:function(){return f},kh:function(){return x},_w:function(){return m}});var r=n(4051),s=n.n(r);function a(e,t,n,r,s,a,c){try{var u=e[a](c),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,s)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var c=e.apply(t,n);function u(e){a(c,r,s,u,o,"next",e)}function o(e){a(c,r,s,u,o,"throw",e)}u(void 0)}))}}var u="http://localhost:1337";function o(e){return i.apply(this,arguments)}function i(){return(i=c(s().mark((function e(t){var n,r,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="_limit=".concat(t),"_sort=createdAt:desc",r="".concat(u,"/games?").concat(n,"&").concat("_sort=createdAt:desc"),e.next=6,fetch(r);case 6:return a=e.sent,e.next=9,a.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function l(e,t,n){return p.apply(this,arguments)}function p(){return(p=c(s().mark((function e(t,n,r){var a,c,o,i,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="_limit=".concat(n),"_sort=createdAt:desc",c="_start=".concat(r),o="".concat(u,"/games?platfom.platfom=").concat(t,"&").concat(a,"&").concat("_sort=createdAt:desc","&").concat(c),e.next=7,fetch(o);case 7:return i=e.sent,e.next=10,i.json();case 10:return l=e.sent,e.abrupt("return",l);case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=c(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/games/count?platfom.platfom=").concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function x(e){return h.apply(this,arguments)}function h(){return(h=c(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/games?url=").concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a[0]);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=c(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u,"/games?_q=").concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}},3096:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=(n(7294),n(9008));function a(e){var t=e.title,n=e.description;return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"description",content:n})]})}a.defaultProps={title:"Gaming - Tus juegos favoritos",description:"Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio."}},3115:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(4051),s=n.n(r),a=n(5893),c=n(7294),u=n(9962),o=n(1163),i=n(1761),l=n(5985),p=n(7559),f=n(7146),d=n(5775),x=n(7257),h=n(5150),m=n(967),v=n(6486);n(8742);function j(e,t,n,r,s,a,c){try{var u=e[a](c),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,s)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){j(a,r,s,c,u,"next",e)}function u(e){j(a,r,s,c,u,"throw",e)}c(void 0)}))}}function b(e){var t=e.games,n=t.poster,r=t.title;return(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(d.Z.Column,{mobile:16,tablet:6,computer:5,children:(0,a.jsx)("div",{className:"m-2",children:(0,a.jsx)(x.Z,{src:n.url,alt:r})})}),(0,a.jsx)(d.Z.Column,{mobile:16,tablet:10,computer:11,children:(0,a.jsx)(y,{games:t})})]})}function y(e){var t=e.games,n=(0,l.Z)(),r=n.auth,u=n.logout,o=(0,p.Z)().addProductCart,i=(0,c.useState)(!1),d=i[0],x=i[1],j=t.title,b=t.summary,y=t.price,w=t.discount,k=t.url,_=(0,c.useState)(!1),N=_[0],P=_[1];(0,c.useEffect)((function(){g(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,(0,f.DF)(r.idUser||r.isUser,t._id,u);case 3:n=e.sent,(0,v.size)(n)>0?x(!0):x(!1);case 5:case"end":return e.stop()}}),e)})))(),P(!1)}),[t,N]);var S=function(){var e=g(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}return e.next=3,(0,f.Kr)(r.idUser||r.isUser,t.id,u);case 3:P(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=g(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}return e.next=3,(0,f.YK)(r.idUser||r.isUser,t.id,u);case 3:P(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"bg-[#a5673f] py-2 m-2",children:(0,a.jsxs)("h3",{className:"text-white text-center text-2xl",children:[j,(0,a.jsx)(h.Z,{name:d?"heart":"heartbeat",className:d?"text-[#ff5200] float-right pr-8":"text-white float-right pr-8",onClick:d?Z:S,Link:!0})]})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-2xl text-orange-500 text-center font-extrabold",children:"Entrega de 24/48h"})}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:b},className:"m-2 bg-stone-100 py-2 px-2"}),(0,a.jsxs)("div",{className:"flex flex-row bg-[#78350f] m-2",children:[(0,a.jsxs)("div",{className:"basis-2/3",children:[(0,a.jsxs)("p",{className:"text-lg m-2 text-gray-400",children:[" Precio de venta al publico:  $",y]}),(0,a.jsxs)("div",{className:"flex flex-row",children:[w&&(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:"m-2 text-white text-2xl font-extrabold",children:["-%",w]})}),(0,a.jsx)("div",{children:w?(0,a.jsxs)("p",{className:"m-2 text-orange-500 text-3xl font-extrabold",children:["$",(y-Math.floor(y*w)/100).toFixed(2)]}):(0,a.jsxs)("p",{className:"m-2 pl-2 text-orange-500 text-3xl font-extrabold",children:["$",y.toFixed(2)]})})]})]}),(0,a.jsx)("div",{className:"basis-1/3",children:(0,a.jsx)("div",{className:"m-2 p-2",children:(0,a.jsx)(m.Z,{size:"large",style:{backgroundColor:"#ff5200",padding:"10px 48px",color:"white"},onClick:function(){return o(k)},children:"Comprar"})})})]})]})}var w=n(7249),k=n(6310),_=n(711),N=n(5798),P=n(381),S=n.n(P);n(5655);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}function E(e){var t=e.games,n=[{menuItem:"Informacion",render:function(){return(0,a.jsx)(w.Z.Pane,{style:{padding:"1px 8px"},children:(0,a.jsx)(O,{games:t})})}}];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(w.Z,{className:"m-2",panes:n})})}function O(e){var t=e.games;return(0,a.jsxs)("div",{children:[(0,a.jsx)(k.Z,{url:t.video,controls:!0,width:"100%",height:"400px"}),(0,a.jsx)(T,{games:t}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.summary},className:"m-2 bg-stone-100 p-2 md:text-xl"}),(0,a.jsxs)("div",{className:"inline-flex m-2 p-2 ",children:[(0,a.jsx)("h4",{className:"md:text-2xl text-[#ff5200] mr-2",children:"Fecha de lanzamiento:"}),(0,a.jsx)("p",{className:"text-2xl",children:S()(t.releaseDate).format("LL")})]})]})]})}function T(e){var t=e.games,n=t.screenshots,r=t.title,s=(0,c.useState)(!1),u=s[0],o=s[1],i=(0,c.useState)(null),l=i[0],p=i[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.Z,C({},{className:"mt-2 p-0 ",infinite:!0,speed:500,slidesToShow:2,slidesToScroll:2},{children:(0,v.map)(n,(function(e){return(0,a.jsx)("div",{className:"pl-2 hover:opacity-80 cursor-pointer",children:(0,a.jsx)(x.Z,{src:e.url,alt:e.name,onClick:function(){return t=e.url,p(t),void o(!0);var t}},e.id)})}))})),(0,a.jsx)(_.Z,{open:u,onClose:function(){return o(!1)},children:(0,a.jsx)(x.Z,{src:l,alt:r})})]})}var F=n(3096);function z(e,t,n,r,s,a,c){try{var u=e[a](c),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,s)}function L(){var e=(0,o.useRouter)().query,t=(0,c.useState)(null),n=t[0],r=t[1];return(0,c.useEffect)((function(){var t;(t=s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.game){t.next=5;break}return t.next=3,(0,i.kh)(e.game);case 3:n=t.sent,r(n);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function c(e){z(a,r,s,c,u,"next",e)}function u(e){z(a,r,s,c,u,"throw",e)}c(void 0)}))})()}),[e]),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F.Z,{title:n.title}),(0,a.jsxs)(u.Z,{children:[n&&0===(0,v.size)(n)&&(0,a.jsx)("h2",{children:"No hay descripcion"}),n&&(0,v.size)(n)>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{games:n}),(0,a.jsx)(E,{games:n})]})]})]}):null}}},function(e){e.O(0,[885,166,806,962,774,888,179],(function(){return t=7417,e(e.s=t);var t}));var t=e.O();_N_E=t}]);