import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

const MainLayout: FC = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
