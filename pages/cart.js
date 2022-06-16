// INTERNAL
import React, { useState, useEffect } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import { getGameByUrlApi } from '../api/game';
import useCart from '../hooks/useCart';
import SummaryCart from '../components/cart/SummaryCart';
import AddressCart from '../components/cart/AddressCart';
import Payment from '../components/cart/Payment';

// EXTERNAL

export default function Cart() {

    // EXTRAYENDO LA LISTA DE JUEGOS DEL USE_CART, EXTRAYENDO LA FUNCION
    const { getProductsCart } = useCart();

    // ASIGNANDO VALOR A LA FUNCION
    const products = getProductsCart();

    return !products ? <CarritoVacio /> : <CarritoLleno products={products} />;
}

function CarritoVacio() {
    return (
        <>
            <BasicLayout>
                <h3 className="text-center pt-8 text-5xl">Carrito Vacio</h3>
            </BasicLayout>
        </>
    )
}

function CarritoLleno(props) {
    // EXTRAYENDO LOS DATOS DEL PROPS
    const { products } = props;

    // STATE PARA LOS PRODUCTOS EN EL CARRITO
    const [productsData, setProductsData] = useState(null);

    // STATE PARA RECARGAR EL STATE DEL CARRITO EN SUMMARY_CART
    const [reloadCart, setReloadCart] = useState(false)

    // STATE QUE GUARDA LA DIRECCION DEL USUARIO
    const [addressUser, setAddressUser] = useState(null);
    // console.log(addressUser)

    useEffect(() => {
        (async () => {
            // CREANDO UN ARREGLO VACIO
            const productsTemp = [];

            // CREANDO UN FOR ASINCRONO
            // CADA ITERACION VA A ESPERAR LA QUE FALTE Y VA A ASIGNAR EL VALOR
            // DEL PRODUCTO QUE SON LAS URLS DE LOS JUEGOS A PRODUCT
            for await (const product of products) {
                // SE CA A HACER LA CONSULTA A LA API EN CADA ITERACION
                const data = await getGameByUrlApi(product);
                // SE VA A GUARDAR CADA RESPUESTA EN EL ARREGLO PRODUCTS_TEMP
                productsTemp.push(data);
            }
            // GUARDAMOS EL VALOR DE PRODUCTS_TEMP EN EL STATE
            setProductsData(productsTemp);
            // RESET DEL RELOAD PARA PODER VOLVERLO A USAR
            setReloadCart(false);
        })()
        // REFRESCAMOS CON EL RELOAD PARA RESETEARLO
    }, [reloadCart]);


    return (
        <>
            <BasicLayout>
                <SummaryCart productos={productsData} reloadCart={reloadCart} setReloadCart={setReloadCart} />
                <AddressCart setAddressUser={setAddressUser} />
                {addressUser && <Payment addressUser={addressUser} productos={productsData} />}
            </BasicLayout>
        </>
    )
}