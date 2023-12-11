const express = require("express");
const dashboardRoutes = express.Router();
const dashboard = require("../../controller/dashboard/dashboard");
const { authenticateToken } = require("../../authentication/authentication");
const adminAuth = require("../admin-auth");

dashboardRoutes.get("/dashboard", authenticateToken, adminAuth, dashboard);

module.exports = dashboardRoutes;
