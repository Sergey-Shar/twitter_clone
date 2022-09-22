
require("dotenv").config()
const express = require("express")
const cors = require('cors')
const http = require("http")
const cookieParser = require("cookie-parser")
const routers = require("./routers")
const WSocket = require("ws")
const Knex = require('./models')

const app = express()
app.use(express.json())
app.use(cors({
  credentials: true,
  origin:process.env.CLIENT_URL
}))
app.use(cookieParser())

app.use('/api',routers)

app.use((err:any, res:any ) => {
  res.status(500).send(err.message)
})

const server = http.createServer(app)

//const wss = new WSocket.Server({ server })

// wss.on("connection", (ws: any) => {
// const users = Knex("users").select('email','username').then((res:any) => res['email'])
//   console.log(users)
// //ws.send(JSON.stringify({users}))



// }



server.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`)
})



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



