import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllCharacter } from '../..'

export const useRequestCharacterInfinityQuery = (name: string | undefined) => {
  return useInfiniteQuery(
    ['characters'],
    pageParams =>
      getAllCharacter({
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
