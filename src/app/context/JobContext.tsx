"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Job } from '../types/types';
import data from '../../../data/jobs.json';

// Define a type for the context state and updater function
type JobContextType = {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context with an initial undefined value
const JobContext = createContext<JobContextType | undefined>(undefined);

// Define a type for the provider component's props
type JobProviderProps = {
  children: ReactNode;
};

// Context provider component
export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const value = { jobs, setJobs, currentIndex, setCurrentIndex};

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

// Custom hook to use the context
export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
