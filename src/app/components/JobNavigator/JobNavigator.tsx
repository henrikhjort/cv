import React from 'react';
import { useJobs } from '@/app/context/JobContext';
import './JobNavigator.css';  


const JobNavigator = () => {
  const { jobs, currentIndex, setCurrentIndex } = useJobs();

  const isSelected = (index: number) => {
    return index === currentIndex ? 'selected-badge' : '';
  }

  return (
    <div className="job-navigator">
      {jobs.map((job, index) => (
        <button
          key={index}
          className={`job-badge ${isSelected(index)}`}
          onClick={() => setCurrentIndex(index)}
        >
          {index}
        </button>
      ))}
    </div>
  );
};

export default JobNavigator;
