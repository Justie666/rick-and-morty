import { Locations } from '@/@types/location'
import { api } from '../../instance'

interface RequestLocationParams {
  params: {
    page?: number
    name?: string | null
  }
}

export const requestLocation = ({ params }: RequestLocationParams) =>
  api.get<Locations>('/location/', {
    params: { ...params }
  })
