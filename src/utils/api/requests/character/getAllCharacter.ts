import { Characters } from '@/@types/character'
import { api } from '../../instance'

interface getAllCharacterParams {
  params: {
    page: number
    name: string
    status: string
    gender: string
  }
}

export const getAllCharacter = ({ params }: getAllCharacterParams) =>
  api.get<Characters>('/character/', {
    params: { ...params }
  })
