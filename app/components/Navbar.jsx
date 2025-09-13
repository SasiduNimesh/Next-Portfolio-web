'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { FaPhone, FaRegMoon, FaRegSun, FaTimes } from "react-icons/fa";
import Img1 from '../../assets/header-bg-color.png';
import { assets } from '@/assets/assets';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark'>
        <Image src={Img1} alt='' className='w-full' />
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-md shadow-sm":" "}
        ${isDarkMode ? "darkTheme shadow-md":""}
        `}>
            <a href='#home'>
                <h2 className='text-2xl font-bold cursor-pointer mr-14'><span className='text-sky-700'>S</span>.Nimesh</h2>
            </a>
            <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50
            ${isDarkMode ? "darkTheme shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "shadow-sm"}`}
>
                <li><a className='font-extrabold' href='#home'>Home</a></li>
                <li><a className='font-extrabold' href='#about'>About</a></li>
                <li><a className='font-extrabold' href='#skills'>Skills</a></li>
                <li><a className='font-extrabold' href='#projects'>Projects</a></li>
                <li><a className='font-extrabold' href='#contact'>Contact</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button onClick={()=> setIsDarkMode(prev=> !prev)} className='cursor-pointer'>
                    {isDarkMode ? <FaRegSun className="w-6" /> : <FaRegMoon className="w-6" />}
                </button>

                <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                    Contact <FaPhone className='w-3'/>
                </a>

                <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                    <Image src={isDarkMode? assets.menu_white :assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
            w-64 z-50 h-screen transition duration-500
            ${isDarkMode ? 'bg-indigo-950':'bg-sky-50'}`}>
                
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <FaTimes className='w-5 cursor-pointer'/>
                </div>
                <li className='transition hover:translate-x-1.5'><a className='font-extrabold' onClick={closeMenu} href='#home'>Home</a></li>
                <li className='transition hover:translate-x-1.5'><a className='font-extrabold' onClick={closeMenu} href='#about'>About</a></li>
                <li className='transition hover:translate-x-1.5'><a className='font-extrabold' onClick={closeMenu} href='#skills'>Skills</a></li>
                <li className='transition hover:translate-x-1.5'><a className='font-extrabold' onClick={closeMenu} href='#projects'>Projects</a></li>
                <li className='transition hover:translate-x-1.5'><a className='font-extrabold' onClick={closeMenu} href='#contact'>Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar