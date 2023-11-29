const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')
const express = require('express')
const dokterRoutes = express.Router()
const dokter = require('../../controller/dokter/dokter')

dokterRoutes.get('/dokter', dokter.getAll)
dokterRoutes.get('/dokter/:id', dokter.getOne)
dokterRoutes.post('/dokter/:id', dokter.update)
dokterRoutes.delete('/dokter/:id', dokter.deleteOne)

module.exports = dokterRoutes