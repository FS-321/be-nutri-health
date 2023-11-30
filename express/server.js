const express = require('express')
// const authenticatorRoutes = require('./routing/authenticator')
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authenticator = require('./routing/authenticator')

let rootRouter = null

app.use(cookieParser(process.env.TOKENKEY))
app.use(cors())

app.use('/',(req,res,next)=>{
    rootRouter = authenticator(app,req,res)
    next()
})



app.listen(process.env.EXPRESS_PORT,(req,res)=>{
    console.log("server started")
})
