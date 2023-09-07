'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-section" key={index}>
          <div className="testimonial-photo">
            <img src={testimonial.image} alt="testimonial photo" />
          </div>
          <div className="testimonial-content flex justify-center items-center flex-col p-10 text-center gap-x-5.5">
            <h5 className="text-primary font-bold">{testimonial.name}</h5>
            <hr className="my-2 w-8rem border-t-2 border-primary font-bold text-primary" />
            <p className="pt-1rem">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
