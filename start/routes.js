'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//ROUTE TO REGISTER AN USER
Route.post('/register', "AuthController.register")

//ROUTE TO AUTHENTICATE AN USER
Route.post('/authenticate', "AuthController.authenticate")


Route.get('/filme', "FilmeController.index")

Route.post('/filme', "FilmeController.insert")
//E.G OF ROUTE WITH MIDDLEWARE AUTH JWT
//LOOK ON ./config/auth.js TO SEE THE AUTH OPTION
//Route.get('/app', "AppController.index").middleware(["auth"])
