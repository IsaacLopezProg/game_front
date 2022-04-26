import { getToken, hadExpiredToken } from "../api/token";

// FUNCION PARA PROTEGER LOS ENDPOINTS
export async function authFetch(url, params, logout) {
    // EXTRAEMOS EL TOKEN
    const token = getToken();

    // COMPROBANDO SI EL TOKEN EXISTE
    if (!token) {
        // si no existe el token
        logout();

        // SI EL TOKEN EXISTE
    } else {
        // SI EL TOKEN A EXPIRADO
        if (hadExpiredToken(token)) {
            // SACAMOS LA CUENTA
            logout();
        }
        // SI EL TOKEN NO HA EXPIRADO
        else {
            // CONSTRUYENDO EL PARAMS ESTANDAR
            const paramsTemp = {
                // compiamos lo que viene el el params
                ...params,
                // CONSTRUIMOS LA CABECERA
                headers: {
                    // VERIFICAMOS LO QUE TIENE EL PARAMS CABECERA
                    ...params?.headers,
                    // AGRERGAMOS LA AUTORIZACION O EL CORS
                    Authorization: `Bearer ${token}`,
                },
            };
            try {

                // ENVIANDO EL FECTH
                const response = await fetch(url, paramsTemp);
                // RECIBIENDO LOS RESULTADOS DE LA PETICION
                const result = await response.json();
                // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
                return result;

                // MANEJO DE ERRORES
            } catch (error) {
                // MOSTRANDO EL ERROR DE LA PETICION
                console.log(error);
                // DEVOLVIENDO EL ERROR
                return error;
            }
        }



    }

}