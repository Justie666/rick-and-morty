import { Episode } from '@/@types/episode'
import episodesPng from '@assets/images/episodes.png'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '..'

interface EpisodeCardProps {
  episode: Episode
}

export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  // TODO create hook
  const [isShow, setIsShow] = useState(false)
  const onClickCard = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <Link
        to={`/episodes/${episode.id}`}
        onClick={onClickCard}
        className='flex h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center shadow-lg'>
        <h2 className='font-bold'>{episode.name}</h2>
        <p className=' text-gray-500'>{episode.air_date}</p>
        <p className='font-semibold text-gray-500'>{episode.episode}</p>
      </Link>
      <Modal isShow={isShow} onClickButton={onClickCard} banner={episodesPng}>
        <h2 className='text-center text-2xl font-bold'>{episode.name}</h2>
        <p className='text-sm'>
          Air date: {episode.air_date} <br />
          Characters: {episode.characters.length} <br />
          Episode: {episode.episode} <br />
          Created: {episode.created} <br />
        </p>
      </Modal>
    </>
  )
}
