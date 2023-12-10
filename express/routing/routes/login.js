const express = require("express");
const jwt = require("jsonwebtoken");
const process = require("process");
const { authenticateUser } = require("../../authentication/authentication");
const loginRoutes = express.Router();

loginRoutes.post(
  "/login",
  (req, res, next) => {
    try {
      const token = req.headers.authorization;
      jwt.verify(token, process.env.TOKENKEY);
      return res.status(401).send({ message: "already login" });
    } catch (e) {
      next();
    }
  },
  authenticateUser,
);

module.exports = loginRoutes;
