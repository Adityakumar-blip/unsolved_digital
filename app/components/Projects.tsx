import React from "react";
import selfstudy from "../assets/images/selfstudy.jpeg";
import socialpubli from "../assets/images/socialpubli.jpeg";
import mujammil from "../assets/images/muzzammil.png";
import collegebazaar from "../assets/images/collegebazaar.jpeg";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="project-main pb-5 sm:pb-20 px-8 py-12 sm:px-12">
      <div className="pl-6 sm:pl-0">
        <h2 className="text-primary text-left">Projects</h2>
        <h4 className="font-extralight text-left w-full sm:w-2/3">
          Apps and websites are major channels for delivering entertainment
          content, such as videos, games, and multimedia.
        </h4>
      </div>

      <div className="see-work flex flex-row gap-2 justify-end">
        <span className="flex justify-center items-center gap-2">
          <p>See our work</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              color="#010001"
            >
              <path
                stroke="#010001"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.171 14.828 5.657-5.656m0 0h-4.95m4.95 0v4.95M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
              ></path>
            </svg>
          </span>
        </span>
      </div>
      <div className="projects-container flex flex-wrap gap-[2rem] justify-center pt-[4rem]">
        <div className="project-card max-w-[26rem] mb-4">
          <img src={selfstudy.src} alt="self-study" className="w-full h-auto" />
        </div>
        <div className="project-card max-w-[26rem] mb-4">
          <img
            src={socialpubli.src}
            alt="socialpubli"
            className="w-full h-auto"
          />
        </div>
        <div className="project-card max-w-[26rem] mb-4">
          <img src={mujammil.src} alt="mujammil" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
