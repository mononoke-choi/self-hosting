import "server-only";
import styles from "@/app/page.module.css";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{ flag: "true" | "false" }>;
}

export default async function Page({ params }: Readonly<PageProps>) {
  const flag = (await params).flag;

  return (
    <div className={styles.page}>
      <h3>Middleware</h3>
      <h4>flag: {flag}</h4>
      <form
        action={async () => {
          "use server";
          const cookie = await cookies();
          const originValue = cookie.get("self-hosting")?.value.toString();

          cookie.set({
            name: "self-hosting",
            value: originValue === "true" ? "false" : "true",
          });
        }}
      >
        <button>Toggle cookie</button>
      </form>
    </div>
  );
}
