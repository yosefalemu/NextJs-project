import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Post from "@/model/Post";

// @desc    Create Post
// @route   POST /api/v1/post
// @access  Public
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

export const GET = async (request) => {
  try {
    await connectDb();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Data base Error", { status: 500 });
  }
};
