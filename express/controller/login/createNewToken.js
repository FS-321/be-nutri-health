const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = function (req, res,next) {
    let email, password
    
    try {
        ({ email, password } = req.body)
        if(!email || !password) throw new Error("Invalid Body") 

    } catch (e) {
        return res.status(400).send({ message:e.message })
    }
    
    const newToken = jwt.sign({ email, password }, process.env.TOKENKEY, { expiresIn: '3 days' })
    const tigaHari = 1000 * 60 * 60 * 24 * 3
    // signed hapus sementara

    res.cookie('token', newToken, { maxAge: tigaHari })

    console.log('next dari new token', newToken) 
    res.send({e: 'cookie dibuat' })
    // next()
}