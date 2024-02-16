"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import './JobSection.css';
import JobCard from '../JobCard/JobCard';
import BlueprintCard from '../BlueprintCard/BlueprintCard';
import type { Job } from '@/app/types/types';

interface JobSectionProps {
  index: number;
  data: Job
};

const JobSection = ({ index, data }: JobSectionProps) => {
  const [label, setLabel] = useState('');
  const [imagePosition, setImagePosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

    setLabel(`Exhibit ${getRandomNumber()}${getRandomLetter()}`);
    const randomX = Math.floor(Math.random() * 100) + '%';
    const randomY = Math.floor(Math.random() * 100) + '%';
    setImagePosition({ x: randomX, y: randomY });
  }, []);

  return (
    <div className="section" id={index.toString()}>
      <div className="leftSide">
        <BlueprintCard index={index} data={data} />
        {/*
        <div className="image-label-container">
          <h3 className="image-label">{label}</h3>
        </div>
        <div className="image-wrapper">
          <Image
            src={data.svg}
            alt="mankeli"
            width={500}
            height={800}
            className="image"
            layout="responsive"
            priority
          />
        </div>
          <div className="overlay-image-container">
            <Image
              src="/pattern.svg"
              alt="Pattern Overlay"
              layout="fill"
              objectFit="cover"
              objectPosition={`${imagePosition.x} ${imagePosition.y}`}
              className="overlay-image"
            />
          </div>
        */}
      </div>
      <div className="rightSide">
        <JobCard index={index} data={data} />
      </div>
    </div>
  );
};

export default JobSection;
