const { literal, Op, fn, col, Sequelize } = require('sequelize')
const { Dokter, JadwalPraktik } = require('../../../models')

module.exports = {
    async search(req, res) {
        const keyword = (req.query.keyword).toLowerCase()
        console.log(keyword)
        try {
            const dokter = await Dokter.findAll({
                where: literal(`LOWER(nama_depan) LIKE '%${keyword}%' OR LOWER(nama_belakang)LIKE '%${keyword}%'`)

            })
            return res.status(200).send(dokter)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when searching" })
        }


    },
    
    async create(req,res){
        const form = req.body
        try{
            const status = await Dokter.create(form)
            
            if(!status) return res.status(409).send({message:"email already registered"})
            
            return res.status(200).send({message:"create dokter successful"})
        }catch(e){
            return res.stats(500).send({message:"something happen when creating dokter"})
        }
    },

    async getAll(req, res) {
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const dokter = await Dokter.findAll({
                offset, limit: pageSize,
                include: [{
                    model: JadwalPraktik,
                    as: "JadwalPraktik"
                }]
            })

            return res.status(200).send(dokter)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching doctor" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id
        try {
            const dokter = await Dokter.findOne({
                where: { dokter_id: id },
                include: [{
                    model: JadwalPraktik,
                    as: "JadwalPraktik"
                }]

            })

            return res.status(200).send(dokter)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind doctor" })
        }
    },

    async update(req, res) {
        const data = req.body
        const id = req.params.id
        try {
            const status = await Dokter.update(data, { where: { dokter_id: id } })

            if (!status) return res.status(404).send({ message: "doctor not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating doctor" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Dokter.destroy({ where: { dokter_id: id } })

            if (!status) return res.status(404).send({ message: "doctor is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}