// const express = require('express')
const getDecodedToken = require('../authentication/getDecodedToken')
const { dokterRoutes, dokterRoutesAdmin } = require('../routing/routes/dokter')
const registerRoutes = require('../routing/routes/register')
const poliklinikRouter = require('./routes/poliklinik')
const layananRouter = require('./routes/layanan')
const makananRouter = require('./routes/makanan')
const jadwalPraktikRouter = require('./routes/jadwal-praktik')
const loginRoutes = require('./routes/login')
const { authenticateToken, authenticateUser } = require('../authentication/authentication')
const favoriteRouter = require('./routes/favorite')


function fallbackRoute(req, res) {
    console.log("Route not found")
    return res.status(404).send({ message: "Error Resource not found or not login yet" })
}


module.exports = function (app, req, res) {
    console.log(getDecodedToken(req,res))
    const { role } = getDecodedToken(req, res)
    console.log('ini role authenticator', role)

    switch (role) {
        case 'admin':
            app.use(authenticateToken, dokterRoutesAdmin)
            app.use(authenticateToken, makananRouter.makananRoutesAdmin)
            app.use(authenticateToken, poliklinikRouter.poliklinikRoutesAdmin)
            app.use(authenticateToken, layananRouter.layananRoutesAdmin)
            app.use(authenticateToken, jadwalPraktikRouter.jadwalPraktikRoutesAdmin)
            app.use(authenticateToken, layananRouter.layananRoutesAdmin)
            // app.use('/*', fallbackRoute)
        case 'user':
            app.use(loginRoutes)
            app.use(dokterRoutes)
            app.use(registerRoutes)
            app.use(authenticateToken, makananRouter.makananRoutesUser)
            app.use(poliklinikRouter.poliklinikRoutes)
            app.use(layananRouter.layananRoutes)
            app.use(jadwalPraktikRouter.jadwalPraktikRoutes)
            app.use(layananRouter.layananRoutes)
            app.use(authenticateToken, favoriteRouter)
            app.use('/*', fallbackRoute)
        default:
            app.use(loginRoutes)
            app.use(dokterRoutes)
            app.use(registerRoutes)
            app.use(makananRouter.makananRoutes)
            app.use(poliklinikRouter.poliklinikRoutes)
            app.use(layananRouter.layananRoutes)
            app.use(jadwalPraktikRouter.jadwalPraktikRoutes)
            app.use(layananRouter.layananRoutes)
            // app.use('/*', fallbackRoute)
    }

} 
