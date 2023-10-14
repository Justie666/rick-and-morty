import logoSvg from '@assets/images/logo.svg'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './components'

export const Header: FC = () => {
  return (
    <header className='w-full py-1 shadow-main'>
      <div className='container flex items-center justify-between'>
        <Link to={'/characters'}>
          <img src={logoSvg} alt='Logo' />
        </Link>
        <Nav />
      </div>
    </header>
  )
}
