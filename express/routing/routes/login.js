const express = require('express')
const sequelize = require('../../sequelize-instance')
const DataTypes = require('sequelize')
const user = require('../../../models/user')(sequelize, DataTypes)
const loginRoutes = express.Router()


loginRoutes.post('/login', (req, res, next) => {
    console.log('ini login router')
    let email, password
    try {
        ({ email, password } = req.body)
    } catch (e) {
        return res.status(404).send({ message: "invalid body" })
    }
    
    try {
        const result = user.findOne({ where: { email, password } })

        if (!result) return res.status(400).send({ message: "invalid email and password" })

        return res.status(200).send(result)
    } catch (e) {
        res.status(500).send({ message: "something error in the server" })
    }

})

module.exports = loginRoutes