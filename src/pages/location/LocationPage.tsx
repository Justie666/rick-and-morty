import { Character } from '@/@types/character'
import { CharacterList, NotFoundBlock, PageTitle } from '@/components'
import { useRequestLocationQuery } from '@/utils/api'
import { api } from '@/utils/api/instance'
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LocationPage: FC = () => {
  const [residents, setResidents] = useState<Character[]>([])
  const { id } = useParams()

  // TODO fix error
  const { data, isFetching } = useRequestLocationQuery(+id)

  if (isFetching) return <div>Loading</div>

  if (!data) {
    return <NotFoundBlock />
  }

  const location = data.data

  location.residents.forEach(async resident => {
    const { data } = await api.get<Character>(
      `/character/${resident.match(/\d+/)}`
    )
    setResidents(prev => [...prev, data])
  })

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
      {<CharacterList characters={residents} />}
    </div>
  )
}
