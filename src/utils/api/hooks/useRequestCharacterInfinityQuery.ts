import { useInfiniteQuery } from '@tanstack/react-query'
import { requestCharacters } from '..'

export const useRequestCharacterInfinityQuery = (name: string | undefined) => {
  return useInfiniteQuery(
    ['characters'],
    pageParams =>
      requestCharacters({
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
