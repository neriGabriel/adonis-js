'use strict'
const Filme = use("App/Models/Filme")

class FilmeController {

  async index() {
    return await Filme.all();
  }

  async insert({request}) {
    const data = request.only(["fil_nome", "fil_data"])

    const filme = await Filme.create(data);

    return filme
  }
}

module.exports = FilmeController
