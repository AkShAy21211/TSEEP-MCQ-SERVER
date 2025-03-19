import jwt from "jsonwebtoken";
import ENVS from "../configs/envConfig";
export function createToken(payload) {
  try {
    const token = jwt.sign(payload, ENVS.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw new Error("Error creating token");
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, ENVS.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
