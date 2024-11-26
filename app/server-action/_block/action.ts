"use server";

import { redirect } from "next/navigation";
import Benchmark from "benchmark";
import { BinaryToTextEncoding, createHash, publicEncrypt } from "crypto";

export async function action(formData: FormData) {
  const actionName = formData.get("action-name")?.toString();
  const isNotValid = isNaN(parseInt(actionName ?? "", 10));

  if (isNotValid) {
    throw Error("Is not number type");
  }

  await benchmark(actionName || "Lorem Ipsum");

  redirect("/server-action/done");
}

async function benchmark(data: string) {
  const suite = new Benchmark.Suite;

  const scenarios: { alg: string, digest: BinaryToTextEncoding }[] = [
    { alg: 'sha1', digest: 'hex' },
  ];

  for (const { alg, digest } of scenarios) {
    suite.add(`${alg}-${digest}`, () => createHash(alg).update(data).digest(digest));
  }

  suite.on('cycle', function(event: any) {
    console.log(String(event.target));
  }).run();
}
