// INTERNAL
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { isFavoriteApi, addFavoriteApi, removeFavoriteApi } from '../../api/favorite';


// EXTERNAL
import { Grid, Image, Icon, Button } from 'semantic-ui-react';
import { size } from 'lodash';
import { addProductCart } from '../../api/cart';

export default function Headergame(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { games } = props;

    // EXTRAYENDO LOS DATOS DE GAME 
    const { poster, title } = games;

    return (
        <Grid>
            <Grid.Column mobile={16} tablet={6} computer={5}>
                <div className="m-2">
                    <Image src={poster.url} alt={title} />
                </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={11}>
                <Info games={games} />
            </Grid.Column>
        </Grid>
    )
}

function Info(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { games } = props;

    // EXTRAYENDO EL LOGOUT
    const { auth, logout } = useAuth();

    // EXTRAYENDO LAS FUNCIONES DEL CART_CONTEXT
    const { addProductCart } = useCart();


    // STATE QUE GUARDA O COMPRUEBA SI HAY ALGUN FAVORITO
    const [isFavorite, setIsFavorite] = useState(false)

    // EXTRAYENDO LOS DATOS DE GAME 
    const { title, summary, price, discount, url } = games;

    // STATE PARA RECARGAR LA PAGINA AUTOMATICAMENTE
    const [realoadFavorite, setRealoadFavorite] = useState(false)




    // FUNCION PARA LLAMAR LA API
    useEffect(() => {
        (async () => {
            if (auth) {
                const response = await isFavoriteApi(auth.idUser || auth.isUser, games._id, logout);
                if (size(response) > 0) setIsFavorite(true);
                else setIsFavorite(false);
            }
        })()
        setRealoadFavorite(false)
    }, [games, realoadFavorite]);



    // FUNCION PARA AGREGAR A FAVORITO
    const addFavorite = async () => {
        if (auth) {
            await addFavoriteApi(auth.idUser || auth.isUser, games.id, logout);
            setRealoadFavorite(true);
        }
    }

    // FUNCION PARA ELIMINAR DE FAVORITO
    const removeFavorite = async () => {
        if (auth) {
            await removeFavoriteApi(auth.idUser || auth.isUser, games.id, logout);
            setRealoadFavorite(true);
        }
    }


    return (
        <div>
            {/* titulo */}
            <div className="bg-[#a5673f] py-2 m-2">
                <h3 className="text-white text-center text-2xl">
                    {title}
                    <Icon
                        name={isFavorite ? "heart" : "heartbeat"}
                        className={isFavorite ? "text-[#ff5200] float-right pr-8" : "text-white float-right pr-8"}
                        onClick={isFavorite ? removeFavorite : addFavorite}
                        Link
                    />
                </h3>
            </div>
            {/* entrega */}
            <div className="">
                <p className="text-2xl text-orange-500 text-center font-extrabold">
                    Entrega de 24/48h
                </p>
            </div>
            {/* descripcion */}
            <div
                dangerouslySetInnerHTML={{ __html: summary }}
                className="m-2 bg-stone-100 py-2 px-2">
            </div>

            {/* precios */}
            <div className="flex flex-row bg-[#78350f] m-2">
                <div className="basis-2/3">
                    <p className="text-lg m-2 text-gray-400"> Precio de venta al publico:  ${price}</p>
                    <div className="flex flex-row">
                        {discount && (
                            <div>
                                <p className="m-2 text-white text-2xl font-extrabold">-%{discount}</p>
                            </div>

                        )}
                        <div>
                            {discount ? (
                                <p className="m-2 text-orange-500 text-3xl font-extrabold">${(price - Math.floor(price * discount) / 100).toFixed(2)}</p>

                            ) :
                                (
                                    <p className="m-2 pl-2 text-orange-500 text-3xl font-extrabold">${(price).toFixed(2)}</p>

                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="basis-1/3">
                    <div className="m-2 p-2">
                        <Button
                            size="large"
                            style={{ backgroundColor: '#ff5200', padding: '10px 48px', color: 'white' }}
                            onClick={() => addProductCart(url)}
                        >
                            Comprar
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
