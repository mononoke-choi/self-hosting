import styles from "@/app/page.module.css";
import CompOne from "@/app/stream-render/_block/compOne";
import { Suspense } from "react";
import { sleep } from "@/app/utils";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  await sleep(3000);

  return (
    <div className={styles.page}>
      <h3>Stream Render</h3>
      <Suspense fallback={"...LOADING PARENT COMP"}>
        <CompOne />
      </Suspense>
    </div>
  );
}
export const dynamic = "force-dynamic";
