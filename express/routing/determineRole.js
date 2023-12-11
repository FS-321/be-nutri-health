const getDecodedToken = require("../authentication/getDecodedToken");

module.exports = function determineRole(controller) {
  return (req, res, next) => {
    const role = getDecodedToken(req, res)["role"];
    if (role === "admin") controller.admin(req, res, next);
    else if (role === "user") controller.user(req, res, next);
  };
};
