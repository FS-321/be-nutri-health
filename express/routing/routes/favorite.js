const express = require("express");
const favoriteRouter = express.Router();
const favorite = require("../../controller/favorite/favotite");
const { authenticateToken } = require("../../authentication/authentication");
const userAuth = require("../user-auth");

favoriteRouter.get("/favorite", authenticateToken, userAuth, favorite.getAll);
favoriteRouter.get(
  "/favorite/:id",
  authenticateToken,
  userAuth,
  favorite.getOne,
);
favoriteRouter.get(
  "/cari/favorite",
  authenticateToken,
  userAuth,
  favorite.search,
);

module.exports = favoriteRouter;

