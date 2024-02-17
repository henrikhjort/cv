"use client";
import styles from "./page.module.css";
import LandingSection from "./components/LandingSection/LandingSection";
import { JobProvider } from "./context/JobContext";
import JobSection from "./components/JobSection/JobSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <JobProvider>
        <LandingSection />
        <JobSection />
      </JobProvider>
    </main>
  );
}
