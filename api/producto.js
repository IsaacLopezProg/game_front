import { authFetch } from "../utils/fetch";
// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;


// RECIBIENDO LOS DATOS DE PRODUCTO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function getProductoApi(logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/producto`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, null, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
        // MANEJO DE ERRORES
    } catch (error) {
        console.log(error);
        // NO DEVOLVEMOS NADA
        return null;

    }
}

// HACE FALTA PERSONALIZAR LA RUTA