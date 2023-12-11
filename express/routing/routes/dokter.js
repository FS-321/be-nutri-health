const express = require("express");
const dokterRoutes = express.Router();
const dokter = require("../../controller/dokter/dokter");
const { authenticateToken } = require("../../authentication/authentication");
const adminAuth = require("../admin-auth");

dokterRoutes.get("/dokter", dokter.getAll);
dokterRoutes.get("/dokter/:id", dokter.getOne);
dokterRoutes.put("/dokter/:id", authenticateToken, adminAuth, dokter.update);
dokterRoutes.post("/dokter", authenticateToken, adminAuth, dokter.create);
dokterRoutes.put("/dokter/:id", authenticateToken, adminAuth, dokter.update);
dokterRoutes.delete(
  "/dokter/:id",
  authenticateToken,
  adminAuth,
  dokter.deleteOne,
);

module.exports = dokterRoutes;
