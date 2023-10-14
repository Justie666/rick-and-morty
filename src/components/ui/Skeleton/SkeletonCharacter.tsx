import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface SkeletonCharacterProps {
  count?: number
}

export const SkeletonCharacter: FC<SkeletonCharacterProps> = ({
  count = 20
}) => {
  const fakeArray = [...new Array(count)]

  return (
    <>
      {fakeArray.map((_, index) => (
        <Skeleton
          key={index}
          className='h-[272px] rounded-md shadow-lg transition-transform hover:-translate-y-3'
        />
      ))}
    </>
  )
}
