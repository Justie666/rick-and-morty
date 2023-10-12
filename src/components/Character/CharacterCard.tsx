import { Character } from '@/@types/character'
import { FC, useState } from 'react'
import { Modal } from '..'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  // TODO create hook
  const [isShow, setIsShow] = useState(false)
  const onClickCard = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <button
        onClick={onClickCard}
        className='overflow-hidden rounded-md shadow-lg'>
        <img
          src={character.image}
          alt={character.name}
          className='h-52 w-full object-cover'
        />
        <div className='p-2'>
          <h2 className='font-semibold'>{character.name}</h2>
          <p className='font-semibold text-gray-500'>{character.species}</p>
        </div>
      </button>
      <Modal isShow={isShow} onClickButton={onClickCard}>
        <img
          src={character.image}
          alt={character.name}
          className='mx-auto h-36 w-36 overflow-hidden rounded-full'
        />
        <h2 className='text-center text-2xl font-bold'>{character.name}</h2>
        <p className='text-sm'>
          Gender: {character.gender} <br />
          Count episode: {character.episode.length} <br />
          Origin: {character.origin.name} <br />
          Status: {character.status} <br />
          Species {character.species} <br />
        </p>
      </Modal>
    </>
  )
}
