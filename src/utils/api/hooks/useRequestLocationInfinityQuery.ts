import { useInfiniteQuery } from '@tanstack/react-query'
import { requestLocation } from '../requests/location'

export const useRequestLocationInfinityQuery = (name: string | undefined) => {
  return useInfiniteQuery(
    ['locations'],
    pageParams =>
      requestLocation({
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
