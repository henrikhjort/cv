import React from 'react';
import './AboutSection.css';
import Grid from '../Grid/Grid';

const AboutSection = () => {
  return (
    <section className="about-wrapper" id="1">
      <div className="left">
        <h2>about</h2>
        <div className="about-text-wrapper">
          <p className="body-text about-text">I like building software.</p>
          <p className="body-text about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="body-text about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="right">
        <Grid />
      </div>
    </section>
  );
};

export default AboutSection;
