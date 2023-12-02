
const { JadwalPraktik } = require('../../../models')

module.exports = {
    async create(req,res){
        const form = req.body
        try{
            const status = await JadwalPraktik.create(form)
            
            if(!status) return res.status(400).send({message:"invalid form"})
            
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
            const jadwal_praktik = await JadwalPraktik.findAll({offset,limit:pageSize})
            
            return res.status(200).send(jadwal_praktik)

        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching jadwal praktik" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id
        try {
            const jadwal_praktik = await JadwalPraktik.findOne({ where: { jadwal_id : id } })
            

            return res.status(200).send(jadwal_praktik)
        } catch (e) {
            return res.status(500).send({ message: "Something error when fetchind jadwal praktik" })
        }
    },

    async update(req, res) {
        const data = req.body
        const id = req.params.id
        try {
            const status = await JadwalPraktik.update(data, { where: { jadwal_id : id } })

            if (!status[0]) return res.status(404).send({ message: "jadwal praktik not found" })

            return res.status(200).send({ message: "update succesful" })

        } catch (e) {
            return res.status(500).send({ message: "something happen when updating jadwal praktik" })
        }
    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await JadwalPraktik.destroy({ where: { jadwal_id : id } })
            
            if (!status) return res.status(404).send({ message: "jadwal praktik is not found" })

            return res.status(200).send({ message: "delete successful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting" })
        }
    }
}