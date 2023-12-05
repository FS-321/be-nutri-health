const express = require('express')
const userRoutesAdmin = express.Router()
const userRoutesUser = express.Router()
const user = require('../../controller/user/user')

userRoutesAdmin.get('/user', user.getAll )
userRoutesAdmin.get('/user/:id', user.getOne )
userRoutesAdmin.put('/user/:id', user.update )
userRoutesAdmin.delete('/user/:id', user.deleteOne )
userRoutesAdmin.get('/cari/user', user.search )

userRoutesUser.get('/user/:id', user.getOne )
userRoutesUser.put('/user', user.update )

module.exports = {userRoutesAdmin, userRoutesUser}