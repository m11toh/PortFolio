import React from 'react'
import { FaPhone, FaEnvelope,FaMapMarkedAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className='bg-black text-white py-20' id ='Contact'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
               <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>Let's talk
               </h3>
               <p>I'm open to discuss web development projects or partnership/employment opportunities</p>
               <div className='mb-4 mt-4'>
                    <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                    <a href="mailto:youremail@gmail.com" className='hover:underline'>machariamartin146@gmail.com</a>
               </div>   
               <div className='mb-4 mt-4'>
                    <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                    <span>+254 741750323</span>
               </div>
               <div className='mb-4 mt-4'>
                    <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                    <span>Nairobi, Kenya</span>
               </div>  

            </div>
            <div className='flex-1 w-full'>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor='name'>Your name</label>
                        <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your name'/>
                    </div>
                    <div>
                        <label htmlFor='name' className='block mb-2'>Email</label>
                        <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your email'/>
                    </div>
                    <div>
                        <label htmlFor='name' className='block mb-2'>Message</label>
                        <textarea type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your name'/>
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
                </form>

            </div>
        </div>
    </div>
</div>
  )
}

export default Contact