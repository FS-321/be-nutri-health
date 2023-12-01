// const express = require('express')
const getDecodedToken = require('../authentication/getDecodedToken')
const { dokterRoutes, dokterRoutesAdmin } = require('../routing/routes/dokter')
const registerRoutes = require('../routing/routes/register')
const poliklinikRouter = require('./routes/poliklinik')
const layananRouter = require('./routes/layanan')
const makananRouter = require('./routes/makanan')
const jadwalPraktikRouter = require('./routes/jadwal-praktik')
const loginRoutes = require('./routes/login')
const { authenticateToken } = require('../authentication/authentication')

module.exports = function(app,req,res){

    const {role} = getDecodedToken(req,res)
    console.log('authenticator:',role)
    switch(role){
        case 'admin':
            app.use(dokterRoutesAdmin) 
        // case 'user':
            // app.use() 
        default:
            app.use(loginRoutes)
            app.use(dokterRoutes)
            app.use(loginRoutes) 
            app.use(registerRoutes) 
            app.use(makananRouter.makananRoutes)
            app.use(poliklinikRouter.poliklinikRoutes)
            app.use(layananRouter.layananRoutes)
            app.use(jadwalPraktikRouter.jadwalPraktikRoutes)
            app.use(layananRouter.layananRoutes)
    }
    
} 
