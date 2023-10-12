import bannerPng from '@assets/images/banner.png'
import { FC } from 'react'

export const Banner: FC = () => {
  return (
    <div className='mb-5 flex justify-center'>
      <img src={bannerPng} alt='banner' />
    </div>
  )
}
