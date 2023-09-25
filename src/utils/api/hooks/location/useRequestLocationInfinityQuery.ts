import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllLocation } from '../..'

export const useRequestLocationInfinityQuery = (name: string | undefined) => {
  return useInfiniteQuery(
    ['locations'],
    pageParams =>
      getAllLocation({
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
