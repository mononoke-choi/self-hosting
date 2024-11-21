import "server-only";

interface PageProps {}

export default function Page({}: Readonly<PageProps>) {
  return (
    <code>
      <pre>STATIC {JSON.stringify(new Date())}</pre>
    </code>
  );
}
