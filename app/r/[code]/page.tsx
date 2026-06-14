import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { code: string };
}) {
  redirect("https://play.google.com/store/apps/details?id=com.abdullah.quranm");
}