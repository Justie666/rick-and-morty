import { FC, PropsWithChildren } from 'react'

interface LoadMoreButtonProps {}

export const LoadMoreButton: FC<PropsWithChildren<LoadMoreButtonProps>> = ({
  children
}) => {
  return (
    <button className='rounded-lg border border-black px-4 py-1 shadow'>
      {children}
    </button>
  )
}
