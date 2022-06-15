// INTERNAL
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import { getProductsCart, addProductCart, countingCart, removeProductCart, removeAllProductsCart } from '../api/cart';
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

  // STATE PARA FORZAR UNA RECARGA DE LA COMPROBACION DEL CARRITO
  const [reloadCountCart, setReloadCountCart] = useState(false)

  //STATE PARA CONTART LOS PRODUCTOS EN EL CARRITO
  const [countCart, setcountCart] = useState(0);

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

  // FUNCION QUE PROPRUEBA SI EL USUARIO ESTA LOGEADO
  const addProduct = (product) => {
    // RECIBIMOS EL TOKEN DEL USUARIO
    const token = getToken();
    // COMPROBACION
    if (token) {
      // SI ESTA LOGEADO SE AGREGA EL PRODUCTO AL CARRITO
      addProductCart(product);
      // CADA VEZ QUE SE AGREGE UN PRODUCTO AL CARRITO 
      // SE VA A REVALIDAR EL STATE
      setReloadCountCart(true);
      // SINO
    } else {
      // SE LE DA UN AVISO AL USUARIO QUE TIENE QUE ESTA LOGEADO
      toast.warning("Para comprar un juego tienes que iniciar sesión");
    }
  };

  // FUNCION PARA AGREGAR AL STATE EL VALOR DEL CART
  useEffect(() => {
    // console.log(countingCart())
    // AGRERGAR EL VALOR DE COUNTING_CART AL STATE
    setcountCart(countingCart());

    // CADA VEZ QUE EL SE GUARDE UN VALOR EN EL STATE VA A CAMBIAR EL SWITCH
    setReloadCountCart(false);

    // PARA QUE SE RECARGUE CADA VEZ QUE EL VALOR SEA MODIFICADO, 
    // RESETEAMOS EL VALOR DE reloadCountCart
  }, [reloadCountCart, auth]);


  // FUNCION QUE ELIMINAR LOS PRODUCTOS EN EL CARRITO
  const removeProduct = (product) => {
    // LE PASAMOS EL PRODUCTO AL CARRITO
    // YO PIENSO QUE ESTO SE HACE PARA PODER PASAR LA FUNCION AL CART_DATA
    removeProductCart(product);
    // RECARGAMOS LA PAGINA DEL CARRITO
    setReloadCountCart(true);
  }


  const cartData = useMemo(
    () => ({
      productsCart: countCart,
      addProductCart: (product) => addProduct(product),
      getProductsCart: getProductsCart,
      removeProductCart: (product) => removeProduct(product),
      removeAllProductsCart: removeAllProductsCart,
      // para actulizar la carga cada vez que count cambie
    }), [countCart]
  );


  // CONPROBACION DE SI EL USUARIO SE A LOGEADO O NO
  if (auth === undefined) return null;


  return (
    <>
      <AuthContext.Provider value={authData}>
        <CartContext.Provider value={cartData}>
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
        </CartContext.Provider>
      </AuthContext.Provider>
    </>
  )

}

export default MyApp;
