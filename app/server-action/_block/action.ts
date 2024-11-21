"use server";

import { sleep } from "@/app/utils";
import { redirect } from "next/navigation";

export async function action(formData: FormData) {
  const actionName = formData.get("action-name")?.toString();
  const isNotValid = isNaN(parseInt(actionName ?? "", 10));
  console.log("Action");

  if (isNotValid) {
    throw Error("Is not number type");
  }

  await heavyComputation();
  redirect("/server-action/done");
}

async function heavyComputation() {
  await sleep(1000);
}
