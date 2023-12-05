const express = require('express')
const { authenticateUser } = require('../../authentication/authentication')
const loginRoutes = express.Router()

loginRoutes.post('/login', authenticateUser )

module.exports = loginRoutes