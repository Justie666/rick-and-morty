import { Location } from '@/@types/location'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface LocationCardProps {
  location: Location
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  return (
    <Link
      to={`/locations/${location.id}`}
      className='flex h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center shadow-lg transition-transform hover:-translate-y-3'>
      <h2 className='font-bold'>{location.name}</h2>
      <p className=' text-gray-500'>{location.type}</p>
    </Link>
  )
}

export default LocationCard
