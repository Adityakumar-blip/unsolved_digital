import React from "react";
import Image from "next/image";
import { Images } from "../utils/ImageService";
import Whatwedo from "../components/Whatwedo";
import Members from "../components/Members";
import Testomonial from "../components/Testomonial";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Page = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black overflow-x-hidden relative">
        <div className="circle"></div>
        <div className="text-container flex justify-center items-center">
          <div className="home-heading flex justify-center items-center flex-col w-[90%] text-center md:text-xl lg:text-2xl">
            <h1 className="uppercase font-bold">
              <span className="text-white">From Vision to Convert</span>{" "}
              <span className="text-white">Reality</span>
            </h1>
            <h4 className="w-[70%] md:w-[60%] text-white">
              Both web and app development involve designing, building, and
              maintaining software applications, but they have different
              characteristics and use cases.
            </h4>
            <Image
              src={Images.downArrow}
              className="h-[4.4rem] w-[4.4rem] mt-[2rem]"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <Whatwedo />
      <Projects />
      <Members />
      <Testomonial />
      <Contact />
    </>
  );
};

export default Page;
