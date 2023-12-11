const jwt = require("jsonwebtoken");
const process = require("process");
const { decode } = require("punycode");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return req.status(403).send({ message: "Admin only authorization" });
  try {
    const decodedToken = jwt.verify(token, process.env.TOKENKEY);
    if (decodedToken.role === "admin") next();
    else return res.status(403).send({ message: "Admin only authorization" });
  } catch (e) {
    console.log(e.message);
    return req
      .status(403)
      .send({ message: "Authorization not valid, please try relogin again" });
  }
};
