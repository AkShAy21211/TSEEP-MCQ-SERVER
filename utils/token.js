import jwt from "jsonwebtoken";
import ENVS from "../configs/envConfig.js";
export function createToken(payload) {
  try {
    const token = jwt.sign(payload, ENVS.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(error);
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, ENVS.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error(error);
    
  }
}
