import styles from "@/app/page.module.css";
import {
  addActionFile,
  deleteActionFile,
} from "@/app/server-action/_block/action";
import * as fs from "node:fs";
import path from "node:path";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  const files = fs.readdirSync(
    path.join(process.cwd(), "/app/server-action/_block/files"),
    {
      encoding: "utf-8",
    },
  );

  return (
    <div
      className={styles.page}
      style={{ paddingRight: "30%", paddingLeft: "30%" }}
    >
      <h3>Server Action</h3>
      <form action={addActionFile} style={{ width: "100%" }}>
        <label
          style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
        >
          <span>Add your action name: </span>
          <input type="text" name={"action-name"} />
          <button type={"submit"} style={{ width: "100%" }}>
            Add
          </button>
        </label>
      </form>
      <form
        action={deleteActionFile}
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
        >
          <span>Delete your action name: </span>
          <input type="text" name={"action-name"} />
          <button type={"submit"} style={{ width: "100%" }}>
            delete
          </button>
        </label>
      </form>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
