'use strict'
const Filme = use("App/Models/Filme")

class FilmeController {

  async index() {
    return await Filme.all();
  }

  async insert({request}) {
    const data = request.only(["fil_nome"])

    const filme = await Filme.create(data);

    return filme
  }

  async destroy({ params }) {
    const data = params.id

    const filme = await Filme.find(data)

    return await filme.delete()
  }

  async getById({request}) {
    const data = request.only(['id'])

    return await Filme.find(data)
  }
}

module.exports = FilmeController
