const register = require("../../controller/register/register");
const process = require("process");
const express = require("express");

const registerRoutes = express.Router();

registerRoutes.post(
  "/register",
  (req, res) => {
    try {
      const token = req.headers.authorization;
      jwt.sign(token, process.env.TOKENKEY);
      return res.status(401).send({ message: "already login" });
    } catch (e) {
      next();
    }
  },
  register,
);

module.exports = registerRoutes;

