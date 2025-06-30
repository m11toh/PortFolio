
import MG from '../Aseets/IMG_4839.JPG';
import React from 'react'

function Hero() {
    return (
        <div className='bg-black text-white text-center py-16'>
            <div>
                <img src={MG} alt=''
                    className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
                <h1 className='text-4xl font-bold'>
                    I'm {" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Martin Maina</span>
                    , Full-stack developer
                </h1>
                <p className='mt-4 text-lg text-gray-300'>
                    I am a passionate software engineer, I Specialize in building modern web applications
                </p>
                <div className='mt-8 space-x-4'>
                    <a href="mailto:machariamartin146@gmail.com">
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                            Contact With Me
                        </button>
                    </a>

                   <a
                        href="https://docs.google.com/document/d/16r_4E__1rdMQG5GiIBQMWTRXOGD4z8kLuX0z0JA86b4/edit?usp=sharing" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button className='bg-gradient-to-r from-purple-400 to-red-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                            Resume 
                        </button>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Hero