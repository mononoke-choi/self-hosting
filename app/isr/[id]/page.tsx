import styles from "@/app/page.module.css";
import RevalidateButton from "@/app/isr/_block/revalidateButton";
import { Suspense } from "react";

interface PageProps {}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className={styles.page}>
      <h3>ISR</h3>
      <code>
        <pre>{JSON.stringify(new Date())}</pre>
      </code>
      <Suspense fallback={"...LOADING"}>
        <RevalidateButton IDPromise={params} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ id: "1" }];
}
export const revalidate = 10;
export const dynamicParams = true;
