import { FC, InputHTMLAttributes } from 'react'

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <input
      type='text'
      {...rest}
      className='h-11 w-full rounded-lg border border-gray-500 px-4 transition-all hover:border-blue-500 '
    />
  )
}
