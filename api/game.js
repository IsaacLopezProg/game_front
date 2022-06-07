
// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION DE OBTENER LOS JUEGOS & AGERGAMOS LIMITES 
export async function getGameApi(limit) {
    try {
        //  QUERIES DE BUSQUEDA LIMITE
        const limitItem = `_limit=${limit}`
        //  QUERIES DE ORDEN
        const orderItem = '_sort=createdAt:desc'
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
export async function getGamePlatformApi(platfom, limit, start) {
    try {
        //  QUERIES DE BUSQUEDA LIMITE
        const limitItem = `_limit=${limit}`
        //  QUERIES DE ORDEN
        const orderItem = '_sort=createdAt:desc'
        const startItem = `_start=${start}`
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
export async function getCountGamePlatformApi(platfom) {
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
export async function getGameByUrlApi(path) {
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