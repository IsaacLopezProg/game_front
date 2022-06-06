// INTERNAL
import React, { useState, useEffect } from 'react';
import { getAddressApi, deleteAddressApi } from '../../api/address';
import useAuth from '../../hooks/useAuth';

// EXTERNAL
// size da el tamano como un .length y map, hace un map.
import { size, map } from 'lodash'
import { Button } from 'semantic-ui-react'


export default function ListAdress(props) {
    // reloadAddress, setReloadAddress
    const { reloadAddress, setReloadAddress } = props;
    const [addresses, setAddresses] = useState(null);
    const { auth, logout } = useAuth();
    // console.log(auth)

    useEffect(() => {

        // FUNCION PARA OBTENER LOS DATOS DEL API
        // const getData = async () => {
        // PETICION
        // const response = await getAddressApi(auth.idUser || auth.isUser, logout);
        // GUADADO DE LOS DATOS Y SI NO DEVOLVEMOS NADA SE QUEDA VACIO
        // setAddresses(response || []);
        // setReloadAddress(false);
        // }
        // getData();

        // FUNCION AUTOEJECUTABLE PARA OBTENER LOS DATOS DEL API
        (async () => {
            // PETICION
            const response = await getAddressApi(auth.idUser || auth.isUser, logout);
            console.log(response)
            // GUADADO DE LOS DATOS Y SI NO DEVOLVEMOS NADA SE QUEDA VACIO
            setAddresses(response || []);
            // RECARGANDO EL COMPONENTE DE MOSTRAR
            setReloadAddress(false);
        })();
    }, [reloadAddress]);

    // console.log(Object.values(addresses));
    if (!addresses) return null;


    return (
        <div>
            {size(addresses) === 0 ? (
                <h3>No hay direcciones creadas</h3>
            )
                :
                (
                    <>
                        <div className=" grid md:grid-cols-3 grid-cols-1">
                            {map(addresses, (address) => (
                                <div key={address.id} className="mx-4 mt-4 ">
                                    {/* <div className="flex justify-around"> */}
                                    <Mostrar address={address} logout={logout} setReloadAddress={setReloadAddress} />

                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}


function Mostrar(props) {
    // EXTRAYENDO LOS PROPS
    const { address, logout, setReloadAddress } = props;

    // CREANDO UN LOADING
    const [loading, setLoading] = useState(false)

    // console.log(address)

    // funcion para eliminar
    const deleteAddress = async () => {
        setLoading(true);
        // LE PASAMOS EL ID DE LA DIRECCION Y EL LOGOUT
        const response = await deleteAddressApi(address._id, logout)
        // PARA RECARGAR LAS DIRECCIONES SI  SE CUMPLE LA SOLICITUD
        if (response) setReloadAddress(true);
        setLoading(false);

    };

    return (

        <div className="border rounded-md border-gray-400 p-4 " id="hola">
            <h3 className="text-center border-b-2 border-gray-400">
                {address.title}
            </h3>
            <p>
                {address.name}
            </p>
            <p>
                {address.address}
            </p>
            <p>
                {address.city},{' '}
                {address.state},{' '}
                {address.postalCode}
            </p>
            <p className="text-base font-medium">
                {address.phone}
            </p>
            <div className="">
                <Button style={{ backgroundColor: '#ff5200', color: 'white' }}>Editar</Button>
                <Button onClick={deleteAddress} loading={loading}>Eliminar</Button>
            </div>
        </div>

    )
}