const register = require('../../controller/register/register')
const express = require('express')

const registerRoutes = express.Router()

registerRoutes.post('/register', register)

module.exports = registerRoutes