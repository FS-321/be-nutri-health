const express = require('express')
const createNewToken = require('../../controller/login/createNewToken')
const { authenticateUser } = require('../../authentication/authentication')
const loginRoutes = express.Router()

loginRoutes.get('/login', authenticateUser )

module.exports = loginRoutes