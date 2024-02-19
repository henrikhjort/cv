import React from 'react';
import './AboutSection.css';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

const AboutSection = () => {
  return (
    <section className="about-wrapper" id="1">
      <div className="left">
        <h2>about</h2>
        <div className="about-text-wrapper">
          <p className="body-text about-text">I like to build web things.</p>
          <p className="body-text about-text">{"I'm a software developer with 5+ years of experience in consulting."}</p>
          <p className="body-text about-text">{"Currently I enjoy working with React, React Native, and Node.js."}</p>
          <p className="body-text about-text">
            {"Scroll down to see projects that I have worked on."}
            <span className="cursor">_</span>
          </p>
          <Button title="download_cv()" file="/cv_henrik_hjort.pdf" />
        </div>
      </div>
      <div className="right">
        <Grid />
      </div>
    </section>
  );
};

export default AboutSection;
