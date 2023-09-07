import React from 'react';
import Image from 'next/image';
import { Images } from '../utils/ImageService'
import Whatwedo from '../components/Whatwedo';
import Members from '../components/Members';
import Testomonial from '../components/Testomonial';
import Contact from '../components/Contact';
import Projects from '../components/Projects';


const Page = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-black'>
        <div className='circle '></div>
        <div className="text-container flex justify-center items-center">
          <div className="home-heading flex justify-center items-center flex-col w-[90%] text-center">
            <h1 className='text-primary uppercase'>From Vision to Convert Reality</h1>
            <h4 className='w-[50%]'>Both web and app development involve designing, building, and maintaining software applications, but they have different characteristics and use cases.</h4>
            <Image src={Images.downArrow} className='h-[4.4rem] w-[4.4rem] mt-[2rem]' alt='arrow' />
          </div>
        </div>
      </div>
      <Whatwedo />
      <Projects/>
      <Members/>
      <Testomonial/>
      <Contact/>
    </>
  );
}

export default Page;
