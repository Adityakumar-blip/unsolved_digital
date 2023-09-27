import React from 'react';
import { Images } from '../utils/ImageService';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = ({ router }: any) => {
  const pathname = usePathname();

  const navs = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Work',
      link: '/work',
    },
    {
      name: 'Service',
      link: '/service',
    },
    {
      name: 'Unsolved',
      link: '/unsolved',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className='bg-black flex flex-col md:flex-row justify-between items-center px-4 md:px-8 h-auto md:h-[129px] main-navbar'>
      <div className=''>
        <Image
          src={Images.UnsolvedLogo}
          alt='logo'
          className='h-[103px] md:h-[70px] sm:h-[50px] xs:h-[10px]'
        />
      </div>
      <div className='md:w-4/4 flex flex-col md:flex-row items-center md:items-stretch'>
        <div className='md:flex gap-x-8'>
          {navs.map((item: any, i) => (
            <a
              key={i}
              className={
                pathname.includes(item.link)
                  ? 'active-link'
                  : 'cursor-pointer text-white'
              }
              href={item.link}
            >
              <h4 className='text-secondary uppercase'>{item.name}</h4>
            </a>
          ))}
        </div>
        <button className='text-secondary mt-4 md:mt-0'>Get Solved</button>
      </div>
    </div>
  );
};

export default Header;
