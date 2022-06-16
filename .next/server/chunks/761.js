"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 1761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ getGameApi),
/* harmony export */   "Ip": () => (/* binding */ getGamePlatformApi),
/* harmony export */   "s9": () => (/* binding */ getCountGamePlatformApi),
/* harmony export */   "kh": () => (/* binding */ getGameByUrlApi),
/* harmony export */   "_w": () => (/* binding */ getSearchGameApi)
/* harmony export */ });
// RECUPERANDO EL LINK DEL ENV
const base = "http://localhost:1337";
// FUNCION DE OBTENER LOS JUEGOS & AGERGAMOS LIMITES 
async function getGameApi(limit) {
    try {
        //  QUERIES DE BUSQUEDA LIMITE
        const limitItem = `_limit=${limit}`;
        //  QUERIES DE ORDEN
        const orderItem = '_sort=createdAt:desc';
        // FORMANDO LA URL
        const url = `${base}/games?${limitItem}&${orderItem}`;
        // FILTER ?_sort=position:asc
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS
        return response;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE OBTENER LOS JUEGOS POR PLATAFORMAS & 
// AGERGAMOS LIMITES & START PARA PAGINACION
async function getGamePlatformApi(platfom, limit, start) {
    try {
        //  QUERIES DE BUSQUEDA LIMITE
        const limitItem = `_limit=${limit}`;
        //  QUERIES DE ORDEN
        const orderItem = '_sort=createdAt:desc';
        const startItem = `_start=${start}`;
        // FORMANDO LA URL
        const url = `${base}/games?platfom.platfom=${platfom}&${limitItem}&${orderItem}&${startItem}`;
        // FILTER ?_sort=position:asc
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS
        return response;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE OBTENER EL COUNT DE LOS JUEGOS POR PLATAFORMAS
async function getCountGamePlatformApi(platfom) {
    try {
        // FORMANDO LA URL
        const url = `${base}/games/count?platfom.platfom=${platfom}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS
        return response;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE OBTENER LOS JUEGOS POR URL
async function getGameByUrlApi(path) {
    try {
        // FORMANDO LA URL
        const url = `${base}/games?url=${path}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS ENVIANDO EL PRIMER ELEMENTO
        return response[0];
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE OBTENER LOS JUEGOS POR TITULO EN LA BUSQUEDA
async function getSearchGameApi(title) {
    try {
        // FORMANDO LA URL
        const url = `${base}/games?_q=${title}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS ENVIANDO EL PRIMER ELEMENTO
        return response;
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