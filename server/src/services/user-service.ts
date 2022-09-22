const knexConnect = require('../models')
const tokenService = require("../services/token-service");

class UserService {

  async registration(data:any) {
    await knexConnect("users").insert(data)
  }

  async findUserByEmail(email: string) {
    return knexConnect("users")
    .select()
    .where({ email })
    .limit(1)
    .then((results: any) => results[0])
  }

  async logout(refreshToken:string) {
  await tokenService.removeToken(refreshToken)
  }

  async refreshToken(token: string) {
    if (!token) {
      return (
        new Error('Нет доступа')
      )
    }
    const userData = tokenService.validateRefreshToken(token)
    console.log(userData)

    const tokenFromDB = tokenService.findToken(token)

    if (!userData || !tokenFromDB) {
      new Error('Нет доступа')
    }
    return userData
  }

  async chatAccess() {
   console.log(1)
  }

  async findUserBySessionId (sessionId: string){
    const session = await knexConnect("sessions")
      .select("user_id")
      .where({ session_id: sessionId })
      .limit(1)
      .then((results: any) => results[0])

    if (!session) {
      return;
    }
    return knexConnect("users")
      .select()
      .where({ id: session.user_id })
      .limit(1)
      .then((results: string[]) => results[0])
  }
}



module.exports = new UserService()

