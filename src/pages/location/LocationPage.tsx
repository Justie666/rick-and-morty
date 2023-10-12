import {
  CharacterList,
  LoadingBlock,
  NotFoundBlock,
  PageTitle
} from '@/components'
import { getIdsFromArray } from '@/helpers'
import {
  useRequestLocationQuery,
  useRequestManyCharacterQuery
} from '@/utils/api'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LocationPage: FC = () => {
  const [idsResidents, setIdsResidents] = useState<number[]>([])
  const { id } = useParams()

  // TODO fix error
  const { data, isFetching, isError } = useRequestLocationQuery(+id)

  const location = data && data.data

  useEffect(() => {
    location?.residents && setIdsResidents(getIdsFromArray(location?.residents))
  }, [location?.residents])

  // TODO fix request from /character
  const { data: characters } = useRequestManyCharacterQuery(idsResidents + '')

  if (isFetching) return <LoadingBlock />

  console.log(isError)

  if (!location || isError) {
    return <NotFoundBlock />
  }

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
      {characters && characters.data.length > 1 ? (
        <CharacterList characters={characters?.data} />
      ) : (
        <NotFoundBlock />
      )}
    </div>
  )
}
