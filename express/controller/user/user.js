const { User } = require('../../../models')
const { literal } = require('sequelize')
const getDecodedToken = require('../../authentication/getDecodedToken')


module.exports = {
    async search(req, res) {
        const keyword = (req.query.keyword).toLowerCase()
        try {
            const user = await User.findAll({
                where: literal(`LOWER(nama_depan) LIKE '%${keyword}%' OR LOWER(nama_belakang)LIKE '%${keyword}%'`)

            })
            return res.status(200).send(user)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching user" })
        }


    },

    async create(req, res) {
        const form = req.body
        try {
            const status = await User.create(form)

            if (!status) return res.status(409).send({ message: "email already registered" })


            return res.status(200).send({ message: "create user successful" })
        } catch (e) {
            return res.stats(500).send({ message: "something happen when creating user" })
        }
    },

    async getAll(req, res) {
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const user = await User.findAll({
                offset, limit: pageSize,
            })

            const { password, ...userWithoutPassword } = user

            return res.status(200).send(userWithoutPassword)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching user" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id
        try {
            const user = await User.findOne({
                where: { user_id: id },
            })

            const { password, ...userWithoutPassword } = user
            return res.status(200).send(userWithoutPassword)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind user" })
        }
    },

    async update(req, res) {
        const dateNow = new Date()
        let data = req.body
        data = {updatedAt: dateNow,...data}
        const updated_user = req.params.id ? req.params.id : getDecodedToken(req, res)['user_id']

        try {
            const status = await User.update(data, { where: { user_id: updated_user } })

            if (!status[0]) return res.status(404).send({ message: "user not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating user" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await User.destroy({ where: { user_id: id } })

            if (!status) return res.status(404).send({ message: "doctor is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}