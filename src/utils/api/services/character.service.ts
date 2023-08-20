import { api } from '../instance'

class CharacterService {
  async getAll() {
    return api.get('/character')
  }
}

export default new CharacterService()
