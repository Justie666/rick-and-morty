import { Location } from '@/@types/location'
import { FC } from 'react'
import { NotFoundBlock } from '..'
import LocationCard from './LocationCard'

interface LocationsListProps {
  locations?: Location[]
}

export const LocationList: FC<LocationsListProps> = ({ locations }) => {
  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {locations &&
          locations?.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
      </div>

      {!locations && <NotFoundBlock />}
    </>
  )
}
