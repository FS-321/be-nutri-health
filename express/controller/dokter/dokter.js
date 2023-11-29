const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')

const Dokter = require('../../../models/dokter')

module.exports = {
    getAll(req, res) {
        try {
            const dokter = Dokter.findAll()
            if (!dokter) return res.status(404).send({ message: "doctor not found" })

            return dokter

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching doctor" })
        }
    },

    getOne(req, res) {
        const id = req.params
        try {
            const dokter = Dokter.findOne({ where: { id } })
            if (!dokter) return res.status(200).send({ message: "docter not found" })

            return dokter
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind doctor" })
        }
    }

}