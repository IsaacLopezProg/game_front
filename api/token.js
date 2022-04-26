import jwtDecode from "jwt-decode";

// RECUPERANDO EL TOKEN DEL ENV
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;


// GUARDANDO EL TOKEN EN EL LOCAL_STORAGE
export function setToken(token) {
    // GUADADO DE TOKEN
    localStorage.setItem(TOKEN, token);
}

// RECUPERANDO EL TOKEN DEL LOCAL_STORAGE
export function getToken() {
    // RECIBIENDO Y ENVIANDO EL TOKEN
    return localStorage.getItem(TOKEN);
}

// ELIMINANDO EL TOKEN DEL LOCAL_STORAGE
export function removeToken() {
    // BORRADO DEL TOKEN
    localStorage.removeItem(TOKEN);
}

// FUNCION PARA VERIFICAR SI EL TOKEN A EXPIRADO
export function hadExpiredToken(token) {
    // DESCIFRAR EL TOKEN
    const tokenDecode = jwtDecode(token);
    // ASIGNANDO EL VALOR DE EXPIRACION DEL TOKEN
    const expireData = tokenDecode.exp * 1000;
    // EVALUANDO EL TIEMPO A DIA DE HOY
    const currentData = new Date().getTime();
    // EVALUANDO FECHA DEL TOKEN Y FECHA DE HOY
    if (currentData > expireData) {
        // DEVOLVEMOS QUE EL TOKEN A EXPIRADO
        return true;
    }
    // DEVOLVEMOS QUE EL TOKEN NO A EXPIRADO
    return false;

}