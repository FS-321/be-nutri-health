const express = require('express')
const dashboardRoutes = express.Router()
const dashboard = require('../../controller/dashboard/dashboard')

dashboardRoutes.get('/dashboard',dashboard)

module.exports = dashboardRoutes