// import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link';
// import Image from 'next/image'
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
                        <Input size='small' icon='search' placeholder='Search...' className="my-8 ml-24" />
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

// function Search() {
//     return (
//         <>
//             <Input size='small' icon='search' placeholder='Search...' />
//         </>
//     )
// }