
const hash = require('../../../utils/hash')

const { User } = require('../../../models')
const createNewToken = require('../login/createNewToken')
const generateId = require('../../../utils/generateId')

const validateFormRegister = (form) => {
        let nama_depan, nama_belakang, email, password, tanggal_lahir
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
        )
                throw new Error("Form tidak boleh ada yang kosong")

        const hashPass = hash(password)
        const role = 'user'
        return {
                tanggal_lahir: new Date(tanggal_lahir),
                role,
                ...form,
                'password': hashPass,
        }

}

module.exports = async function (req, res, next) {

        try {
                const user_id = generateId()
                console.log('ini register')
                const form = validateFormRegister(req.body)
                const newToken = createNewToken( form.role,user_id)
                const dateNow = new Date()
                const status = await User.create({
                        user_id,
                        createdAt: dateNow,
                        updatedAt: dateNow,
                        ...form,
                })
                if (!status) return res.status(409).send({ message: "email already register" })
                // kirim data yg sama dengan role
                const { password,...user}= form
                return res.status(200).send({ newToken, ...user })
        } catch (e) {
                console.log(e.message)
                return res.status(500).send({ message: "something happen when regsitering" })
        }
} 