import { useOutsideClick } from '@/utils'
import { FC, PropsWithChildren } from 'react'

interface ModalProps {
  isShow: boolean
  onClickButton: () => void
  banner?: string
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isShow,
  onClickButton,
  banner,
  children
}) => {
  const ref = useOutsideClick(() => {
    onClickButton()
  })

  if (isShow) document.body.style.overflowY = 'hidden'
  if (!isShow) document.body.style.overflowY = 'auto'

  if (!isShow) return <></>

  return (
    <>
      <div className='fixed left-0 top-0 z-50 h-full w-full overflow-x-hidden overflow-y-hidden bg-black bg-opacity-60'>
        <div
          ref={ref}
          className='absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-5 sm:w-96'>
          {banner && <img src={banner} alt='banner' />}
          {children}
        </div>
      </div>
    </>
  )
}
