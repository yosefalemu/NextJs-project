import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Post from "@/model/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDb();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Data base error", { status: 500 });
  }
};
