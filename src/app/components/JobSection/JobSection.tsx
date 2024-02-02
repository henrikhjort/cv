"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import './JobSection.css';
import JobCard from '../JobCard/JobCard';
import type { Job } from '@/app/types/types';

interface JobSectionProps {
  index: number;
  data: Job
};

const JobSection = ({ index, data }: JobSectionProps) => {
  const ref = useRef(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

    setLabel(`Exhibit ${getRandomNumber()}${getRandomLetter()}`);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          console.log(`${index} is in view`);
          // Execute your logic here
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  const getRandomLetter = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  return (
    <div className="section" id={index.toString()}>
      <div className="leftSide">
        <div className="image-label-container">
          <h3 className="image-label">{label}</h3>
        </div>
        <Image
          src={data.svg}
          alt="mankeli"
          width={600}
          height={1000}
          className="image"
          priority
        />
      </div>
      <div className="rightSide">
        <JobCard index={index} data={data} />
      </div>
    </div>
  );
};

export default JobSection;
