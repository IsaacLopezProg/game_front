// INTERNAL
import React, { useState, useEffect } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import useAuth from '../hooks/useAuth';
import { getOders } from '../api/orders';
import OrdersDetail from '../components/Orders/OrdersDetail';
import Seo from '../components/Seo/Seo';

// EXTERNAL
import { Button, Grid } from 'semantic-ui-react';
import { size, map, forEach } from 'lodash';

export default function Orders() {

    // TRAYENDO EL AUTH Y EL LOGOUT
    const { auth, logout } = useAuth();

    // STATE PARA GUARDAR LOS PEDIDOS
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        (async () => {
            // LLAMANDO LA FUNCION
            const response = await getOders(auth.idUser || auth.isUser, logout);
            setOrders(response || []);
        })()
    }, []);

    return (
        <>
            <Seo title="Mis pedidos" description="Listado de todos tus pedidos" />
            <BasicLayout>
                <div className="px-2 pt-2">
                    <div>
                        <Button color="black">
                            Pedidos
                        </Button>
                        <div className="mt-4 md:mx-0 mx-4">
                            {size(orders) === 0 ?
                                (
                                    <h2 className="text-[#ff5200] text-center">Todavia no has realizado ninguna compra</h2>
                                )
                                :
                                (
                                    <OrdersList orders={orders} />
                                )
                            }
                        </div>
                    </div>
                </div>

            </BasicLayout>
        </>
    )
}


function OrdersList(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { orders } = props;

    // const keyOrder = [];
    // forEach(orders, (data) => {
    //     keyOrder.push(data._id);
    // }) SIEMPRE HABRA EL KEY EN ALGUNOS REPETIDOS

    return (
        <>
            <Grid>

                {map(orders, (order) => (
                    <Grid.Column mobile={16} tablet={6} computer={8}>
                        <OrdersDetail order={order} />
                    </Grid.Column>
                ))}
            </Grid>
        </>
    )
}

// mobile = { 16}
// tablet = { 8}
// computer = { 4}