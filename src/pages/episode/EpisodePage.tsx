import {
  CharacterList,
  LoadingBlock,
  NotFoundBlock,
  PageTitle
} from '@/components'
import { getIdsFromArray } from '@/utils'
import {
  useRequestEpisodeQuery,
  useRequestManyCharacterQuery
} from '@/utils/api'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EpisodePage: FC = () => {
  const [idsCast, setIdsCast] = useState<number[]>([])
  const { id } = useParams()

  const { data, isFetching, isError } = useRequestEpisodeQuery(id ? +id : 0)

  const episode = data && data.data

  useEffect(() => {
    episode?.characters && setIdsCast(getIdsFromArray(episode.characters))
  }, [episode?.characters])

  const { data: characters } = useRequestManyCharacterQuery(idsCast + '')

  if (isFetching) return <LoadingBlock />

  if (!episode || isError) return <NotFoundBlock />

  return (
    <div>
      <PageTitle
        mainTitle={episode.name}
        title={'Episode'}
        title2={'Date'}
        description={episode.episode}
        description2={episode.air_date}
        contentTitle='Cast'
      />
      {characters && characters.length > 0 ? (
        <CharacterList characters={characters} />
      ) : (
        <NotFoundBlock />
      )}
    </div>
  )
}
