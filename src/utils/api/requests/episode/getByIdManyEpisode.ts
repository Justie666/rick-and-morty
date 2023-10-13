import { Episode } from '@/@types/episode'
import { api } from '../../instance'

interface getByIdCharacterParams {
  ids: string
}

export const getByIdManyEpisode = ({ ids }: getByIdCharacterParams) =>
  api.get<Episode[] | Episode>(`/episode/${ids}`)
