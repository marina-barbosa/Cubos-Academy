const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  try {
    const token = request.headers.authorization;

    const decodedToken = jwt.verify(token, "SenhaParaGerarMeuToken");

    request.userData = { userId: decodedToken.userId };

    next();
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = authenticate;
