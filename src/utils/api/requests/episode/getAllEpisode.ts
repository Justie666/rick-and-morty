import { Episodes } from '@/@types/episode'
import { api } from '../../instance'

interface RequestLocationParams {
  params: {
    page?: number
    name?: string | null
  }
}

export const getAllEpisode = ({ params }: RequestLocationParams) =>
  api.get<Episodes>('/episode/', {
    params: { ...params }
  })
