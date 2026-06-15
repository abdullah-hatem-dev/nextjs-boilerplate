import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code;

  const response = NextResponse.redirect(
    "https://play.google.com/store/apps/details?id=com.abdullah.quranm"
  );

  response.headers.set(
    "Set-Cookie",
    `referral_code=${code}; Path=/; Max-Age=2592000`
  );

  return response;
}
