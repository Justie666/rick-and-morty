import { Character } from '@/@types/character'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <>
      <Link
        to={`/characters/${character.id}`}
        className='overflow-hidden rounded-md shadow-lg'>
        <img
          src={character.image}
          alt={character.name}
          className='h-52 w-full object-cover'
        />
        <div className='p-2 text-left'>
          <h2 className='font-semibold'>{character.name}</h2>
          <p className='font-semibold text-gray-500'>{character.species}</p>
        </div>
      </Link>
    </>
  )
}
