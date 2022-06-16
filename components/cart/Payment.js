// INTERNALS
import React from 'react';

// EXTERNAL
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'semantic-ui-react';
import FormPayment from './FormPayment';

// EXTRAYENDO EL TOKEN DE STRIPE
const TOKEN_STRIPE = process.env.NEXT_PUBLIC_STRIPE_TOKEN;

// HACIENDO LA COMUNICACION ENTRE EL CLIENTE Y STRIPE
const stripePromise = loadStripe(TOKEN_STRIPE);

export default function Payment(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { productos, addressUser } = props;

    return (
        <div>
            <div className="px-2 pt-2">
                <div>
                    <Button color="black">
                        Pago
                    </Button>
                    <div className="bg-white px-8 py-8 ">
                        <Elements stripe={stripePromise}>
                            <FormPayment productos={productos} addressUser={addressUser} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    )
}
