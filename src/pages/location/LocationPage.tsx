import { NotFoundBlock, PageTitle } from '@/components'
import { getIdsFromArray } from '@/helpers'
import { useRequestCharacterQuery, useRequestLocationQuery } from '@/utils/api'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LocationPage: FC = () => {
  // const [residents, setResidents] = useState<Character[]>([])
  const [idsResidents, setIdsResidents] = useState<number[]>([])
  const { id } = useParams()

  // TODO fix error
  const { data, isFetching } = useRequestLocationQuery(+id)

  const location = data && data.data

  useEffect(() => {
    location?.residents && setIdsResidents(getIdsFromArray(location?.residents))
  }, [location?.residents])

  useEffect(() => {
    const { data: characters } = useRequestCharacterQuery(idsResidents + '')
    console.log(characters)
  }, [idsResidents])

  if (isFetching) return <div>Loading</div>

  if (!data) {
    return <NotFoundBlock />
  }

  // const { data } = await api.get<Character>(
  //   `/character/${resident.match(/\d+/)}`
  // )
  // setResidents(prev => [...prev, data])

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
      {/* {<CharacterList characters={residents} />} */}
    </div>
  )
}
