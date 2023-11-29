
const jwt = require('jsonwebtoken')
const getCookiesToken = require('./getCookiesToken')
const sequelize = require('../sequelize-instance')
const DataTypes = require('sequelize')
const User = require('../../models/user')(sequelizze, DataTypes)
require('dotenv').config()
module.exports = {
    authenticateUser: async function (req, res, next) {
        try {
            const { email, password } = req.body
            // JANGAN LUPA MODEL GANTI !!!!!!!!!!!
            const user = User.findOne({ where: { email, password } })

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