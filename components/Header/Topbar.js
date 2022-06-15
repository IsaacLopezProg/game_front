// INTERNAL
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

// EXTERNAL
import { Input, Image } from 'semantic-ui-react';

export default function Topbar() {
    return (
        <>
            <div className="bg-amber-900">
                <div className="container max-w-6xl flex flex-wrap justify-between items-center mx-auto bg-amber-900" >
                    <div className="">
                        <Link href="/">
                            <Image src='/logo.png' size='medium' className="my-8 cursor-pointer" />
                        </Link>
                        {/* <Logo /> */}
                    </div>
                    <div className="">
                        <Search />
                        {/* <div class="relative z-0 mb-6 w-full group">
                            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div> */}
                        {/* <Search /> */}
                    </div>
                </div>
            </div>

        </>
    )
}

// function Logo() {
//     return (
//         <>
//             <Link className="" href="/">
//                 {/* <a href="https://flowbite.com" class="flex items-center">
//                     <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//                     <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a> */}
//                 <Image src='/logo.png' size='medium' />
//             </Link>
//         </>
//     )
// }

function Search() {

    // OBTENIENDO LOS DATOS DE LA PAGINA
    const router = useRouter();

    // STATE DE STRING DE BUSQUEDA
    const [searchStr, setSearchStr] = useState("");

    // STATE DE LOAD PARA HACER UN STOP A LA PRIMERA LLAMADA DEL EFFECT
    const [load, setLoad] = useState(false);

    // FUNCION QUE GUARDA LOS DATOS DEL STRING
    useEffect(() => {
        // COMPROBACION DEL LOAD PARA DETENER LA PRIMERA EJECUCION DEL EFFECT
        if (load) {
            // NOS ENVIA A LA PAGINA SEARCH CON EL QUERY STRING DEL INPUT
            router.push(`/search?query=${searchStr}`)

        }
        // PARA QUE EJECUTE EL GUARDADO DEL STRING DESPUES DE LA PRIMERA LLAMADA
        setLoad(true)
        // CADA VEZ QUE CAMBIE EL VALOR DEL STRING VA A GUARDAR EN EL STATE
    }, [searchStr]);


    return (
        <>
            <Input
                size='small'
                icon='search'
                // placeholder='Search...'
                id="search-game"
                // EL VALOR ESCRITO ES EL DEL QUERY DE LA PAGINA, POR QUE SI NO, SE VUELVA UNA LETRA
                // ESCRITO DESDE EL INPUT SEARCH
                // value={router.query.query}
                value={router.query.query}
                // SE EJECUTA LA FUNCION Y LOS DATOS QUE RECIBE EL CHANGE LO ENVIA AL STATE POR EL VALOR
                // DE DATA, EL GUION BAJO REPRENSENTA LA FUNCION, Y EL DATA LOS DATOS QUE RECIBE
                onChange={(_, data) => setSearchStr(data.value)}
            />
        </>
    )
}