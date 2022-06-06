// INTERNAL
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getMeApi } from '../api/user';
// import { getProductoApi } from '../api/producto';
import useAuth from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import ChangeNameForm from '../components/Account/changeNameForm';
import ChangeEmailForm from '../components/Account/changeEmailForm';
import ChangePasswordForm from '../components/Account/changePasswordForm';
import BasicModal from '../components/Modals/BasicModal';

// EXTERNAL
import { Button, Icon } from 'semantic-ui-react';
import AdressForm from '../components/Account/adressForm';
import ListAdress from '../components/Account/ListAdress';

export default function Account() {

    // ********* STATE DEL USUARIO **************
    const [user, setUser] = useState(undefined)
    // TRAYENDO (DESTRUCTURANDO) LOS DATOS DEL USUARIO, Y LOGOUT
    const { auth, logout, setReloadUser } = useAuth();
    // EXTRAYENDO LA FUNCION ROUTER DE NEXT
    const router = useRouter();

    // STATE PARA PRODUCTO
    const [producto, setProducto] = useState(undefined);

    // FUNCION PARA PROTEGER LA RUTA
    useEffect(() => {

        // (async () => {
        // ************** PRUEBA DE PETICION **************
        // const resp = await getProductoApi(logout);
        // console.log(resp)
        // })();

        (async () => {
            // HACEMOS LA PETICION PARA COMPROBAR QUE EL USUARIO ESTA REGISTRADO
            const response = await getMeApi(logout);
            // SE LOS PASADO AL STATE DE USUARIOS, SINO ESTA NULL
            setUser(response || null);
        })();
    }, [auth]);

    // VERIFICAR SI EL USUARIO ESTA LOGEADO PARA PRESENTAR EL CONTENIDO
    if (user === undefined) return null;
    // SI NO HAY CONTENIDO ENTONCES ENVIAMOS AL HOME
    if (!auth && !user) {
        // REDIRECCIONADO AL HOME
        router.replace("/");
        // NO DEVUELVE NADA
        return null;
    }



    return (
        <>
            <BasicLayout>
                <div className="px-2 pt-2">
                    <div>
                        <Button color="black">
                            Configuracion
                        </Button>
                        <ChangeNameForm user={user} logout={logout} />
                        <ChangeEmailForm user={user} logout={logout} setReloadUser={setReloadUser} />
                        <ChangePasswordForm user={user} logout={logout} />
                    </div>

                    <Adresses />

                </div>
            </BasicLayout>
        </>
    )
}


function Adresses() {

    // STATE QUE MUESTRA EL MODAL
    const [showModal, setShowModal] = useState(false);
    // STATE QUE ASIGNA EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState("");
    // GUARDA EL COMPONENTE QUE SE VA RENDERIZAR
    const [formModal, setFormModal] = useState(null);
    // PARA RECARGAR LA LISTA DE DIRECCIONES
    const [reloadAddress, setReloadAddress] = useState(false);

    // FUNCION PARA ABRIR EL MODAL
    const openModal = (title) => {
        // ESTABLECE EL NOMBRE AL MODAL
        setTitleModal(title);
        // LO QUE SE VA A MOSTRAR EN EL MODAL
        // MOSTRANDO DE MANERA DINAMICA EL COMPONENTE
        setFormModal(<AdressForm setShowModal={setShowModal} setReloadAddress={setReloadAddress} />);
        // MUESTRA EL MODAL
        setShowModal(true);
    }


    return (
        <div className="mt-2">
            <Button color="black">
                Direcciones
            </Button>
            <div className="float-right">
                <Icon name="plus" link onClick={() => openModal("Nueva direccion")} />
            </div>
            <div className="mt-2 bg-white px-8 py-8">
                <ListAdress reloadAddress={reloadAddress} setReloadAddress={setReloadAddress} />
            </div>

            <BasicModal
                show={showModal}
                setShow={setShowModal}
                title={titleModal}
                size="small"
                centered={false}
            >

                {formModal}
            </BasicModal>

        </div>
    )
}