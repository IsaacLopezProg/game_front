// INTERNAL
import React, { useState, useEffect } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import { getSearchGameApi } from '../api/game'
import ListGames from '../components/ListGames/ListGames'
import Seo from '../components/Seo/Seo'
import { useRouter } from 'next/router';

// EXTERNAL
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';

export default function Search() {

    // FUNCION QUE HACE MANTENER EL FOCUS DEL INPUT SEARCH
    useEffect(() => {
        // CUANDO ESCRIBES LA PRIMERA LETRA QUE TE REDIRECCIONA A ESTA PAGINA
        // SE PIEDE EL FOCUS, ASI QUE LO BUSCAMOS POR EL ID Y LO ESTABLECEMOS OTRA VEZ
        document.getElementById("search-game").focus();
    }, []);

    // VAMOS A LEER EL CONTENIDO DEL INPUT POR QUERY
    const { query } = useRouter();
    // console.log(query.query)

    // STATE DE LOS JUEGOS
    const [games, setGames] = useState(null)

    useEffect(() => {
        (async () => {
            // COMPROBANDO SI EL INPUT ESTA VACIO
            if (size(query.query) > 0) {
                // LLAMADO A LA PETICION
                const response = await getSearchGameApi(query.query);
                // console.log(response);
                // COMPROBANDO QUE EXISTAN RESULTADOS EN LA BUSQUEDA PARA GUARDARLOS
                if (size(response) > 0) setGames(response);
                else setGames([]);
            } else {
                setGames([]);
            }
        })()
    }, [query]);



    return (
        <BasicLayout>
            <Seo title={`Buscando: ${query.query}`} />
            <div className="px-2 pt-2">
                <div>
                    <div className=" px-8 py-8 ">
                        {!games && <Loader active> Buscando Juegos </Loader>}

                        {games && size(games) === 0 && (
                            <h2>No se han encontrado juegos</h2>
                        )}

                        {size(games) > 0 && (
                            <ListGames game={games} />
                        )}
                    </div>

                </div>
            </div>
        </BasicLayout>
    )
}
