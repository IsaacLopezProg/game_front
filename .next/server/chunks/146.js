"use strict";
exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFavoriteApi),
/* harmony export */   "Kr": () => (/* binding */ addFavoriteApi),
/* harmony export */   "YK": () => (/* binding */ removeFavoriteApi),
/* harmony export */   "H0": () => (/* binding */ getFavoriteApi)
/* harmony export */ });
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5587);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


// RECUPERANDO EL LINK DEL ENV
const base = "http://localhost:1337";
// FUNCION DE COMPRONACION DE DATOS
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function isFavoriteApi(iduser, idgame, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/favorites?users_permissions_user=${iduser}&game=${idgame}`;
        // ENVIAMOS EL FETCH O LA PETICION
        return await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, null, logout);
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE REGISTRO DE FAVORITOS
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function addFavoriteApi(idUser, idGame, logout) {
    try {
        // COMPROBANDO SI ESTA EN FAVORITOS YA EL MISMO JUEGO
        const dataFound = await isFavoriteApi(idUser, idGame, logout);
        // SI NO ESTA EN FAVORITOS Y NO ES NULL ENTONCES PODEMOS TRABAJAR
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.size)(dataFound) > 0 || !dataFound) {
            return "Este juego ya lo tienes en tu lista de favoritos";
        } else {
            // CREANDO LA URL
            const url = `${base}/favorites`;
            // CREANDO EL HEAD DE PETICION
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
                body: JSON.stringify({
                    users_permissions_user: idUser,
                    game: idGame
                })
            };
            // ENVIAMOS EL FETCH O LA PETICION
            const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
            // ENVIAMOS LOS DATOS RECIBIDOS
            return result;
        // MANEJO DE ERRORES
        }
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE BORRAR EL JUEGO DE FAVORITOS
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function removeFavoriteApi(idUser, idGame, logout) {
    try {
        // COMPROBANDO SI ESTA EN FAVORITOS YA EL MISMO JUEGO
        const dataFound = await isFavoriteApi(idUser, idGame, logout);
        console.log(dataFound);
        // SI ESTA EN FAVORITOS PODEMOS TRABAJAR
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.size)(dataFound) > 0) {
            var ref;
            // FORMANDO LA URL
            const url = `${base}/favorites/${(ref = dataFound[0]) === null || ref === void 0 ? void 0 : ref._id}`;
            // CREANDO EL HEAD DE PETICION
            const params = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            // ENVIAMOS EL FETCH O LA PETICION
            const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
            // ENVIAMOS LOS DATOS RECIBIDOS
            return result;
        }
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return false;
    }
}
// FUNCION PARA OBTENER JUEGOS FAVORITOS POR CADA USUARIO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function getFavoriteApi(iduser, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/favorites?users_permissions_user=${iduser}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, null, logout);
        return result;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}


/***/ })

};
;