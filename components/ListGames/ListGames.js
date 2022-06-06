// INTERNAL
import React from 'react'
import Link from 'next/link';
import useWindowSize from "../../hooks/useWindowSize";
import {
    breakpointUpSm,
    breakpointUpMd,
    breakpointUpLg,
} from "../../utils/breakpoint";


// EXTERNAL
import { map } from 'lodash';
import { Grid, Image } from 'semantic-ui-react';

export default function ListGames(props) {

    // TRAYENDO LOS DATOS DEL INDEX PRINCIPAL
    const { game } = props;

    const { width } = useWindowSize();



    const getColumnsRender = () => {
        switch (true) {
            case width > breakpointUpLg:
                return 4;
            case width > breakpointUpMd:
                return 3;
            case width > breakpointUpSm:
                return 2;
            default:
                return 1;
        }
    };

    return (
        <div>
            <Grid>
                <Grid.Row columns={getColumnsRender()} className="mr-4">
                    {map(game, (g) => (
                        <Juego g={g} />
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}


function Juego(props) {
    const { g } = props

    return (
        // <Grid.Column mobile={16} tablet={8} computer={4} className="pt-8"> una forma de hacero responsivo
        <Grid.Column className="pt-8">

            <Link href={`/${g.url}`} >
                <a className="hover:bg-black">
                    <div className="static">
                        <Image src={g.poster.url} alt={g.title} size='medium' />
                        <div >
                            {g.discount ? (
                                <span className="bg-green-500 text-white px-2 font-bold text-lg absolute top-12 right-3">-{g.discount}%</span>
                            ) :
                                <span />
                            }
                            <span className="absolute top-20 right-3 text-xl text-white bg-stone-500 bg-opacity-80 px-2">${g.price}</span>
                        </div>
                    </div>
                    <h3 className="md:text-xl text-sm text-stone-600 mt-0 text-center font-bold">{g.title}</h3>
                </a>
            </Link>
        </Grid.Column>
    )
}