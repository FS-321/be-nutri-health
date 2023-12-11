const express = require("express");
const layananRoutes = express.Router();
const layanan = require("../../controller/layanan/layanan");
const { authenticateToken } = require("../../authentication/authentication");
const adminAuth = require("../admin-auth");

layananRoutes.get("/layanan", layanan.getAll);
layananRoutes.get("/layanan/:id", layanan.getOne);
layananRoutes.get("/cari/layanan", layanan.search);
layananRoutes.put("/layanan/:id", authenticateToken, adminAuth, layanan.update);
layananRoutes.post("/layanan", authenticateToken, adminAuth, layanan.create);
layananRoutes.delete(
  "/layanan/:id",
  authenticateToken,
  adminAuth,
  layanan.deleteOne,
);

module.exports = layananRoutes;
