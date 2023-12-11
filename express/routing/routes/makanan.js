const express = require("express");
const makananRoutes = express.Router();
const makanan = require("../../controller/makanan/makanan");
const { authenticateToken } = require("../../authentication/authentication");
const userAuth = require("../user-auth");
const adminAuth = require("../admin-auth");

makananRoutes.get("/cari/makanan", makanan.search);
makananRoutes.get("/makanan", makanan.getAll);
makananRoutes.get("/makanan/:id", makanan.getOne);
// user
makananRoutes.post(
  "/makanan/:id/favorite",
  authenticateToken,
  userAuth,
  makanan.addTofavorit,
);
makananRoutes.delete(
  "/makanan/:id/favorite",
  authenticateToken,
  userAuth,
  makanan.removeFavorit,
);
// admin
makananRoutes.post("/makanan", authenticateToken, adminAuth, makanan.create);
makananRoutes.put("/makanan/:id", authenticateToken, adminAuth, makanan.update);
makananRoutes.delete(
  "/makanan/:id",
  authenticateToken,
  adminAuth,
  makanan.deleteOne,
);

module.exports = makananRoutes;

