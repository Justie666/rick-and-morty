import { Location } from '@/@types/location'
import { LoadMoreButton, LocationList, SearchInput } from '@/components'
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

  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <div>
      <SearchInput
        placeholder='Filter by name...'
        onChange={onChangeInput}
        value={searchName}
      />
      <LocationList locations={locations} />
      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </div>
  )
}
