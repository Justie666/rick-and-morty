import { FC } from 'react'
import { Link } from 'react-router-dom'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link to='/characters' className='overflow-hidden rounded-md shadow-lg'>
      <img
        src={character.image}
        alt={character.name}
        className='h-52 w-full object-cover'
      />
      <div className='p-2'>
        <h2 className='font-semibold'>{character.name}</h2>
        <p className='font-semibold text-gray-400'>{character.species}</p>
      </div>
    </Link>
  )
}
