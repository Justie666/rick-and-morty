import { Character } from '@/@types/character'
import { CharacterCard, SkeletonCharacter } from '@/components'
import { FC } from 'react'

interface CharacterListProps {
  characters?: Character[]
  isFetching: boolean
}

export const CharacterList: FC<CharacterListProps> = ({
  characters,
  isFetching
}) => {
  return (
    <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {characters &&
        characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      {isFetching && <SkeletonCharacter />}
    </div>
  )
}
