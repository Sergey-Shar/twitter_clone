"use strict";
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const http = require("http");
const cookieParser = require("cookie-parser");
//const { pick } = require("lodash")
const routers = require("./routers");
const generateId = require('./common/utils');
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', routers);
app.use((err, reg, res, next) => {
    res.status(500).send(err.message);
});
const server = http.createServer(app);
// const knex = require("knex")({
//   client: 'pg',
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 5432,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   }
// })
// const findUserByUsername = async (username: string) =>
//   knex("users")
//     .select()
//     .where({ username })
//     .limit(1)
//     .then((results: any) => results[0])
// const findUserBySessionId = async (sessionId: string) => {
//   const session = await knex("sessions")
//     .select("user_id")
//     .where({ session_id: sessionId })
//     .limit(1)
//     .then((results: any) => results[0])
//   if (!session) {
//     return;
//   }
//   return knex("users")
//     .select()
//     .where({ id: session.user_id })
//     .limit(1)
//     .then((results: string[]) => results[0])
// }
// const createSession = async (userId:any) => {
//   const sessionId = generateId(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//   await knex("sessions").insert({
//     user_id: userId,
//     session_id: sessionId
//   })
//   return sessionId
// }
// const deleteSession = async (sessionId:string) => {
// await knex("sessions").where({session_id:sessionId}).delete()
// }
// const auth = () => async (reg: any, res: any, next: any) => {
//   if (!reg.cookies["ssesionId"]) {
//     return next()
//   }
//   const user = await findUserBySessionId(reg.cookies["sessionId"])
//   reg.user = user
//   reg.sessionId = reg.cookies["sessionid"]
//   next()
// }
// app.get("/", auth(), (req: any, res: any) =>
//   res.render("index", {
//     user: req.user,
//     authError:req.query.authError === "true"
//   })
// )
// app.post("/login",
//   async (reg: any, res: any) => {
//   const { username, password } = reg.body
//     const user = await findUserByUsername(username)
//     console.log(user)
//       if (!user || user.password !== password) {
//         res.status(401).send('необходимо автозизоватся')
//       } else {
//         const sessionId = await createSession(user.id)
//         res.cookie('sessionId', sessionId, { httpOnly: true })
//         return res.json(user)
//       }
//   }
// )
// app.get("/", auth(), async (reg: any, res: any) => {
//   if (!reg.user) {
//     return
//   }
//   await deleteSession(reg.sessionId)
//   res.clearCookie("sessionId").send("вы покинули чат")
// })
server.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`);
});
