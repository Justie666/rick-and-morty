import { Episode } from '@/@types/episode'
import { Banner, EpisodeList, LoadMoreButton, SearchInput } from '@/components'
import { useDebounce } from '@/utils'
import { useRequestEpisodeInfinityQuery } from '@/utils/api'
import { FC, useEffect, useState } from 'react'

export const AllEpisodePage: FC = () => {
  const [searchName, setSearchName] = useState('')
  const debounceSearchValue = useDebounce(searchName, 500)

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestEpisodeInfinityQuery(searchName)

  useEffect(() => {
    refetch()
  }, [debounceSearchValue, refetch])

  const episodes = data?.pages.reduce(
    (episode: Episode[], { data }) => [...episode, ...data.results],
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
      <EpisodeList episodes={episodes} />
      <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </>
  )
}
