import {
  CharacterInformationItem,
  GoBackButton,
  LoadingBlock
} from '@/components'
import { getIdsFromArray } from '@/utils'
import {
  useRequestCharacterQuery,
  useRequestManyEpisodeQuery
} from '@/utils/api'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '..'

type infoArrayType = {
  title: string
  description: string
  isLink: boolean
  to?: string
  date?: string
}[]

export const CharacterPage: FC = () => {
  const [idsEpisodes, setIdsEpisodes] = useState<number[]>([])
  const { id } = useParams()

  const { data, isFetching, isError } = useRequestCharacterQuery(id ? +id : 0)

  const character = data && data.data

  useEffect(() => {
    character?.episode && setIdsEpisodes(getIdsFromArray(character.episode))
  }, [character?.episode])

  const characterInfoArray: infoArrayType = character
    ? [
        {
          title: 'Gender',
          description: character?.gender || 'Unknown',
          isLink: false
        },
        {
          title: 'Status',
          description: character?.status || 'Unknown',
          isLink: false
        },
        {
          title: 'Specie',
          description: character?.species || 'Unknown',
          isLink: false
        },
        {
          title: 'Origin',
          description: character?.origin.name || '',
          isLink: false
        },
        {
          title: 'Type',
          description: character?.type || 'Unknown',
          isLink: false
        },
        {
          title: 'Location',
          description: character?.location.name || 'Unknown',
          isLink: true,
          to: `/locations/${character.location.url}`
        }
      ]
    : []

  const { data: episodes } = useRequestManyEpisodeQuery(idsEpisodes + '')

  if (isFetching) return <LoadingBlock />
  if (!character || isError) return <NotFoundPage />

  console.log(episodes)

  return (
    <div>
      <GoBackButton />
      <div className='mx-auto h-60 w-60 rounded-full bg-gray-200 p-1 sm:h-72 sm:w-72'>
        <img
          src={character.image}
          alt={character.name}
          className='rounded-full'
        />
      </div>
      <h1 className='mt-2 text-center text-5xl'>{character.name}</h1>
      <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6'>
        <div>
          <h2 className='text-2xl font-semibold text-gray-500'>Information</h2>
          {characterInfoArray.length > 0 &&
            characterInfoArray.map(info => (
              <CharacterInformationItem
                key={info.title}
                title={info.title}
                description={info.description}
                isLink={info.isLink}
                date={info.date}
                to={info.to}
              />
            ))}
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-gray-500'>Episode</h2>
          {episodes &&
            episodes?.length > 0 &&
            episodes.map(episode => (
              <CharacterInformationItem
                key={episode.name}
                title={episode.name}
                description={episode.episode}
                isLink={true}
                date={episode.air_date}
                to={`/episodes/${episode.id}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
