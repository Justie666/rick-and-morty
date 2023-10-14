import { useQuery } from '@tanstack/react-query'
import { getByIdCharacter } from '../..'

export const useRequestCharacterQuery = (id: number) => {
  return useQuery(['character', id], () => getByIdCharacter({ id }))
}
