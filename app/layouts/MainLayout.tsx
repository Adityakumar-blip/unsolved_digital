'use client'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import { useRouter } from 'next/router'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {/* <CustomCursor/> */}
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout