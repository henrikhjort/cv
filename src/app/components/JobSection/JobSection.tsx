"use client";
import React, { useMemo, useEffect} from 'react';

import './JobSection.css';
import JobCard from '../JobCard/JobCard';
import BlueprintCard from '../BlueprintCard/BlueprintCard';
import JobNavigator from '../JobNavigator/JobNavigator';
import { useJobs } from '@/app/context/JobContext';

const JobSection = () => {
  const { currentIndex, setCurrentIndex, jobs } = useJobs();
  const data = useMemo(() => jobs[currentIndex], [jobs, currentIndex]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : jobs.length - 1);
          break;
        case 'ArrowRight':
          setCurrentIndex((prevIndex) => prevIndex < jobs.length - 1 ? prevIndex + 1 : 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCurrentIndex, jobs.length]);
  return (
    <section className="job-wrapper" id={"2"}>
      <div className="job-left">
        <h2>projects</h2>
        <div className="about-text-wrapper-job">
          <p className="body-text about-text">I have worked on a variety of different projects as a full stack developer.</p>
          <p className="body-text about-text">{"I have experience in leading development teams and managing client relationships."}</p>
          <p className="body-text about-text">{"This is a collection of some of the things I have worked on both professionally and unprofessionally."}</p>
          <p className="body-text about-text">
            {"Use arrow keys to navigate through the projects."}
            <span className="cursor">_</span>
          </p>
        </div>
      </div>
      <div className="job-right">
        <JobCard index={currentIndex} data={data} />
        <JobNavigator />
      </div>
    </section>
  );
};

export default JobSection;
