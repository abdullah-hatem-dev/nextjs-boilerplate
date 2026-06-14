import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function Page({
  params,
}: {
  params: { code: string };
}) {
  const code = params.code;

  // تسجيل الريفرال
  await supabase.from("referral_events").insert({
    referrer_code: code,
    created_at: new Date().toISOString(),
  });

  const storeUrl =
    "https://play.google.com/store/apps/details?id=com.abdullah.quranm";

  redirect(storeUrl);
}