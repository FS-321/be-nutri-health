const {DataRekamMedis} = require('../../../models/')

module.export = {
    async create(req, res) {
        const form = req.body

        try {
            const status = await DataRekamMedis.create(form)

            if (!status) return res.status(400).send({ message: "invalid form" })

            return res.status(200).send({ message: "creating makanan success" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when creating Makanan" })
        }
    },
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const rekam_medis = await DataRekamMedis.findAll({ offset, limit: pageSize })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const rekam_medis = await DataRekamMedis.findOne({ where: {data_rekam_id: id} })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const data = req.body
        try {
            const status = await DataRekamMedis.update(DataRekamMedis, { where: {data_rekam_id: id} })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating rekam_medis" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await DataRekamMedis.destroy({ where: {data_rekam_id: id} })

            if (!status) return res.status(404).send({ message: "rekam_medis not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting rekam_medis" })
        }
    }



}

