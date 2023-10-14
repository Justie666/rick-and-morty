import { Episode } from '@/@types/episode'
import { FC } from 'react'
import { EpisodeCard, SkeletonBlock } from '..'

interface EpisodeListProps {
  episodes?: Episode[]
  isFetching: boolean
}

export const EpisodeList: FC<EpisodeListProps> = ({ episodes, isFetching }) => {
  return (
    <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {episodes?.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
      {isFetching && <SkeletonBlock />}
    </div>
  )
}
