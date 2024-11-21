import "server-only";
import styles from "@/app/page.module.css";

interface PageProps {}

export default function Page({}: Readonly<PageProps>) {
  return <div className={styles.page}>Done</div>;
}
