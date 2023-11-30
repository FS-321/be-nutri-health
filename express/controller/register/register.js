
const hash = require('../../../utils/hash')
const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')

const User = require('../../../models/user')(sequelize, DataTypes)

const validateFormRegister = (form) => {
        let nama_depan, nama_belakang, email, password, tanggal_lahir, no_hp
        (
                {
                        nama_depan,
                        nama_belakang,
                        email,
                        password,
                        tanggal_lahir,
                        no_hp,
                } = form
        )
        if (!nama_depan
                || !nama_belakang
                || !email
                || !password
                || !tanggal_lahir
                || !no_hp)
                throw new Error("Form tidak boleh ada yang kosong")

        const hashPass = hash(password)
        const role = 'user'
        return { password: hashPass, role, ...form }

}

module.exports = function (req, res, next) {

        try {
                const form = validateFormRegister(req.body)
                const dateNow = new Date()
                console.log('ini register control', form)
                const status = User.create({ ...form })

                if (!status) return res.status(401).send({ message: "Username or email already register" })
                // kirim data yg sama dengan role
                return res.status(200).send(form)
        } catch (e) {
                return res.status(400).send({ message: e.message })
        }
} 