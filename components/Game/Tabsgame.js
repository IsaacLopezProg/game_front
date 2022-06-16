// INTERNAL
import React, { useState } from 'react';


// EXTERNAL
import { Tab } from 'semantic-ui-react';
import ReactPlayer from 'react-player/lazy';
import { Image, Modal } from 'semantic-ui-react';
import { map } from 'lodash';
import Slider from 'react-slick/lib/slider';
import moment from "moment";
import "moment/locale/es";

export default function Tabsgame(props) {

    // EXTRAYENDO EL CONTENIDO DEL PROPS
    const { games } = props;

    // CREANDO LA ESTRUCTURA DEL TABS
    const panes = [{
        menuItem: "Informacion",
        render: () => (
            <Tab.Pane style={{ padding: '1px 8px' }} >
                <Videogame games={games} />
            </Tab.Pane >
        ),
    },
    ]

    return (
        <>
            <Tab className="m-2" panes={panes} />
        </>
    )
}


function Videogame(props) {

    //  EXTRAYENDO LOS DATOS DEL PROPS
    const { games } = props;

    return (
        <div >
            <ReactPlayer url={games.video} controls={true} width='100%' height='400px' />
            <Imagesgame games={games} />
            <div className="">
                {/* descripcion */}
                <div dangerouslySetInnerHTML={{ __html: games.summary }}
                    className="m-2 bg-stone-100 p-2 md:text-xl" />
                {/* fecha de lanzamiento */}
                <div className="inline-flex m-2 p-2 ">
                    <h4 className="md:text-2xl text-[#ff5200] mr-2">Fecha de lanzamiento:</h4>
                    <p className="text-2xl">{moment(games.releaseDate).format("LL")}</p>
                </div>
            </div>
        </div>
    )
}

function Imagesgame(props) {

    //  EXTRAYENDO LOS DATOS DEL PROPS
    const { games } = props;

    // EXTRANYENDO DATOS DE GAMES   
    const { screenshots, title } = games;

    // STATE DEL MODAL
    const [showModal, setShowModal] = useState(false);

    // STATE QUE GUARDA EL URL DE LA IMAGEN
    const [urlImage, setUrlImage] = useState(null)

    // CONFIGURACION DEL SLIDER
    const settings = {
        // para agregarle clases al slider
        className: "mt-2 p-0 ",
        // para que no se acabe con las cantidad de imagenes el slider
        infinite: true,
        // velocidad de animacion
        speed: 500,
        // cantidad de fotos por toma que aparecen en el slider
        slidesToShow: 2,
        // cantidad de fotos que van a cambiar cuando presiones botones
        // de cambio de imagenes
        slidesToScroll: 2,
    };

    // FUNCION QUE ENVIA LA IMAGENE AL MODAL Y LO ABRE, RECIBE LA URL
    const openImagen = (url) => {
        // guarda la url de la imagen en el state
        setUrlImage(url);
        // abre el modal
        setShowModal(true);
    };


    return (
        <>
            <Slider {...settings}>
                {map(screenshots, (screenshot) => (
                    <div className="pl-2 hover:opacity-80 cursor-pointer">
                        <Image
                            key={screenshot.id}
                            src={screenshot.url}
                            alt={screenshot.name}
                            // ejecuta en el click la funcion y envia la url
                            onClick={() => openImagen(screenshot.url)}
                        />
                    </div>
                ))}
            </Slider>

            <Modal open={showModal} onClose={() => setShowModal(false)} >
                <Image src={urlImage} alt={title} />
            </Modal>
        </>
    )
}