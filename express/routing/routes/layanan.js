const express = require('express')
const layananRoutesAdmin = express.Router()
const layananRoutes = express.Router()
const layanan = require('../../controller/layanan/layanan')

layananRoutesAdmin.get('/layanan', layanan.getAll )
layananRoutesAdmin.get('/layanan/:id', layanan.getOne )
layananRoutesAdmin.get('/cari/layanan', layanan.search )
layananRoutesAdmin.put('/layanan/:id', layanan.update )
layananRoutesAdmin.post('/layanan', layanan.create )
layananRoutesAdmin.delete('/layanan/:id', layanan.deleteOne )


layananRoutes.get('/cari/layanan', layanan.search )
layananRoutes.get('/layanan', layanan.getAll )
layananRoutes.get('/layanan/:id', layanan.getOne )

module.exports = {layananRoutes,layananRoutesAdmin}
