import {
  CharacterList,
  LoadingBlock,
  NotFoundBlock,
  PageTitle
} from '@/components'
import { getIdsFromArray } from '@/utils'
import {
  useRequestLocationQuery,
  useRequestManyCharacterQuery
} from '@/utils/api'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LocationPage: FC = () => {
  const [idsResidents, setIdsResidents] = useState<number[]>([])
  const { id } = useParams()

  const { data, isFetching, isError } = useRequestLocationQuery(id ? +id : 0)

  const location = data && data.data

  useEffect(() => {
    location?.residents && setIdsResidents(getIdsFromArray(location?.residents))
  }, [location?.residents])

  const { data: characters } = useRequestManyCharacterQuery(idsResidents + '')

  if (isFetching) return <LoadingBlock />

  if (!location || isError) return <NotFoundBlock />

  return (
    <div>
      <PageTitle
        mainTitle={location.name}
        title={'Type'}
        title2={'Dimension'}
        description={location.type}
        description2={location.dimension}
        contentTitle='Residents'
      />
      {characters && characters.length > 0 ? (
        <CharacterList characters={characters} isFetching={isFetching} />
      ) : (
        <NotFoundBlock />
      )}
    </div>
  )
}
