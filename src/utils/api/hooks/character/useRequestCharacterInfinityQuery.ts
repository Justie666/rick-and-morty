import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllCharacter } from '../..'

export const useRequestCharacterInfinityQuery = (
  name: string,
  status: string,
  gender: string
) => {
  return useInfiniteQuery(
    ['characters'],
    pageParams =>
      getAllCharacter({
        params: {
          page: pageParams.pageParam,
          name: name,
          status: status,
          gender: gender
        }
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
