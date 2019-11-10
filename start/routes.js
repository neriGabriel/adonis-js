'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//ROUTE TO REGISTER AN USER
Route.post('/register', "AuthController.register")

//ROUTE TO AUTHENTICATE AN USER
Route.post('/authenticate', "AuthController.authenticate")


/*  ROTAS SEM AGRUPAMENTO
Route.get('/filme', "FilmeController.index").middleware(["auth"])
Route.post('/filme', "FilmeController.insert").middleware(["auth"])
*/

/*
 ROTAS COM AGRUPAMENTO
*/
Route.group('api', () => {
  Route.get('/filme', "FilmeController.index")
  Route.post('/filme', "FilmeController.insert")
  Route.get('/filme/:id', "FilmeController.getById")
  Route.delete('/filme/:id', "FilmeController.destroy")

}).prefix('/api/v1')
