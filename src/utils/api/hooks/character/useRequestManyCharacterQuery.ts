import { useQuery } from '@tanstack/react-query'
import { getByIdManyCharacter } from '../..'

export const useRequestManyCharacterQuery = (ids: string) => {
  return useQuery(['character', ids], () => getByIdManyCharacter({ ids }))
}
