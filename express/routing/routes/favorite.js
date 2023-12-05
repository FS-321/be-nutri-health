const express = require('express')
const favoriteRouter = express.Router()
const favorite = require('../../controller/favorite/favotite')

favoriteRouter.get('/favorite', favorite.getAll)
favoriteRouter.get('/favorite/:id', favorite.getOne)
favoriteRouter.get('/cari/favorite',favorite.search)

module.exports = favoriteRouter