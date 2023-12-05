const { Poliklinik,Dokter } = require('../../../models')
const {literal}= require('sequelize')

module.exports = {
    async search(req, res) {
        let pages = +req.query.pages || 1
        let limit = +req.query.limit || 10
        
        let offset = (pages-1) * limit
        console.log('ini search poli')
        const keyword = (req.query.keyword).toLowerCase()
        try {
            const poliklinik = await Poliklinik.findAll({
                offset,limit,
                where: literal(`LOWER(nama_poli) LIKE '%${keyword}%' `)

            })
            return res.status(200).send(poliklinik)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching poliklinik" })
        }


    },
    async create(req, res) {
        const form = req.body

        try {
            const status = await Poliklinik.create(form)

            if (!status) return res.status(400).send({ message: "invalid form" })

            return res.status(200).send({ message: "creating makanan success" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when creating Makanan" })
        }
    },

    async getAll(req, res) {
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const poliklinik = await Poliklinik.findAll({
                offset,
                limit: pageSize,
                include : [{
                    model:Dokter
                }]
            })

            return res.status(200).send(poliklinik)
        } catch (e) {
            res.status(500).send({ message: "something happen when fetching poliklinik" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id
        console.log('get one id :', id)    
        try {
            const poliklinik = await Poliklinik.findOne({
                where: { poli_id: id },
                include : [{
                    model:Dokter
                }]
            })

            return res.status(200).send(poliklinik)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching poliklinik" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const dateNow = new Date()
        let data = req.body
        data = {updatedAt: dateNow,...data}
        try {
            const status = await Poliklinik.update(data, { where: { poli_id: id } })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating poliklinik" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Poliklinik.destroy({ where: { poli_id: id } })

            if (!status) return res.status(404).send({ message: "poliklinik not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting poliklinik" })
        }
    }



}

