import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

const Hero = () => {
    return (
        <div id="hero" >
            <Navbar />
            <div className='container grid lg:grid-cols-2 h-auto lg:h-[calc(100vh-60px)] items-center mx-auto md:mb-10 sm:mb-10'>
                <div data-aos="zoom-in-down" className='mx-auto'> <Image src="waj.jpg" width={550} height={550} alt="Profile picture" /></div>
                <div className='text-center lg:text-left sm:text-[40px] lg:text-[100px] leading-tight '>
                    <div className='ml-[5%]'>
                        <p className='text-[40px]'>Hi! My name is</p>
                        <p data-aos="flip-right" className='text-[60px] lg:text-[100px] font-bold'>Wajahat Ali</p>
                        <p className='text-[40px] lg:text-[40px] flex justify-center justify-items-end'>and I&apos;m a Web Developer!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
