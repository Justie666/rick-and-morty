import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdCharacterParams {
  ids: string
}

export const getByIdManyCharacter = ({ ids }: getByIdCharacterParams) =>
  api.get<Character[]>(`/character/${ids}`)
