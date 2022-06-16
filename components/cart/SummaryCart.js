// INTERNAL
import React, { useState, useEffect } from 'react'
import useCart from '../../hooks/useCart';

// EXTERNAL
import { Table, Image, Button, TableHeader, Icon, Tab } from 'semantic-ui-react';
import { forEach, map } from 'lodash';

export default function SummaryCart(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { productos, reloadCart, setReloadCart } = props;

    // STATE DE TOTAL DE  PRECIO
    const [totalPrice, setTotalPrice] = useState(0);

    // EXTRAYENDO LA FUNCION REMOVE DEL USE_CART
    const { removeProductCart } = useCart();

    useEffect(() => {

        // DECLARAMOS UNA VARIBLE
        let price = 0;

        // RECOREMOS EL ARREGLO DE PRODUCTOS
        forEach(productos, (p) => {
            // AGREGAMOS EL VALOR DE PRICE EN CADA ITERACION
            price += p.price;
        });
        // GUARDAMOS EL VALOR EN EL STATE
        setTotalPrice(price);

        // REFRESCAMOS EL COMPONENTE SI EL VALOR DE RELOAD_CART CAMBIA Y EL DE PRODUCTOS
    }, [reloadCart, productos]);

    // FUNCION PARA PASARLE EL VALOR DEL PRODUCTO A BORRAR
    const deleteProductCart = (product) => {
        // LLAMADO A LA FUNCION Y PASADO DE VALORES
        removeProductCart(product);

        // HACEMOS QUE CAMBIE EL VALOR DEL RELOAD_CART
        setReloadCart(true)
    }


    return (
        <>
            <div>
                <div className="px-2 pt-2">
                    <div>
                        <Button color="black">
                            Resumen del Carrito
                        </Button>
                        <div className="bg-white px-8 py-8 ">
                            <Table className="" celled structured>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            <p className="text-center">
                                                Producto
                                            </p>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <p className="text-center">
                                                Plataforma
                                            </p>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <p className="text-center">
                                                Entrega
                                            </p>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            <p className="text-center">
                                                Precio
                                            </p>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {map(productos, (p) => (
                                        <Table.Row key={p._id}>
                                            <Table.Cell >
                                                <div className="flex flex-row">
                                                    <div className="grid content-center">
                                                        <Icon name="close" link
                                                            onClick={() => deleteProductCart(p.url)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Image src={p.poster.url} alt={p.title} className="h-36 ml-4" />
                                                    </div>
                                                    <div className="grid content-center ml-4">
                                                        <p >
                                                            {p.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <p className="text-center">
                                                    {p.platfom.nombre}
                                                </p>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <p className="text-center">
                                                    Inmediata
                                                </p>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <p className="text-center">
                                                    ${p.price}
                                                </p>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                    <Table.Row>
                                        <Table.Cell className="clear"></Table.Cell>
                                        <Table.Cell colSpan="2">Total:</Table.Cell>
                                        <Table.Cell>
                                            <p className="text-center text-2xl text-[#ff5200] font-bold">
                                                ${totalPrice.toFixed(2)}
                                            </p>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
