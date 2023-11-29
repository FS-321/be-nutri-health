
const jwt = require('jsonwebtoken')
const getCookiesToken = require('./getCookiesToken')
require('dotenv').config()
module.exports = {
    authenticateUser: function (req, res, next) {
        try {
            const { username, password } = req.body
            // JANGAN LUPA MODEL GANTI !!!!!!!!!!!
            const user = Model.findOne({ where: { username: username, password: password } })

            if (!user) {
                return res.status(401).send({ message: "email and password are invalid" })
            }

            return user 
        }

        catch (e) {
            return res.status(500).send({ message: e.message })
        }
    },

    authenticateToken: function (req, res, next) {
        const secretKey = process.env.TOKENKEY
        const token = getCookiesToken(req)

        if (!token) return res.status(401).send({ message: "Please login to acces this resource" })

        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token either modified or expired" })
            }

            if (decoded) next()
        })
    }
}