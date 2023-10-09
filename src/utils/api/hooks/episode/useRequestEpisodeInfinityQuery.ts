import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllEpisode } from '../..'

export const useRequestEpisodeInfinityQuery = (name: string) => {
  return useInfiniteQuery(
    ['episodes'],
    pageParams =>
      getAllEpisode({
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
