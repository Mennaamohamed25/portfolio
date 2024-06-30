"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import Link from 'next/link';


const Header = () => {


  
  return (
    // Header Page
  <header className='lg:py-16' id='header'>
    {/* GRID PAGE */}
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        {/* FIRST PART TEXT */}
   <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:0.5}} className='col-span-7 place-self-center text-center sm:text-left justify-self-start mb-16 sm:mb-0'>
   <h1 className='text-white mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold'>
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m {""}</span>
  {/* Header Animation  */}
  <br/>
  <TypeAnimation
      sequence={[
        'Menna Mohamed.',
        1000, 
        'a Frontend developer.',
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
   </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>I&apos;m looking for a new challenge at reputable company where I can put my 
         abilities to use, broaden my knowledge, and use what I&apos;ve learned. </p>
         <div >
         <Link href='#contact' className='px-6 py-3 w-full block sm:w-fit  sm:inline mr-4 md-mb-6   rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200' >
         
          Hire me </Link>
         <button className='px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3'>
         <a href="/file_pdf.pdf" download="Menna Mohamed Resume">
         <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' >Download CV</span>
         </a>
         </button>
         </div>
   </motion.div>
   {/* ANOTHER ONE IS FOR IMAGE */}
   <motion.div initial={{opacity:0 , scale:0.3}} animate={{opacity:1 , scale:1}} transition={{duration:0.3}} className='col-span-5 place-self-center mt-4 lg:mt-0'>
   <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
        </div>
   </motion.div>
    </div>

  </header>
  )
}

export default Header;