import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-black py-8 text-white'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='font-bold text-2xl mb-2'>Martin</h3>
                    <p className='text-gray-400'>Software Engineer based in Kenya, specializing in web and software development </p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center '>
                        <input type='email' placeholder='Enter email'
                        className='w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'/>
                        <button type='submit' 
                        className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                    &copy; {new Date(). getFullYear()} Martin. All rights reserved.
                </p>
                <div className='flex space-x-4 my-6 md:my-0 text-4xl'>
                    <a href="https://www.linkedin.com/in/martin-maina32285/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/m11toh"  target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                </div>
                <div>
                    <a href="#">
                        Privacy.
                    </a>
                    <a href="#">
                        Terms of Services
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer