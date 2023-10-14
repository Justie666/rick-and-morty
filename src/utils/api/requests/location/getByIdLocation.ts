import { Location } from '@/@types/location'
import { api } from '../../instance'

interface getByIdLocationParams {
  id: number
}

export const getByIdLocation = ({ id }: getByIdLocationParams) =>
  api.get<Location>(`/location/${id}`)
