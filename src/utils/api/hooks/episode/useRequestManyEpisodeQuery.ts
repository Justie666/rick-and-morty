import { Episode } from '@/@types/episode'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getByIdManyEpisode } from '../..'

export const useRequestManyEpisodeQuery = (ids: string) => {
  const queryInfo = useQuery(
    ['episode', ids],
    () => getByIdManyEpisode({ ids }),
    {
      enabled: !!ids
    }
  )

  return {
    ...queryInfo,
    data: useMemo(() => {
      if (!Array.isArray(queryInfo?.data?.data) && queryInfo?.data?.data) {
        return Array(queryInfo.data.data) as Episode[]
      } else {
        return queryInfo?.data?.data as Episode[]
      }
    }, [queryInfo])
  }
}
