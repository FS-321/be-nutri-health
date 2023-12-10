const jwt = require("jsonwebtoken");
const process = require("process");
module.exports = (req, res) => {
  const token = req.headers.authorization;
  if (!token)
    return req.status(403).send({ message: "user only authorization" });
  try {
    const decodedToken = jwt.sign(token, process.env.TOKENKEY);
    if (decodedToken.role === "user") next();
  } catch (e) {
    console.log(e.message);
    return req
      .status(403)
      .send({ message: "Authorization not valid, please try relogin again" });
  }
};
