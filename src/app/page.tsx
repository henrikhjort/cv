import styles from "./page.module.css";
import JobList from "./components/JobList/JobList";

export default function Home() {
  return (
    <main className={styles.main}>
      <JobList />
    </main>
  );
}
