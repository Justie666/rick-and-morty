import { Location } from '@/@types/location'
import { LocationList, SearchInput } from '@/components'
import { useRequestLocationInfinityQuery } from '@/utils/api'
import { ChangeEvent, FC, useState } from 'react'

export const AllLocationPage: FC = () => {
  const [searchName, setSearchName] = useState('')

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestLocationInfinityQuery(searchName)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
    refetch()
  }

  const locations = data?.pages.reduce(
    (location: Location[], { data }) => [...location, ...data.results],
    []
  )

  return (
    <div>
      <SearchInput
        placeholder='Filter by name...'
        onChange={onChangeInput}
        value={searchName}
      />
      <LocationList
        locations={locations}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  )
}
