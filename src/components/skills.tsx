import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container px-8 pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 data-aos="zoom-in-down" className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-white pt-2'>I have a solid foundation in Web Development, specializing in HTML, CSS, JavaScript and TypeScript.
                    My experience extends to using framework like Next js to create dynamic and User-Friendly applications. I am also proficient in Tailwind CSS for efficient Style and Design with a passion for learning. I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 font-semibold text-black text-1xl sm:text-2xl'>
                    <div className='space-y-2 m-1' >
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>Html</h2>
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>CSS</h2>
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>JavaScript</h2>
                    </div>
                    <div className='space-y-2 m-1'>
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>TypeScript</h2>
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>Tailwind CSS</h2>
                        <h2 className='bg-[#0bdbd4] rounded-lg p-1 text-center'>Next.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills