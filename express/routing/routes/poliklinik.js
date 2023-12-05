const express = require('express')
const poliklinikRoutes= express.Router()
const poliklinikRoutesAdmin = express.Router()
const poliklinik = require('../../controller/poliklinik/poliklinik')

poliklinikRoutesAdmin.get('/poliklinik',poliklinik.getAll)
poliklinikRoutesAdmin.get('/poliklinik/:id',poliklinik.getOne)
poliklinikRoutesAdmin.post('/poliklinik', poliklinik.create)
poliklinikRoutesAdmin.delete('/poliklinik/:id', poliklinik.deleteOne)
poliklinikRoutesAdmin.put('/poliklinik/:id', poliklinik.update)
poliklinikRoutesAdmin.get('/cari/poliklinik', poliklinik.search)

poliklinikRoutes.get('/cari/poliklinik', poliklinik.search)
poliklinikRoutes.get('/poliklinik',poliklinik.getAll)
poliklinikRoutes.get('/poliklinik/:id',poliklinik.getOne)
module.exports = {poliklinikRoutes, poliklinikRoutesAdmin}