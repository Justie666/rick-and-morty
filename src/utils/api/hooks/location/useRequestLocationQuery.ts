import { useQuery } from '@tanstack/react-query'
import { getByIdLocation } from '../..'

export const useRequestLocationQuery = (id: number) => {
  return useQuery(['episode', id], () => getByIdLocation({ params: { id } }))
}
