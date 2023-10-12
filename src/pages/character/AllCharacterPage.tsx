import { Character } from '@/@types/character'
import {
  Banner,
  CharacterList,
  LoadMoreButton,
  SearchInput
} from '@/components'
import { useDebounce } from '@/utils'
import { useRequestCharacterInfinityQuery } from '@/utils/api'
import { FC, useEffect, useState } from 'react'

export const AllCharacterPage: FC = () => {
  const [searchName, setSearchName] = useState('')
  const debounceSearchValue = useDebounce(searchName, 500)

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestCharacterInfinityQuery(debounceSearchValue)

  useEffect(() => {
    refetch()
  }, [debounceSearchValue, refetch])

  const characters = data?.pages.reduce(
    (character: Character[], { data }) => [...character, ...data.results],
    []
  )

  return (
    <>
      <Banner />
      <div className='mx-auto max-w-[500px]'>
        <SearchInput
          placeholder='Filter by name...'
          onChange={e => setSearchName(e.target.value)}
          value={searchName}
        />
      </div>
      <CharacterList characters={characters} />
      <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </>
  )
}
