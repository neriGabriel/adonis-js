'use strict'

const User = use("App/Models/User")
class AuthController {

  //REGISTER AN USER
  async register({ request }) {
      // DATA FROM REQUEST
      const data = request.only(["username", "email", "password"])

      // CREATE AN USER
      const user = await User.create(data)

      return user
  }

//AUTHENTICATE AN USER
  async authenticate({ request, auth}) {
    //JAVASCRIPT OBJECT DESTRUCTION
    const { email, password } = request.all()

    //ATHENTICATE BY EMAIL AND PASSWORD
    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
