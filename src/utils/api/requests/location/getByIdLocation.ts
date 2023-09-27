import { Location } from '@/@types/location'
import { api } from '../../instance'

interface getByIdLocationParams {
  params: {
    id: number
  }
}

export const getByIdLocation = ({ params }: getByIdLocationParams) =>
  api.get<Location>('/location/', {
    params: { ...params }
  })
