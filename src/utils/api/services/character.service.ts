import { api } from '../instance'

class CharacterService {
  async getAll() {
    return api.get<Characters>('/character')
  }
}

export default new CharacterService()
