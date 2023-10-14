import { Option } from '@/@types/select'
import { FC, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}

export const Select: FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <select
      className='h-11 w-full rounded-lg border border-gray-500 px-4 transition-all hover:border-blue-500'
      {...rest}>
      {options.map(option => (
        <option key={option.title} value={option.value} className=''>
          {option.title}
        </option>
      ))}
    </select>
  )
}
