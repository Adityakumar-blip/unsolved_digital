import React from 'react'

const Page = () => {
    const membersData = [
        {
            name: "Aditya Kumar",
            title: "Programmer & CEO",
            intro: "Web and app development allow businesses to innovate and offer new, tech-driven products."
        },
        {
            name: "Tannu Singh",
            title: "Co-Founder & CMO",
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
        <div className='bg-black min-h-screen md:p-[4rem] sm:p-[2rem] max-sm:p-[2rem] '>
            <div className="unsolved-intro">
                <div>
                    <h1 className='text-white uppercase md:w-[70%] sm:text-4xl max-sm:text-4xl md:text-[96px] sm:w-full max-sm:w-full'>Let's get you solved</h1>
                </div>
                <div className="unsolved-ethics flex justify-center items-center ">
                    <div className="ethics md:w-[60%] sm:w-full max-sm:w-full ">
                        <h4 className='text-secondary'>"Unsolved isn't just an agency; it's a dynamic organization where young minds come together to tackle the most intriguing challenges in the most creative and unconventional ways. It's a place where innovation thrives and unique solutions are born." </h4>
                        <h3 className='text-white'>#Unsolvers</h3>
                    </div>
                </div>
                <div className="teams mt-[5rem]">
                    <h3>Our Unsolvers</h3>
                    <div className="teams-intro flex justify-center items-center mt-[4rem]">
                        <div className='flex md:gap-40 sm:gap-[5rem] max-sm:gap-[5rem] md:flex-row sm:flex-col max-sm:flex-col'>
                            {
                                membersData.map((member, index) => (
                                    <div key={member.name} className="teams-card ">
                                        <div>
                                            <h3 className='text-[36px]'>{member.name}</h3>
                                            <h5 className='text-primary'>{member.title}</h5>
                                        </div>
                                        <div className={`teams-img-${index}`} />
                                        <h4 className='text-left pt-[2rem]'>
                                            {member.intro}
                                        </h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page