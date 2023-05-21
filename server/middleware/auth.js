import jwt from "jsonwebtoken";
const auth = async (request, response, next) => {
  try {
    const token = await request.headers.authorization;
    const decodedToken = await jwt.verify(token, "iloveyoujessica");
    const user = await decodedToken;
    request.user = user;
    next();
  } catch (error) {
    response.status(401).json({
      message: "unauthorized",
    });
  }
};
export default auth;
