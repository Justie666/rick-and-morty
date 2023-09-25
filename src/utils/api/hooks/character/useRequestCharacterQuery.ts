import { useQuery } from '@tanstack/react-query'
import { getByIdCharacter } from '../..'

export const useRequestCharacterQuery = (id: number) => {
  return useQuery(['characters', id], () =>
    getByIdCharacter({ params: { id } })
  )
}
