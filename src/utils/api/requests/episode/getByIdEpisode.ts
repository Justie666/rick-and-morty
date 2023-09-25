import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdEpisodeParams {
  params: {
    id: number
  }
}

export const getByIdEpisode = ({ params }: getByIdEpisodeParams) =>
  api.get<Character>('/episode/', {
    params: { ...params }
  })
