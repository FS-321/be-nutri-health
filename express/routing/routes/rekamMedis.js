const express = require("express");
const rekamMedis = require("../../controller/rekamMedis/rekamMedis");
const { authenticateToken } = require("../../authentication/authentication");
const userAuth = require("../user-auth");
const adminAuth = require("../admin-auth");
const determineRole = require("../determineRole");
const rekamMedisRoutes = express.Router();

rekamMedisRoutes.get(
  "/rekam-medis",
  authenticateToken,
  determineRole({
    user: rekamMedis.getAllbyUser,
    admin: rekamMedis.getAll,
  }),
);
rekamMedisRoutes.get(
  "/rekam-medis/:id",
  authenticateToken,
  determineRole({ user: rekamMedis.getOneUser, admin: rekamMedis.getOne }),
);

rekamMedisRoutes.post(
  "/rekam-medis",
  authenticateToken,
  adminAuth,
  rekamMedis.create,
);
rekamMedisRoutes.delete(
  "/rekam-medis/:id",
  authenticateToken,
  adminAuth,
  rekamMedis.deleteOne,
);
rekamMedisRoutes.put(
  "/rekam-medis/:id",
  authenticateToken,
  adminAuth,
  rekamMedis.update,
);
rekamMedisRoutes.get(
  "/cari/rekam-medis",
  authenticateToken,
  adminAuth,
  rekamMedis.search,
);

module.exports = rekamMedis;
