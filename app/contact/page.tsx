import React from 'react'
import Contact from '../components/Contact'

const Page = () => {
  return (
    <div className='bg-black'>
        <div className='contact-container'>
        <h1 className='text-white font-bold'>Hello</h1>
        <h4 className='text-primary italic'>Here you connect with our team to get solved you’r problems ?</h4>
        <h5 className='w-[60%] mt-[3rem] italic uppercase'>Apps and websites are major channels for delivering entertainment content, such as videos, games, and multimediaApps and websites are major channels for delivering entertainment content, such as videos, games, and multimedia.</h5>
        </div>
        <Contact/>
    </div>
  )
}

export default Page