import fs from "node:fs";
import path from "node:path";
import styles from "@/app/page.module.css";

export default async function Page() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "/app/server-action/_block/files"),
    {
      encoding: "utf-8",
    },
  );

  return (
    <div className={styles.page}>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
