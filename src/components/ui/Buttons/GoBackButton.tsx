import { ButtonHTMLAttributes, FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface GoBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const GoBackButton: FC<GoBackButtonProps> = ({ ...rest }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      {...rest}
      className='absolute rounded border border-black p-2 text-xs font-bold uppercase'>
      Go back
    </button>
  )
}
