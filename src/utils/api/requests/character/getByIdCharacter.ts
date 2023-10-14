import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdCharacterParams {
  id: number
}

export const getByIdCharacter = ({ id }: getByIdCharacterParams) =>
  api.get<Character>(`/character/${id}`)
