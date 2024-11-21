import { sleep } from "@/app/utils";
import CompTwo from "@/app/stream-render/_block/compTwo";
import { Suspense } from "react";

export default async function CompOne() {
  await sleep(2000);

  return (
    <>
      <div>CompOne</div>
      <Suspense fallback={"...LOADING INNER COMP"}>
        <CompTwo />
      </Suspense>
    </>
  );
}
