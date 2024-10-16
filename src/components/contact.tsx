import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { Button } from './ui/button';


const Contact = () => {
    return (
        <div id='contact' className='pt-32  container px-8'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 data-aos="zoom-in-down" className='text-5xl'>Contact Me</h2>
                    <p className='text-[18px] pt-2'>
                        Feel free to Contact me!
                    </p>
                    <div className='flex gap-3 items-center'>
                        <MdMailOutline size={30} /> abc@gmail.com
                    </div>
                    <div className='flex gap-3 items-center'>
                        <BsTelephone size={30} /> 021-123456789
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[40px] bg-transparent px-4 border border-[#0bdbd4]' id='name' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className='h-[40px] bg-transparent px-4 border border-[#0bdbd4]' id='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className='bg-transparent px-4 py-3 border border-[#0bdbd4]' id='message' rows={8}></textarea>
                    </div>
                    <Button className='bg-[#0bdbd4]  text-accent'>Send</Button>
                </div>
            </div>
            </div>
            )
}

            export default Contact