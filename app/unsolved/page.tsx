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
    <div className='bg-black min-h-screen p-[4rem]'>
        <div className="unsolved-intro">
            <div>
                <h1 className='text-white uppercase w-[70%]'>Let's get you solved</h1>
            </div>
            <div className="unsolved-ethics flex justify-center items-center ">
                <div className="ethics w-[60%] ">
                    <h4 className='text-secondary'>"Unsolved isn't just an agency; it's a dynamic organization where young minds come together to tackle the most intriguing challenges in the most creative and unconventional ways. It's a place where innovation thrives and unique solutions are born." </h4>
                    <h3 className='text-white'>#Unsolvers</h3>
                </div>
            </div>
            <div className="teams mt-[5rem]">
                <h3>Our Unsolvers</h3>
                <div className="teams-intro flex justify-center items-center mt-[4rem]">
                <div className='flex column gap-x-40 '>
                {
                    membersData.map((member , index) => (
                        <div key={member.name} className="teams-card ">
                            <div>
                                <h3 className=''>{member.name}</h3>
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