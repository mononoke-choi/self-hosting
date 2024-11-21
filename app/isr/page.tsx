import "server-only";
import styles from "@/app/page.module.css";
import { redirect } from "next/navigation";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  return (
    <form
      className={styles.page}
      action={async function (formData: FormData) {
        "use server";
        redirect(`/isr/${formData.get("url")}`);
      }}
    >
      <h3>ISR</h3>
      <label
        style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
      >
        Write random number to enter ISR page
        <input type="text" name={"url"} />
        <button type={"submit"}>Enter</button>
      </label>
    </form>
  );
}
