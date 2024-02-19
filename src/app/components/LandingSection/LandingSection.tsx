"use client";
import React from 'react';
import Image from 'next/image';
import './LandingSection.css';
import Button from '../Button/Button';

const LandingSection: React.FC = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/henrik-hjort-50944b107';

  const scrollToTarget = () => {
    const targetDiv = document.getElementById('3');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  
  return (
    <section className="landing-section" id="0">
      <div className="contact-info">
        <div className="contact-rows">
          <div className="name-container">
            <div className="first-name-container">
              <h1 className="first-name"><a href={linkedinUrl}>henrik</a></h1>
            </div>
            <div className="last-name-container">
              <h1 className="last-name"><a href={linkedinUrl}>hjort</a></h1>
            </div>
          </div>
          <p className="contact-info-title">software developer</p>
          <div className="socials-row">
            <p className="socials-item">
              <a href="https://github.com/henrikhjort" style={{ textDecoration: 'none', color: 'inherit' }}>github</a>
            </p>
            <p className="socials-item">
              <a href={linkedinUrl} style={{ textDecoration: 'none', color: 'inherit' }}>linkedin</a>
            </p>
          </div>
          <Button title='contact()' onClick={scrollToTarget}/>
          <p className="sorry">mobile layout in progress, sorry</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
