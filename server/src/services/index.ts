










// const { Client } = require("pg")
// const WSocket = require("ws")
// const expressRout = require("express")
// // const { pick } = require("lodash")
// // const bodyParser =require("body-parser")

// const router = expressRout.Router()

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
//     .then((results: string[]) => results[0])


// const findUserBySessionId = async (sessionId: string) => {
//   const session = await knex("sessions")
//     .select("user_id")
//     .where({ session_id: sessionId })
//     .limit(1)
//     .then((results: string) => results[0])

//   if (!session) {
//     return
//   }
//   return knex("users")
//     .select()
//     .where({ id: session.user_id })
//     .limit(1)
//     .then((results: string[]) => results[0])
// }

// const createSession = async (userId:any) => {
//   const sessionId = '1uiyt3rrt'

//   console.log(sessionId)
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
//   if (!res.cookies["ssesionId"]) {
//     return next()
//   }
//   const user = await findUserBySessionId(reg.cookies["sessionId"])
//   reg.user = user
//   reg.sessionId = reg.cookies["sessionid"]
//   next()
// }

// router.get("/", auth(), (req: any, res: any) =>
//   res.render("index", {
//     user: req.user,
//     authError:req.query.authError === "true"
//   })
// )

// router.post("/",
//   bodyParser.urlencoded({extended:false}),
//   async (reg: any, res: any) => {

//   const { username, password } = reg.body

//   const user = await findUserByUsername(username)
//     if (!user || user.password !== password) {
//       res.status(401).send('необходимо автозизоватся')
//     } else {
//       const sessionId = await createSession(user.id)
//       res.cookie('sessionId', sessionId, {httpOnly:true}).status(200)
//     }


// })

// router.get("/", auth(), async (reg: any, res: any) => {
//   if (!reg.user) {
//     return
//   }
//   await deleteSession(reg.sessionId)
//   res.clearCookie("sessionId").send("вы покинули чат")
// })

// router.get("/", async (reg: any, res: any) => {
//   try {
//     const users = await knex.select().table("users").where(reg.query)
//     res.json(users)
//   } catch (err) {
//     res.status(400).send("челик таких тут нет")
//   }
// })

// router.get("/:id", async (reg: any, res: any) => {
//   const id = reg.params.id
//   try {
//     const user = await knex
//       .select()
//       .table("users")
//       .where({ id })
//       .then((data: any) => data[0])
//     if (user) {
//       res.json(user)
//     } else {
//       res.status(404).send('такой пользователь не найден')
//     }
//   } catch (err) {
//     res.status(400).send('облом )))')
//   }
// })

// router.post("/", async (reg: any, res: any) => {
//   try {
//     const data = pick(reg.body, 'name', 'age', 'country','sity')
//     const [id] = await knex("users").insert(data).returning('id')
//     res.header("Location", `${reg.protocol}://${reg.hostname}/api/users/${id}`)
//     .sendStatus(201)
//   } catch (err) {
//     res.status(400).send("что то пошло не так")
//   }
// })

// router.patch("/:id", async (reg: any, res: any) => {
//   const id = reg.params.id
//   try {
//     const data = pick(reg.body, 'name', 'age', 'country','sity')
//     const updateCount = await knex("users").where({ id }).update(data)
//     if (updateCount === 0) {
//       res.status(404).send("такого пользователя нет")
//     } else {
//       res.sendStatus(204)
//     }
//   } catch (err) {
//     res.status(400).send("что то пошло не так")
//   }
// })

// router.delete("/:id", async (reg: any, res: any) => {
//   const id = reg.params.id
//   try {
//     const deleteCount = await knex("users").where({ id }).delete()
//     if (deleteCount === 0) {
//       res.status(404).send("такого пользователя нет")
//     } else {
//       res.sendStatus(204)
//     }
//   } catch (err) {
//     res.status(400).send("что то пошло не так")
//   }
// })


//module.exports = router











// const wss = new WSocket.Server({ server })


// wss.on("connection", (ws:any) => {
//   ws.on("message", (message:any) => {
//     wss.clients.forEach((ws:any) => {
//       ws.send(JSON.stringify({ message }))
//    })
// })
// })



