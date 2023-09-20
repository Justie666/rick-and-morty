import { Characters } from '@/@types/character'
import { api } from '../../instance'

interface RequestCharacterParams {
  params: {
    page?: number
    name?: string | null
  }
}

export const requestCharacters = ({ params }: RequestCharacterParams) =>
  api.get<Characters>('/character/', {
    params: { ...params }
  })
