// INTERNAL
import React, { useState, useEffect } from 'react';
import BasicLayout from "../layouts/BasicLayout/BasicLayout"
import { getGameApi } from '../api/game';
import ListGames from '../components/ListGames/ListGames';

// import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import { size, map } from 'lodash';

export default function Home() {

  // STATE DE LOS JUEGOS
  const [game, setGame] = useState(null);

  // FUNCION PARA LLAMAR LOS JUEGOS
  useEffect(() => {
    // (async () => {
    //   // PETICION A LA API & CANTIDAD DE JUEGOS
    //   const response = await getGameApi(10);
    //   // CONFIRMACION
    //   if (size(response) > 0) setGame(response);
    //   else setGame([]);

    // })()



    const peticion = async () => {
      const response = await getGameApi(10);
      // CONFIRMACION
      if (size(response) > 0) setGame(response);
      // contador = size(res)
      else setGame([]);
    }

    peticion();
  }, []);



  return (
    <>
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
    </>
  )
}
