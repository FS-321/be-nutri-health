// const express = require('express')
const getDecodedToken = require('../authentication/getDecodedToken')
const { dokterRoutes, dokterRoutesAdmin } = require('../routing/routes/dokter')
const loginRoutes = require('../routing/routes/login')
const registerRoutes = require('../routing/routes/register')
const dokterRouter = require('./routes/dokter')
const poliklinikRouter = require('./routes/poliklinik')
const layananRouter = require('./routes/layanan')
const makananRouter = require('./routes/makanan')

module.exports = function(app,req,res){

    const {role} = getDecodedToken(req,res)
    console.log('authenticator:',role)
    switch(role){
        case 'admin':
            app.use(dokterRoutesAdmin) 
        // case 'user':
            // app.use() 
        default:
            app.use(dokterRoutes)
            app.use(loginRoutes) 
            app.use(registerRoutes) 
            app.use(makananRouter.makananRoutes)
            app.use(poliklinikRouter.poliklinikRoutes)
            app.use(layananRouter.layananRoutes)
            // app.use(layananRouter.layananRoutes)
    }
    
} 
