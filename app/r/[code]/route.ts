import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code;

  const response = NextResponse.redirect(
    "https://play.google.com/store/apps/details?id=com.abdullah.quranm"
  );

  response.cookies.set("referral_code", code, {
    path: "/",
    httpOnly: false,
  });

  return response;
}
