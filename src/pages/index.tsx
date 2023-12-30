import Image from 'next/image'
import svg from "../assets/images/svg/SVG-button-1.svg"
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function Home() {
  return (
    <div id="Home" className='w-screen h-screen bg-blue-gradient flex justify-center text-center items-center flex-col'>
       <Link legacyBehavior href="/acceso">
      <a >
        <motion.button
          className="w-auto h-auto flex items-end relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <p className="font-nanito font-extrabold gradient-m ">M </p>
          <p className="font-nanito font-thin text-5xl text-white relative top-[-27px]">asajes</p>
        </motion.button>
      </a>
    </Link>
      <Image
        src={svg}
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  )
}
