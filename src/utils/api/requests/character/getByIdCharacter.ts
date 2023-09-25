import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdCharacterParams {
  params: {
    id: number
  }
}

export const getByIdCharacter = ({ params }: getByIdCharacterParams) =>
  api.get<Character>('/character/', {
    params: { ...params }
  })
