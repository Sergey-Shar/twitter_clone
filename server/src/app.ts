"use strict";
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

server.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`)
})

