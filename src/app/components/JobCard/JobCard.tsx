import React, { useState } from 'react';
import Image from 'next/image';

import './JobCard.css';
import type { Job } from '@/app/types/types';

interface JobCardProps {
  index: number;
  data: Job
};

const JobCard = ({ index, data }: JobCardProps) => {
  const [isFlickering, setIsFlickering] = useState(true);
  const isEven = index % 2 === 0;

  const techColorClass = isEven ? 'purple-tech' : 'orange-tech';
  const flickerClass = isFlickering ? 'flicker' : '';
  const backlightClass = isFlickering ? 'power-on' : '';
  const staticFlickerClass = isFlickering ? 'stutter' : '';
  const buttonClass = `button-power ${isFlickering ? 'button-power-on' : ''}`;
  return (
    <div className={`card-container ${techColorClass} ${flickerClass} ${backlightClass}`}>
      <div className="inner-card-container">
        <div className="mobile-image-container">
          <Image
            src={data.svg}
            alt="mankeli"
            width={15}
            height={15}
            className="mobile-image"
            priority
          />
        </div>
        <h2 className={`title ${staticFlickerClass}`}>
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
      <div className="button-row">
        <div className="button1"></div>
        <div className="button2"></div>
      </div>
      <div className="button-row2">
        <div onClick={() => setIsFlickering(!isFlickering)} className={buttonClass}></div>
        <span className="speaker-span">. . .</span>
        <span className="invisible-span">1337</span>
      </div>
    </div>
  );
};

export default JobCard;
