'use client'
import React, { useState, useEffect } from 'react';
import GsapSwiperComponent from '../common/ImageSlider';
import ServiceImages from '../common/ServiceImages';

const drawerItems = [
  {
    id: 'faq-drawer-1',
    title: 'Website Development',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 'faq-drawer-2',
    title: 'App Development',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 'faq-drawer-3',
    title: 'Digital Marketing',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 'faq-drawer-4',
    title: 'Branding',
    content: 'Lorem ipsum dolor sit amet...',
  },
];

const Whatwedo = () => {
  const width = useWidth()
  return (
    <div className='bg-black'>
      <div className='lg:pl-14 xl:pl-20 2xl:pl-24 sm:p-[2rem] p-[2rem]'>
        <h4 className=' text-[3rem] sm:text-2xl md:text-2xl text-primary '>What we do</h4>
        <h2 className='font-extralight '>
          Apps and websites are major channels for delivering entertainment content, such as videos, games, and multimedia.
        </h2>
      </div>
      {width < 700 ?
        <ServiceImages />
        :
        <GsapSwiperComponent />
      }


      <div className='container max-w-full'>
        {drawerItems.map((item, index) => (
          <div className='faq-drawer' key={item.id}>
            <input className='faq-drawer__trigger' id={item.id} type='checkbox' />
            <label className='faq-drawer__title font-normal italic' htmlFor={item.id}>
              {item.title}
            </label>
            <div className='faq-drawer__content-wrapper'>
              <div className='faq-drawer__content'>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;

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
