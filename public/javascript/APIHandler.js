class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    })
  }

  async getFullList() {
    const result = await this.api.get(`/characters`)
    console.log(`result`)
    return result
  }

  async getOneRegister(id) {
    const result = await this.api.get(`/characters/` + id)
    return result
  }

  async createOneRegister(character) {
    const result = await this.api.post(`/characters/`, character)
    return result
  }

  async updateOneRegister(character) {
    const result = await this.api.put(`/characters/`, character.id, character)
    return result
  }

  async deleteOneRegister(id) {
    const result = await this.api.delete(`/characters/` + id)
    return result
  }
}
