import styles from "@/app/page.module.css";
import ClientComp from "@/app/csr/clientComp";

interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  return (
    <div className={styles.page}>
      <h3>CSR</h3>
      <ClientComp />
    </div>
  );
}
