module.exports = function determineRole(controller) {
  return (req, res, next) => {
    if (req.role === "admin") controller.admin(req, res, next);
    else if (req.role === "user") controller.user(req, res, next);
    else controller.any(req, res, next);
  };
};
