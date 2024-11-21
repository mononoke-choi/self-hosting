import styles from "@/app/page.module.css";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json(),
  );

  return (
    <div className={styles.page}>
      <h3>SSG</h3>
      <code>
        <pre>{JSON.stringify(new Date())}</pre>
      </code>
      <code>
        <pre>{JSON.stringify(data)}</pre>
      </code>
    </div>
  );
}
