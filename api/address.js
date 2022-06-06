import { authFetch } from "../utils/fetch";

// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION DE REGISTRO DE DIRECCION
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function createAddressApi(address, logout) {
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
            body: JSON.stringify(address),
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, params, logout);
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
export async function getAddressApi(idUser, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/addresses?users_permissions_user=${idUser}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, null, logout);
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
export async function deleteAddressApi(idAddress, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/addresses/${idAddress}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, params, logout);
        // SI LA PETICION NO ES 500 SALTAMOS AL ERROR
        if (result.statusCode === 500) throw "Error en el servidor"
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