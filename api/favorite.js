import { authFetch } from "../utils/fetch";
import { size } from "lodash";

// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION DE COMPRONACION DE DATOS
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function isFavoriteApi(iduser, idgame, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/favorites?users_permissions_user=${iduser}&game=${idgame}`;
        // ENVIAMOS EL FETCH O LA PETICION
        return await authFetch(url, null, logout);

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
export async function addFavoriteApi(idUser, idGame, logout) {
    try {
        // COMPROBANDO SI ESTA EN FAVORITOS YA EL MISMO JUEGO
        const dataFound = await isFavoriteApi(idUser, idGame, logout);
        // SI NO ESTA EN FAVORITOS Y NO ES NULL ENTONCES PODEMOS TRABAJAR
        if (size(dataFound) > 0 || !dataFound) {
            return "Este juego ya lo tienes en tu lista de favoritos";
        }
        else {
            // CREANDO LA URL
            const url = `${base}/favorites`;
            // CREANDO EL HEAD DE PETICION
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
                body: JSON.stringify({ users_permissions_user: idUser, game: idGame }),
            };
            // ENVIAMOS EL FETCH O LA PETICION
            const result = await authFetch(url, params, logout);
            // ENVIAMOS LOS DATOS RECIBIDOS
            return result;

            // MANEJO DE ERRORES
        }
    }
    catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}

// FUNCION DE BORRAR EL JUEGO DE FAVORITOS
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function removeFavoriteApi(idUser, idGame, logout) {

    try {
        // COMPROBANDO SI ESTA EN FAVORITOS YA EL MISMO JUEGO
        const dataFound = await isFavoriteApi(idUser, idGame, logout);
        console.log(dataFound)
        // SI ESTA EN FAVORITOS PODEMOS TRABAJAR
        if (size(dataFound) > 0) {
            // FORMANDO LA URL
            const url = `${base}/favorites/${dataFound[0]?._id}`;
            // CREANDO EL HEAD DE PETICION
            const params = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            };
            // ENVIAMOS EL FETCH O LA PETICION
            const result = await authFetch(url, params, logout);
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
export async function getFavoriteApi(iduser, logout) {
    try {
        // FORMANDO LA URL
        const url = `${base}/favorites?users_permissions_user=${iduser}`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, null, logout);
        return result;

        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }

}