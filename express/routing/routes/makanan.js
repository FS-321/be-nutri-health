const express = require('express')
const makananRoutesAdmin = express.Router()
const makananRoutes = express.Router()
const makanan = require('../../controller/makanan/makanan')

makananRoutesAdmin.get('/makanan', makanan.getAll )
makananRoutesAdmin.get('/makanan/:id', makanan.getOne )
makananRoutesAdmin.post('/makanan', makanan.create )
makananRoutesAdmin.post('/makanan/:id', makanan.update )
makananRoutesAdmin.delete('/makanan', makanan.deleteOne )

makananRoutes.get('/makanan', makanan.getAll)
makananRoutes.get('/makanan/:id', makanan.getOne)

module.exports = {makananRoutes, makananRoutesAdmin}