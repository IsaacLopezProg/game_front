// INTERNAL
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'
import useCart from '../../hooks/useCart'
import { paymentCartApi } from '../../api/cart';

// EXTERNAL
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { size } from 'lodash'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'


export default function FormPayment(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { productos, addressUser } = props;

    // EXTRAYENDO EL TOKEN
    const { auth, logout } = useAuth();

    // EXTRAYENDO LA FUNCION DE ELIMINAR FULL CART
    const { removeAllProductsCart } = useCart();

    // DECLARAMOS LA FUNCION ROUTER DE NEXT
    const router = useRouter();

    //  STATE PAR AUN LOADING
    const [loading, setLoading] = useState(false)

    // UTILIZAMOS LA FUNCION USE_STRIPE
    // HOOK DE STRIPE QUE TRAE MUCHAS FUNCIONES Y OBJETOS, EJ: API_KEY
    const stripe = useStripe();

    // UTILIZAMOS LA FUNCION USE_STRIPE
    // HOOK DE STRIPE QUE TRAE MUCHAS FUNCIONES Y OBJETOS.
    // ESPESIFICAMENTE ELEMENTOS
    const elements = useElements();


    // FUNCION QUE MANEJA EL ENVIO DE DATOS
    const handleSubmit = async (event) => {
        // DESACTIVAMOS EL EVENTO POR DEFAULT DEL FORMULARIO
        event.preventDefault();
        // ACTIAMOS EL LOADING PARA QUE CARGUE
        setLoading(true)



        // COMPROBACION
        // SI STRIPE ESTA VACIO Y NO HAY ELEMENTOS NO HACER NADA
        if (!stripe || !elements) return;

        // ASIGNAMOS EL COMPONENTE AL CARD ELEMENT
        const cardElement = elements.getElement(CardElement);

        // NOS CREAMOS EL TOKEN DEL ACUERDO DE PAGO Y LE PASAMOS EL cardElement
        const result = await stripe.createToken(cardElement);

        // COMPROBACION
        // SI EL RESULTADO ES UN ERROR ENTONCES MOSTRAR EL ERROR AL CLIENTE
        if (result.error) {
            toast.error(result.error.message);
        }
        // SINO
        else {
            // REALIZAMOS LA PETICION Y LE PASAMOS LOS VALORES
            const response = await paymentCartApi(
                result.token,
                productos,
                auth.idUser || auth.idUser,
                addressUser,
                logout
            );
            // SI EL RESPONSE TRAE RESULTADOS ENTONCES 
            if (size(response) > 0) {
                // INFORMAR AL CLIENTE QUE SU PAGO FUE REALIZADO
                toast.success("Pago realizado correctamente");
                // LIMPIAR EL CARRITO
                removeAllProductsCart();
                // REDIRECCIONAR AL CLIENTE A LA PAGINA DE ORDENES
                router.push('/ordes');
            }
            // SINO
            else {
                // INFORMAR AL CLIENTE QUE SU PAGO TU ALGUN ERROR
                toast.error("Error al realizar el pago")
            }


        }

        // DESACTIVAMOS EL LOADING
        setLoading(false);


    }


    return (
        <form className="" onSubmit={handleSubmit}>
            <CardElement />
            <Button type="submit" loading={loading}>Pagar</Button>
        </form>
    )
}
