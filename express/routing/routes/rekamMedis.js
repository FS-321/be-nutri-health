const express = require('express')
const rekamMedisRoutesAdmin = express.Router()
const rekamMedisRoutesUser = express.Router()
const rekamMedis = require('../../controller/rekamMedis/rekamMedis')

rekamMedisRoutesUser.get('/rekam-medis',rekamMedis.getAllUser)
rekamMedisRoutesUser.get('/rekam-medis/:id', rekamMedis.getOneUser)

rekamMedisRoutesAdmin.get('/rekam-medis',rekamMedis.getAll)
rekamMedisRoutesAdmin.get('/rekam-medis/:id', rekamMedis.getOne)
rekamMedisRoutesAdmin.post('/rekam-medis',rekamMedis.create)
rekamMedisRoutesAdmin.delete('/rekam-medis/:id', rekamMedis.deleteOne)
rekamMedisRoutesAdmin.put('/rekam-medis/:id',rekamMedis.update)

module.exports = {rekamMedisRoutesUser, rekamMedisRoutesAdmin}