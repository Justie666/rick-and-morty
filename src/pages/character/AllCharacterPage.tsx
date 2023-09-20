import { CharacterList, SearchInput } from '@/components'
import { useRequestCharacterInfinityQuery } from '@/utils/api'
import { ChangeEvent, FC, useState } from 'react'

export const AllCharacterPage: FC = () => {
  const [searchName, setSearchName] = useState('')

  console.log(searchName)

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestCharacterInfinityQuery(searchName)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
    console.log(123)

    refetch()
  }

  const characters = data?.pages.reduce(
    (character: Character[], { data }) => [...character, ...data.results],
    []
  )

  return (
    <div>
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
    </div>
  )
}
