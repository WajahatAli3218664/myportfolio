'use client'
import React, { useState } from 'react'

import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const[isMenuOPen, setIsMenuOpen]= useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOPen);
    };
    return (
        <div className='container pt-8'>
            <nav  className=' flex justify-around items-center '>
                <div className='text-xl font-medium border-[#0bdbd4] border-2 p-2 rounded-lg'>Komal Abbasi</div>
                <ul className='gap-10 lg:gap-16 text-2xl md:flex hidden'>
                    <li className='menuLink'><a href="#hero">Home</a></li>
                    <li className='menuLink'><a href="#about">About</a></li>
                    <li className='menuLink'><a href="#projects">Projects</a></li>
                    <li className='menuLink'><a href="#skills">Skills</a></li>
                    <li className='menuLink'><a href="#contact">Contact</a></li>
                </ul>
                <div className='md:hidden'>
                    {isMenuOPen? (<AiOutlineMenu onClick={toggleMenu}  size={30}/>):(<AiOutlineMenu  onClick={toggleMenu} size={30}/>)
                    }
                </div>
            </nav>
            {isMenuOPen && (
                <ul className='flex flex-col gap-4 mt-4 md:hidden'>
                <li className='menuLink'><a href="#hero" onClick={toggleMenu}>Home</a></li>
                <li className='menuLink'><a href="#about" onClick={toggleMenu}>About</a></li>
                <li className='menuLink'><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li className='menuLink'><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li className='menuLink'><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
            )}
        </div>
    )
}

export default Navbar