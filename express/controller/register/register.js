
const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')

const User = require('../../../models/user')(sequelize, DataTypes)


module.exports = function (req, res, next) {
        console.log('ini register')
        try {
                const registerForm = req.body
                const status = User.create( registerForm )

                if (!status) return res.status(401).send({ message: "Username or email already register" })

                return res.status(200).send(status)
        } catch (e) {
                return res.status(500).send({ message: "something happen error when register" })
        }
} 