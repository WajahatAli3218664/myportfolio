import Image from 'next/image';
import React from 'react'


interface propsType {
    title: string;
    command: string;
    img: string;
    tags: string[]
}
const Card: React.FC<propsType> = ({ title, command, img, tags }) => {
    return (
        <div  data-aos="zoom-out" className='border-4 border-white w-[300px] sm:w-[350px] mt-5'>
            <div>
                <Image className='w-[300px] sm:w-[350px] h-auto'
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>

            <div className='p-4 space-y-4'>
                <div className='text-4xl font-extralight'>{title}</div>
                <div className=''>{command} </div>
                <div>{tags.map((el)=>(
                    <div className='tags' key={el}>
                        {el}
                    </div> 
            ))}</div>
            </div>
        </div>
    )
}

export default Card