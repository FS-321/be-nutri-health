const express = require("express");
const jadwalPraktikRoutes = express.Router();
const jadwalPraktik = require("../../controller/jadwal_praktik/jadwal_praktik");
const adminAuth = require("../admin-auth");
const { authenticateToken } = require("../../authentication/authentication");

jadwalPraktikRoutes.get("/jadwal-praktik", jadwalPraktik.getAll);
jadwalPraktikRoutes.get("/jadwal-praktik/:id", jadwalPraktik.getOne);
jadwalPraktikRoutes.post(
  "/jadwal-praktik/:id",
  authenticateToken,
  adminAuth,
  jadwalPraktik.update,
);
jadwalPraktikRoutes.delete(
  "/jadwal-praktik/:id",
  authenticateToken,
  adminAuth,
  jadwalPraktik.deleteOne,
);

module.exports = jadwalPraktikRoutes;

