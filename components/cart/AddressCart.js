// INTERNAL
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';
import { getAddressApi } from '../../api/address';

// EXTERNAL
import { Grid, Button, GridColumn } from 'semantic-ui-react';
import { map, size } from 'lodash';

export default function AddressCart(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { setAddressUser } = props;

    // STATE QUE GUARDA LA DIRECICON SELECCIONADA
    const [addressActive, setAddressActive] = useState(null);

    // STATE PARA GUARDAR LAS DIRECCIONES DEL USUARIOA
    const [address, setAddress] = useState(null);

    // EXTRAYENDO EL USUARIO Y EL LOGOUT
    const { logout, auth } = useAuth();



    useEffect(() => {
        (async () => {
            const response = await getAddressApi(auth.idUser || auth.isUser, logout);
            setAddress(response || []);
        })()
    }, []);

    return (
        <div>
            <div className="px-2 pt-2">
                <div>
                    <Button color="black">
                        Direcciones
                    </Button>
                    <div className="bg-white px-8 py-8 ">
                        {size(address) === 0 ? (
                            <>
                                <h3 className="text-center">No hay Direcciones.
                                    <Link href="/account">
                                        <a className="text-lg">
                                            {" "}Crea tu primera direccion
                                        </a>
                                    </Link>
                                </h3>
                            </>
                        ) :
                            (
                                <Grid>
                                    {map(address, (a) => (
                                        <Grid.Column
                                            key={a.id}
                                            mobile={16}
                                            tablet={8}
                                            computer={4}
                                        >
                                            <Info
                                                a={a}
                                                setAddressUser={setAddressUser}
                                                addressActive={addressActive}
                                                setAddressActive={setAddressActive}
                                            />
                                        </Grid.Column>
                                    ))}

                                </Grid>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function Info(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { a, setAddressUser, addressActive, setAddressActive } = props;

    // FUNCION QUE CAMBIA EL STATE DE ADDRESS_USER Y GUARDA EL ID DEL ADDRESS_ACTIVE
    const changeAddress = () => {
        // ESTE GUARA EL ID DE LA DIRECCION EN EL STATE DEL ADDRESS_ACTIVE
        setAddressActive(a._id);
        // GUARDAMOS EN EL STATE DE ADDRESS_USER LOS DATOS DE LA DIRECCION SELECCIONADA
        setAddressUser(a)
    }
    return (
        <>
            <div
                className={
                    addressActive === a._id ?
                        "border p-2 rounded-lg ml-4 font-medium border-red-400 bg-red-300"
                        :
                        "border border-gray-400 p-2 rounded-lg ml-4 font-medium "
                }
                onClick={changeAddress}
            >
                <p className="border-b border-gray-400 mt-2 text-xl font-bold">{a.title}</p>
                <p className="-mt-2 mb-0 ">{a.name}</p>
                <p className="my-1 ">{a.address}</p>
                <p className="my-1">{a.city}, {a.state}, {a.postalCode}</p>
                <p className="my-1">{a.phone}</p>
            </div>
        </>
    )
}