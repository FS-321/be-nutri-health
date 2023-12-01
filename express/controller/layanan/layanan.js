
const {Layanan} = require('../../../models/')

module.exports = {
    async getAll(req, res) {
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const layanan = await Layanan.findAll({offset,limit:pageSize})

            return res.status(200).send(layanan)

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching layanan" })
        }
    },

    async getOne(req, res) {
        const id = req.params
        try {
            const layanan = await Layanan.findOne({ where: { layanan_id : id } })

            return res.status(200).send(layanan)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind layanan" })
        }
    },

    async update(req, res) {
        const data = req.body
        const id = req.params.id
        try {
            const status = await Layanan.update(data, { where: { layanan_id : id } })

            if (!status) return res.status(404).send({ message: "layanan not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating layanan" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Layanan.destroy({ where: { layanan_id : id } })

            if (!status) return res.status(404).send({ message: "layanan is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}