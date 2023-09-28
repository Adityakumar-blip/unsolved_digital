'use client'
import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Members = () => {
    const membersData = [
        {
            name: "Aditya Kumar",
            title: "Programmer & CEO",
            intro: "Web and app development allow businesses to innovate and offer new, tech-driven products."
        },
        {
            name: "Tannu Singh",
            title: "Marketing Director & CMO",
            intro: "Web and app development allow businesses to innovate and offer new, tech-driven products."
        },
        // {
        //     name: "Dhruv Samani",
        //     title: "Programmer",
        //     intro: "Web and app development allow businesses to innovate and offer new, tech-driven products."
        // },
        // {
        //     name: "Tejas Solanki",
        //     title: "Programmer",
        //     intro: "Web and app development allow businesses to innovate and offer new, tech-driven products."
        // }
    ];

   

    return (
        <div className='members-main'>
            <h1 className='text-white font-normal w-[60%]'>Want to know more about us... </h1>
            
            <div className='flex column gap-x-20 '>
                {
                    membersData.map((member , index) => (
                        <div key={member.name} className="members-card bg-black">
                            <div>
                                <h3 className='text-white'>{member.name}</h3>
                                <h5 className='text-primary'>{member.title}</h5>
                            </div>
                            <div className={`members-img-${index}`} />
                            <h4 className='text-left text-white pt-[2rem]'>
                                {member.intro}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Members;
