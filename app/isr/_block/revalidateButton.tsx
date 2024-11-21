import { expirePath } from "next/cache";

export default async function RevalidateButton({
  IDPromise,
}: {
  IDPromise: Promise<{ id: string }>;
}) {
  const id = (await IDPromise).id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${Math.ceil(Math.random() * 10)}`,
  ).then((response) => response.json());
  console.log("resolve promise with use()", id, data);

  return (
    <>
      <code>
        <pre>{JSON.stringify(data)}</pre>
      </code>
      <button
        onClick={async () => {
          "use server";
          console.log("revalidate", `/isr/${id}`);
          expirePath(`/isr/${id}`, "page");
        }}
      >
        Revalidate
      </button>
    </>
  );
}
