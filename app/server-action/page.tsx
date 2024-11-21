import styles from "@/app/page.module.css";
import { action } from "@/app/server-action/_block/action";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  return (
    <div
      className={styles.page}
      style={{ paddingRight: "30%", paddingLeft: "30%" }}
    >
      <h3>Server Action</h3>
      <form action={action} style={{ width: "100%" }}>
        <label
          style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
        >
          <span>Write number or string</span>
          <input type="text" name={"action-name"} />
          <button type={"submit"} style={{ width: "100%" }}>
            Run
          </button>
        </label>
      </form>
    </div>
  );
}
