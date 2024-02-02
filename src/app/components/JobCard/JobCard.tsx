import React from 'react';

import './JobCard.css';
import type { Job } from '@/app/types/types';

interface JobCardProps {
  index: number;
  data: Job
};

const JobCard = ({ index, data }: JobCardProps) => {
  const isEven = index % 2 === 0;
  const techColorClass = isEven ? 'purple-tech' : 'orange-tech';
  return (
    <div className={`card-container ${techColorClass}`}>
      <div className="inner-card-container">
        <h2 className="title">
          {data.title}
          {data.classified ? (
            <span className="classified-text">[CONFIDENTAL]</span>
          ) : null}
        </h2>
        <h4 className="subtitle">{data.role}</h4>
        <p className="date-text">{data.startDate} - {data.endDate}</p>
        <div className="body-container">
          <p className="body-text">
            {data.body}
            <span className="cursor">_</span>
          </p>
          {data.technologies ? (
            <div className="tech-container">
              <h4 className={`tech-title ${techColorClass}`}>Technologies</h4>
              <p className="tech-text">{data.technologies.join(', ')}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="button-row">
        <div className="button1"></div>
        <div className="button2"></div>
      </div>
    </div>
  );
};

export default JobCard;
