import { api } from '../../instance'

interface RequestCharactersParams {
  params: {
    page?: number
    name?: string | null
  }
}

export const requestCharacters = ({ params }: RequestCharactersParams) =>
  api.get(`/character/`, {
    params: { ...params }
  })
