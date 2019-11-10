'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {
    static get table () {
      return 'tb_filmes'
    }
}

module.exports = Filme
