const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = function ( role, user_id) {
    const newToken = jwt.sign({ role,user_id }, process.env.TOKENKEY, { expiresIn: '3 days' })
     
     return newToken
    
    // const tigaHari = 1000 * 60 * 60 * 24 * 3

    // // signed hapus sementara

    // res.cookie('token', newToken, { maxAge: tigaHari, httpOnly:true })

    // console.log('next dari new token', newToken) 
    // next()
}