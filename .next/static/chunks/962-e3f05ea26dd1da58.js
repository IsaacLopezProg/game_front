"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{6019:function(e,n,r){r.d(n,{qL:function(){return u},Ig:function(){return d},uL:function(){return f},F9:function(){return m},zW:function(){return v},js:function(){return w},ZH:function(){return b}});var t=r(4051),a=r.n(t),s=r(5587);function o(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function c(e){o(s,t,a,c,i,"next",e)}function i(e){o(s,t,a,c,i,"throw",e)}c(void 0)}))}}var i="http://localhost:1337";function u(e){return l.apply(this,arguments)}function l(){return(l=c(a().mark((function e(n){var r,t,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i,"/auth/local/register"),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch(r,t);case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function e(n){var r,t,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i,"/auth/local"),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch(r,t);case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=c(a().mark((function e(n){var r,t,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i,"/auth/forgot-password"),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})},e.next=5,fetch(r,t);case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=c(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i,"/users/me"),e.next=4,(0,s.S)(r,null,n);case 4:return t=e.sent,e.abrupt("return",t||null);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e,n,r){return j.apply(this,arguments)}function j(){return(j=c(a().mark((function e(n,r,t){var o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat(i,"/users/").concat(n),c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=5,(0,s.S)(o,c,t);case 5:return u=e.sent,e.abrupt("return",u||null);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e,n,r){return y.apply(this,arguments)}function y(){return(y=c(a().mark((function e(n,r,t){var o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat(i,"/users/").concat(n),c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})},e.next=5,(0,s.S)(o,c,t);case 5:return u=e.sent,e.abrupt("return",u||null);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function b(e,n,r){return g.apply(this,arguments)}function g(){return(g=c(a().mark((function e(n,r,t){var o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat(i,"/users/").concat(n),c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:r})},e.next=5,(0,s.S)(o,c,t);case 5:return u=e.sent,e.abrupt("return",u||null);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}},8268:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(5893),a=r(711),s=r(5150);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(e){var n=e.show,r=e.setShow,i=e.title,u=e.children,l=c(e,["show","setShow","title","children"]),d=function(){return r(!1)};return(0,t.jsxs)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({className:"bg-stone-600",open:n,onClose:d},l,{children:[(0,t.jsx)(a.Z.Header,{className:"text-white",style:{fontSize:"30px",backgroundColor:"#ff5200",color:"#fff"},children:(0,t.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,t.jsx)("span",{className:"mr-24",children:i})," ",(0,t.jsx)(s.Z,{name:"close",onClick:d,className:"cursor-pointer"})]})}),(0,t.jsx)(a.Z.Content,{children:u})]}))}},5985:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(7294),a=r(9531);function s(){return(0,t.useContext)(a.Z)}},7559:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(7294),a=r(5926);function s(){return(0,t.useContext)(a.Z)}},9962:function(e,n,r){r.d(n,{Z:function(){return J}});var t=r(5893),a=r(7294),s=r(4051),o=r.n(s),c=r(1664),i=r(967),u=r(5150),l=r(5142),d=r(3875),h=r(8268),f=r(6019),p=r(5985),m=r(4428),x=r(6443),v=r(4231),j=r(2132);function w(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function y(e){var n=e.showRegisterForm,r=e.setShowModal,s=(0,a.useState)(!1),c=s[0],u=s[1],l=(0,p.Z)(),d=(l.auth,l.login),h=(0,x.TA)({initialValues:{identifier:"",password:""},validationSchema:v.Ry({identifier:v.Z_().required(!0),password:v.Z_().required(!0)}),onSubmit:function(){var e,n=(e=o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,f.Ig)(n);case 3:t=e.sent,u(!1),(null===t||void 0===t?void 0:t.jwt)?(j.Am.success("Logeado correctamente"),d(t.jwt),r(!1)):j.Am.error("El email o la contrasena son incorrectos");case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function o(e){w(s,t,a,o,c,"next",e)}function c(e){w(s,t,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Z,{className:"mb-8",onSubmit:h.handleSubmit,children:[(0,t.jsx)(m.Z.Input,{name:"identifier",placeholder:"Correo Electronico",type:"text",onChange:h.handleChange,error:h.errors.identifier}),(0,t.jsx)(m.Z.Input,{name:"password",placeholder:"Contrasena",type:"password",onChange:h.handleChange,error:h.errors.password}),(0,t.jsx)(i.Z,{className:"submit",type:"submit",loading:c,children:"Entrar"})]}),(0,t.jsx)(i.Z,{type:"button",onClick:function(){h.setErrors({}),v.Z_().email().required("el correo es obligatorio").isValidSync(h.values.identifier)?(0,f.uL)(h.values.identifier):h.setErrors({identifier:!0})},children:"Olvide la contrasena"}),(0,t.jsx)(i.Z,{type:"submit",onClick:n,children:"Registrar"})]})}function b(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function g(e){var n=e.showLoginForm,r=(0,a.useState)(!1),s=r[0],c=r[1],u=(0,x.TA)({initialValues:{name:"",lastname:"",username:"",email:"",password:""},validationSchema:v.Ry({name:v.Z_().required(!0),lastname:v.Z_().required(!0),username:v.Z_().required(!0),email:v.Z_().email(!0).required(!0),password:v.Z_().required(!0)}),onSubmit:function(){var e,r=(e=o().mark((function e(r){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,(0,f.qL)(r);case 3:t=e.sent,c(!1),(null===t||void 0===t?void 0:t.jwt)?(j.Am.success("Registrado correctamente"),n()):(a=t.error.message,j.Am.error(a));case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function o(e){b(s,t,a,o,c,"next",e)}function c(e){b(s,t,a,o,c,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}()});return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(m.Z,{onSubmit:u.handleSubmit,children:[(0,t.jsx)(m.Z.Input,{name:"name",placeholder:"Nombre",type:"text",onChange:u.handleChange,error:u.errors.name}),(0,t.jsx)(m.Z.Input,{name:"lastname",placeholder:"Apellido",type:"text",onChange:u.handleChange,error:u.errors.lastname}),(0,t.jsx)(m.Z.Input,{name:"username",placeholder:"Nombre de Usuario",type:"text",onChange:u.handleChange,error:u.errors.username}),(0,t.jsx)(m.Z.Input,{name:"email",placeholder:"Correo Electronico",type:"text",onChange:u.handleChange,error:u.errors.email}),(0,t.jsx)(m.Z.Input,{name:"password",placeholder:"Contrasena",type:"password",onChange:u.handleChange,error:u.errors.password}),(0,t.jsx)(i.Z,{type:"button",onClick:n,children:"Iniciar Sesion"}),(0,t.jsx)(i.Z,{type:"submit",loading:s,children:"Registrar"})]})})}function Z(e){var n=e.setTitleModal,r=e.setShowModal,s=(0,a.useState)(!0),o=s[0],c=s[1];return o?(0,t.jsx)(y,{showRegisterForm:function(){c(!1),n("Crear cuenta")},setShowModal:r}):(0,t.jsx)(g,{showLoginForm:function(){c(!0),n("Iniciar Sesion")}})}var S=r(7559);function C(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function N(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function o(e){C(s,t,a,o,c,"next",e)}function c(e){C(s,t,a,o,c,"throw",e)}o(void 0)}))}}var k="http://localhost:1337";function O(){return P.apply(this,arguments)}function P(){return(P=N(o().mark((function e(){var n,r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(k,"/platfoms?_sort=position:asc"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var F=r(6486);function T(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function I(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function o(e){T(s,t,a,o,c,"next",e)}function c(e){T(s,t,a,o,c,"throw",e)}o(void 0)}))}}function _(){var e=(0,a.useState)(!1),n=e[0],r=e[1],s=(0,a.useState)("Inicia sesi\xf3n"),d=s[0],m=s[1],x=(0,p.Z)(),v=x.logout,j=x.auth,w=(0,S.Z)().productsCart,y=(0,a.useState)(void 0),b=y[0],g=y[1],C=(0,a.useState)([]),N=C[0],k=C[1];return(0,a.useEffect)((function(){I(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.F9)(v);case 2:n=e.sent,g(n);case 4:case"end":return e.stop()}}),e)})))()}),[j]),(0,a.useEffect)((function(){I(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,k(n||[]);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:" border-gray-200 px-2 sm:px-4 rounded bg-[#a5673f] shadow-xl",children:(0,t.jsxs)("div",{className:"container max-w-6xl flex flex-wrap justify-between items-center mx-auto",children:[(0,t.jsx)("div",{className:" w-full md:block md:w-auto text-white",children:(0,t.jsx)("ul",{className:"flex mt-4 justify-center md:flex-row md:mt-0 md:text-sm md:font-medium",children:(0,t.jsx)(q,{plataforms:N})})}),(0,t.jsx)("div",{className:"w-full md:block md:w-auto text-white",children:(0,t.jsx)("ul",{className:"flex mt-4 md:flex-row justify-center md:mt-0 md:text-sm md:font-medium",children:b?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/wishlist",children:(0,t.jsxs)(i.Z,{style:{marginTop:"0"},as:"a",color:"brown",children:[(0,t.jsx)(u.Z,{name:"heart"}),"Favoritos"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/orders",children:(0,t.jsxs)(i.Z,{as:"a",color:"brown",children:[(0,t.jsx)(u.Z,{name:"game"}),"Pedidos"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/account",children:(0,t.jsxs)(i.Z,{as:"a",color:"brown",children:[(0,t.jsx)(u.Z,{name:"user"}),b.username]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:"/cart",children:(0,t.jsxs)(i.Z,{as:"a",color:"brown",children:[(0,t.jsx)(u.Z,{name:"cart"}),w>0&&(0,t.jsx)(l.Z,{color:"red",circular:!0,children:w})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.Z,{color:"brown",onClick:v,className:"m-0",children:(0,t.jsx)(u.Z,{className:"m-0",name:"power off"})})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("li",{children:(0,t.jsxs)(i.Z,{color:"brown",onClick:function(){return r(!0)},children:[(0,t.jsx)(u.Z,{name:"user "}),"Mi cuenta"]})})})})})]})}),(0,t.jsx)(h.Z,{show:n,setShow:r,title:d,size:"small",centered:!1,children:(0,t.jsx)(Z,{setTitleModal:m,setShowModal:r})})]})}function q(e){var n=e.plataforms;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Z,{inverted:!0,secondary:!0,children:(0,F.map)(n,(function(e){return(0,t.jsx)(c.default,{href:"/games/".concat(e.platfom),children:(0,t.jsx)(d.Z.Item,{header:!0,as:"a",name:e.platfom,style:{color:"white"},children:e.nombre})},e._id)}))})})}var E=r(1163),R=r(7257),A=r(416);function L(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"bg-amber-900",children:(0,t.jsxs)("div",{className:"container max-w-6xl flex flex-wrap justify-between items-center mx-auto bg-amber-900",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(c.default,{href:"/",children:(0,t.jsx)(R.Z,{src:"/logo.png",size:"medium",className:"my-8 cursor-pointer"})})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(M,{})})]})})})}function M(){var e=(0,E.useRouter)(),n=(0,a.useState)(""),r=n[0],s=n[1],o=(0,a.useState)(!1),c=o[0],i=o[1];return(0,a.useEffect)((function(){c&&e.push("/search?query=".concat(r)),i(!0)}),[r]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(A.Z,{size:"small",icon:"search",id:"search-game",value:e.query.query,onChange:function(e,n){return s(n.value)}})})}function z(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"relative shadow-xl z-10 bg-amber-800",children:[(0,t.jsx)(L,{}),(0,t.jsx)(_,{})]})})}function J(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{fluid:!0,className:"min-h-screen bg-[url('/backg.jpg')] bg-cover",children:[(0,t.jsx)(z,{}),(0,t.jsx)("div",{className:"bg-slate-200 min-h-screen max-w-5xl mx-auto",children:e.children})]})})}}}]);