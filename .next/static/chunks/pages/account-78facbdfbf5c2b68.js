(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{3290:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return n(9041)}])},3225:function(e,r,n){"use strict";n.d(r,{GQ:function(){return u},zM:function(){return d},qd:function(){return h}});var t=n(4051),a=n.n(t),s=n(5587);function o(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function i(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function i(e){o(s,t,a,i,l,"next",e)}function l(e){o(s,t,a,i,l,"throw",e)}i(void 0)}))}}var l="http://localhost:1337";function u(e,r){return c.apply(this,arguments)}function c(){return(c=i(a().mark((function e(r,n){var t,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(l,"/addresses"),o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=5,(0,s.S)(t,o,n);case 5:return i=e.sent,e.abrupt("return",i||null);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e,r){return p.apply(this,arguments)}function p(){return(p=i(a().mark((function e(r,n){var t,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(l,"/addresses?users_permissions_user=").concat(r),e.next=4,(0,s.S)(t,null,n);case 4:return o=e.sent,e.abrupt("return",o||null);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e,r){return m.apply(this,arguments)}function m(){return(m=i(a().mark((function e(r,n){var t,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(l,"/addresses/").concat(r),o={method:"DELETE",headers:{"Content-Type":"application/json"}},e.next=5,(0,s.S)(t,o,n);case 5:if(500!==e.sent.statusCode){e.next=8;break}throw"Error en el servidor";case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}},9041:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return z}});var t=n(4051),a=n.n(t),s=n(5893),o=n(7294),i=n(1163),l=n(6019),u=n(5985),c=n(9962),d=n(4428),p=n(967),h=n(6443),m=n(4231),f=n(2132);function v(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function x(e){var r,n,t=e.user,i=e.logout,c=(0,u.Z)().setReloadUser,x=(0,o.useState)(!1),g=x[0],j=x[1],w=(0,h.TA)({initialValues:(r=t.name,n=t.lastname,{name:r||"",lastname:n||""}),validationSchema:m.Ry({name:m.Z_().required("el nuevo nombre es obligatorio"),lastname:m.Z_().required("el nuevo apellido es obligatorio")}),onSubmit:function(){var e,r=(e=a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,(0,l.zW)(t.id,r,i);case 3:e.sent?(c(!0),f.Am.success("Nombre y apellido actualizado correctamente")):f.Am.error("Error, no se pudo actualizar el nombre y el apellido"),j(!1);case 6:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){v(s,t,a,o,i,"next",e)}function i(e){v(s,t,a,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}()});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-white px-8 py-8 ",children:[(0,s.jsx)("h2",{className:"text-[#ff5200]",children:"Cambia tu nombre y apellido"}),(0,s.jsxs)(d.Z,{onSubmit:w.handleSubmit,children:[(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"name",placeholder:"Tu nuevo nombre",onChange:w.handleChange,value:w.values.name,error:w.errors.name}),(0,s.jsx)(d.Z.Input,{name:"lastname",placeholder:"Tu nuevo apellido",onChange:w.handleChange,value:w.values.lastname,error:w.errors.lastname})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(p.Z,{loading:g,style:{backgroundColor:"#ff5200",padding:"10px 48px",color:"white"},children:"Actualizar"})})]})]})})}function g(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function j(e){var r=e.user,n=e.logout,t=e.setReloadUser,i=(0,o.useState)(!1),u=i[0],c=i[1],v=(0,h.TA)({initialValues:{email:"",repeatEmail:""},validationSchema:m.Ry({email:m.Z_().email(!0).required(!0).oneOf([m.iH("repeatEmail")],!0),repeatEmail:m.Z_().email(!0).required(!0).oneOf([m.iH("email")],"El email no es igual")}),onSubmit:function(){var e,s=(e=a().mark((function e(s){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,(0,l.js)(r.id,s.email,n);case 3:(o=e.sent)&&400!==(null===o||void 0===o?void 0:o.statusCode)?(t(!0),f.Am.success("Email actualizado correctamente"),v.handleReset()):f.Am.error("Error, no se pudo actualizar el email"),c(!1);case 6:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){g(s,t,a,o,i,"next",e)}function i(e){g(s,t,a,o,i,"throw",e)}o(void 0)}))});return function(e){return s.apply(this,arguments)}}()});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-white px-8 py-8 ",children:[(0,s.jsxs)("h2",{className:"text-[#ff5200]",children:["Cambiar el Email",(0,s.jsxs)("span",{className:"font-light text-lg ml-2",children:["(Tu email actual: ",r.email,")"]})]}),(0,s.jsxs)(d.Z,{onSubmit:v.handleSubmit,children:[(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"email",placeholder:"Escribe tu nuevo Email",onChange:v.handleChange,value:v.values.email,error:v.errors.email}),(0,s.jsx)(d.Z.Input,{name:"repeatEmail",placeholder:"Confirma tu nuevo Email",onChange:v.handleChange,value:v.values.repeatEmail,error:v.errors.repeatEmail})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(p.Z,{style:{backgroundColor:"#ff5200",padding:"10px 48px",color:"white"},loading:u,children:"Actualizar"})})]})]})})}function w(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function y(e){var r=e.user,n=e.logout,t=(0,o.useState)(!1),i=t[0],u=t[1],c=(0,h.TA)({initialValues:{password:"",repeatPassword:""},validationSchema:m.Ry({password:m.Z_().required(!0).oneOf([m.iH("repeatPassword")],!0),repeatPassword:m.Z_().required(!0).oneOf([m.iH("password")],"El password no es igual")}),onSubmit:function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,l.ZH)(r.id,t.password,n);case 3:e.sent?n():f.Am.error("Error, no se pudo actualizar el password"),u(!1);case 6:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){w(s,t,a,o,i,"next",e)}function i(e){w(s,t,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"bg-white px-8 py-8 ",children:[(0,s.jsx)("h2",{className:"text-[#ff5200]",children:"Cambiar el password"}),(0,s.jsxs)(d.Z,{onSubmit:c.handleSubmit,children:[(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"password",placeholder:"Escribe tu nuevo password",onChange:c.handleChange,value:c.values.password,error:c.errors.password,type:"password"}),(0,s.jsx)(d.Z.Input,{name:"repeatPassword",placeholder:"Confirma tu nuevo password",onChange:c.handleChange,value:c.values.repeatPassword,error:c.errors.repeatPassword,type:"password"})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(p.Z,{style:{backgroundColor:"#ff5200",padding:"10px 48px",color:"white"},loading:i,children:"Actualizar"})})]})]})})}var b=n(8268),C=n(5150),Z=n(3225);function S(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function E(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){S(s,t,a,o,i,"next",e)}function i(e){S(s,t,a,o,i,"throw",e)}o(void 0)}))}}function N(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){N(e,r,n[r])}))}return e}function _(e){var r=e.setReloadAddress,n=e.setShowModal,t=(0,o.useState)(!1),i=t[0],l=t[1],c=(0,u.Z)(),v=c.auth,x=c.logout,g=v.idUser,j=(0,h.TA)({initialValues:{title:"",name:"",address:"",city:"",state:"",postalCode:"",phone:""},validationSchema:m.Ry({title:m.Z_().required(!0),name:m.Z_().required(!0),address:m.Z_().required(!0),city:m.Z_().required(!0),state:m.Z_().required(!0),postalCode:m.Z_().required(!0),phone:m.Z_().required(!0)}),onSubmit:function(){var e=E(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t),j.resetForm(),l(!1),n(!1),r(!0);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),w=function(){var e=E(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),n=P({},r,{users_permissions_user:g}),e.next=4,(0,Z.GQ)(n,x);case 4:e.sent?(f.Am.success("Direccion creada correctamente"),j.handleReset(),l(!1)):(f.Am.error("Error, no se pudo crear la direccion"),l(!1));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(d.Z,{onSubmit:j.handleSubmit,children:[(0,s.jsx)(d.Z.Input,{name:"title",type:"text",label:"Titulo de la direccion",placeholder:"titulo de la direccion",onChange:j.handleChange,value:j.values.title,error:j.errors.title}),(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"name",type:"text",label:"Nombre y apellido",placeholder:"nombre y apellido",onChange:j.handleChange,value:j.values.name,error:j.errors.name}),(0,s.jsx)(d.Z.Input,{name:"address",type:"text",label:"Direccion",placeholder:"Direccion",onChange:j.handleChange,value:j.values.address,error:j.errors.address})]}),(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"city",type:"text",label:"Ciudad",placeholder:"Ciudad",onChange:j.handleChange,value:j.values.city,error:j.errors.city}),(0,s.jsx)(d.Z.Input,{name:"state",type:"text",label:"Estado/Provincia/Region",placeholder:"Estado/Provincia/Region",onChange:j.handleChange,value:j.values.state,error:j.errors.state})]}),(0,s.jsxs)(d.Z.Group,{widths:"equal",children:[(0,s.jsx)(d.Z.Input,{name:"postalCode",type:"text",label:"Codigo Postal",placeholder:"Codigo Postal",onChange:j.handleChange,value:j.values.postalCode,error:j.errors.postalCode}),(0,s.jsx)(d.Z.Input,{name:"phone",type:"text",label:"Numero de telefono",placeholder:"Numero de telefono",onChange:j.handleChange,value:j.values.phone,error:j.errors.phone})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(p.Z,{type:"submit",loading:i,style:{backgroundColor:"#ff5200",padding:"10px 48px",color:"white"},children:"Crear direccion"})})]})})}var k=n(6486);function A(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function q(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){A(s,t,a,o,i,"next",e)}function i(e){A(s,t,a,o,i,"throw",e)}o(void 0)}))}}function R(e){var r=e.reloadAddress,n=e.setReloadAddress,t=(0,o.useState)(null),i=t[0],l=t[1],c=(0,u.Z)(),d=c.auth,p=c.logout;return(0,o.useEffect)((function(){q(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.zM)(d.idUser||d.isUser,p);case 2:r=e.sent,l(r||[]),n(!1);case 5:case"end":return e.stop()}}),e)})))()}),[r]),i?(0,s.jsx)("div",{children:0===(0,k.size)(i)?(0,s.jsx)("h3",{children:"No hay direcciones creadas"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:" grid md:grid-cols-3 grid-cols-1",children:(0,k.map)(i,(function(e){return(0,s.jsx)("div",{className:"mx-4 mt-4 ",children:(0,s.jsx)(O,{address:e,logout:p,setReloadAddress:n})},e.id)}))})})}):null}function O(e){var r=e.address,n=e.logout,t=e.setReloadAddress,i=(0,o.useState)(!1),l=i[0],u=i[1],c=function(){var e=q(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,Z.qd)(r._id,n);case 3:e.sent&&t(!0),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"border rounded-md border-gray-400 p-4 ",id:"hola",children:[(0,s.jsx)("h3",{className:"text-center border-b-2 border-gray-400",children:r.title}),(0,s.jsx)("p",{children:r.name}),(0,s.jsx)("p",{children:r.address}),(0,s.jsxs)("p",{children:[r.city,","," ",r.state,","," ",r.postalCode]}),(0,s.jsx)("p",{className:"text-base font-medium",children:r.phone}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(p.Z,{style:{backgroundColor:"#ff5200",color:"white"},children:"Editar"}),(0,s.jsx)(p.Z,{onClick:c,loading:l,children:"Eliminar"})]})]})}function T(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(u){return void n(u)}i.done?r(l):Promise.resolve(l).then(t,a)}function z(){var e=(0,o.useState)(void 0),r=e[0],n=e[1],t=(0,u.Z)(),d=t.auth,h=t.logout,m=t.setReloadUser,f=(0,i.useRouter)(),v=(0,o.useState)(void 0);v[0],v[1];return(0,o.useEffect)((function(){var e;(e=a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.F9)(h);case 2:r=e.sent,n(r||null);case 4:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){T(s,t,a,o,i,"next",e)}function i(e){T(s,t,a,o,i,"throw",e)}o(void 0)}))})()}),[d]),void 0===r?null:d||r?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.Z,{children:(0,s.jsxs)("div",{className:"px-2 pt-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{color:"black",children:"Configuracion"}),(0,s.jsx)(x,{user:r,logout:h}),(0,s.jsx)(j,{user:r,logout:h,setReloadUser:m}),(0,s.jsx)(y,{user:r,logout:h})]}),(0,s.jsx)(I,{})]})})}):(f.replace("/"),null)}function I(){var e=(0,o.useState)(!1),r=e[0],n=e[1],t=(0,o.useState)(""),a=t[0],i=t[1],l=(0,o.useState)(null),u=l[0],c=l[1],d=(0,o.useState)(!1),h=d[0],m=d[1];return(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)(p.Z,{color:"black",children:"Direcciones"}),(0,s.jsx)("div",{className:"float-right",children:(0,s.jsx)(C.Z,{name:"plus",link:!0,onClick:function(){return i("Nueva direccion"),c((0,s.jsx)(_,{setShowModal:n,setReloadAddress:m})),void n(!0)}})}),(0,s.jsx)("div",{className:"mt-2 bg-white px-8 py-8",children:(0,s.jsx)(R,{reloadAddress:h,setReloadAddress:m})}),(0,s.jsx)(b.Z,{show:r,setShow:n,title:a,size:"small",centered:!1,children:u})]})}}},function(e){e.O(0,[166,962,774,888,179],(function(){return r=3290,e(e.s=r);var r}));var r=e.O();_N_E=r}]);