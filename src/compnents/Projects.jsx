import React from 'react';
import estate from '../Aseets/Digi-estate.png';
import golden from '../Aseets/golden.png';


const projects = [
    {
        id: 1,
        title: 'Simple Hotel website',
        Image: estate,
        technologies: 'Tailwind css, React js, Html',
        link: 'https://github.com/m11toh/Golden_hub'
    },
    {
        id: 2,
        title: 'Real-Estate Website',
        Image: golden,
        technologies: 'React js, Html, css, Javascript',
        link: 'https://github.com/m11toh/Digi-estate'
    }

]

function Projects() {

  return (
    <div className='bg-black text-white py-20' id="Projects"> 
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    projects.map((project) =>(
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-500 hover:scale-105'>
                            <img src={project.Image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                            <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.link} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-4 rounded-full' target='_blank' rel='noopener noreferrer'>Github</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects