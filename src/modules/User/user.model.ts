import { Schema, model } from "mongoose";
import { TUser, UseModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<TUser, UseModel>(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: {
        values: ["admin", "user"],
        message: "{VALUE} is required",
      },
    },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// hashing password before saving
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcryptSaltRounds)
  );
  next();
});

userSchema.statics.isPasswordMatched = async function (
  password: string,
  hashedPassword: string
) {
  return await bcrypt.compare(password, hashedPassword);
};

userSchema.statics.isUserExist = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

export const User = model<TUser, UseModel>("User", userSchema);
