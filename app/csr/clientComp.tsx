"use client";
import { useEffect, useState } from "react";

export default function ClientComp() {
  const [value, setValue] = useState<any>(null);

  useEffect(function () {
    console.log(navigator);
    setValue(navigator.userAgent);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <code>{JSON.stringify(value, undefined, "  ")}</code>
    </div>
  );
}
