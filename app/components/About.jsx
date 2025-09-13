import React from 'react'
import AbImg from '../../assets/pro-image.png'
import { infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const About = (isDarkMode, setIsDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-4 scroll-mt-20'>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{duration: 0.6, delay: 0.3}}
        className='text-center text-5xl font-Ova mb-6'>About Me
        </motion.h2>
        <div className='flex gap-8 w-full flex-col lg:flex-row items-center'>
            <motion.div
            initial={{x: -10, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition= {{duration: 0.6, delay: 0.3}}
            className={`w-64 sm:w-80 rounded-3xl max-w-none border border-gray-800 ${isDarkMode ? 'bg-indigo-200':'bg-sky-950'}`}
            >
                <Image src={AbImg} alt='user' className='w-full rounded-3xl' />
            </motion.div>
            <div className='flex-1 mt-2'>
                <motion.p 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition= {{duration: 0.6, delay: 0.3}}
                className='mb-10 max-w-2xl font-sans text-justify'>
                    I am an Undergraduate student pursuing a BSc in Computer Science at Trincomalee Campus, Eastern
                    University of Sri Lanka. I have a Strong foundation in Computer Science and hands-on Experience
                    with Software Development, System Management and Troubleshooting. Passionate about Technology
                    and Continuous learning, I an eager to apply my skills across diferent areas of IT, Including software
                    development, technical support, system administration, and data-related tasks.
                </motion.p>
                <motion.ul 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition= {{duration: 0.6, delay: 0.3}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                >
                    {infoList.map(({icon,iconDark,title,description}, 
                    index)=>(
                        <li 
                        key={index} 
                        className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer lightHover hover:-translate-y-1 duration-500 blackShadow ${isDarkMode ? 'hover:text-black':''}`}>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className="my-4 font-semibold">{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </motion.ul>
                <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition= {{duration: 0.6, delay: 0.3}}
                className='my-6 text-gray-700'>Tools & Technologies</motion.h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <motion.li 
                        initial={{y: -20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition= {{duration: 0.6, delay: 0.3}}
                        key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About