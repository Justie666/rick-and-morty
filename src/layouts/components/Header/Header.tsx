import logoSvg from '@assets/images/logo.svg'
import { FC } from 'react'
import { Nav } from './components'

export const Header: FC = () => {
  return (
    <header className='w-full py-1 shadow-main'>
      <div className='container flex items-center justify-between'>
        <img src={logoSvg} alt='Logo' />
        <Nav />
      </div>
    </header>
  )
}
