const { Favorite } = require('../../../models')
const getDecodedToken = require('../../authentication/getDecodedToken')

module.exports = {
    async getAll(req, res) {
        const user_id = getDecodedToken(req,res)['user_id']
        const page = req.query.pages || 1
        const pageSize = req.query.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const favorite = await Favorite.findAll({offset,limit:pageSize,where:{user_id}})

            return res.status(200).send(favorite)

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching favorite" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id
        try {
            const favorite = await Favorite.findOne({ where: { favorite_id : id } })

            return res.status(200).send(favorite)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind favorite" })
        }
    },

    async update(req, res) {
        const dateNow = new Date()
        let data = req.body
        data = {updatedAt: dateNow,...data}
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