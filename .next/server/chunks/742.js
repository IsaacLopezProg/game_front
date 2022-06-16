"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rV": () => (/* binding */ getProductsCart),
/* harmony export */   "ec": () => (/* binding */ addProductCart),
/* harmony export */   "yZ": () => (/* binding */ countingCart),
/* harmony export */   "Vq": () => (/* binding */ removeProductCart),
/* harmony export */   "_G": () => (/* binding */ paymentCartApi),
/* harmony export */   "ob": () => (/* binding */ removeAllProductsCart)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5587);



// NOS TRAEMOS EL NOMBRE COMO CONSTANTE GLOBAL
const base = "cart";
const path = "http://localhost:1337";
// console.log(base)
// FUNCION PARA OBTENER EL OBJETO QUE TRAE EL CARRITO
function getProductsCart() {
    // GUARDAR EL BASE EN EL LOCAL_STORAGE PARA QUE NO
    // SE PIERDAN LOS DATOS SI SE SALE DE LA PAGINA
    // NO VAMOS A UTILIZAR LA BASE DE DATOS O EL BACKEND
    const cart = localStorage.getItem(base);
    // COMPROBANDO
    // SI EL CARRITO ESTA VACIO ENTONCES DEVOLVEMOS NULL
    if (!cart) {
        return null;
    } else {
        // SI NO ESTA VACIO, ENTONCES HACEMOS UNA COMA,
        // PARA QUE SE GUARDE EL CODIGO DESDEPEGADO
        // DE CADA PRODUCTO QUE AGRERGEMOS
        const products = cart.split(",");
        // console.log(typeof (products));
        // console.log(products);
        // DEVOLVEMOS EL PRODUCTO
        return products;
    }
}
// FUNCION QUE AGREGA LOS OBJETOS AL CARRITO
function addProductCart(product) {
    // OBTENEMOS EL VALOR DEL CARRITO
    const cart = getProductsCart();
    // console.log(cart)
    // COMPROBANDO SI EL CARRITO ESTA VACIO
    if (!cart) {
        // SI ESTA VACIO ENTONCES AGRERGAMOS EL VALOR AL LOCAL_STORAGE
        localStorage.setItem(base, product);
        // Y DAMOS UN AVISO AL USUARIO DE QUE SE AGREGO
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Producto agregado al carrito");
    // SI YA HAY PRODUCTOS EN EL CARRITO ENTONCES
    } else {
        // VAMOS A COMPROBAR QUE EL PRODUCTO NO SE ENCUENTRE EN EL CARRITO
        // CON LA FUNCION INCLUDE DE JAVA_SCRIPT EN LA LIBRERIA LODASH
        const productFound = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(cart, product);
        // COMPROBANDO
        // SI PRODUCTO_FOUND ES TRUE, TIENE EL PRODUCTO DENTRO DEL CARRITO
        if (productFound) {
            // DAMOS UN AVISO AL USUARIO DE QUE EL PRODUCTO YA ESTA EN EL CARRITO
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.warning("El producto ya se encuentra en el carrito");
        } else {
            //  EL CART ES UN ARREGLO POR LO TANTO SE PUEDE AGREGAR CON PUSH
            cart.push(product);
            //  AGREGAMOS EL VALOR EN EL LOCAL_STORAGE, al cart
            localStorage.setItem(base, cart);
            //  DAMOS UN AVISO AL USUARIO DE QUE EL PRODUCTO FUE AGREGADO AL CARRITO
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Producto agregado al carrito");
        }
    }
}
// FUNCION PARA CONTAR LOS PRODUCTOS EN EL CARRITO
function countingCart() {
    // TRAERMOS LO QUE TIENE EL LOCAL_STORAGE
    const cart = getProductsCart();
    // COMPROBANDO SI EXITE ALGO EN EL LOCAL_STORAGE
    if (!cart) {
        // SI NO EXISTE ENTONCES DEVOLVEMOS 0
        return 0;
    } else {
        // DEVOLVEMOS EL TAMANO DEL CARRITO
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.size)(cart);
    }
}
// FUNCION PARA ELIMINAR LOS PRODUCTOS EN EL CARRITO
function removeProductCart(product) {
    // TRAERMOS LO QUE TIENE EL LOCAL_STORAGE
    const cart = getProductsCart();
    // ES UN FIND QUE BUSCA LO QUE LE PASAS POR VALOR EN EL ARREGLO
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(cart, (item)=>{
        // DEVUELVE EL ITEM QUE TIENE EL MISMO VALOR QUE PRODUCT
        return item === product;
    });
    // COMPROBANDO SI EXITE ALGO EN EL LOCAL_STORAGE
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.size)(cart) > 0) {
        // SI NO EXISTE ENTONCES DEVOLVEMOS LOS VALORES MENOS EL QUE ES IGUAL AL ITEM EN 
        // LA FUNCION REMOVE
        localStorage.setItem(base, cart);
    } else {
        // SI EL CART ESTA VACIO ENTONCES ELIMINAMOS EL LOCAL_STORAGE
        localStorage.removeItem(base);
    }
}
// FUNCION PARA GUARDAR EL PAGO O REALIZARLO
async function paymentCartApi(token, products, idUser, address, logout) {
    try {
        // PASAMOS EL VALOR DE ADDRESS 
        const AddressShipping = address;
        // BORRAMOS EL USER PARA QUE NO SE GUARDE EN LA BASE DE DATOS
        delete AddressShipping.users_permissions_user;
        // BORRAMOS EL CREATE_AT PARA QUE NO SE GUARDE EN LA BASE DE DATOS
        delete AddressShipping.createAt;
        // CREAMOS LA URL
        const url = `${path}/orders`;
        // ESTABLECEMOS LOS PARAMETROS
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // CREAMOS EL BODY Y LE PASAMOS LOS PARAMETROS
            body: JSON.stringify({
                token,
                products,
                idUser,
                AddressShipping
            })
        };
        //   REALIZAMOS LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_2__/* .authFetch */ .S)(url, params, logout);
        //   DEVOLVEMOS EL RESULTADOS
        return result;
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        return null;
    }
}
// FUNCION PARA LIMPIAR EL CARRITO
function removeAllProductsCart() {
    localStorage.removeItem(base);
}


/***/ })

};
;