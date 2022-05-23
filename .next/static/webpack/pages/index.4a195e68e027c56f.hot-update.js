"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./api/user.js":
/*!*********************!*\
  !*** ./api/user.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerApi\": function() { return /* binding */ registerApi; },\n/* harmony export */   \"LoginApi\": function() { return /* binding */ LoginApi; },\n/* harmony export */   \"resetPasswordApi\": function() { return /* binding */ resetPasswordApi; },\n/* harmony export */   \"getMeApi\": function() { return /* binding */ getMeApi; },\n/* harmony export */   \"updateNameApi\": function() { return /* binding */ updateNameApi; },\n/* harmony export */   \"updateEmailApi\": function() { return /* binding */ updateEmailApi; },\n/* harmony export */   \"updatePasswordApi\": function() { return /* binding */ updatePasswordApi; }\n/* harmony export */ });\n/* harmony import */ var _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n// RECUPERANDO EL LINK DEL ENV\nvar base = \"http://localhost:1337\";\n// FUNCION DE REGISTRO DE USUARIO\nfunction registerApi(formData) {\n    return _registerApi.apply(this, arguments);\n}\nfunction _registerApi() {\n    _registerApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n        var url, params, response, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/auth/local/register\");\n                    params = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify(formData)\n                    };\n                    _ctx.next = 5;\n                    return fetch(url, params);\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRANDO EL ERROR DE LA PETICION\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                12\n            ]\n        ]);\n    }));\n    return _registerApi.apply(this, arguments);\n}\n// FUNCION DE LOGIN DE USUARIO\nfunction LoginApi(formData) {\n    return _LoginApi.apply(this, arguments);\n}\nfunction _LoginApi() {\n    _LoginApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n        var url, params, response, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/auth/local\");\n                    params = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify(formData)\n                    };\n                    _ctx.next = 5;\n                    return fetch(url, params);\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRANDO EL ERROR DE LA PETICION\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                12\n            ]\n        ]);\n    }));\n    return _LoginApi.apply(this, arguments);\n}\n_c = LoginApi;\n// FUNCION DE RECUPERACION DE CONTRASENA DE USUARIO\nfunction resetPasswordApi(email) {\n    return _resetPasswordApi.apply(this, arguments);\n}\nfunction _resetPasswordApi() {\n    _resetPasswordApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email) {\n        var url, params, response, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/auth/forgot-password\");\n                    params = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify({\n                            email: email\n                        })\n                    };\n                    _ctx.next = 5;\n                    return fetch(url, params);\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRANDO EL ERROR DE LA PETICION\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                12\n            ]\n        ]);\n    }));\n    return _resetPasswordApi.apply(this, arguments);\n}\n// RECIBIENDO LOS DATOS DEL USUARIO\n// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT\nfunction getMeApi(logout) {\n    return _getMeApi.apply(this, arguments);\n}\nfunction _getMeApi() {\n    _getMeApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(logout) {\n        var url, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/users/me\");\n                    _ctx.next = 4;\n                    return (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.authFetch)(url, null, logout);\n                case 4:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result ? result : null);\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", null);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return _getMeApi.apply(this, arguments);\n}\n// ACTUALIZANDO EL NOMBRE Y APELLIDO\n// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT\nfunction updateNameApi(idUser, data, logout) {\n    return _updateNameApi.apply(this, arguments);\n}\nfunction _updateNameApi() {\n    _updateNameApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(idUser, data, logout) {\n        var url, params, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/users/\").concat(idUser);\n                    params = {\n                        method: \"PUT\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify(data)\n                    };\n                    _ctx.next = 5;\n                    return (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.authFetch)(url, params, logout);\n                case 5:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result ? result : null);\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRAMOS EL ERROR POR CONSOLA\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    return _updateNameApi.apply(this, arguments);\n}\n// ACTUALIZANDO EL EMAIL\n// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT\nfunction updateEmailApi(idUser, email, logout) {\n    return _updateEmailApi.apply(this, arguments);\n}\nfunction _updateEmailApi() {\n    _updateEmailApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(idUser, email, logout) {\n        var url, params, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/users/\").concat(idUser);\n                    params = {\n                        method: \"PUT\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify({\n                            email: email\n                        })\n                    };\n                    _ctx.next = 5;\n                    return (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.authFetch)(url, params, logout);\n                case 5:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result ? result : null);\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRAMOS EL ERROR POR CONSOLA\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    return _updateEmailApi.apply(this, arguments);\n}\n// ACTUALIZANDO EL EMAIL\n// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT\nfunction updatePasswordApi(idUser, password, logout) {\n    return _updatePasswordApi.apply(this, arguments);\n}\nfunction _updatePasswordApi() {\n    _updatePasswordApi = _asyncToGenerator(_home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(idUser, password, logout) {\n        var url, params, result;\n        return _home_lopez_Proyectos_React_NEXT_game_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(base, \"/users/\").concat(idUser);\n                    params = {\n                        method: \"PUT\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS\n                        body: JSON.stringify({\n                            password: password\n                        })\n                    };\n                    _ctx.next = 5;\n                    return (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.authFetch)(url, params, logout);\n                case 5:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result ? result : null);\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    // MOSTRAMOS EL ERROR POR CONSOLA\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    return _updatePasswordApi.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"LoginApi\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RU4sTUFBTTtXQUExQ0ssa0JBQWlCOztTQUFqQkEsa0JBQWlCO0lBQWpCQSxrQkFBaUIsNEtBQWhDLFFBQVEsU0FBeUJILE1BQU0sRUFBRUksUUFBUSxFQUFFTixNQUFNLEVBQUUsQ0FBQztZQUdyRGpCLEdBQUcsRUFFSEMsTUFBTSxFQVNORSxNQUFNOzs7OztvQkFYTkgsR0FBRyxHQUFJLEdBQWdCbUIsTUFBTSxDQUFwQnpCLElBQUksRUFBQyxDQUFPLFVBQVMsT0FBUHlCLE1BQU07b0JBRTdCbEIsTUFBTSxHQUFHLENBQUM7d0JBQ1pHLE1BQU0sRUFBRSxDQUFLO3dCQUNiQyxPQUFPLEVBQUUsQ0FBQzs0QkFDTixDQUFjLGVBQUUsQ0FBa0I7d0JBQ3RDLENBQUM7d0JBQ0QsRUFBaUQ7d0JBQ2pEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7NEJBQUNlLFFBQVEsRUFBUkEsUUFBUTt3QkFBQyxDQUFDO29CQUNyQyxDQUFDOzsyQkFFb0I5Qix1REFBUyxDQUFDTyxHQUFHLEVBQUVDLE1BQU0sRUFBRWdCLE1BQU07O29CQUE1Q2QsTUFBTTtpREFFTEEsTUFBTSxHQUFHQSxNQUFNLEdBQUcsSUFBSTs7OztvQkFHN0IsRUFBaUM7b0JBQ2pDUSxPQUFPLENBQUNDLEdBQUc7aURBRUosSUFBSTs7Ozs7Ozs7Ozs7SUFHbkIsQ0FBQztXQXpCcUJVLGtCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvdXNlci5qcz80OGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhGZXRjaCB9IGZyb20gXCIuLi91dGlscy9mZXRjaFwiO1xuLy8gUkVDVVBFUkFORE8gRUwgTElOSyBERUwgRU5WXG5jb25zdCBiYXNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9QQVRIO1xuXG4vLyBGVU5DSU9OIERFIFJFR0lTVFJPIERFIFVTVUFSSU9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlckFwaShmb3JtRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEZPUk1BTkRPIExBIFVSTFxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYDtcbiAgICAgICAgLy8gQ1JFQU5ETyBFTCBIRUFEIERFIFBFVElDSU9OXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBFTlZJQU5ETyBFTCBDVUVSUE8gREUgTEEgUEVUSUNJT04gREUgTE9TIERBVE9TXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyBFTlZJQU5ETyBFTCBGRUNUSFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKTtcbiAgICAgICAgLy8gUkVDSUJJRU5ETyBMT1MgUkVTVUxUQURPUyBERSBMQSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vIERFVk9MVklFTkRPIExPUyBSRVNVTFRBRE9TIERFIExBIFBFVElDSU9OXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgLy8gTUFORUpPIERFIEVSUk9SRVNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBNT1NUUkFORE8gRUwgRVJST1IgREUgTEEgUEVUSUNJT05cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyBERVZPTFZJRU5ETyBFTCBFUlJPUlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuLy8gRlVOQ0lPTiBERSBMT0dJTiBERSBVU1VBUklPXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9naW5BcGkoZm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBGT1JNQU5ETyBMQSBVUkxcbiAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZX0vYXV0aC9sb2NhbGA7XG4gICAgICAgIC8vIENSRUFORE8gRUwgSEVBRCBERSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRU5WSUFORE8gRUwgQ1VFUlBPIERFIExBIFBFVElDSU9OIERFIExPUyBEQVRPU1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH1cbiAgICAgICAgLy8gRU5WSUFORE8gRUwgRkVDVEhcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHBhcmFtcyk7XG4gICAgICAgIC8vIFJFQ0lCSUVORE8gTE9TIFJFU1VMVEFET1MgREUgTEEgUEVUSUNJT05cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAvLyBERVZPTFZJRU5ETyBMT1MgUkVTVUxUQURPUyBERSBMQSBQRVRJQ0lPTlxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIC8vIE1BTkVKTyBERSBFUlJPUkVTXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTU9TVFJBTkRPIEVMIEVSUk9SIERFIExBIFBFVElDSU9OXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gREVWT0xWSUVORE8gRUwgRVJST1JcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG5cblxuLy8gRlVOQ0lPTiBERSBSRUNVUEVSQUNJT04gREUgQ09OVFJBU0VOQSBERSBVU1VBUklPXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQYXNzd29yZEFwaShlbWFpbCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEZPUk1BTkRPIExBIFVSTFxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlfS9hdXRoL2ZvcmdvdC1wYXNzd29yZGA7XG4gICAgICAgIC8vIENSRUFORE8gRUwgSEVBRCBERSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRU5WSUFORE8gRUwgQ1VFUlBPIERFIExBIFBFVElDSU9OIERFIExPUyBEQVRPU1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KVxuICAgICAgICB9O1xuICAgICAgICAvLyBFTlZJQU5ETyBFTCBGRUNUSFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKTtcbiAgICAgICAgLy8gUkVDSUJJRU5ETyBMT1MgUkVTVUxUQURPUyBERSBMQSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIC8vIERFVk9MVklFTkRPIExPUyBSRVNVTFRBRE9TIERFIExBIFBFVElDSU9OXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgLy8gTUFORUpPIERFIEVSUk9SRVNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBNT1NUUkFORE8gRUwgRVJST1IgREUgTEEgUEVUSUNJT05cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyBERVZPTFZJRU5ETyBFTCBFUlJPUlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuLy8gUkVDSUJJRU5ETyBMT1MgREFUT1MgREVMIFVTVUFSSU9cbi8vIEVTIFVOIEVORFBPSU5UIEFVVE9SSVpBRE8gQVNJIFFVRSBIQVkgUVVFIFVTQVIgQVVUSF9GRVRDSCBZIFBBU0FSIEVMIExPR09VVFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lQXBpKGxvZ291dCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIENVT05TVFJVSU1PUyBMQSBVUkxBXG4gICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2V9L3VzZXJzL21lYDtcbiAgICAgICAgLy8gRU5WSUFNT1MgRUwgRkVUQ0ggTyBMQSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoRmV0Y2godXJsLCBudWxsLCBsb2dvdXQpO1xuICAgICAgICAvLyBFTlZJQU1PUyBMT1MgREFUT1MgUkVDSUJJRE9TXG4gICAgICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQgOiBudWxsO1xuICAgICAgICAvLyBNQU5FSk8gREUgRVJST1JFU1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5PIERFVk9MVkVNT1MgTkFEQVxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cbn1cblxuXG4vLyBBQ1RVQUxJWkFORE8gRUwgTk9NQlJFIFkgQVBFTExJRE9cbi8vIEVTIFVOIEVORFBPSU5UIEFVVE9SSVpBRE8gQVNJIFFVRSBIQVkgUVVFIFVTQVIgQVVUSF9GRVRDSCBZIFBBU0FSIEVMIExPR09VVFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU5hbWVBcGkoaWRVc2VyLCBkYXRhLCBsb2dvdXQpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDVU9OU1RSVUlNT1MgTEEgVVJMQVxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlfS91c2Vycy8ke2lkVXNlcn1gO1xuICAgICAgICAvLyBDUkVBTkRPIEVMIEhFQUQgREUgUEVUSUNJT05cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRU5WSUFORE8gRUwgQ1VFUlBPIERFIExBIFBFVElDSU9OIERFIExPUyBEQVRPU1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfTtcbiAgICAgICAgLy8gRU5WSUFNT1MgRUwgRkVUQ0ggTyBMQSBQRVRJQ0lPTlxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoRmV0Y2godXJsLCBwYXJhbXMsIGxvZ291dCk7XG4gICAgICAgIC8vIEVOVklBTU9TIExPUyBEQVRPUyBSRUNJQklET1NcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IG51bGw7XG4gICAgICAgIC8vIE1BTkVKTyBERSBFUlJPUkVTXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTU9TVFJBTU9TIEVMIEVSUk9SIFBPUiBDT05TT0xBXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAvLyBOTyBERVZPTFZFTU9TIE5BREFcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG59XG5cblxuLy8gQUNUVUFMSVpBTkRPIEVMIEVNQUlMXG4vLyBFUyBVTiBFTkRQT0lOVCBBVVRPUklaQURPIEFTSSBRVUUgSEFZIFFVRSBVU0FSIEFVVEhfRkVUQ0ggWSBQQVNBUiBFTCBMT0dPVVRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbWFpbEFwaShpZFVzZXIsIGVtYWlsLCBsb2dvdXQpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDVU9OU1RSVUlNT1MgTEEgVVJMQVxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlfS91c2Vycy8ke2lkVXNlcn1gO1xuICAgICAgICAvLyBDUkVBTkRPIEVMIEhFQUQgREUgUEVUSUNJT05cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRU5WSUFORE8gRUwgQ1VFUlBPIERFIExBIFBFVElDSU9OIERFIExPUyBEQVRPU1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KVxuICAgICAgICB9O1xuICAgICAgICAvLyBFTlZJQU1PUyBFTCBGRVRDSCBPIExBIFBFVElDSU9OXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGhGZXRjaCh1cmwsIHBhcmFtcywgbG9nb3V0KTtcbiAgICAgICAgLy8gRU5WSUFNT1MgTE9TIERBVE9TIFJFQ0lCSURPU1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogbnVsbDtcbiAgICAgICAgLy8gTUFORUpPIERFIEVSUk9SRVNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBNT1NUUkFNT1MgRUwgRVJST1IgUE9SIENPTlNPTEFcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIC8vIE5PIERFVk9MVkVNT1MgTkFEQVxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cbn1cblxuLy8gQUNUVUFMSVpBTkRPIEVMIEVNQUlMXG4vLyBFUyBVTiBFTkRQT0lOVCBBVVRPUklaQURPIEFTSSBRVUUgSEFZIFFVRSBVU0FSIEFVVEhfRkVUQ0ggWSBQQVNBUiBFTCBMT0dPVVRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYXNzd29yZEFwaShpZFVzZXIsIHBhc3N3b3JkLCBsb2dvdXQpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDVU9OU1RSVUlNT1MgTEEgVVJMQVxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlfS91c2Vycy8ke2lkVXNlcn1gO1xuICAgICAgICAvLyBDUkVBTkRPIEVMIEhFQUQgREUgUEVUSUNJT05cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRU5WSUFORE8gRUwgQ1VFUlBPIERFIExBIFBFVElDSU9OIERFIExPUyBEQVRPU1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwYXNzd29yZCB9KVxuICAgICAgICB9O1xuICAgICAgICAvLyBFTlZJQU1PUyBFTCBGRVRDSCBPIExBIFBFVElDSU9OXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGhGZXRjaCh1cmwsIHBhcmFtcywgbG9nb3V0KTtcbiAgICAgICAgLy8gRU5WSUFNT1MgTE9TIERBVE9TIFJFQ0lCSURPU1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogbnVsbDtcbiAgICAgICAgLy8gTUFORUpPIERFIEVSUk9SRVNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBNT1NUUkFNT1MgRUwgRVJST1IgUE9SIENPTlNPTEFcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIC8vIE5PIERFVk9MVkVNT1MgTkFEQVxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cbn0iXSwibmFtZXMiOlsiYXV0aEZldGNoIiwiYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1BBVEgiLCJyZWdpc3RlckFwaSIsImZvcm1EYXRhIiwidXJsIiwicGFyYW1zIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiTG9naW5BcGkiLCJyZXNldFBhc3N3b3JkQXBpIiwiZW1haWwiLCJnZXRNZUFwaSIsImxvZ291dCIsInVwZGF0ZU5hbWVBcGkiLCJpZFVzZXIiLCJkYXRhIiwidXBkYXRlRW1haWxBcGkiLCJ1cGRhdGVQYXNzd29yZEFwaSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/user.js\n");

/***/ })

});