import React from 'react'
import web from '../assets/images/web.jpg'
import app from '../assets/images/app.jpg'
import branding from '../assets/images/branding.jpg'
import marketing from '../assets/images/marketing.jpg'

const ServiceImages = () => {
    const factData = [
        {
            imageSrc: web,
            title: 'Web Development',
            description: 'Description for web development.',
        },
        {
            imageSrc: app,
            title: 'Mobile Development',
            description: 'Description for mobile development.',
        },
        {
            imageSrc: marketing,
            title: 'Digital Marketing',
            description: 'Description for mobile development.',
        },
        {
            imageSrc: branding,
            title: 'Branding',
            description: 'Description for branding.',
        },
    ];
    return (
        <div className="Images-container p-[2rem] sm:block max-sm:block md:hidden">
            <div className="Images">
                <div className="Images-sm flex flex-col justify-center items-center gap-6">
                    {factData.map((fact, index) => (
                        <div className="fact" key={index}>
                            <div className="service-image-container relative h-[30rem] rounded-lg overflow-hidden">
                                <img className='rounded-lg h-full' src={fact.imageSrc.src} alt={fact.title} />
                                <div className="overlay">
                                    <h4 className="font-normal text-white md:pl-[20px] sm:pl-0 max-sm:pl-0">{fact.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceImages