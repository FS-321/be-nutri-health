
const hash = require('../../../utils/hash')

const { User } = require('../../../models')

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
                password: hashPass,
                tanggal_lahir: new Date(tanggal_lahir),
                role,
                ...form,
        }

}

module.exports = async function (req, res, next) {

        try {
                const form = validateFormRegister(req.body)
                const dateNow = new Date()
                console.log('ini register control', form)
                const status =await User.create({
                        ...form,
                        createdAt: dateNow,
                        updatedAt: dateNow
                })
                console.log('status :', status)
                if (!status) return res.status(401).send({ message: "Username or email already register" })
                // kirim data yg sama dengan role
                return res.status(200).send(form)
        } catch (e) {
                return res.status(400).send({ message: "email already registered" })
        }
} 