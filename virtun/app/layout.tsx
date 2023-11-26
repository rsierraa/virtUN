import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VirtUN',
  description: 'Hecho en la UN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster toastOptions={{
          style:{
            background: "rgb(51 65 85)",
            color: "#fff",
          },
        }}
        />
        <CartProvider>
        <div className='flex flex-col min-h-screen'>
          <NavBar/>
          <main className='flex-grow'>
            {children}
          </main>
          <Footer/>
        </div>
        </CartProvider>
        </body>
    </html>
  )
}
