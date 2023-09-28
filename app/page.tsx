'use client'
import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   if (router) {
  //     if (router.asPath.includes('/')) {
  //       router.push('/home');
  //     }
  //   }
  // }, [router]);
  return (
    <div className='flex h-[88vh] bg-black'>
    </div>
  )
}
