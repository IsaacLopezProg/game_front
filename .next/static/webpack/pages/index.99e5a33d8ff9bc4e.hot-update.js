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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/BasicLayout/BasicLayout */ \"./layouts/BasicLayout/BasicLayout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\nfunction Home() {\n    var envio = function envio() {\n        // axios.get('http://localhost:1337/posts').then(response => {\n        //   console.log(response);\n        // });\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:1337/api/posts', {\n            descripcion: \"sabadffgdfgdo\",\n            titulo: \"hsdfsdfsdfola\"\n        }).then(function(response) {\n            console.log(response);\n        });\n    // axios\n    //   .put('http://localhost:1337/posts/3', {\n    //     descripcion: \"prueba 3\",\n    //     titulo: \"hsdfsdfsdfola\"\n    //   })\n    //   .then(response => {\n    //     console.log(response);\n    //   });\n    // fetch('http://localhost:1337/api/posts/', {\n    //   method: 'POST',\n    //   headers: {\n    //     \"Content-Type\": \"application/json; charset=utf-8\",\n    //     // \"Authorization\": \"Bearer \" + \"cdbb141b72aefbf01c86914753f3361e9ab0624d9ddf672ac2b054dcb23d468189e106da48fdd6de2b3deb260bf9d6396968f9eac61eabe0c1ec3cf32459a344fa7a7e4762668702f96c15fa10ee03e6cbb9dee01bdaea31b08ae9c9b9131cc45770e8dbfffc328cc6c4d4b4393ff38e5441f1c023505666eb394c2c8f2655e7\"\n    //   },\n    //   body: JSON.stringify({\n    //     descripcion: \"sdfsdf\",\n    //     titulo: \"hortertertla\"\n    //     // categories: [2],\n    //     // categories: [3],\n    //   }),\n    // })\n    //   .then(response => response.json())\n    //   .then(data => console.log(data));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"ESTAMOS EN EL HOME\"\n                }, void 0, false, {\n                    fileName: \"/home/lopez/Proyectos/React/NEXT/ecommerce/front/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: envio,\n                    color: \"black\",\n                    children: \"Enviar\"\n                }, void 0, false, {\n                    fileName: \"/home/lopez/Proyectos/React/NEXT/ecommerce/front/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lopez/Proyectos/React/NEXT/ecommerce/front/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0RDtBQUNuQztBQUNpQjtBQUczQixRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDO1FBSXJCQyxLQUFLLEdBQWQsUUFBUSxDQUFDQSxLQUFLLEdBQUcsQ0FBQztRQUNoQixFQUE4RDtRQUM5RCxFQUEyQjtRQUMzQixFQUFNO1FBQ05ILGlEQUNPLENBQUMsQ0FBaUMsa0NBQUUsQ0FBQztZQUN4Q0ssV0FBVyxFQUFFLENBQWU7WUFDNUJDLE1BQU0sRUFBRSxDQUFlO1FBQ3pCLENBQUMsRUFDQUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVEsRUFBSSxDQUFDO1lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUTtRQUN0QixDQUFDO0lBRUgsRUFBUTtJQUNSLEVBQTRDO0lBQzVDLEVBQStCO0lBQy9CLEVBQThCO0lBQzlCLEVBQU87SUFDUCxFQUF3QjtJQUN4QixFQUE2QjtJQUM3QixFQUFRO0lBRVIsRUFBOEM7SUFDOUMsRUFBb0I7SUFDcEIsRUFBZTtJQUNmLEVBQXlEO0lBQ3pELEVBQXlTO0lBQ3pTLEVBQU87SUFDUCxFQUEyQjtJQUMzQixFQUE2QjtJQUM3QixFQUE2QjtJQUM3QixFQUEwQjtJQUMxQixFQUEwQjtJQUMxQixFQUFRO0lBQ1IsRUFBSztJQUNMLEVBQXVDO0lBQ3ZDLEVBQXNDO0lBR3hDLENBQUM7SUFLRCxNQUFNOzhGQUVEVCx3RUFBVzs7NEZBQ1RZLENBQUU7OEJBQUMsQ0FFSjs7Ozs7OzRGQUNDVixxREFBTTtvQkFBQ1csT0FBTyxFQUFFVCxLQUFLO29CQUFFVSxLQUFLLEVBQUMsQ0FBTzs4QkFBQyxDQUV0Qzs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7S0E1RHVCWCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0L0Jhc2ljTGF5b3V0XCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG5cbiAgZnVuY3Rpb24gZW52aW8oKSB7XG4gICAgLy8gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcG9zdHMnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAvLyB9KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcG9zdHMnLCB7XG4gICAgICAgIGRlc2NyaXBjaW9uOiBcInNhYmFkZmZnZGZnZG9cIixcbiAgICAgICAgdGl0dWxvOiBcImhzZGZzZGZzZGZvbGFcIlxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAvLyBheGlvc1xuICAgIC8vICAgLnB1dCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Bvc3RzLzMnLCB7XG4gICAgLy8gICAgIGRlc2NyaXBjaW9uOiBcInBydWViYSAzXCIsXG4gICAgLy8gICAgIHRpdHVsbzogXCJoc2Rmc2Rmc2Rmb2xhXCJcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcG9zdHMvJywge1xuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgIC8vICAgICAvLyBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBcImNkYmIxNDFiNzJhZWZiZjAxYzg2OTE0NzUzZjMzNjFlOWFiMDYyNGQ5ZGRmNjcyYWMyYjA1NGRjYjIzZDQ2ODE4OWUxMDZkYTQ4ZmRkNmRlMmIzZGViMjYwYmY5ZDYzOTY5NjhmOWVhYzYxZWFiZTBjMWVjM2NmMzI0NTlhMzQ0ZmE3YTdlNDc2MjY2ODcwMmY5NmMxNWZhMTBlZTAzZTZjYmI5ZGVlMDFiZGFlYTMxYjA4YWU5YzliOTEzMWNjNDU3NzBlOGRiZmZmYzMyOGNjNmM0ZDRiNDM5M2ZmMzhlNTQ0MWYxYzAyMzUwNTY2NmViMzk0YzJjOGYyNjU1ZTdcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgZGVzY3JpcGNpb246IFwic2Rmc2RmXCIsXG4gICAgLy8gICAgIHRpdHVsbzogXCJob3J0ZXJ0ZXJ0bGFcIlxuICAgIC8vICAgICAvLyBjYXRlZ29yaWVzOiBbMl0sXG4gICAgLy8gICAgIC8vIGNhdGVnb3JpZXM6IFszXSxcbiAgICAvLyAgIH0pLFxuICAgIC8vIH0pXG4gICAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcblxuXG4gIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QmFzaWNMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBFU1RBTU9TIEVOIEVMIEhPTUVcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlbnZpb30gY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgIEVudmlhclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQmFzaWNMYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCYXNpY0xheW91dCIsImF4aW9zIiwiQnV0dG9uIiwiSG9tZSIsImVudmlvIiwicG9zdCIsImRlc2NyaXBjaW9uIiwidGl0dWxvIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImgxIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});