import React from 'react'

interface propsType {
    title:string;
}
const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div data-aos="zoom-in-down" className='text-center text-4xl pb-8'>
        <p className='text-4xl md:text-5xl pb-2'>{title}</p>
    </div>
  )
}

export default Heading