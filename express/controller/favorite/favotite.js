const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')

const Favorite = require('../../../models/favorite')

module.exports = {
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const favorite = await Favorite.findAll({offset,limit:pageSize})

            return res.status(200).send(favorite)

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching favorite" })
        }
    },

    async getOne(req, res) {
        const id = req.params
        try {
            const favorite = await Favorite.findOne({ where: { favorite_id : id } })

            return res.status(200).send(favorite)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind favorite" })
        }
    },

    async update(req, res) {
        const data = req.body
        const id = req.params.id
        try {
            const status = await Favorite.update(data, { where: { favorite_id : id } })

            if (!status) return res.status(404).send({ message: "favorite not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating favorite" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Favorite.destroy({ where: { favorite_id : id } })

            if (!status) return res.status(404).send({ message: "favorite is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}