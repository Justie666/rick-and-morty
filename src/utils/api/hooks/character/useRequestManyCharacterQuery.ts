import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getByIdManyCharacter } from '../..'

export const useRequestManyCharacterQuery = (ids: string) => {
  const queryInfo = useQuery(
    ['character', ids],
    () => getByIdManyCharacter({ ids }),
    {
      enabled: !!ids
    }
  )

  return {
    ...queryInfo,
    data: useMemo(() => {
      if (!Array.isArray(queryInfo?.data?.data) && queryInfo?.data?.data) {
        return Array(queryInfo.data.data)
      } else {
        return queryInfo?.data?.data
      }
    }, [queryInfo])
  }
}
