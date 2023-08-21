import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface LinksArray extends LinkProps {
  title: string
}

const links: LinksArray[] = [
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
          <Link key={link.title} to={link.to}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
