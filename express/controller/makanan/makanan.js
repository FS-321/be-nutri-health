const { Makanan, Favorite } = require('../../../models/')
const {literal } = require('sequelize')
const getDecodedToken = require('../../authentication/getDecodedToken')

module.exports = {
    async search(req, res) {
        let pages = +req.query.pages || 1
        let limit = +req.query.limit || 10
        
        let offset = (pages-1) * limit
        console.log('ini search makanan')
        const keyword = (req.query.keyword).toLowerCase()
        try {
            const makanan = await Makanan.findAll({
                offset,limit,
                where: literal(`LOWER(nama_makanan) LIKE '%${keyword}%' `)

            })
            return res.status(200).send(makanan)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching makanan" })
        }


    },
    async addTofavorit(req, res) {
        const makanan_id = +req.params.id
        const user_id = getDecodedToken(req, res)['user_id']
        try {
            const user = await Favorite.findOne({
                where: {
                    user_id, makanan_id
                }
            })

            if (user) return res.status(409).send({ message: "already added to favorite" })

            const status = await Favorite.create({
                makanan_id, user_id
            })

            return res.status(200).send({ message: "add makanan successful" })

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when adding makanan" })
        }
    },
    async removeFavorit(req, res) {
        const makanan_id = req.params.id
        const user_id = getDecodedToken(req, res)['user_id']
        try {
            const status = await Favorite.destroy({
                where: { makanan_id, user_id }
            })
            if (!status) return res.status(404).send({ message: "Favorite not found" })

            return res.status(200).send({ message: "remove favorite makanan successful" })
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when removing favorite" })
        }
    },
    async getAll(req, res) {
        // let page = req.body.pages || 1
        // let pageSize = req.body.limit || 10
        
         let page = +req.query.pages || 1
         let pageSize = +req.query.limit || 10
         console.log(page)
         console.log(pageSize)
        const offset = (page - 1) * pageSize
        try {
            const makanan = await Makanan.findAll({ offset, limit: pageSize })

            return res.status(200).send(makanan)
        } catch (e) {
            console.log(e.message)
            res.status(500).send({ message: "something happen when fetching makanan" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const makanan = await Makanan.findOne({ where: { makanan_id: id } })

            return res.status(200).send(makanan)
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching makanan" })
        }
    },

    async update(req, res) {
        const makanan_id = req.params.id
        const dateNow = new Date()
        let data = req.body
        data = {updatedAt: dateNow,...data}
        try {
            const status = await Makanan.update(data, { where: { makanan_id } })
            
            if(!status[0]) return res.status(404).send({message:"makanan not found"})

            return res.status(200).send(status)
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when updating makanan" })
        }

    },


    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await Makanan.destroy({ where: { makanan_id: id } })

            if (!status) return res.status(404).send({ message: "makanan not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when deleting makanan" })
        }
    },

    async create(req, res) {
        console.log('ini makana create')
        const form = req.body
        const date = new Date()
        try {
            const status = await Makanan.create({ ...form, createdAt: date, updatedAt: date })

            if (!status) return res.status(400).send({ message: "invalid form" })

            return res.status(200).send({ message: "creating makanan success" })
        } catch (e) {
            console.log('error',e.message)
            return res.status(500).send({ message: "something happen when creating Makanan !" })
        }
    }

}

