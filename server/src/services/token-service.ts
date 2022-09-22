const jwt = require("jsonwebtoken")
const connectKnex = require('../models')

class TokenService {

  generateTokens (payload: any) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn:'15s'
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn:'30d'
    })
    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(id: any,token:string) {
    await connectKnex("users").select("id").where({ id }).update({token:token})
  }

  async removeToken(token: string) {
    await connectKnex("users").where({ token:token }).update({token:null})
  }

  async findToken(token: string) {
      return await connectKnex("users")
      .select()
      .where({ token: token })
      .then((results: any) => results[0])
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
      return userData
    } catch (error) {
      return  null
    }
  }


  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
      return userData
    } catch (error) {
      return null
    }
  }
}
module.exports = new TokenService()
