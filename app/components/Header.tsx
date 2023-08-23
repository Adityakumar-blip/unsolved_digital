"use client"
import React from 'react'
import { Images } from '../utils/ImageService'
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Header = ({ router }: any) => {
    const pathname = usePathname();


    const navs = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "Work",
            link: "/work"
        },
        {
            name: "Service",
            link: "/service"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ]

    return (
        <div className='bg-black flex justify-between items-center px-8'>
            <Image src={Images.UnsolvedLogo} alt='logo' className='h-16' />
            <div className='flex gap-x-10 py-[14px]'>
                <div className='flex gap-x-8'>
                    {navs.map((item: any, i) => (
                        <a className={pathname.includes(item.link) ? 'active-link' : 'cursor-pointer'} href={item.link}>
                            <h4 className='text-secondary uppercase'>{item.name}</h4>
                        </a>
                    ))}
                </div>
                <button className='text-secondary'>Get Solved</button>
            </div>

        </div>
    )
}

export default Header