/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToken\": () => (/* binding */ setToken),\n/* harmony export */   \"getToken\": () => (/* binding */ getToken),\n/* harmony export */   \"removeToken\": () => (/* binding */ removeToken),\n/* harmony export */   \"hadExpiredToken\": () => (/* binding */ hadExpiredToken)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n\n// RECUPERANDO EL TOKEN DEL ENV\nconst TOKEN = \"token\";\n// GUARDANDO EL TOKEN EN EL LOCAL_STORAGE\nfunction setToken(token) {\n    // GUADADO DE TOKEN\n    localStorage.setItem(TOKEN, token);\n}\n// RECUPERANDO EL TOKEN DEL LOCAL_STORAGE\nfunction getToken() {\n    // RECIBIENDO Y ENVIANDO EL TOKEN\n    return localStorage.getItem(TOKEN);\n}\n// ELIMINANDO EL TOKEN DEL LOCAL_STORAGE\nfunction removeToken() {\n    // BORRADO DEL TOKEN\n    localStorage.removeItem(TOKEN);\n}\n// FUNCION PARA VERIFICAR SI EL TOKEN A EXPIRADO\nfunction hadExpiredToken(token) {\n    // DESCIFRAR EL TOKEN\n    const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);\n    // ASIGNANDO EL VALOR DE EXPIRACION DEL TOKEN\n    const expireData = tokenDecode.exp * 1000;\n    // EVALUANDO EL TIEMPO A DIA DE HOY\n    const currentData = new Date().getTime();\n    // EVALUANDO FECHA DEL TOKEN Y FECHA DE HOY\n    if (currentData > expireData) {\n        // DEVOLVEMOS QUE EL TOKEN A EXPIRADO\n        return true;\n    }\n    // DEVOLVEMOS QUE EL TOKEN NO A EXPIRADO\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvdG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBRWxDLEVBQStCO0FBQy9CLEtBQUssQ0FBQ0MsS0FBSyxHQUFHQyxPQUE2QjtBQUczQyxFQUF5QztBQUNsQyxTQUFTRyxRQUFRLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQzdCLEVBQW1CO0lBQ25CQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ1AsS0FBSyxFQUFFSyxLQUFLO0FBQ3JDLENBQUM7QUFFRCxFQUF5QztBQUNsQyxTQUFTRyxRQUFRLEdBQUcsQ0FBQztJQUN4QixFQUFpQztJQUNqQyxNQUFNLENBQUNGLFlBQVksQ0FBQ0csT0FBTyxDQUFDVCxLQUFLO0FBQ3JDLENBQUM7QUFFRCxFQUF3QztBQUNqQyxTQUFTVSxXQUFXLEdBQUcsQ0FBQztJQUMzQixFQUFvQjtJQUNwQkosWUFBWSxDQUFDSyxVQUFVLENBQUNYLEtBQUs7QUFDakMsQ0FBQztBQUVELEVBQWdEO0FBQ3pDLFNBQVNZLGVBQWUsQ0FBQ1AsS0FBSyxFQUFFLENBQUM7SUFDcEMsRUFBcUI7SUFDckIsS0FBSyxDQUFDUSxXQUFXLEdBQUdkLGlEQUFTLENBQUNNLEtBQUs7SUFDbkMsRUFBNkM7SUFDN0MsS0FBSyxDQUFDUyxVQUFVLEdBQUdELFdBQVcsQ0FBQ0UsR0FBRyxHQUFHLElBQUk7SUFDekMsRUFBbUM7SUFDbkMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE9BQU87SUFDdEMsRUFBMkM7SUFDM0MsRUFBRSxFQUFFRixXQUFXLEdBQUdGLFVBQVUsRUFBRSxDQUFDO1FBQzNCLEVBQXFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJO0lBQ2YsQ0FBQztJQUNELEVBQXdDO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLO0FBRWhCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9hcGkvdG9rZW4uanM/ZGFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5cbi8vIFJFQ1VQRVJBTkRPIEVMIFRPS0VOIERFTCBFTlZcbmNvbnN0IFRPS0VOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVE9LRU47XG5cblxuLy8gR1VBUkRBTkRPIEVMIFRPS0VOIEVOIEVMIExPQ0FMX1NUT1JBR0VcbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbikge1xuICAgIC8vIEdVQURBRE8gREUgVE9LRU5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTiwgdG9rZW4pO1xufVxuXG4vLyBSRUNVUEVSQU5ETyBFTCBUT0tFTiBERUwgTE9DQUxfU1RPUkFHRVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCkge1xuICAgIC8vIFJFQ0lCSUVORE8gWSBFTlZJQU5ETyBFTCBUT0tFTlxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTik7XG59XG5cbi8vIEVMSU1JTkFORE8gRUwgVE9LRU4gREVMIExPQ0FMX1NUT1JBR0VcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpIHtcbiAgICAvLyBCT1JSQURPIERFTCBUT0tFTlxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcbn1cblxuLy8gRlVOQ0lPTiBQQVJBIFZFUklGSUNBUiBTSSBFTCBUT0tFTiBBIEVYUElSQURPXG5leHBvcnQgZnVuY3Rpb24gaGFkRXhwaXJlZFRva2VuKHRva2VuKSB7XG4gICAgLy8gREVTQ0lGUkFSIEVMIFRPS0VOXG4gICAgY29uc3QgdG9rZW5EZWNvZGUgPSBqd3REZWNvZGUodG9rZW4pO1xuICAgIC8vIEFTSUdOQU5ETyBFTCBWQUxPUiBERSBFWFBJUkFDSU9OIERFTCBUT0tFTlxuICAgIGNvbnN0IGV4cGlyZURhdGEgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xuICAgIC8vIEVWQUxVQU5ETyBFTCBUSUVNUE8gQSBESUEgREUgSE9ZXG4gICAgY29uc3QgY3VycmVudERhdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAvLyBFVkFMVUFORE8gRkVDSEEgREVMIFRPS0VOIFkgRkVDSEEgREUgSE9ZXG4gICAgaWYgKGN1cnJlbnREYXRhID4gZXhwaXJlRGF0YSkge1xuICAgICAgICAvLyBERVZPTFZFTU9TIFFVRSBFTCBUT0tFTiBBIEVYUElSQURPXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBERVZPTFZFTU9TIFFVRSBFTCBUT0tFTiBOTyBBIEVYUElSQURPXG4gICAgcmV0dXJuIGZhbHNlO1xuXG59Il0sIm5hbWVzIjpbImp3dERlY29kZSIsIlRPS0VOIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RPS0VOIiwic2V0VG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJyZW1vdmVUb2tlbiIsInJlbW92ZUl0ZW0iLCJoYWRFeHBpcmVkVG9rZW4iLCJ0b2tlbkRlY29kZSIsImV4cGlyZURhdGEiLCJleHAiLCJjdXJyZW50RGF0YSIsIkRhdGUiLCJnZXRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/token.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// CREACION DEL CONTEXT DE AUTH\n\n// DEFIIENDO EL STATE O CONTENIDO DEL CONTEXT AUTH\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    auth: undefined,\n    login: ()=>null\n    ,\n    logout: ()=>null\n    ,\n    setReloadUser: ()=>null\n});\n// EXPORTANDO EL CONTEXT\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQStCO0FBQ007QUFFckMsRUFBa0Q7QUFDbEQsS0FBSyxDQUFDQyxXQUFXLGlCQUFHRCxvREFBYSxDQUFDLENBQUM7SUFDL0JFLElBQUksRUFBRUMsU0FBUztJQUNmQyxLQUFLLE1BQVEsSUFBSTs7SUFDakJDLE1BQU0sTUFBUSxJQUFJOztJQUNsQkMsYUFBYSxNQUFRLElBQUk7QUFDN0IsQ0FBQztBQUVELEVBQXdCO0FBQ3hCLGlFQUFlTCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzEzOTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1JFQUNJT04gREVMIENPTlRFWFQgREUgQVVUSFxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuLy8gREVGSUlFTkRPIEVMIFNUQVRFIE8gQ09OVEVOSURPIERFTCBDT05URVhUIEFVVEhcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgYXV0aDogdW5kZWZpbmVkLFxuICAgIGxvZ2luOiAoKSA9PiBudWxsLFxuICAgIGxvZ291dDogKCkgPT4gbnVsbCxcbiAgICBzZXRSZWxvYWRVc2VyOiAoKSA9PiBudWxsLFxufSlcblxuLy8gRVhQT1JUQU5ETyBFTCBDT05URVhUXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aCIsInVuZGVmaW5lZCIsImxvZ2luIiwibG9nb3V0Iiwic2V0UmVsb2FkVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);\n\n// INTERNAL\n\n\n\n\n// CSS\n\n\n\n// EXTERNAL\n\n\nfunction MyApp({ Component , pageProps  }) {\n    // STATE PARA GUARDAR EL TOKEN DEL USUARIO\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    // STATE PARA FORZAR UNA RECARGA DE LA COMPROBACION DEL TOKEN\n    const { 0: reloadUser , 1: setReloadUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // ASIGNANDO EL VALOR DEL NEXT/ROUTER\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // FUNCION PARA MANTENER EL TOKEN, AUNQUE SE RECARGUE LA PAGINA\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_4__.getToken)();\n        if (token) {\n            setAuth({\n                token,\n                idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(token).id\n            });\n        } else {\n            setAuth(null);\n        }\n        setReloadUser(false);\n    }, [\n        reloadUser\n    ]);\n    // FUNCION PARA RECIBIR Y GUARDAR EL TOKEN\n    const login = (token)=>{\n        (0,_api_token__WEBPACK_IMPORTED_MODULE_4__.setToken)(token);\n        setAuth({\n            token,\n            isUser: jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(token).id\n        });\n    };\n    // FUNCION DE LOGOUT, O BORRADO DEL TOKEN DEL LOCAL_STORAGE\n    const logout = ()=>{\n        // COMPROBACION DEL USUARIO AUTENTICADO\n        if (auth) {\n            // INVOCANDO LA FUNCION QUE ELIMINA EL TOKEN\n            (0,_api_token__WEBPACK_IMPORTED_MODULE_4__.removeToken)();\n            // LIMPIANDO EL STATE DEL AUTH PARA BORRAR LOS DATOS DEL USUARIO GUARDADOS\n            setAuth(null);\n            // REDIRECCIONANDO A LA HOME\n            router.push(\"/\");\n            // ALERT CON TOAST\n            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Deslogeado correctamente\");\n        }\n    };\n    // CREANDO EL STATE DEL CONTEXT AUTH\n    // USE_MEMO ES PARA QUE NO SE BORRE LO QUE ESTA ESCRITO EN EL.\n    const authData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            auth,\n            login,\n            logout,\n            setReloadUser\n        })\n    , [\n        auth\n    ]);\n    // CONPROBACION DE SI EL USUARIO SE A LOGEADO O NO\n    if (auth === undefined) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n            value: authData,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/lopez/Proyectos/React/NEXT/game_front/pages/_app.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n                    position: \"top-right\",\n                    autoClose: 5000,\n                    hideProgressBar: true,\n                    newestOnTop: true,\n                    closeOnClick: true,\n                    rtl: false,\n                    pauseOnFocusLoss: false,\n                    draggable: true,\n                    pauseOnHover: true\n                }, void 0, false, {\n                    fileName: \"/home/lopez/Proyectos/React/NEXT/game_front/pages/_app.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lopez/Proyectos/React/NEXT/game_front/pages/_app.js\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBVztBQUNnRDtBQUNwQjtBQUVTO0FBQ2M7QUFFOUQsRUFBTTtBQUN3QjtBQUNnQjtBQUNMO0FBRXpDLEVBQVc7QUFDMkM7QUFDcEI7U0FFekJZLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBRXhDLEVBQTBDO0lBQzFDLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlmLCtDQUFRLENBQUNnQixTQUFTO0lBQzFDLEVBQTZEO0lBQzdELEtBQUssTUFBRUMsVUFBVSxNQUFFQyxhQUFhLE1BQUlsQiwrQ0FBUSxDQUFDLEtBQUs7SUFFbEQsRUFBcUM7SUFDckMsS0FBSyxDQUFDbUIsTUFBTSxHQUFHaEIsc0RBQVM7SUFFeEIsRUFBK0Q7SUFDL0RGLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ21CLEtBQUssR0FBR2Ysb0RBQVE7UUFDdEIsRUFBRSxFQUFFZSxLQUFLLEVBQUUsQ0FBQztZQUNWTCxPQUFPLENBQUMsQ0FBQztnQkFDUEssS0FBSztnQkFDTEMsTUFBTSxFQUFFWCxpREFBUyxDQUFDVSxLQUFLLEVBQUVFLEVBQUU7WUFDN0IsQ0FBQztRQUVILENBQUMsTUFDSSxDQUFDO1lBQ0pQLE9BQU8sQ0FBQyxJQUFJO1FBQ2QsQ0FBQztRQUVERyxhQUFhLENBQUMsS0FBSztJQUVyQixDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsVUFBVTtJQUFBLENBQUM7SUFFZixFQUEwQztJQUMxQyxLQUFLLENBQUNNLEtBQUssSUFBSUgsS0FBSyxHQUFLLENBQUM7UUFDeEJiLG9EQUFRLENBQUNhLEtBQUs7UUFDZEwsT0FBTyxDQUFDLENBQUM7WUFDUEssS0FBSztZQUNMSSxNQUFNLEVBQUVkLGlEQUFTLENBQUNVLEtBQUssRUFBRUUsRUFBRTtRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQTJEO0lBQzNELEtBQUssQ0FBQ0csTUFBTSxPQUFTLENBQUM7UUFDcEIsRUFBdUM7UUFDdkMsRUFBRSxFQUFFWCxJQUFJLEVBQUUsQ0FBQztZQUNULEVBQTRDO1lBQzVDUix1REFBVztZQUNYLEVBQTBFO1lBQzFFUyxPQUFPLENBQUMsSUFBSTtZQUNaLEVBQTRCO1lBQzVCSSxNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFHO1lBQ2YsRUFBa0I7WUFDbEJqQix5REFBYSxDQUFDLENBQTBCO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBb0M7SUFDcEMsRUFBOEQ7SUFDOUQsS0FBSyxDQUFDbUIsUUFBUSxHQUFHMUIsOENBQU8sTUFDZixDQUFDO1lBQ05ZLElBQUk7WUFDSlMsS0FBSztZQUNMRSxNQUFNO1lBQ05QLGFBQWE7UUFDZixDQUFDO01BQ0QsQ0FBQ0o7UUFBQUEsSUFBSTtJQUFBLENBQUM7SUFJUixFQUFrRDtJQUNsRCxFQUFFLEVBQUVBLElBQUksS0FBS0UsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBR25DLE1BQU07OEZBRURaLHFFQUFvQjtZQUFDMEIsS0FBSyxFQUFFRixRQUFROzs0RkFDbENoQixTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7NEZBQ3ZCTCwwREFBYztvQkFDYnVCLFFBQVEsRUFBQyxDQUFXO29CQUNwQkMsU0FBUyxFQUFFLElBQUk7b0JBQ2ZDLGVBQWU7b0JBQ2ZDLFdBQVc7b0JBQ1hDLFlBQVk7b0JBQ1pDLEdBQUcsRUFBRSxLQUFLO29CQUNWQyxnQkFBZ0IsRUFBRSxLQUFLO29CQUN2QkMsU0FBUztvQkFDVEMsWUFBWTs7Ozs7Ozs7Ozs7OztBQU10QixDQUFDO0FBRUQsaUVBQWU1QixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSU5URVJOQUxcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRUb2tlbiwgcmVtb3ZlVG9rZW4sIHNldFRva2VuIH0gZnJvbSAnLi4vYXBpL3Rva2VuJztcblxuLy8gQ1NTXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbi8vIEVYVEVSTkFMXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICAvLyBTVEFURSBQQVJBIEdVQVJEQVIgRUwgVE9LRU4gREVMIFVTVUFSSU9cbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICAvLyBTVEFURSBQQVJBIEZPUlpBUiBVTkEgUkVDQVJHQSBERSBMQSBDT01QUk9CQUNJT04gREVMIFRPS0VOXG4gIGNvbnN0IFtyZWxvYWRVc2VyLCBzZXRSZWxvYWRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIEFTSUdOQU5ETyBFTCBWQUxPUiBERUwgTkVYVC9ST1VURVJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gRlVOQ0lPTiBQQVJBIE1BTlRFTkVSIEVMIFRPS0VOLCBBVU5RVUUgU0UgUkVDQVJHVUUgTEEgUEFHSU5BXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0QXV0aCh7XG4gICAgICAgIHRva2VuLFxuICAgICAgICBpZFVzZXI6IGp3dERlY29kZSh0b2tlbikuaWRcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRBdXRoKG51bGwpO1xuICAgIH1cblxuICAgIHNldFJlbG9hZFVzZXIoZmFsc2UpO1xuXG4gIH0sIFtyZWxvYWRVc2VyXSlcblxuICAvLyBGVU5DSU9OIFBBUkEgUkVDSUJJUiBZIEdVQVJEQVIgRUwgVE9LRU5cbiAgY29uc3QgbG9naW4gPSAodG9rZW4pID0+IHtcbiAgICBzZXRUb2tlbih0b2tlbik7XG4gICAgc2V0QXV0aCh7XG4gICAgICB0b2tlbixcbiAgICAgIGlzVXNlcjogand0RGVjb2RlKHRva2VuKS5pZFxuICAgIH0pXG4gIH1cblxuICAvLyBGVU5DSU9OIERFIExPR09VVCwgTyBCT1JSQURPIERFTCBUT0tFTiBERUwgTE9DQUxfU1RPUkFHRVxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgLy8gQ09NUFJPQkFDSU9OIERFTCBVU1VBUklPIEFVVEVOVElDQURPXG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIC8vIElOVk9DQU5ETyBMQSBGVU5DSU9OIFFVRSBFTElNSU5BIEVMIFRPS0VOXG4gICAgICByZW1vdmVUb2tlbigpO1xuICAgICAgLy8gTElNUElBTkRPIEVMIFNUQVRFIERFTCBBVVRIIFBBUkEgQk9SUkFSIExPUyBEQVRPUyBERUwgVVNVQVJJTyBHVUFSREFET1NcbiAgICAgIHNldEF1dGgobnVsbCk7XG4gICAgICAvLyBSRURJUkVDQ0lPTkFORE8gQSBMQSBIT01FXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAvLyBBTEVSVCBDT04gVE9BU1RcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJEZXNsb2dlYWRvIGNvcnJlY3RhbWVudGVcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gQ1JFQU5ETyBFTCBTVEFURSBERUwgQ09OVEVYVCBBVVRIXG4gIC8vIFVTRV9NRU1PIEVTIFBBUkEgUVVFIE5PIFNFIEJPUlJFIExPIFFVRSBFU1RBIEVTQ1JJVE8gRU4gRUwuXG4gIGNvbnN0IGF1dGhEYXRhID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYXV0aCxcbiAgICAgIGxvZ2luLFxuICAgICAgbG9nb3V0LFxuICAgICAgc2V0UmVsb2FkVXNlclxuICAgIH0pLFxuICAgIFthdXRoXVxuICApO1xuXG5cbiAgLy8gQ09OUFJPQkFDSU9OIERFIFNJIEVMIFVTVUFSSU8gU0UgQSBMT0dFQURPIE8gTk9cbiAgaWYgKGF1dGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhclxuICAgICAgICAgIG5ld2VzdE9uVG9wXG4gICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzPXtmYWxzZX1cbiAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgLz5cbiAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiZ2V0VG9rZW4iLCJyZW1vdmVUb2tlbiIsInNldFRva2VuIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsImp3dERlY29kZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXV0aCIsInNldEF1dGgiLCJ1bmRlZmluZWQiLCJyZWxvYWRVc2VyIiwic2V0UmVsb2FkVXNlciIsInJvdXRlciIsInRva2VuIiwiaWRVc2VyIiwiaWQiLCJsb2dpbiIsImlzVXNlciIsImxvZ291dCIsInB1c2giLCJzdWNjZXNzIiwiYXV0aERhdGEiLCJQcm92aWRlciIsInZhbHVlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImNsb3NlT25DbGljayIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJwYXVzZU9uSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();