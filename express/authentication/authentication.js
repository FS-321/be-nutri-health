const jwt = require("jsonwebtoken");
const { User } = require("../../models");
require("dotenv").config();
const hash = require("../../utils/hash");
const createNewToken = require("../controller/login/createNewToken");
module.exports = {
  authenticateUser: async function (req, res, next) {
    const { email, password } = req.body;
    const hashedPass = hash(password);
    try {
      const user = await User.findOne({
        where: { email, password: hashedPass },
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        return res
          .status(401)
          .send({ message: "email and password are invalid" });
      }
      const newToken = createNewToken(user.role, user.user_id);
      return res.status(200).send({ newToken, ...user.dataValues });
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  },

  authenticateToken: function (req, res, next) {
    const token = req.headers.authorization;

    if (!token)
      return res
        .status(401)
        .send({ message: "Please login to acces this resource" });

    jwt.verify(token, process.env.TOKENKEY, (error, decoded) => {
      if (error) {
        res.status(401).send({ message: "Token either modified or expired" });
        res.redirect("https://nutrihealth.verce.app");
        return;
      }
      if (decoded) next();
    });
  },
};

