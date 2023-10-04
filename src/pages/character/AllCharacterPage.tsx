import { Character } from '@/@types/character'
import { CharacterList, LoadMoreButton, SearchInput } from '@/components'
import { useRequestCharacterInfinityQuery } from '@/utils/api'
import { ChangeEvent, FC, useState } from 'react'

export const AllCharacterPage: FC = () => {
  const [searchName, setSearchName] = useState('')

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestCharacterInfinityQuery(searchName)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
    refetch()
  }

  const characters = data?.pages.reduce(
    (character: Character[], { data }) => [...character, ...data.results],
    []
  )

  // TODO create hook
  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <>
      <SearchInput
        placeholder='Filter by name...'
        onChange={onChangeInput}
        value={searchName}
      />
      <CharacterList
        characters={characters}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </>
  )
}
