import bannerPng from '@assets/images/banner.png'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

export const MainLayout: FC = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='container flex-grow py-4'>
        <div className='flex justify-center'>
          <img src={bannerPng} alt='banner' />
        </div>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
