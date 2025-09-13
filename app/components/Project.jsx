import { assets, workData } from '@/assets/assets'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from "motion/react";

const Project = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'
        >
            What Am I Do
        </motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='text-center text-5xl font-Ovo'>My Latest Projects
        </motion.h2>
        <motion.p 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
            Welcome to my web development portfolio ! Explore a collection of projects
            showcasing my expertise in full-stack development.
        </motion.p>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-5'>
            {workData.map((project, index)=>(
                <motion.div key={index} 
                style={{backgroundImage: `url(${project.bgImage})`}}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group flex border border-gray-800'
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition= {{duration: 0.6, delay: 0.4}}
                >
                    <div className={`bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ${isDarkMode ? 'text-white darkTheme':''}`}>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-sky-700 transition'>
                            <a href={project.pro_link} className='currsor-pointer'><FaGithub className='w-5' /></a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <motion.a 
        initial={{x: -40, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.5}}
        href='https://github.com/SasiduNimesh' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
        my-20 lightHover duration-500'
        >
            Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
        </motion.a>
    </div>
  )
}

export default Project