import { useState } from 'react'

export const useOpenModal = () => {
  const [isShow, setIsShow] = useState(false)
  const toggleModal = () => {
    setIsShow(!isShow)
  }

  return { isShow, toggleModal }
}
