import { default as OriginLink } from "next/link";
import { ComponentProps } from "react";

interface LinkProps {}

export default function Link(
  props: Readonly<ComponentProps<typeof OriginLink>>,
) {
  return (
    <OriginLink
      style={{
        paddingInline: "8px",
        paddingBlock: "5px",
        display: "inline-block",
        background: "#2a2a2a",
      }}
      {...props}
    />
  );
}
