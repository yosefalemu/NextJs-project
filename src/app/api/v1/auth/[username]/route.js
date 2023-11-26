import User from "@/model/User";
import connectDb from "@/utils/connectDb";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { username } = params;
  try {
    await connectDb();
    const user = await User.find({ username: username });
    if (!user) {
      return notFound();
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
