import { Location } from '@/@types/location'
import { LoadMoreButton, LocationList, SearchInput } from '@/components'
import { useDebounce } from '@/utils'
import { useRequestLocationInfinityQuery } from '@/utils/api'
import { FC, useEffect, useState } from 'react'

export const AllLocationPage: FC = () => {
  const [searchName, setSearchName] = useState('')
  const debounceSearchValue = useDebounce(searchName, 500)

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestLocationInfinityQuery(searchName)

  useEffect(() => {
    refetch()
  }, [debounceSearchValue, refetch])

  const locations = data?.pages.reduce(
    (location: Location[], { data }) => [...location, ...data.results],
    []
  )

  return (
    <div>
      <div className='mx-auto max-w-[500px]'>
        <SearchInput
          placeholder='Filter by name...'
          onChange={e => setSearchName(e.target.value)}
          value={searchName}
        />
      </div>
      <LocationList locations={locations} />
      <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </div>
  )
}
