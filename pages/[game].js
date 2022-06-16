// INTERNAL
import React, { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import { useRouter } from 'next/router';
import { getGameByUrlApi } from '../api/game';
import Headergame from '../components/Game/Headergame';
import Tabsgame from '../components/Game/Tabsgame';
import Seo from '../components/Seo/Seo';

// EXTERNAL
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';


export default function game() {

    // RECIBIENDO QUERY DE USE_ROUTER
    const { query } = useRouter();

    // STATE DE LOS JUEGOS
    const [games, setGames] = useState(null);

    useEffect(() => {
        // LLAMANDO LA FUNCION DE LA API
        (async () => {
            // CONDICIONANDO
            if (query.game) {
                // LLENANDO LOS DATOS QUE NECESITA LA PETICION CON EL QUERY
                const response = await getGameByUrlApi(query.game);
                // GUARDANDO LOS DATOS
                setGames(response);
            }
        })()
    }, [query])

    if (!games) return null;

    return (
        <>
            <Seo title={games.title} />
            <BasicLayout>
                {games && size(games) === 0 && (
                    <h2>No hay descripcion</h2>
                )}

                {/* {!games && <Loader active> Cargando Juego </Loader>} */}

                {games && size(games) > 0 && (
                    <>
                        <Headergame games={games} />
                        <Tabsgame games={games} />
                    </>

                )}
            </BasicLayout>
        </>
    )
}
