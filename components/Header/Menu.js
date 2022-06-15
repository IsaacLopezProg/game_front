// INTERNAL
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Icon, Label, Menu } from 'semantic-ui-react';

import BasicModal from '../Modals/BasicModal';
import Auth from '../Auth/Auth';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { getMeApi } from '../../api/user';
import { getPlataformApi } from '../../api/platform';
// import { MenuPlataforms } from '../../pages/games/index';


// EXTERNAL
import { map } from 'lodash';


export default function Menu2() {

    // STATE QUE MUESTRA EL MODAL
    const [showModal, setShowModal] = useState(false);

    // STATE QUE ASIGNA EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState("Inicia sesión");

    // DESTRUCTURACION DE LOS DATOS QUE VIENEN DEL AUTH_CONTEXT
    const { logout, auth } = useAuth();

    // EXTRAYENDO LOS DATOS DEL USE_CART    
    const { productsCart } = useCart();

    // STATE PARA GUARDAR LOS DATOS DEL USUARIO
    const [user, setUser] = useState(undefined)

    // STATE QUE GUARDA LAS PLATAFORMAS
    const [plataforms, setPlataforms] = useState([])

    // FUNCION PARA RECIBIR LOS DATOS DEL USUARIOS
    useEffect(() => {
        //   FUNCION ANONIMA AUTOEJECUTABLE, LO HACEMOS ASI
        // POS QUE NO PODEMOS HACER ASYNCRONO EL USE_EFFECT
        (async () => {
            // RECIBIENDO LOS DATOS DEL USUARIO
            const response = await getMeApi(logout);
            // LO GUARDAMOS EN EL STATE_USER
            setUser(response);
        })()
    }, [auth]);

    useEffect(() => {
        (async () => {
            // RECIBIENDO LOS DATOS DE LAS PLATAFORMAS
            const response = await getPlataformApi();
            // LO GUARDAMOS EN EL STATE_USER
            setPlataforms(response || []);
        })()
    }, [])


    // console.log(user);




    return (
        <>
            <nav className=" border-gray-200 px-2 sm:px-4 rounded bg-[#a5673f] shadow-xl">
                <div className="container max-w-6xl flex flex-wrap justify-between items-center mx-auto">
                    <div className=" w-full md:block md:w-auto text-white">
                        <ul className="flex mt-4 justify-center md:flex-row md:mt-0 md:text-sm md:font-medium">
                            <MenuPlataforms plataforms={plataforms} />
                            {/* <li>
                                <Button color='brown'>
                                    <Icon name='playstation' />
                                    PlayStation
                                </Button>
                            </li> */}
                        </ul>
                    </div>
                    <div className="w-full md:block md:w-auto text-white">
                        <ul className="flex mt-4 md:flex-row justify-center  md:mt-0 md:text-sm md:font-medium">
                            {!user ?
                                <>
                                    <li >
                                        <Button color='brown' onClick={() => setShowModal(true)}>
                                            <Icon name='user ' />
                                            Mi cuenta
                                        </Button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link href="/wishlist">
                                            <Button style={{ marginTop: '0' }} as='a' color='brown' >
                                                <Icon name='heart' />
                                                Favoritos
                                            </Button>

                                            {/* <Label floating color="red">
                                                {productsCart}
                                            </Label> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/orders">
                                            <Button as='a' color='brown' >
                                                <Icon name='game' />
                                                Pedidos
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/account">
                                            <Button as='a' color='brown' >
                                                <Icon name='user' />
                                                {user.username}
                                                {/* {user.name} {user.lastname} */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            <Button as='a' color='brown' >
                                                <Icon name='cart' />
                                                {productsCart > 0 && (
                                                    <Label color="red" circular>
                                                        {productsCart}
                                                    </Label>
                                                )}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Button color='brown' onClick={logout} className="m-0">
                                            <Icon className="m-0" name='power off' />
                                        </Button>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>

                </div>

            </nav>

            <BasicModal
                show={showModal}
                setShow={setShowModal}
                title={titleModal}
                size="small"
                centered={false}
            >
                <Auth setTitleModal={setTitleModal} setShowModal={setShowModal} />
            </BasicModal>
        </>
    )
}


function MenuPlataforms(props) {
    // EXTRAYENDO LAS FUNCIONES
    const { plataforms } = props;
    const colors = 'red';

    return (
        <>
            <Menu inverted secondary>
                {map(plataforms, (platform) => (
                    <Link href={`/games/${platform.platfom}`} key={platform._id}>
                        <Menu.Item header as="a" name={platform.platfom} style={{ color: 'white' }}>
                            {platform.nombre}
                        </Menu.Item>
                    </Link>
                ))}
            </Menu>
        </>
    )
}
