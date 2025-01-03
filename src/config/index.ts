import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
  nodeEnv: process.env.NODE_ENV,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtAccessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
};
