import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

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