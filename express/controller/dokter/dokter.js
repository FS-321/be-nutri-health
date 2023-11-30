const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')

const Dokter = require('../../../models/dokter')

module.exports = {
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const dokter = await Dokter.findAll({offset,limit:pageSize})

            return res.status(200).send(dokter)

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching doctor" })
        }
    },

    async getOne(req, res) {
        const id = req.params
        try {
            const dokter = await Dokter.findOne({ where: { dokter_id : id } })

            return res.status(200).send(dokter)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind doctor" })
        }
    },

    async update(req, res) {
        const data = req.body
        const id = req.params.id
        try {
            const status = await Dokter.update(data, { where: { dokter_id : id } })

            if (!status) return res.status(404).send({ message: "doctor not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating doctor" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Dokter.destroy({ where: { dokter_id : id } })

            if (!status) return res.status(404).send({ message: "doctor is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}