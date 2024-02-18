"use client";
import React, { useMemo, useEffect} from 'react';
import Image from 'next/image';

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
    <section className="job-wrapper" id={"0"}>
      <div className="section">
        <div className="leftSide">
          <BlueprintCard index={currentIndex} data={data} />
        </div>
        <div className="rightSide">
          <JobCard index={currentIndex} data={data} />
        </div>
      </div>
      <div className="navigator-wrapper">
        <JobNavigator />
      </div>
    </section>
  );
};

export default JobSection;
