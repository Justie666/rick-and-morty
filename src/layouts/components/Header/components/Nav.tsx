import { FC } from 'react'
import { Link } from 'react-router-dom'

const links = [
  {
    title: 'Characters',
    to: '/characters'
  },
  {
    title: 'Locations',
    to: '/locations'
  },
  {
    title: 'Episodes',
    to: '/episodes'
  }
]

export const Nav: FC = () => {
  return (
    <nav>
      <ul className='flex gap-3 font-semibold'>
        {links?.map(link => (
          <Link key={link.to} to={link.to}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
