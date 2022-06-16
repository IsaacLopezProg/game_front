"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 3225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GQ": () => (/* binding */ createAddressApi),
/* harmony export */   "zM": () => (/* binding */ getAddressApi),
/* harmony export */   "qd": () => (/* binding */ deleteAddressApi)
/* harmony export */ });
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5587);

// RECUPERANDO EL LINK DEL ENV
const base = "http://localhost:1337";
// FUNCION DE REGISTRO DE DIRECCION
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function createAddressApi(address, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/addresses`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(address)
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
        // SI LA PETICION NO ES 200 SALTAMOS AL ERROR
        // if (result.statusCode !== 200) throw "Error en el servidor"
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE OBTENER LA DIRECCION
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function getAddressApi(idUser, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/addresses?users_permissions_user=${idUser}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, null, logout);
        // SI LA PETICION NO ES 200 SALTAMOS AL ERROR
        // if (result.statusCode !== 200) throw "Error en el servidor";
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE BORRAR LA DIRECCION
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function deleteAddressApi(idAddress, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/addresses/${idAddress}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
        // SI LA PETICION NO ES 500 SALTAMOS AL ERROR
        if (result.statusCode === 500) throw "Error en el servidor";
        // ENVIAMOS LOS DATOS RECIBIDOS
        return true;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return false;
    }
}


/***/ })

};
;