import { sleep } from "@/app/utils";

export default async function CompTwo() {
  await sleep(2000);

  return <div>CompTwo</div>;
}
