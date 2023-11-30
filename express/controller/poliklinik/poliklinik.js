const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')
const Poliklinik = require('../../../models/poliklinik')(sequelize, DataTypes)

module.export = {
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const poliklinik = await Poliklinik.findAll({ offset, limit: pageSize })

            return res.status(200).send(poliklinik)
        } catch (e) {
            res.status(500).send({ message: "something happen when fetching poliklinik" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const poliklinik = await Poliklinik.findOne({ where: {poli_id: id} })

            return res.status(200).send(poliklinik)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching poliklinik" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const data = req.body
        try {
            const status = await Poliklinik.update(data, { where: {poli_id: id} })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating poliklinik" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Poliklinik.destroy({ where: {poli_id: id} })

            if (!status) return res.status(404).send({ message: "poliklinik not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting poliklinik" })
        }
    }



}

