'use client'
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import web from '../assets/images/web.jpg'
import app from '../assets/images/app.jpg'
import branding from '../assets/images/branding.jpg'
import marketing from '../assets/images/marketing.jpg'


gsap.registerPlugin(ScrollTrigger);

const GsapSwiperComponent = () => {

  const factData = [
    {
      imageSrc: web,
      title: 'Web Development',
      description: 'Description for web development.',
    },
    {
      imageSrc: app,
      title: 'Mobile Development',
      description: 'Description for mobile development.',
    },
    {
      imageSrc: marketing,
      title: 'Digital Marketing',
      description: 'Description for mobile development.',
    },
    {
      imageSrc: branding,
      title: 'Branding',
      description: 'Description for branding.',
    },
  ];

  const width = useWidth()


  useEffect(() => {
    const factsContainer = document.querySelector(".factsContainer");
    const facts = Array.from(factsContainer?.querySelectorAll(".fact") || []);
    const smallFactsContainer = document.querySelector(".factsContainer_sm");


    const scroll_tl = gsap.timeline({
      scrollTrigger: {
        trigger: factsContainer,
        start: "top center",
        scrub: true,
        end: "+=300",
      },
    });

    scroll_tl.to(".factsContainer h2", {
      scale: 1.5,
      duration: 1,
      ease: "slow",
    });

    scroll_tl.to(
      facts,
      {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
          trigger: ".factsContainer_sm",
          start: "center center",
          pin: true,
          scrub: 1,
          snap: 1 / (facts.length - 1),
          end: () => `+=4320`,
        },
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="wrapper pl-[6.8rem] sm:hidden max-sm:hidden md:block  ">
      <div className="factsContainer">
        <div className="factsContainer_sm">
          {factData.map((fact, index) => (
            <div className="fact" key={index}>
              <div className="image-container h-[30rem]">
                <img src={fact.imageSrc.src} alt={fact.title} />
                <div className="overlay">
                  <h4 className="font-normal text-white pl-[20px]">{fact.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default GsapSwiperComponent;



const useWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return width
}
