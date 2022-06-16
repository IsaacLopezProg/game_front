// INTERNAL
import React, { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import useAuth from '../hooks/useAuth';
import { getFavoriteApi } from '../api/favorite';
import ListGames from '../components/ListGames/ListGames';

// EXTERNAL
import { Button, Loader } from 'semantic-ui-react';
import { size, forEach } from 'lodash';

export default function Wishlist() {

    const { auth, logout } = useAuth()

    // STATE DE JUEGOS RECIBIEDOS
    const [games, setGames] = useState(null);

    // FUNCION QUE LLAMA LA API Y GUARDA LOS DATOS
    useEffect(() => {
        (async () => {
            // PETICION
            const response = await getFavoriteApi(auth.idUser || auth.isUser, logout);
            // COMPROBACION
            if (size(response) > 0) {
                // ARREGLO
                const listGame = [];
                // RECORRER LOS DATOS Y AGRERGARLO AL NUEVO ARREGLO POR QUE 
                // NO VIENE FORMATEADO PARA QUE LISTA_GAMES LO PUEDA UTILIZAR
                forEach(response, (data) => {
                    // AGREGANDO CADA DATA.GAME AL NUEVO ARREGLO
                    listGame.push(data.game);
                });
                // GUARDADO EN EL STATE
                setGames(listGame);
            } else {
                // SI NO EXISTEN DATOS, GUARDAR UN ARREGLO VACIO
                setGames([])
            }
        })()
    }, []);

    console.log(games)



    return (
        <BasicLayout>
            <div className="px-2 pt-2">
                <div>
                    <Button color="black">
                        Lista de Favoritos
                    </Button>
                    <div className="bg-white px-8 py-8 ">
                        {games && size(games) === 0 && (
                            <h2>No hay juegos</h2>
                        )}

                        {!games && <Loader active> Cargando Juegos </Loader>}

                        {games && size(games) > 0 && (
                            <ListGames game={games} />
                        )}
                    </div>

                </div>
            </div>
        </BasicLayout>
    )
}
