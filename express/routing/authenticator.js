// const express = require('express')
const getDecodedToken = require('../authentication/getDecodedToken')
const dokterRoutes = require('../routing/routes/dokter')
const loginRoutes = require('../routing/routes/login')
const registerRoutes = require('../routing/routes/register')

// function authenticator(req,res){
//     const {role} = getDecodedToken(req,res)
//     const authenticatorRoutes = express.Router() 
//     switch(role){
//         case 'admin':
//             authenticatorRoutes.use(dokterRoutes) 
//             authenticatorRoutes.use(dokterRoutes) 
//         case 'user':
//             // authenticatorRoutes.use() 
//         default:
//             authenticatorRoutes.use(loginRoutes) 
//             authenticatorRoutes.use(registerRoutes) 
//     }
//     return authenticatorRoutes
// }
// module.exports = authenticator 
module.exports = function(app,req,res){

    const {role} = getDecodedToken(req,res)
    console.log('authenticator:',role)
    switch(role){
        case 'admin':
            app.use(dokterRoutes) 
            app.use(dokterRoutes) 
        // case 'user':
            // app.use() 
        default:
            app.use(loginRoutes) 
            app.use(registerRoutes) 
    }
    
} 
