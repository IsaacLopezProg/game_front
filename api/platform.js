
// RECUPERANDO EL LINK DEL ENV
const base = process.env.NEXT_PUBLIC_BASE_PATH;

// FUNCION DE OBTENER LAS PLATAFORMAS
export async function getPlataformApi() {
    try {
        // FORMANDO LA URL
        const url = `${base}/platfoms?_sort=position:asc`;
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