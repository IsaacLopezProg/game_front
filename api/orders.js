import { authFetch } from "../utils/fetch";

const path = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION PARA OBTENER EL LISTADO DE ORDENES
export async function getOders(idUser, logout) {

    try {

        // CONTRUIMOS LA URL
        const url = `${path}/orders?_sort=position:asc`;
        // REALIZAMOS LA PETICION
        const result = await authFetch(url, null, logout);
        // DEVOLVIEMOS EL VALOR
        return result;

    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        return null;
    }



}