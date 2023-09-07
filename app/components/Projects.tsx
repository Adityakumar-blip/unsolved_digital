import React from 'react';

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
              <div className="left-one">

              </div>
              <div className="left-two">

              </div>
            </div>
            <div className="right-projects">
              <div className="right-one"></div>
              <div className="right-two"></div>
            </div>
          </div>

        </div>
      </div>
      {/* <h4>test</h4> */}
    </div>
  );
};

export default Projects;
