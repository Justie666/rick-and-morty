import { CharacterCard, LoadMoreButton, NotFoundBlock } from '@/components'
import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FC } from 'react'

interface CharacterListProps {
  characters?: Character[]
  fetchNextPage?: () => Promise<
    InfiniteQueryObserverResult<AxiosResponse<any, any>, unknown>
  >
  hasNextPage?: boolean | undefined
}

export const CharacterList: FC<CharacterListProps> = ({
  characters,
  fetchNextPage,
  hasNextPage
}) => {
  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {characters &&
          characters?.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>

      {!characters && <NotFoundBlock />}

      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </>
  )
}
