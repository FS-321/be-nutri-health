const express = require("express");
const poliklinikRoutes = express.Router();
const poliklinik = require("../../controller/poliklinik/poliklinik");
const { authenticateToken } = require("../../authentication/authentication");
const adminAuth = require("../admin-auth");

poliklinikRoutes.get("/poliklinik", poliklinik.getAll);
poliklinikRoutes.get("/poliklinik/:id", poliklinik.getOne);
poliklinikRoutes.get("/cari/poliklinik", poliklinik.search);
poliklinikRoutes.post(
  "/poliklinik",
  authenticateToken,
  adminAuth,
  poliklinik.create,
);
poliklinikRoutes.delete(
  "/poliklinik/:id",
  authenticateToken,
  adminAuth,
  poliklinik.deleteOne,
);
poliklinikRoutes.put(
  "/poliklinik/:id",
  authenticateToken,
  adminAuth,
  poliklinik.update,
);

module.exports = poliklinikRoutes;
