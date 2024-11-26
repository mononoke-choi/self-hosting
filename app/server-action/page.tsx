"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { benchmark } from "@/app/server-action/_block/action";

interface PageProps { }

export default function Page({ }: Readonly<PageProps>) {
  const [input, setInput] = useState("Lorem Ipsum");
  const [result, setResult] = useState<any>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await benchmark(input);

    setResult(result);
  }

  return (
    <div className={styles.page} style={{ paddingRight: "30%", paddingLeft: "30%" }}>
      <h3>Server Action</h3>
      {(result ? <pre style={{ backgroundColor: "#eee", border: "1px solid black", "margin": "48px", padding: "16px", minWidth: "800px"  }}>{result}</pre> : <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <label
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <span>Encryption input</span>
            <input type="text" name="input" value={input} onChange={e => setInput(e.target.value)} />
            <button type={"submit"} style={{ width: "100%" }}>
              Run
            </button>
          </label>
        </form>
      )}
    </div>
  )
}
