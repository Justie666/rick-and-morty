import { api } from '../../instance'

interface RequestCharactersParams {
  pageParam?: number
}

export const requestCharacters = ({ pageParam }: RequestCharactersParams) =>
  api.get(`/character/?page=${pageParam}`)
