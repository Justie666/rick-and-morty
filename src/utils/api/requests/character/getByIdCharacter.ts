import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdCharacterParams {
  id: number | string
}

export const getByIdCharacter = ({ id }: getByIdCharacterParams) =>
  api.get<Character | Character[]>(`/character/${id}`)
