// INTERNAL
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../context/AuthContext';
import { getToken, removeToken, setToken } from '../api/token';

// CSS
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// EXTERNAL
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

function MyApp({ Component, pageProps }) {

  // STATE PARA GUARDAR EL TOKEN DEL USUARIO
  const [auth, setAuth] = useState(undefined)
  // STATE PARA FORZAR UNA RECARGA DE LA COMPROBACION DEL TOKEN
  const [reloadUser, setReloadUser] = useState(false)

  // ASIGNANDO EL VALOR DEL NEXT/ROUTER
  const router = useRouter();

  // FUNCION PARA MANTENER EL TOKEN, AUNQUE SE RECARGUE LA PAGINA
  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id
      })

    }
    else {
      setAuth(null);
    }

    setReloadUser(false);

  }, [reloadUser])

  // FUNCION PARA RECIBIR Y GUARDAR EL TOKEN
  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      isUser: jwtDecode(token).id
    })
  }

  // FUNCION DE LOGOUT, O BORRADO DEL TOKEN DEL LOCAL_STORAGE
  const logout = () => {
    // COMPROBACION DEL USUARIO AUTENTICADO
    if (auth) {
      // INVOCANDO LA FUNCION QUE ELIMINA EL TOKEN
      removeToken();
      // LIMPIANDO EL STATE DEL AUTH PARA BORRAR LOS DATOS DEL USUARIO GUARDADOS
      setAuth(null);
      // REDIRECCIONANDO A LA HOME
      router.push("/");
      // ALERT CON TOAST
      toast.success("Deslogeado correctamente");
    }
  }

  // CREANDO EL STATE DEL CONTEXT AUTH
  // USE_MEMO ES PARA QUE NO SE BORRE LO QUE ESTA ESCRITO EN EL.
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser
    }),
    [auth]
  );


  // CONPROBACION DE SI EL USUARIO SE A LOGEADO O NO
  if (auth === undefined) return null;


  return (
    <>
      <AuthContext.Provider value={authData}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </>
  )

}

export default MyApp;
