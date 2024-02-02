import React from 'react';

import './JobList.css';
import JobSection from '../JobSection/JobSection';
import jobs from '../../../../data/jobs.json';

const JobList: React.FC = () => {
  return (
    <div className="container">
      {jobs.map((job, index) => {
        return (
          <JobSection
            key={index}
            index={index}
            data={job}
          />
        );
      })}
    </div>
  );
};

export default JobList;
