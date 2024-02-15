import Head from 'next/head'
import styles from "./page.module.css";
import JobList from "./components/JobList/JobList";
import LandingSection from "./components/LandingSection/LandingSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingSection />
      <JobList />
    </main>
  );
}
