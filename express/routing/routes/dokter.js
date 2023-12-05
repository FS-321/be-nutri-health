const express = require('express')
const dokterRoutesAdmin = express.Router()
const dokterRoutes = express.Router()
const dokter = require('../../controller/dokter/dokter')

dokterRoutesAdmin.get('/dokter', dokter.getAll)
dokterRoutesAdmin.get('/dokter/:id', dokter.getOne)
dokterRoutesAdmin.put('/dokter/:id', dokter.update)
dokterRoutesAdmin.post('/dokter/:id', dokter.create)
dokterRoutesAdmin.delete('/dokter/:id', dokter.deleteOne)

dokterRoutes.get('/dokter', dokter.getAll)
dokterRoutes.get('/dokter/:id', dokter.getOne)
dokterRoutes.get('/cari/dokter', dokter.search)

module.exports = { dokterRoutes, dokterRoutesAdmin }