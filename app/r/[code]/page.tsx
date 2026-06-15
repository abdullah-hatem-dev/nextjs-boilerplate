import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { code: string };
}) {
  const code = params.code;

  // نخزن الكود في Cookie
  const cookieStore = await cookies();

  cookieStore.set("referral_code", code, {
    path: "/",
    httpOnly: false,
  });

  const storeUrl =
    "https://play.google.com/store/apps/details?id=com.abdullah.quranm";

  redirect(storeUrl);
}
