import jwt from "jsonwebtoken";

export const createToken = (
  JwtPayload: { email: string; role: string },
  expiresIn: string,
  secret: string
) => {
  return jwt.sign(JwtPayload, secret, { expiresIn });
};
