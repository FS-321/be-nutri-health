const jwt = require('jsonwebtoken')
const getCookiesToken = require('./getCookiesToken')
require('dotenv').config()
module.exports = function (req, res) {
    const token = getCookiesToken(req) 
    try {
        const decodedToken = jwt.verify(token, process.env.TOKENKEY)
        return decodedToken
    }
    catch (e) {
        return res.status(500).send({ message: "Something happen in server 😖" })
    }
} 