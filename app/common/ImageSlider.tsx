'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapSwiperComponent = () => {

  const factData = [
    {
      imageSrc: 'https://source.unsplash.com/random',
      title: 'Web Development',
      description: 'Description for web development.',
    },
    {
      imageSrc: 'https://source.unsplash.com/random',
      title: 'Mobile Development',
      description: 'Description for mobile development.',
    },
    {
      imageSrc: 'https://source.unsplash.com/random',
      title: 'Digital Marketing',
      description: 'Description for digital marketing.',
    },
    {
      imageSrc: 'https://source.unsplash.com/random',
      title: 'Branding',
      description: 'Description for branding.',
    },
  ];
  

  useEffect(() => {
    const factsContainer = document.querySelector(".factsContainer");
    const facts = [...factsContainer.querySelectorAll(".fact")];
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
    <div className="wrapper pl-[6.8rem]">
    <div className="factsContainer">
      <div className="factsContainer_sm">
        {factData.map((fact, index) => (
          <div className="fact" key={index}>
            <div className="image-container">
              <img src={fact.imageSrc} alt={fact.title} />
              <div className="overlay">
                <h4 className="font-normal text-white pl-[20px]">{fact.title}</h4>
                {/* <span>{fact.description}</span> */}
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
