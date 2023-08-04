const checkName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    return res
      .status(400)
      .json({ error: "is_favorite must be a boolean value" });
  }
  next();
};

const validateURL = (req, res, next) => {
  if (
    req.body.photo.substring(0, 7) === "http://" ||
    req.body.photo.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res.status(400).json({
      error: "You forgot to start your photo url with http:// or https://",
    });
  }
};

module.exports = { checkName, checkBoolean, validateURL };
