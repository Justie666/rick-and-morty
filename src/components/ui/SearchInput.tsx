import { FC, InputHTMLAttributes } from 'react'

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return <input type='text' {...rest} />
}
