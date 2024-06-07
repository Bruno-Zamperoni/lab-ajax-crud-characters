class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const res = await fetch(`${this.BASE_URL}/characters`)
    const finalRes = res.json()
    return finalRes;
  }

  async getOneRegister(id) {
    const res = await fetch(`${this.BASE_URL}/characters/${id}`)
    const finalRes = res.json()
    return finalRes;
  }

  async createOneRegister(Character) {
    const res = await fetch("http://localhost:8000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Character),
    })
    return res;
  }

  async updateOneRegister(id, updates) {
    const res = await fetch(`${this.BASE_URL}/characters/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
      return res;
  }

  async deleteOneRegister(id) {
    const res = await fetch(`${this.BASE_URL}/characters/${id}`, {
      method: "DELETE",
    })
    return res;
  }
}
