import "server-only";
import { sleep } from "@/app/utils";

interface SlowCompProps {}

export default async function SlowComp({}: Readonly<SlowCompProps>) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${Math.ceil(Math.random() * 10)}`,
    {
      cache: "no-cache",
    },
  ).then((response) => response.json());
  await sleep(3000);

  return <div>SlowComp</div>;
}
