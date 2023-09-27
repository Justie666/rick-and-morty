import { Episode } from '@/@types/episode'
import { api } from '../../instance'

interface getByIdEpisodeParams {
  params: {
    id: number
  }
}

export const getByIdEpisode = ({ params }: getByIdEpisodeParams) =>
  api.get<Episode>('/episode/', {
    params: { ...params }
  })
