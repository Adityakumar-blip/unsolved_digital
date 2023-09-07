import React from 'react'

const Page = () => {
  return (
    <div className='bg-black'>
      <div className='services-main flex flex-col justify-center items-center pt-[4rem]'>
        <h3 className='uppercase text-white text-center font-bold'>Our services</h3>
        <h3 className='text-primary font-bold text-center'>WE UNDERSTAND TO BEST SERVE OUR CLIENTS</h3>
        <div className='w-[50%] mt-[4rem]'>
        <p className='text-accent text-center italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was.</p>
        </div>
      </div>
    </div>
  )
}

export default Page