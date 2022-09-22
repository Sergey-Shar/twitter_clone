const tokenServices = require("../services/token-service");

module.exports = function (reg: any, res: any, next: any) {
  try {
    const authorizationHeader = reg.headers.authorization
    if (!authorizationHeader) {
      return new Error('Нет доступа')
    }
    const acessToken = authorizationHeader.split('')[1]
    if (!acessToken) {
      return new Error('Нет доступа')
    }
    const userData = tokenServices.validateAccessToken(acessToken)
    if (!userData) {
      return new Error('Нет доступа')
    }
    reg.user = userData
    
  } catch (error) {
    next(error)
  }

}

