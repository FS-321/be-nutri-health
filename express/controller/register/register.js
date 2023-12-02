
const hash = require('../../../utils/hash')

const { User } = require('../../../models')
const createNewToken = require('../login/createNewToken')

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
                const form = validateFormRegister(req.body)
                const newToken = createNewToken(req, form.role)
                const dateNow = new Date()
                const status = await User.create({
                        ...form,
                        createdAt: dateNow,
                        updatedAt: dateNow
                })
                if (!status) return res.status(409).send({ message: "email already register" })
                // kirim data yg sama dengan role
                return res.status(200).send({ newToken, ...form })
        } catch (e) {
                return res.status(400).send({ message: "something happen when regsitering" })
        }
} 