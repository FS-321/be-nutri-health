const { Makanan } = require('../../../models/')

module.exports = {
    async getAll(req, res) {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const offset = (page - 1) * pageSize
        try {
            const makanan = await Makanan.findAll({ offset, limit: pageSize })

            return res.status(200).send(makanan)
        } catch (e) {
            res.status(500).send({ message: "something happen when fetching makanan" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const makanan = await Makanan.findOne({ where: {makanan_id: id} })

            return res.status(200).send(makanan)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching makanan" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const { gambar_makanan_url, data } = req.body
        try {
            const status = await Makanan.update(data, { where: {makanan_id: id} })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating makanan" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Makanan.destroy({ where: {makanan_id: id} })

            if (!status) return res.status(404).send({ message: "makanan not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting makanan" })
        }
    },
    
    async create(req,res){
        const form = req.body
        
        try{
            const status = await Makanan.create(form)
            
            if(!status) return res.status(400).send({message:"invalid form"})
            
            return res.status(200).send({message:"creating makanan success"})
        }catch(e){
            return res.status(500).send({message:"something happen when creating Makanan"})
        }
    }

}

