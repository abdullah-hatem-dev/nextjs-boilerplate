import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { code: string };
}) {
  const code = params.code;

  const storeUrl =
    "https://play.google.com/store/apps/details?id=com.abdullah.quranm";

  redirect(storeUrl);
}
