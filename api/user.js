import { authFetch } from "../utils/fetch";
// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION DE REGISTRO DE USUARIO
export async function registerApi(formData) {
    try {
        // FORMANDO LA URL
        const url = `${base}/api/auth/local/register`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(formData)
        }
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;

        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }

}

// FUNCION DE LOGIN DE USUARIO
export async function LoginApi(formData) {
    try {
        // FORMANDO LA URL
        const url = `${base}/api/auth/local`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(formData)
        }
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;

        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }

}


// FUNCION DE RECUPERACION DE CONTRASENA DE USUARIO
export async function resetPasswordApi(email) {
    try {
        // FORMANDO LA URL
        const url = `${base}/api/auth/forgot-password`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({ email })
        };
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // console.log(result);
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;

        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }

}

// RECIBIENDO LOS DATOS DEL USUARIO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function getMeApi(logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/api/users/me`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, null, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
        // MANEJO DE ERRORES
    } catch (error) {
        // NO DEVOLVEMOS NADA
        return null;

    }
}


// ACTUALIZANDO EL NOMBRE Y APELLIDO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function updateNameApi(idUser, data, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/api/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(data)
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error)
        // NO DEVOLVEMOS NADA
        return null;

    }
}


// ACTUALIZANDO EL EMAIL
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function updateEmailApi(idUser, email, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/api/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({ email })
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error)
        // NO DEVOLVEMOS NADA
        return null;

    }
}

// ACTUALIZANDO EL EMAIL
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
export async function updatePasswordApi(idUser, password, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/api/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({ password })
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await authFetch(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
        // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error)
        // NO DEVOLVEMOS NADA
        return null;

    }
}