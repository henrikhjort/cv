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
  return (
      <div className="blueprint-card-container">
        <div className="blueprint-card-inner">
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
