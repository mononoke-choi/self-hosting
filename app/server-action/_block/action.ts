"use server";

import { expirePath } from "next/cache";
import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";

export async function addActionFile(formData: FormData) {
  console.log("add");
  const actionName = formData.get("action-name");

  if (!actionName) {
    return;
  }

  fs.writeFileSync(
    path.join(process.cwd(), `/app/server-action/_block/files/${actionName}`),
    "",
  );

  expirePath("/server-action");
  expirePath("/server-action/list");
  redirect("/server-action/list");
}

export async function deleteActionFile(formData: FormData) {
  console.log("delete");
  const actionName = formData.get("action-name");
  const files = fs.readdirSync(
    path.join(process.cwd(), "/app/server-action/_block/files"),
    {
      encoding: "utf-8",
    },
  );

  if (!actionName || !files.includes(actionName.toString())) {
    return;
  }

  fs.rmSync(
    path.join(process.cwd(), `/app/server-action/_block/files/${actionName}`),
  );

  expirePath("/server-action");
}
