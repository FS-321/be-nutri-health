const express = require('express')
const makananRoutesAdmin = express.Router()
const makananRoutes = express.Router()
const makananRoutesUser = express.Router()
const makanan = require('../../controller/makanan/makanan')


makananRoutes.get('/cari/makanan', makanan.search)
makananRoutes.get('/makanan', makanan.getAll)
makananRoutes.get('/makanan/:id', makanan.getOne)

makananRoutesUser.use(makananRoutes)
makananRoutesUser.post('/makanan/:id/favorite', makanan.addTofavorit)
makananRoutesUser.delete('/makanan/:id/favorite', makanan.removeFavorit)

makananRoutesAdmin.use(makananRoutes)
makananRoutesAdmin.post('/makanan', makanan.create)
makananRoutesAdmin.put('/makanan/:id', makanan.update)
makananRoutesAdmin.delete('/makanan/:id', makanan.deleteOne)

module.exports = { makananRoutes, makananRoutesAdmin, makananRoutesUser }