import { ButtonHTMLAttributes, FC } from 'react'

interface GoBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const GoBackButton: FC<GoBackButtonProps> = ({ ...rest }) => {
  return <button {...rest}>Go back</button>
}
