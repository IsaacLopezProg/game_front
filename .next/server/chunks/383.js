"use strict";
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 9019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "oI": () => (/* binding */ hadExpiredToken)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

// RECUPERANDO EL TOKEN DEL ENV
const TOKEN = "token";
// GUARDANDO EL TOKEN EN EL LOCAL_STORAGE
function setToken(token) {
    // GUADADO DE TOKEN
    localStorage.setItem(TOKEN, token);
}
// RECUPERANDO EL TOKEN DEL LOCAL_STORAGE
function getToken() {
    // RECIBIENDO Y ENVIANDO EL TOKEN
    return localStorage.getItem(TOKEN);
}
// ELIMINANDO EL TOKEN DEL LOCAL_STORAGE
function removeToken() {
    // BORRADO DEL TOKEN
    localStorage.removeItem(TOKEN);
}
// FUNCION PARA VERIFICAR SI EL TOKEN A EXPIRADO
function hadExpiredToken(token) {
    // DESCIFRAR EL TOKEN
    const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
    // ASIGNANDO EL VALOR DE EXPIRACION DEL TOKEN
    const expireData = tokenDecode.exp * 1000;
    // EVALUANDO EL TIEMPO A DIA DE HOY
    const currentData = new Date().getTime();
    // EVALUANDO FECHA DEL TOKEN Y FECHA DE HOY
    if (currentData > expireData) {
        // DEVOLVEMOS QUE EL TOKEN A EXPIRADO
        return true;
    }
    // DEVOLVEMOS QUE EL TOKEN NO A EXPIRADO
    return false;
}


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// CREACION DEL CONTEXT DE AUTH

// DEFIIENDO EL STATE O CONTENIDO DEL CONTEXT AUTH
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    auth: undefined,
    login: ()=>null
    ,
    logout: ()=>null
    ,
    setReloadUser: ()=>null
});
// EXPORTANDO EL CONTEXT
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    productsCart: 0,
    addProductCart: ()=>null
    ,
    getProductsCart: ()=>null
    ,
    removeProductCart: ()=>null
    ,
    removeAllProductsCart: ()=>null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContext);


/***/ }),

/***/ 5587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ authFetch)
/* harmony export */ });
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9019);

// FUNCION PARA PROTEGER LOS ENDPOINTS
async function authFetch(url, params, logout) {
    // EXTRAEMOS EL TOKEN
    const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)();
    // COMPROBANDO SI EL TOKEN EXISTE
    if (!token) {
        // si no existe el token
        logout();
    // SI EL TOKEN EXISTE
    } else {
        // SI EL TOKEN A EXPIRADO
        if ((0,_api_token__WEBPACK_IMPORTED_MODULE_0__/* .hadExpiredToken */ .oI)(token)) {
            // SACAMOS LA CUENTA
            logout();
        } else {
            // CONSTRUYENDO EL PARAMS ESTANDAR
            const paramsTemp = {
                // compiamos lo que viene el el params
                ...params,
                // CONSTRUIMOS LA CABECERA
                headers: {
                    // VERIFICAMOS LO QUE TIENE EL PARAMS CABECERA
                    ...params === null || params === void 0 ? void 0 : params.headers,
                    // AGRERGAMOS LA AUTORIZACION O EL CORS
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                // ENVIANDO EL FECTH
                const response = await fetch(url, paramsTemp);
                // RECIBIENDO LOS RESULTADOS DE LA PETICION
                const result = await response.json();
                // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
                return result;
            // MANEJO DE ERRORES
            } catch (error) {
                // MOSTRANDO EL ERROR DE LA PETICION
                console.log(error);
                // DEVOLVIENDO EL ERROR
                return error;
            }
        }
    }
}


/***/ })

};
;