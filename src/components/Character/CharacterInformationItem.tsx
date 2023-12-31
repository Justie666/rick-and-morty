import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '..'

interface CharacterInformationBlockProps {
  title: string
  description: string
  isLink: boolean
  to?: string
  date?: string
}

export const CharacterInformationItem: FC<CharacterInformationBlockProps> = ({
  title,
  description,
  date,
  isLink,
  to
}) => {
  if (isLink && to) {
    return (
      <Link
        to={to}
        className='mt-5 flex flex-col px-2 transition-all hover:translate-x-2'>
        <div className='flex items-center justify-between pr-4'>
          <div>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-lg text-gray-500'>{description}</p>
            <p className='font-semibold uppercase tracking-widest'>{date}</p>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
        <div className='mt-3 h-px w-full bg-gray-400'></div>
      </Link>
    )
  }

  return (
    <div className='mt-5 flex flex-col px-2'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-lg text-gray-500'>{description}</p>
      <div className='mt-3 h-px w-full bg-gray-400'></div>
    </div>
  )
}
