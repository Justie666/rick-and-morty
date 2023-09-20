import { Location } from '@/@types/location'
import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FC } from 'react'
import { LoadMoreButton, NotFoundBlock } from '..'
import LocationCard from './LocationCard'

interface LocationsProps {
  locations?: Location[]
  fetchNextPage?: () => Promise<
    InfiniteQueryObserverResult<AxiosResponse<$FIXME, $FIXME>, unknown>
  >
  hasNextPage?: boolean | undefined
}

export const LocationList: FC<LocationsProps> = ({
  locations,
  fetchNextPage,
  hasNextPage
}) => {
  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {locations &&
          locations?.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
      </div>

      {!locations && <NotFoundBlock />}

      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </>
  )
}
