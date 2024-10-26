import React from 'react'


const services = [
    {
        id: 1,
        title: 'Full Stack Development',
        description: 'I specialize in developing web applications using HTML, CSS, and JavaScript for the front-end and Python and SQL for the back-end.'
    },
    {
        id: 2,
        title: 'Database Management',
        description: 'I can help you design and implement databases using SQL databases such as Sqlite3 and PostgreSQL.'
    },
    {
        id: 3,
        title: 'Web Design',
        description: 'I can help you create visually appealing and user-friendly web applications.'
    },
    {
        id: 4,
        title: 'Front-end Development',
        description: 'Building responsive and interactive user interfaces.'
    },
    {
        id: 5,
        title: 'Back-end Development',
        description: 'Developing robust server-side logic and databases.'
    }
]

function service() {
  return (
    <div className='bg-black text-white py-20' id="Services"> 
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => (
                    <div key={service.id} className='bg-gray-800 px-6 pb-6 py-3rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                            {service.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>

                        
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default service