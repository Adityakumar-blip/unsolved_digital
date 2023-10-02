"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  const testimonials = [
    {
      id: 1,
      photoUrl:
        "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fCUzQm1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "MD at Paisa Groww",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy lorem is simply dummy text",
    },
    {
      id: 2,
      photoUrl:
        "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fCUzQm1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "MD at Paisa Groww",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy lorem is simply dummy text",
    },
    {
      id: 3,
      photoUrl:
        "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fCUzQm1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "MD at Paisa Groww",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy lorem is simply dummy text",
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center pb-[5rem]">
      <div className="flex flex-col justify-center items-center pt-20 mb-[4rem]">
        <h5 className="text-primary">What</h5>
        <h2 className="text-white">OUR CLIENT SAYS</h2>
        <h5 className="text-primary">ABOUT UNSOLVED</h5>
      </div>

      <div className="w-full h-full">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-section mt-[8rem] md:mt-[10rem] flex flex-col md:flex-row"
            >
              <div className="testimonial-photo">
                <img src={testimonial.photoUrl} alt="testimonial photo" />
              </div>
              <div className="testimonial-content flex flex-col justify-center p-5 text-center">
                <h5 className="text-primary font-bold">{testimonial.name}</h5>
                <hr className="my-2 w-20 md:w-32 border-t-2 border-primary font-bold text-primary mx-auto" />
                <p className="pt-5 md:pt-3">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
