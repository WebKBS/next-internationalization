import { useTranslations } from "next-intl";
import { Link as I18bLink } from "@/i18n/routing";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Home");

  // throw new Error("Something went wrong!");

  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <p>{t("welcome", { name: "Jane" })}</p>

      <I18bLink href="/about">About Page</I18bLink>

      <Link href="/ko">한국어</Link>
      <Link href="/en">English</Link>
      <Link href="/ja">日本語</Link>
    </main>
  );
}
