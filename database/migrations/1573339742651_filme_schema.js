'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmeSchema extends Schema {
  up () {
    this.create('tb_filmes', (table) => {
      table.increments()
      table.string('fil_nome', 80).notNullable()
      table.timestamps('fil_data')
    })
  }

  down () {
    this.drop('tb_filmes')
  }
}

module.exports = FilmeSchema
