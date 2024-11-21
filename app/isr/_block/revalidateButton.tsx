import { revalidatePath } from "next/cache";

export default async function RevalidateButton({
  IDPromise,
}: {
  IDPromise: Promise<{ id: string }>;
}) {
  const id = (await IDPromise).id;

  return (
    <>
      <button
        onClick={async () => {
          "use server";
          console.log("revalidate", `/isr/${id}`);
          revalidatePath(`/isr/${id}`, "layout");
        }}
      >
        Revalidate
      </button>
    </>
  );
}
