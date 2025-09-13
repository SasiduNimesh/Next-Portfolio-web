'use client'
import React from 'react'
import Image from 'next/image'
import ProImg from '../../assets/pro-image.png'
import { FaArrowRight, FaDownload, FaHandPaper, FaLinkedin } from 'react-icons/fa'
import {motion} from 'motion/react'
const Hero = () => {
  return (
    <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition= {{duration: 0.8, type: 'spring', stiffness: 100}}
        className='mt-10'
        >
            <Image src={ProImg} alt='' className='rounded-full w-32 h-32 bg-gray-200' />
        </motion.div>
        <motion.h3
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono'
        >Hi! I'm Sasindu Nimesh 
            <FaHandPaper className='w-6 rotate-35 text-amber-600' />
        </motion.h3>
        <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.8, delay: 0.5}} 
        className='text-3xl sm:text-6xl lg:text-[66px] font-medium'
        >
            Front-End Developer Based in Srilanka.
        </motion.h1>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition= {{duration: 0.6, delay: 0.7}}  
        className='max-w-2xl mx-auto font-serif'>
            I am a Full-Stack Web Developer with expertise in both front-end and back-end development. I build dynamic, user-friendly, 
            and scalable web applications by combining modern frameworks
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition= {{duration: 0.6, delay: 1.2}}  
            href='#contact' 
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
            >
                Contact Me <FaArrowRight className='w-4'/>
            </motion.a>
            <motion.a
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition= {{duration: 0.6, delay: 1.2}} 
            href='#contact' 
            className='px-10 py-3 border border-black rounded-full bg-white text-black flex items-center gap-2'
            >
                Follow Me <FaLinkedin className='w-4'/>
            </motion.a>
            {/*<a href='/'  download
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
            >
                My Resume <FaDownload className='w-4'/>
            </a>*/}
        </div>
    </div>
  )
}

export default Hero