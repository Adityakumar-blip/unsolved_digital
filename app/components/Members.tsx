"use client";
import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useWidth from "../utils/UseWidth";
import ImageSlider from "../utils/ImageSlider";
import Slider from "react-slick";

const Members = () => {
  const width = useWidth();
  console.log("width", width);
  const membersData = [
    {
      name: "Aditya Kumar",
      title: "Programmer & CEO",
      intro:
        "Web and app development allow businesses to innovate and offer new, tech-driven products.",
      image:
        "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tannu Singh",
      title: "Marketing Director & CMO",
      intro:
        "Web and app development allow businesses to innovate and offer new, tech-driven products.",
      image:
        "https://images.unsplash.com/photo-1617906658260-a6d01b7694a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNob3J0JTIwaGFpciUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tannu Singh",
      title: "Marketing Director & CMO",
      intro:
        "Web and app development allow businesses to innovate and offer new, tech-driven products.",
      image:
        "https://images.unsplash.com/photo-1646907528518-f88bc83d4759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHNob3J0JTIwaGFpciUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tannu Singh",
      title: "Marketing Director & CMO",
      intro:
        "Web and app development allow businesses to innovate and offer new, tech-driven products.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="members-main p-[0.5rem] sm:p-[4rem]">
      <h1 className="text-white sm:font-white font-normal mx-auto text-center sm:text-left">
        Our Team
      </h1>

      {width < 600 ? (
        <ImageSlider data={membersData} />
      ) : (
        // <Slider {...sliderSettings}>
        //   {membersData.map((member, index) => (
        //     <div
        //       key={member.name}
        //       className="members-card flex flex-row gap-4 bg-black p-4"
        //       style={{ margin: "0 10px" }}
        //     >
        //       <div className="hidden sm:block">
        //         <h3 className="text-white">{member.name}</h3>
        //         <h5 className="text-primary">{member.title}</h5>
        //         <h4 className="text-center text-white pt-4">{member.intro}</h4>
        //       </div>
        //       <div className="members-img bg-gray-500">
        //         <img src={member.image} alt={member.name} />
        //       </div>
        //     </div>
        //   ))}
        // </Slider>
        <ImageSlider data={membersData} />
      )}
    </div>
  );
};

export default Members;
