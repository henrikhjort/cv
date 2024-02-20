import React, { useState } from 'react';
import Image from 'next/image';

import './JobCard.css';
import type { Job } from '@/app/types/types';
import BlueprintCard from '../BlueprintCard/BlueprintCard';

interface JobCardProps {
  index: number;
  data: Job
};

const JobCard = ({ index, data }: JobCardProps) => {
  const [isFlickering, setIsFlickering] = useState(true);
  const isEven = index % 2 === 0;

  const techColorClass = isEven ? 'purple-tech' : 'orange-tech';
  const backlightClass = isFlickering ? 'power-on' : '';
  const staticFlickerClass = isFlickering ? 'stutter' : '';
  const buttonClass = `button-power ${isFlickering ? 'button-power-on' : ''}`;
  return (
    <div className={`card-container ${techColorClass}`}>
      <div className={`inner-card-container ${backlightClass}`}>
        <div className="card-left">
          <h2 className={`title ${staticFlickerClass}`}>
            {data.title}
            {data.classified ? (
              <span className="classified-text">[CONFIDENTIAL]</span>
            ) : null}
          </h2>
          <h4 className="subtitle">{data.role}</h4>
          <p className="date-text">{data.startDate} - {data.endDate}</p>
          <div className="body-container">
            <p className="body-text">
              {data.body}
              {isFlickering ? (
                <span className="cursor">_</span>) : null}
            </p>
            {data.technologies ? (
              <div className="tech-container">
                <h4 className={`tech-title ${techColorClass}`}>Technologies</h4>
                <p className="tech-text">{data.technologies.join(', ')}</p>
              </div>
            ) : null}
            {data.url ? (
              <p className="job-url"><a href={data.url}>github</a></p>
            ): null}
          </div>
        </div>
        <div className="card-right">
          <BlueprintCard index={index} data={data} />
        </div>
      </div>
      <div className="button-row">
        <div className="button1"></div>
        <div className="button2"></div>
      </div>
      <div className="button-row2">
        <div onClick={() => setIsFlickering(!isFlickering)} className={buttonClass}></div>
      </div>
    </div>
  );
};

export default JobCard;
