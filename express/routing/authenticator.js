const express = require('express')
const getDecodedToken = require('../authentication/getDecodedToken')
const authenticatorRoutes = express.Router() 

function getRoles(req){
    const {role} = getDecodedToken(req,res)
    
    switch(role){
        case 'admin':
            authenticatorRoutes.use() 
        case 'user':
            authenticatorRoutes.use() 
        default:
            authenticatorRoutes.use() 
    }
}
getRoles()
module.exports = authenticatorRoutes
