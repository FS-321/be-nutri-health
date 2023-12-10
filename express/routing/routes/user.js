const express = require("express");
const userRoutes = express.Router();
const user = require("../../controller/user/user");
const determineRole = require("../determineRole");
const { authenticateToken } = require("../../authentication/authentication");
const adminAuth = require("../admin-auth");

userRoutes.get(
  "/user",
  authenticateToken,
  determineRole({ admin: user.getAll, user: user.getOne }),
);
userRoutes.get("/user/:id", adminAuth, user.getOne);
userRoutes.put(
  "/user/:id",
  authenticateToken,
  determineRole({ admin: user.update, user: user.update }),
);
userRoutes.delete("/user/:id", authenticateToken, adminAuth, user.deleteOne);
userRoutes.get("/cari/user", authenticateToken, adminAuth, user.search);

module.exports = userRoutes;

