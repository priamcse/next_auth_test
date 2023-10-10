import { signUpSchema } from "@/lib/signupTypes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // validate from server
  const result = signUpSchema.safeParse(body);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }
  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
