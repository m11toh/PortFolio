import React from 'react'
import Abt from '../Aseets/Abt.JPEG.jpeg'

function About() {
  return (
    <div className='bg-black text-white py-20' id ='About'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={Abt} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                    I am a passionate full-stack software engineer with a strong foundation
                    in both front-end and back-end development. 
                    I thrive in collaborative environments, demonstrating leadership and teamwork
                    to drive projects forward. With a knack for problem-solving
                    and a commitment to innovative solutions, I consistently aim to deliver
                    high-quality, efficient code. 
                    I'm eager to contribute to dynamic teams while continuously learning 
                    and growing in the tech industry.
                    </p>
                    <div className='space-y-4 '>
                        <div className='flex items-center '>
                            <label htmlFor="htmlandcss" className='w-2/12'>Html and css <br />(Tailwind & Bootstrap)</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="React" className='w-2/12'>React.js</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-10/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="Python" className='w-2/12'>Python</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-8/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="htmlandcss" className='w-2/12'>Flask</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-9/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="sql" className='w-2/12'>Sqlite</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-10/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="htmlandcss" className='w-2/12'>Postgresql</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-7/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <label htmlFor="htmlandcss" className='w-2/12'>Postman Api</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 '>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                1+
                            </h3>
                            <p>Years of experience</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                30+
                            </h3>
                            <p>Projects completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About




