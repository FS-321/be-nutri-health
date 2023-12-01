const jwt = require('jsonwebtoken')
const getAuthToken = require('./getAuthToken')
require('dotenv').config()
module.exports = function (req, res) {
    const token = getAuthToken(req)
    if (token.role === 'guest') return token
    try {
        const decodedToken = jwt.verify(token, process.env.TOKENKEY)
        return decodedToken
    }
    catch (e) {
        return res.status(404).send({ message: "Invalid user" })
    }
} 