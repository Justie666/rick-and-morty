import { useInfiniteQuery } from '@tanstack/react-query'
import { requestEpisode } from '../requests/episode'

export const useRequestEpisodeInfinityQuery = (name: string | undefined) => {
  return useInfiniteQuery(
    ['episodes'],
    pageParams =>
      requestEpisode({
        params: { page: pageParams.pageParam, name: name }
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.data.info.next) {
          return allPages.length + 1
        }
      }
    }
  )
}
