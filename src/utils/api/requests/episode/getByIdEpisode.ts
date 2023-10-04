import { Episode } from '@/@types/episode'
import { api } from '../../instance'

interface getByIdEpisodeParams {
  id: number
}

export const getByIdEpisode = ({ id }: getByIdEpisodeParams) =>
  api.get<Episode>(`/episode/${id}`)
