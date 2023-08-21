import { LoadMoreButton } from '@/components'
import { useGetAllCharactersQuery } from '@/utils/api'
import { FC } from 'react'
import { CharacterCard } from '.'

export const CharacterList: FC = () => {
  const { data } = useGetAllCharactersQuery()

  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {data
          ? data.results.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))
          : ''}
      </div>
      <div className='mt-4 text-center'>
        <LoadMoreButton>Load more</LoadMoreButton>
      </div>
    </>
  )
}
