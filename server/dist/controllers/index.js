"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userService = require("../services/user-service");
const { pick } = require("lodash");
const bcrypt = require("bcrypt");
class AppController {
    registrationNewUser(reg, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = reg.body;
            const hashPassword = yield bcrypt.hash(password, 3);
            const newUserData = { username, password: hashPassword };
            console.log(newUserData);
            const user = yield userService.findUserByUsername(username);
            if (!user || user.password !== hashPassword) {
                userService.registration(newUserData);
            }
            else {
                res.send(`пользователь ${username} уже существует`);
            }
        });
    }
    login(reg, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = reg.body;
            res.json({ "user": username, "pass": password });
            // const user = await findUserByUsername(username)
            // console.log(user)
            //   if (!user || user.password !== password) {
            //     res.status(401).send('необходимо автозизоватся')
            //   } else {
            //     const sessionId = await createSession(user.id)
            //     res.cookie('sessionId', sessionId, { httpOnly: true })
            //     return res.json(user)
            //   }
        });
    }
    logout(reg, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    refresh(reg, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    users(reg, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
module.exports = new AppController();
