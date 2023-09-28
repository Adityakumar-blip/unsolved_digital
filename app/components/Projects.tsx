import React from 'react';
import selfstudy from '../assets/images/selfstudy.jpeg'
import socialpubli from '../assets/images/socialpubli.jpeg'
import mujammil from '../assets/images/muzzammil.png'
import collegebazaar from '../assets/images/collegebazaar.jpeg'
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='bg-black project-main pb-[6rem]'>
      <div className='pl-[6.8rem]'>
        <h4 className='text-primary'>Projects</h4>
        <h2 className='font-extralight w-[60%]'>
          Apps and websites are major channels for delivering entertainment content, such as videos, games, and multimedia.
        </h2>
      </div>
      <div className='flex justify-center items-center mt-[10rem] overflow-hidden'>
        <div className='circle-container'>
          {/* <div className='blank_circle'>
            <div className='small_circle'></div>
            <div className='large_circle'></div>
          </div> */}
          <div className="projects-container">
            <div className="left-projects">
              <a href='https://self-study.in/' target='_blank'><div className="left-one">
                <img src={selfstudy.src} alt='self-study' />
              </div></a>
              <a href='https://socialpubli.netlify.app/' target='_blank'><div className="left-two">
                <img src={socialpubli.src} />
              </div></a>
            </div>
            <div className="right-projects">
              <a href='https://almujammilfragrance.com/' target='_blank'><div className="right-one">
                <img src={mujammil.src} />
              </div></a>
              <a href='https://collegebazaar.netlify.app/' target='_blank'><div className="right-two">
                <img src={collegebazaar.src} />
              </div></a>
            </div>
          </div>

        </div>
      </div>
      {/* <h4>test</h4> */}
    </div>
  );
};

export default Projects;
