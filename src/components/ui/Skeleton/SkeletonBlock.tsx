import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface SkeletonBlockProps {
  count?: number
}

export const SkeletonBlock: FC<SkeletonBlockProps> = ({ count = 20 }) => {
  const fakeArray = [...new Array(count)]

  return (
    <>
      {fakeArray.map((_, index) => (
        <Skeleton key={index} className='h-32 w-full rounded shadow-lg' />
      ))}
    </>
  )
}
