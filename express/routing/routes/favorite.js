const express = require('express')
const favoriteRouter = express.Router()
const favorite = require('../../controller/favorite/favotite')

favoriteRouter.get('/favorite', favorite.getAll)
favoriteRouter.get('/favorite/:id', favorite.getOne)
favoriteRouter.delete('/favorit/:id', favorite.deleteOne)


module.exports = favoriteRouter