import { posts } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const post = posts.find((post) => post.id === params.postId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("error", { status: 400 });
  }
}
