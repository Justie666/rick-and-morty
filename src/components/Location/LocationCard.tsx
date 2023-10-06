import { Location } from '@/@types/location'
import locationPng from '@assets/images/location.png'
import { FC, useState } from 'react'
import { Modal } from '..'

interface LocationCardProps {
  location: Location
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  // TODO create hook
  const [isShow, setIsShow] = useState(false)
  const onClickCard = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <button
        onClick={onClickCard}
        className='flex h-32 w-full flex-col items-center justify-center rounded bg-gray-100 px-4 py-2 text-center shadow-lg'>
        <h2 className='font-bold'>{location.name}</h2>
        <p className=' text-gray-500'>{location.type}</p>
      </button>
      <Modal isShow={isShow} onClickButton={onClickCard} banner={locationPng}>
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
