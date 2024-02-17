"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import './BlueprintCard.css';
import type { Job } from '@/app/types/types';

interface JobSectionProps {
  index: number;
  data: Job
};

const BlueprintCard = ({ index, data }: JobSectionProps) => {
  const whichSvg = () => {
    if (Math.random() > 0.5) {
      return '/pattern.svg';
    }
    return '/pattern2.svg';
  }
  return (
      <div className="blueprint-card-container">
        <div className="blueprint-card-inner">
          <div className="blueprint-overlay-container">
            <Image
              src={whichSvg()}
              alt="Pattern Overlay"
              layout="fill"
              objectFit="cover"
              objectPosition={`${Math.floor(Math.random() * 100) + '%'} ${Math.floor(Math.random() * 100) + '%'}`}
              className="overlay-image"
            />
          </div>
        <div className="blueprint-image-wrapper">
          <Image
            src={data.svg}
            alt="mankeli"
            width={500}
            height={600}
            className="blueprint-image"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
        </div>
      </div>
  );
};

export default BlueprintCard;
