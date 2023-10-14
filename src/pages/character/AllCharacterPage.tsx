import { Character } from '@/@types/character'
import { Option } from '@/@types/select'
import {
  Banner,
  CharacterList,
  LoadMoreButton,
  SearchInput,
  Select
} from '@/components'
import { useDebounce } from '@/utils'
import { useRequestCharacterInfinityQuery } from '@/utils/api'
import { FC, useEffect, useState } from 'react'

const optionsForStatus: Option[] = [
  { title: 'Status', value: '' },
  { title: 'Alive', value: 'alive' },
  { title: 'Dead ', value: 'dead ' },
  { title: 'Unknown ', value: 'unknown ' }
]

const optionsForGender: Option[] = [
  { title: 'Gender', value: '' },
  { title: 'Female', value: 'female' },
  { title: 'Male', value: 'male' },
  { title: 'Genderless', value: 'genderless' },
  { title: 'Unknown', value: 'unknown' }
]

export const AllCharacterPage: FC = () => {
  const [searchName, setSearchName] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [genderFilter, setGenderFilter] = useState('')
  const debounceSearchValue = useDebounce(searchName, 500)

  const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
    useRequestCharacterInfinityQuery(
      debounceSearchValue,
      statusFilter,
      genderFilter
    )

  useEffect(() => {
    refetch()
  }, [debounceSearchValue, statusFilter, genderFilter, refetch])

  const characters = data?.pages.reduce(
    (character: Character[], { data }) => [...character, ...data.results],
    []
  )

  return (
    <>
      <Banner />
      <div className='mx-auto grid max-w-[1000px] grid-cols-1 gap-2 sm:grid-cols-2 '>
        <SearchInput
          placeholder='Filter by name...'
          onChange={e => setSearchName(e.target.value)}
          value={searchName}
        />
        <div className='flex gap-2'>
          <Select
            options={optionsForStatus}
            onChange={e => setStatusFilter(e.target.value)}
          />
          <Select
            options={optionsForGender}
            onChange={e => setGenderFilter(e.target.value)}
          />
        </div>
      </div>
      <CharacterList characters={characters} isFetching={isFetching} />
      <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </>
  )
}
