import { useQuery } from '@tanstack/react-query'
import characterService from '@utils/api/services/character.service'

export const useGetAllCharactersQuery = () => {
  return useQuery(['characters'], () => characterService.getAll(), {
    select: ({ data }) => data
  })
}
