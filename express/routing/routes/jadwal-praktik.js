const express = require('express')
const jadwalPraktikRoutesAdmin = express.Router()
const jadwalPraktikRoutes = express.Router()
const jadwalPraktik = require('../../controller/jadwal_praktik/jadwal_praktik')

jadwalPraktikRoutesAdmin.get('/jadwal-praktik', jadwalPraktik.getAll )
jadwalPraktikRoutesAdmin.get('/jadwal-praktik/:id', jadwalPraktik.getOne )
jadwalPraktikRoutesAdmin.post('/jadwal-praktik/:id', jadwalPraktik.update )
jadwalPraktikRoutesAdmin.delete('/jadwal-praktik/:id', jadwalPraktik.deleteOne )

jadwalPraktikRoutes.get('/jadwal-praktik', jadwalPraktik.getAll )
jadwalPraktikRoutes.get('/jadwal-praktik/:id', jadwalPraktik.getOne )

module.exports  = { jadwalPraktikRoutesAdmin, jadwalPraktikRoutes}