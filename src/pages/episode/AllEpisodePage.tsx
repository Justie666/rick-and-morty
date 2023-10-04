import { Episode } from '@/@types/episode'
import { EpisodeList, LoadMoreButton, SearchInput } from '@/components'
import { useRequestEpisodeInfinityQuery } from '@/utils/api'
import { ChangeEvent, FC, useState } from 'react'

export const AllEpisodePage: FC = () => {
  const [searchName, setSearchName] = useState('')

  const { data, fetchNextPage, hasNextPage, refetch } =
    useRequestEpisodeInfinityQuery(searchName)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
    refetch()
  }

  const episodes = data?.pages.reduce(
    (episode: Episode[], { data }) => [...episode, ...data.results],
    []
  )

  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <div>
      <SearchInput
        placeholder='Filter by name...'
        onChange={onChangeInput}
        value={searchName}
      />
      <EpisodeList episodes={episodes} />
      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </div>
  )
}
