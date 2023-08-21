import { CharacterCard, LoadMoreButton } from '@/components'
import { useRequestCharacterInfinityQuery } from '@/utils/api'
import { FC } from 'react'

export const CharacterList: FC = () => {
  const { data, fetchNextPage, hasNextPage } =
    useRequestCharacterInfinityQuery()

  const characters = data?.pages.reduce(
    (character: Character[], { data }) => [...character, ...data.results],
    []
  )

  console.log(hasNextPage)

  const click = () => {
    fetchNextPage()
  }

  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {data
          ? characters?.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))
          : ''}
      </div>
      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={click}>Load more</LoadMoreButton>
        </div>
      )}
    </>
  )
}
