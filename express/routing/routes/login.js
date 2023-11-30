const express = require('express')
const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')
const login = require('../../controller/login/login')
const createNewToken = require('../../controller/login/createNewToken')
const { authenticateUser } = require('../../authentication/authentication')
const user = require('../../../models/user')(sequelize, DataTypes)
const loginRoutes = express.Router()

loginRoutes.post('/login', createNewToken, authenticateUser )

module.exports = loginRoutes