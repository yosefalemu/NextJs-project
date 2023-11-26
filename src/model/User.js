import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "please provide first name"],
    },
    lastname: { type: String, required: [true, "please provide last name"] },
    username: {
      type: String,
      unique: true,
      required: [true, "please provide username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please provide email"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    profilepicture: {
      type: String,
      required: [true, "please provide profile picture"],
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.userSchema || mongoose.model("userSchema", userSchema);

export default User;
