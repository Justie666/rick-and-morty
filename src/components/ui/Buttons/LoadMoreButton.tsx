import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LoadMoreButton: FC<PropsWithChildren<LoadMoreButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className='rounded-lg border border-black px-4 py-1 shadow'
      {...rest}>
      {children}
    </button>
  )
}
