// use client
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainLayout from './layouts/MainLayout'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unsolved    ',
  description: 'Solving the unsolved',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor/>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
