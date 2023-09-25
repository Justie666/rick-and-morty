import { Character } from '@/@types/character'
import { api } from '../../instance'

interface getByIdLocationParams {
  params: {
    id: number
  }
}

export const getByIdLocation = ({ params }: getByIdLocationParams) =>
  api.get<Character>('/episode/', {
    params: { ...params }
  })
