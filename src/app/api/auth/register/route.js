import User from "@/model/User";
import connectDb from "@/utils/connectDb";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstname, lastname, username, email, password, profilepicture } =
    await request.json();
  await connectDb();
  const hashedPassword = await bcryptjs.hash(password, 5);
  const newUser = new User({
    firstname,
    lastname,
    username,
    email,
    password: hashedPassword,
    profilepicture,
  });
  try {
    await newUser.save();
    return new NextResponse("New user successfully created", { status: 201 });
  } catch (error) {
    // Mongoose validation error
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors)
        .map((item) => item.message)
        .join(",");
      return new NextResponse(JSON.stringify(errors), { status: 400 });
    }

    // Mongoose duplicate key error (unique constraint violation)
    if (error.code === 11000 || error.code === 11001) {
      const field = `${Object.keys(
        error.keyValue
      )} field is taken, please choose another value`;
      return new NextResponse(JSON.stringify(field), { status: 400 });
    }

    // Other errors

    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
