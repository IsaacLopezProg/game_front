// INTERNAL
import React from "react";
import { useRouter } from "next/router";


// EXTERNAL
// el as sirve para ponerle un alias a la funcion
import { Pagination as PaginationSU } from "semantic-ui-react";
// funcion que convierte el string en un query y viceversa
import queryString from "query-string";

export default function Pagination(props) {

  // RECIBIENDO PROPS 
  const { totalGames, page, limit } = props;

  // haciendo la cantidad de paginas, total de juegos / limite de juegos por pagina
  const totalPages = Math.ceil(totalGames / limit);

  // para obtener los datos de la pagina o url
  const router = useRouter();

  // recibiendo el dato asPath de router y conviertiendolo en string
  const urlParse = queryString.parseUrl(router.asPath);

  // funcion que nos lleva a la pagina de la paginacion
  const goToPage = (newPage) => {

    // genera el query o url para enviarla al navegador
    urlParse.query.page = newPage;

    // covierte el string de newPage en un query
    const url = queryString.stringifyUrl(urlParse);

    // envia el nuevo query al navegador cuando se presiona el boton
    router.push(url);
  };

  return (
    <div className="flex">
      <div className="justify-center">

        <PaginationSU
          // pagina por default que traimos del props
          defaultActivePage={page}
          // cantidad de botones generados por la cantidad de paginas
          totalPages={totalPages}
          // primer elemento nulo (flechitas)
          firstItem={null}
          // ultimo elemento nulo (flechitas)
          lastItem={null}
          // funcion que ejecuta los botones
          // ejecuta la funcion de gotopage en una funcion flecha
          // recibe los datos de defaultActivePage y los enviat a la funcion gotopage
          onPageChange={(_, data) => goToPage(data.activePage)}
          // para que aparesca o no, todos los numeros de botones por total
          boundaryRange={0}
          // cantidad de botones que aparesca
          siblingRange={1}
          // para que aparesca o no los 3 puntos en los botones
          ellipsisItem={null}
        />
      </div>

    </div>
  );
}