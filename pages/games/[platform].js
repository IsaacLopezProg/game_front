// INTERNAL
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { getGamePlatformApi, getCountGamePlatformApi } from '../../api/game';
import ListGames from '../../components/ListGames/ListGames';

// EXTERNAL
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';
import { Loader } from 'semantic-ui-react';
import { size } from 'lodash';



export default function Platform() {
    // RECIBIR LOS ELEMENTOS DE LA PLAGINA
    const { query } = useRouter();

    // STATE DE JUEGOS
    const [game, setGame] = useState(null)
    // STATE DE COUNT DE PAGINA
    const [count, setCount] = useState(null)

    // DEFINIENDO EL LIMITE DE JUEGOS A RECIBIR
    const limit = 10;


    // FUNCION PARA OBTENER LOS DATOS DE LA PAGINACION
    const getStartItem = () => {
        // si el query de la pagina recibe page, hacerlo un entero
        const currentPage = parseInt(query.page);
        // si no hay page en el query empieza a contar desde el 1
        if (!query.page || currentPage === 1) return 0;
        // sino comienza en la ultima que quedo la primera pagina
        else return currentPage * limit - limit;

    }

    console.log(getStartItem());


    useEffect(() => {
        // LLAMANDO LA FUNCION DE LA API
        (async () => {
            // CONDICIONANDO
            if (query.platform) {
                const response = await getGamePlatformApi(query.platform, limit, 0);
                setGame(response || null);
            }
        })()
    }, [query])

    useEffect(() => {
        // LLAMANDO LA FUNCION DE LA API
        (async () => {
            // CONDICIONANDO
            if (query.platform) {
                const response = await getCountGamePlatformApi(query.platform);
                setCount(response || null);
            }
        })()
    }, [query])

    return (
        <BasicLayout>
            <div className="pt-8 ml-4">
                {game && size(game) === 0 && (
                    <h2>No hay juegos</h2>
                )}
                {!game && <Loader active> Cargando Juegos </Loader>}
                {game && size(game) > 0 && (
                    <ListGames game={game} />
                )}
            </div>
        </BasicLayout>
    )
}
