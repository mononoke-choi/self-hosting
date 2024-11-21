import "server-only";
import { sleep } from "@/app/utils";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  await sleep(1500);
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-cache",
  }).then((response) => response.json());

  return (
    <code>
      <pre>DYNAMIC {JSON.stringify(new Date())}</pre>
    </code>
  );
}
