import STATUS_MESSAGES from "../configs/statusMessages.js";
import { verifyToken } from "../utils/token.js";

async function isAuthenticated(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(STATUS_MESSAGES.AUTH.UNAUTHORIZED.code)
        .json({ message: STATUS_MESSAGES.AUTH.UNAUTHORIZED.message });
    }

    const token = authHeader.split(" ")[1];
    const decode = verifyToken(token);
    req.user = decode;
    next();
  } catch (error) {
    return res
      .status(STATUS_MESSAGES.AUTH.UNAUTHORIZED.code)
      .json({ message: "Invalid or expired token" });
  }
}

export default isAuthenticated;