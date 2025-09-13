import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'
const Skills = ({isDarkMode , setIsDarkMode}) => {
  return (
    <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='text-center text-5xl font-Ova mb-6'>Services</motion.h2>
        <motion.p 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.4}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            I am a Front-End Developer from Srilanka with 1+ years of experience in multiple companies
        </motion.p>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6 my-10'>
            {serviceData.map(({icon, title, description, link},index)=>(
                <motion.div 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition= {{duration: 0.6, delay: 0.5}}
                key={index} className='border border-gray-400 rounded-lg px-8 py-12 blackShadow cursor-pointer lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className={`flex items-center gap-2 text-sm mt-5 border border-gray-800 rounded-full p-2 justify-between hover:bg-sky-300 ${isDarkMode ? 'text-gray-900':'text-gray-300'}`}>
                        Read more <Image src={assets.right_arrow} alt='' />
                    </a>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Skills