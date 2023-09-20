import { Episode } from '@/@types/episode'
import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FC } from 'react'
import { EpisodeCard, LoadMoreButton, NotFoundBlock } from '..'

interface EpisodeListProps {
  episodes?: Episode[]
  fetchNextPage?: () => Promise<
    InfiniteQueryObserverResult<AxiosResponse<$FIXME, $FIXME>, unknown>
  >
  hasNextPage?: boolean | undefined
}

export const EpisodeList: FC<EpisodeListProps> = ({
  episodes,
  fetchNextPage,
  hasNextPage
}) => {
  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {episodes &&
          episodes?.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
      </div>
      {!episodes && <NotFoundBlock />}
      {hasNextPage && (
        <div className='mt-4 text-center'>
          <LoadMoreButton onClick={onClickLoadMore}>Load more</LoadMoreButton>
        </div>
      )}
    </>
  )
}
