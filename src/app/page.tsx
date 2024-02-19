import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./components/LandingSection/LandingSection";
import { JobProvider } from "./context/JobContext";
import JobSection from "./components/JobSection/JobSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <JobProvider>
        <JobSection />
      </JobProvider>
      <ContactSection />
    </main>
  );
}
