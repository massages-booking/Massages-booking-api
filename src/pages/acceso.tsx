import React from 'react'
import svgHeader from "../assets/images/svg/svg-header.svg"
import svgBottom from "../assets/images/svg/svg-bottom.svg"
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Acceso = () => {
    return (
        <div id="Acceso" className='w-screen h-screen bg-white flex justify-between text-center items-center flex-col'>
            <Image
                src={svgHeader}
                width={100}
                height={100}
                alt="Picture of the author"
                className='relative top-0 w-screen'
            />
            <p className='text-textBlue font-bold text-5xl tracking-widest' >Bienvenidos!</p>
            <div id="data-entry" className=''>
                <div className='mb-5 w-[300px] h-[35px] bg-fillBlue rounded-xl flex justify-center items-center '>
                    <p className='text-blue-600/0! font-nanito'>justinng046@gmail.com</p>
                </div>
                <div className='mb-5 w-[300px] h-[35px] bg-fillBlue rounded-xl flex justify-center items-center'>
                    <p >***********</p>
                </div>
                <Link legacyBehavior href="/">
                    <a >
                        <motion.button
                            className="items-end relative"
                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        >
                            <p className='text-textBlue font-nanito text-end'>Olvidé mi contraseña</p>
                        </motion.button>
                    </a>
                </Link>
            </div>
            <Image
                src={svgBottom}
                width={100}
                height={100}
                alt="Picture of the author"
                className='relative bottom-0 w-screen'
            />
        </div>
    )
}

export default Acceso