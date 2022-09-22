import { send } from "process";

const generateId = require("../common/utils");
const userService = require("../services/user-service");
const bcrypt = require("bcrypt");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos");

class AppController {
  async registrationNewUser(req: any, res: any, next: any) {
    const { email, username, password } = req.body.data;

    const userDto = new UserDto(email, username);
    const tokens = tokenService.generateTokens({ ...userDto });
    const hashPassword = await bcrypt.hash(password, 3);

    const newUserData = {
      email,
      username,
      password: hashPassword,
      token: tokens.refreshToken,
    };
    const user = await userService.findUserByEmail(email);

    if (!user || user.email !== email) {
      userService.registration(newUserData);
      res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
      res.json({
        user: {
          id: generateId(
            5,
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          ),
          username,
          email,
        },
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken,
      });
    } else {
      res.status(400).send(`пользователь c почтой ${email} уже существует`);
    }
  }

  async login(req: any, res: any) {

    const { email, password } = req.body.data;

    const user = await userService.findUserByEmail(email);


    if (!user) {
      res.status(401).send(`пользователя с почтой ${email} не существует`);
    } else {
      const isPassEquls = await bcrypt.compare(password, user.password);
      if (!isPassEquls) {
        res.status(401).send("неверный пароль");
      } else {
        const userDto = new UserDto(email, user.username);
        const tokens = tokenService.generateTokens({ ...userDto });
        tokenService.saveToken(user.id, tokens.refreshToken);

        res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
        res.json({
          user: {
            id: generateId(
              5,
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            ),
            username: user.username,
            email,
          },
          refreshToken: tokens.refreshToken,
          accessToken: tokens.accessToken,
        });
      }
    }
}

  async logout(req: any, res: any, next: any) {
    const { refreshToken } = req.cookies;

    try {
      await userService.logout(refreshToken);
      res.clearCookie('refreshToken')
      res.json({
        refreshToken: null,
        accessToken: null
      })
      }
     catch (error) {
      next(error);
    }
  }
  async refresh(req: any, res: any, next: any) {

    try {
      const { refreshToken } = req.cookies;
      const user = await userService.refreshToken(refreshToken);
      const userDto = new UserDto(user.email, user.username);
      const tokens = tokenService.generateTokens({ ...userDto });
      res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
      res.json({
        user: {
          id: generateId(
            5,
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          ),
          username: user.username,
          email: user.email,
        },
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken,
      });

    } catch (error) {
      next(error)
    }
  }

  async posts(req: any, res: any, next: any) {
    try {
      console.log(req.headers.authorization)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AppController();
