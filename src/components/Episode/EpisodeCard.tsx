import { Episode } from '@/@types/episode'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface EpisodeCardProps {
  episode: Episode
}

export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Link
      to={`/episodes/${episode.id}`}
      className='flex h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center shadow-lg transition-transform hover:-translate-y-3'>
      <h2 className='font-bold'>{episode.name}</h2>
      <p className=' text-gray-500'>{episode.air_date}</p>
      <p className='font-semibold text-gray-500'>{episode.episode}</p>
    </Link>
  )
}
