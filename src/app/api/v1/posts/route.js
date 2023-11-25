import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Post from "@/model/Post";

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectDb();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
