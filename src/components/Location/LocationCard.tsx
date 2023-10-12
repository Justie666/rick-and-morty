import { Location } from '@/@types/location'
import { useOpenModal } from '@/utils'
import locationPng from '@assets/images/location.png'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '..'

interface LocationCardProps {
  location: Location
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  const { isShow, toggleModal } = useOpenModal()

  return (
    <>
      <Link
        to={`/locations/${location.id}`}
        className='flex h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center shadow-lg'>
        <h2 className='font-bold'>{location.name}</h2>
        <p className=' text-gray-500'>{location.type}</p>
      </Link>
      <Modal isShow={isShow} toggleModal={toggleModal} banner={locationPng}>
        <h2 className='text-center text-2xl font-bold'>{location.name}</h2>
        <p className='text-sm'>
          Type: {location.type} <br />
          Dimension: {location.dimension} <br />
          Residents count: {location.residents.length} <br />
          Created: {location.created}
        </p>
      </Modal>
    </>
  )
}

export default LocationCard
