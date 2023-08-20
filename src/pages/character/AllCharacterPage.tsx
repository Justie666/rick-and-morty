import { FC } from 'react'
import { useGetAllCharactersQuery } from '../../utils/api'

export const AllCharacterPage: FC = () => {
  const { data } = useGetAllCharactersQuery()

  console.log(data)

  return <div className='container'>CharactersPage</div>
}
