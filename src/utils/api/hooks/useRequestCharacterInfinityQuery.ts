import { useInfiniteQuery } from '@tanstack/react-query'
import { requestCharacters } from '..'

export const useRequestCharacterInfinityQuery = () => {
  return useInfiniteQuery(
    ['characters'],
    pageParams => requestCharacters(pageParams),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.data.info.next) {
          return allPages.length + 1
        }
      }
    }
  )
}
