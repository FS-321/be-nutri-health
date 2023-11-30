const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')
const Rekam_medis = require('../../../models/dataRekamMedis')(sequelize, DataTypes)

module.export = {
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const rekam_medis = await Rekam_medis.findAll({ offset, limit: pageSize })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const rekam_medis = await Rekam_medis.findOne({ where: {data_rekam_id: id} })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const data = req.body
        try {
            const status = await Rekam_medis.update(data, { where: {data_rekam_id: id} })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating rekam_medis" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Rekam_medis.destroy({ where: {data_rekam_id: id} })

            if (!status) return res.status(404).send({ message: "rekam_medis not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting rekam_medis" })
        }
    }



}

