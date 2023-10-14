import { Locations } from '@/@types/location'
import { api } from '../../instance'

interface getAllLocationParams {
  params: {
    page?: number
    name?: string | null
  }
}

export const getAllLocation = ({ params }: getAllLocationParams) =>
  api.get<Locations>('/location/', {
    params: { ...params }
  })
