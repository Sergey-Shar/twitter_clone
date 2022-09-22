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
const knexConnect = require('../models');
class UserService {
    registration(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield knexConnect("users").insert(data);
        });
    }
    findUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return knexConnect("users")
                .select()
                .where({ username })
                .limit(1)
                .then((results) => results[0]);
        });
    }
    findUserBySessionId(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield knexConnect("sessions")
                .select("user_id")
                .where({ session_id: sessionId })
                .limit(1)
                .then((results) => results[0]);
            if (!session) {
                return;
            }
            return knexConnect("users")
                .select()
                .where({ id: session.user_id })
                .limit(1)
                .then((results) => results[0]);
        });
    }
}
module.exports = new UserService();
