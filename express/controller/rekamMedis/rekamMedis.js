const { DataRekamMedis, User } = require('../../../models/')
const { literal } = require('sequelize')
const getDecodedToken = require('../../authentication/getDecodedToken')

module.exports = {
    async search(req, res) {
        let pages = +req.query.pages || 1
        let limit = +req.query.limit || 10
        
        let offset = (pages-1) * limit
        const keyword = (req.query.keyword).toLowerCase()
        try {
            const user = await User.findAll({
                limit,offset,
                where: literal(`LOWER(nama_depan) LIKE '%${keyword}%' OR LOWER(nama_belakang)LIKE '%${keyword}%'`),
                attributes: ['user_id']
            })

            console.log(user.map(e => e.user_id))

            const pasien = await DataRekamMedis.findAll({
                where: { pasien_id: user.map(res => res.user_id) }
            })

            return res.status(200).send(pasien)

        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when fetching pasien" })
        }


    },
    async create(req, res) {
        const form = req.body
        const pasien_id = (req.body.pasien_id).toString()
        console.log(pasien_id)
        try {
            const userExists = await User.findByPk(pasien_id);

            if (!userExists) {
                console.log('User with pasien_id does not exist.');
                // Handle the case where the user does not exist
                // (e.g., return an error response or redirect)
                return;
            }
            const status = await DataRekamMedis.create({ pasien_id, ...form })

            if (!status) return res.status(400).send({ message: "invalid form" })

            return res.status(200).send({ message: "creating rekaman success" })
        } catch (e) {
            console.log(e.message)
            return res.status(500).send({ message: "something happen when creating rekaman" })
        }
    },
    async getAll(req, res) {
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        try {
            const rekam_medis = await DataRekamMedis.findAll({
                offset, limit: pageSize,
            })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            console.log(e.message)
            res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },
    async getAllbyUser(req, res) {
        const pasien_id = getDecodedToken(req, res)['user_id'].toString()
        const page = req.body.pages || 1
        const pageSize = req.body.limit || 10
        const offset = (page - 1) * pageSize
        console.log('ini rekam oleh user', pasien_id)
        try {
            const rekam_medis = await DataRekamMedis.findAll({ offset, limit: pageSize, where: { pasien_id } })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            console.log(e.message)
            res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async getOne(req, res) {
        const id = req.params.id

        try {
            const rekam_medis = await DataRekamMedis.findOne({ where: { data_rekam_id: id } })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },
    async getOneUser(req, res) {
        const id = req.params.id
        const pasien_id = getDecodedToken(req, res)['user_id']
        try {
            const rekam_medis = await DataRekamMedis.findOne({ where: { data_rekam_id: id, pasien_id } })

            return res.status(200).send(rekam_medis)
        } catch (e) {
            return res.status(500).send({ message: "something happen when fetching rekam_medis" })
        }
    },

    async update(req, res) {
        const id = req.params.id
        const dateNow = new Date()
        let data = req.body
        data = { updatedAt: dateNow, ...data }
        try {
            const status = await DataRekamMedis.update(data, { where: { data_rekam_id: id } })

            return res.status(200).send(status)
        } catch (e) {
            return res.status(500).send({ message: "something happen when updating rekam_medis" })
        }

    },

    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const status = await DataRekamMedis.destroy({ where: { data_rekam_id: id } })

            if (!status) return res.status(404).send({ message: "rekam_medis not found" })
            return res.status(200).send({ message: "delete succseful" })
        } catch (e) {
            return res.status(500).send({ message: "something happen when deleting rekam_medis" })
        }
    }



}

