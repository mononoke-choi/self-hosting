"use client";

import "client-only";
import { use } from "react";

export default function RevalidateButtonClient({
  IDPromise,
}: {
  IDPromise: Promise<{ id: string }>;
}) {
  return (
    <>
      <button
        onClick={async () => {
          const data = await IDPromise;
          fetch(`/api/revalidate?path=/isr/${data.id}`);
        }}
      >
        Revalidate
      </button>
    </>
  );
}
