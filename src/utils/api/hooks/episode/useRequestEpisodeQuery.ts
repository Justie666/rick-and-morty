import { useQuery } from '@tanstack/react-query'
import { getByIdEpisode } from '../..'

export const useRequestEpisodeQuery = (id: number) => {
  return useQuery(['episode', id], () => getByIdEpisode({ params: { id } }))
}
