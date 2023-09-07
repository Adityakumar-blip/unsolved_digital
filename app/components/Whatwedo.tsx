import React from 'react';
import GsapSwiperComponent from '../common/ImageSlider';

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
    id: 'faq-drawer-3',
    title: 'Branding',
    content: 'Lorem ipsum dolor sit amet...',
  },
];

const Whatwedo = () => {
  return (
    <div className='bg-black'>
      <div className='pl-[6.8rem]'>
        <h4 className='text-primary'>What we do</h4>
        <h2 className='font-extralight w-[60%]'>
          Apps and websites are major channels for delivering entertainment content, such as videos, games, and multimedia.
        </h2>
      </div>
      <GsapSwiperComponent />
      <div className='container'>
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
