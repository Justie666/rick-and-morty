import { FC } from 'react'
import { GoBackButton } from '.'

interface PageTitleProps {
  mainTitle: string
  title: string
  description: string
  title2: string
  description2: string
  contentTitle: string
}

export const PageTitle: FC<PageTitleProps> = ({
  mainTitle,
  title,
  title2,
  description,
  description2,
  contentTitle
}) => {
  return (
    <>
      <GoBackButton />
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-center text-4xl'>{mainTitle}</h1>
        <div className='flex gap-40'>
          <div className='flex flex-col'>
            <h2 className='font-bold'>{title}</h2>
            <p className='text-gray-500'>{description}</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='font-bold'>{title2}</h2>
            <p className='text-gray-500'>{description2}</p>
          </div>
        </div>
      </div>
      <h2 className='mt-16 text-xl text-gray-500'>{contentTitle}</h2>
    </>
  )
}
