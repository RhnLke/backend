const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.headers.authorization || req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(req.headers.authorization)
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    var a = token.split(' ')
    const decoded = jwt.verify(a[1], config.JwtTokenKey);
    
    console.log(decoded)
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(err);
  }
  return next();
};

module.exports = verifyToken;