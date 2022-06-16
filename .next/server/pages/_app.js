(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9531);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5926);
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8742);
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9019);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);

// INTERNAL






// CSS





// EXTERNAL


function MyApp({ Component , pageProps  }) {
    // STATE PARA GUARDAR EL TOKEN DEL USUARIO
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    // STATE PARA FORZAR UNA RECARGA DE LA COMPROBACION DEL TOKEN
    const { 0: reloadUser , 1: setReloadUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // STATE PARA FORZAR UNA RECARGA DE LA COMPROBACION DEL CARRITO
    const { 0: reloadCountCart , 1: setReloadCountCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //STATE PARA CONTART LOS PRODUCTOS EN EL CARRITO
    const { 0: countCart , 1: setcountCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // ASIGNANDO EL VALOR DEL NEXT/ROUTER
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // FUNCION PARA MANTENER EL TOKEN, AUNQUE SE RECARGUE LA PAGINA
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_6__/* .getToken */ .LP)();
        if (token) {
            setAuth({
                token,
                idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(token).id
            });
        } else {
            setAuth(null);
        }
        setReloadUser(false);
    }, [
        reloadUser
    ]);
    // FUNCION PARA RECIBIR Y GUARDAR EL TOKEN
    const login = (token)=>{
        (0,_api_token__WEBPACK_IMPORTED_MODULE_6__/* .setToken */ .o4)(token);
        setAuth({
            token,
            isUser: jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(token).id
        });
    };
    // FUNCION DE LOGOUT, O BORRADO DEL TOKEN DEL LOCAL_STORAGE
    const logout = ()=>{
        // COMPROBACION DEL USUARIO AUTENTICADO
        if (auth) {
            // INVOCANDO LA FUNCION QUE ELIMINA EL TOKEN
            (0,_api_token__WEBPACK_IMPORTED_MODULE_6__/* .removeToken */ .gy)();
            // LIMPIANDO EL STATE DEL AUTH PARA BORRAR LOS DATOS DEL USUARIO GUARDADOS
            setAuth(null);
            // REDIRECCIONANDO A LA HOME
            router.push("/");
            // ALERT CON TOAST
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Deslogeado correctamente");
        }
    };
    // CREANDO EL STATE DEL CONTEXT AUTH
    // USE_MEMO ES PARA QUE NO SE BORRE LO QUE ESTA ESCRITO EN EL.
    const authData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            auth,
            login,
            logout,
            setReloadUser
        })
    , [
        auth
    ]);
    // FUNCION QUE PROPRUEBA SI EL USUARIO ESTA LOGEADO
    const addProduct = (product)=>{
        // RECIBIMOS EL TOKEN DEL USUARIO
        const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_6__/* .getToken */ .LP)();
        // COMPROBACION
        if (token) {
            // SI ESTA LOGEADO SE AGREGA EL PRODUCTO AL CARRITO
            (0,_api_cart__WEBPACK_IMPORTED_MODULE_5__/* .addProductCart */ .ec)(product);
            // CADA VEZ QUE SE AGREGE UN PRODUCTO AL CARRITO 
            // SE VA A REVALIDAR EL STATE
            setReloadCountCart(true);
        // SINO
        } else {
            // SE LE DA UN AVISO AL USUARIO QUE TIENE QUE ESTA LOGEADO
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.warning("Para comprar un juego tienes que iniciar sesi\xf3n");
        }
    };
    // FUNCION PARA AGREGAR AL STATE EL VALOR DEL CART
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.log(countingCart())
        // AGRERGAR EL VALOR DE COUNTING_CART AL STATE
        setcountCart((0,_api_cart__WEBPACK_IMPORTED_MODULE_5__/* .countingCart */ .yZ)());
        // CADA VEZ QUE EL SE GUARDE UN VALOR EN EL STATE VA A CAMBIAR EL SWITCH
        setReloadCountCart(false);
    // PARA QUE SE RECARGUE CADA VEZ QUE EL VALOR SEA MODIFICADO, 
    // RESETEAMOS EL VALOR DE reloadCountCart
    }, [
        reloadCountCart,
        auth
    ]);
    // FUNCION QUE ELIMINAR LOS PRODUCTOS EN EL CARRITO
    const removeProduct = (product)=>{
        // LE PASAMOS EL PRODUCTO AL CARRITO
        // YO PIENSO QUE ESTO SE HACE PARA PODER PASAR LA FUNCION AL CART_DATA
        (0,_api_cart__WEBPACK_IMPORTED_MODULE_5__/* .removeProductCart */ .Vq)(product);
        // RECARGAMOS LA PAGINA DEL CARRITO
        setReloadCountCart(true);
    };
    const cartData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            productsCart: countCart,
            addProductCart: (product)=>addProduct(product)
            ,
            getProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_5__/* .getProductsCart */ .rV,
            removeProductCart: (product)=>removeProduct(product)
            ,
            removeAllProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_5__/* .removeAllProductsCart */ .ob
        })
    , [
        countCart
    ]);
    // CONPROBACION DE SI EL USUARIO SE A LOGEADO O NO
    if (auth === undefined) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
            value: authData,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_CartContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
                value: cartData,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        newestOnTop: true,
                        closeOnClick: true,
                        rtl: false,
                        pauseOnFocusLoss: false,
                        draggable: true,
                        pauseOnHover: true
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,742], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();