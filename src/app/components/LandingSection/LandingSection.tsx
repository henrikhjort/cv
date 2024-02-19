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
        <a href={linkedinUrl} className="image-container">
          <div className="image-container">
            <Image
              src={'/silma.svg'}
              alt="subject_0"
              width={300}
              height={200}
              className="image"
              priority
            />
            <p className="image-text">subject_0</p>
          </div>
        </a>
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
          <Button title='contact()' onClick={scrollToTarget}/>
          <div className="socials-row">
            <p className="socials-item">
              <a href="https://github.com/henrikhjort" style={{ textDecoration: 'none', color: 'inherit' }}>github</a>
            </p>
            <p className="socials-item">
              <a href={linkedinUrl} style={{ textDecoration: 'none', color: 'inherit' }}>linkedin</a>
            </p>
          </div>
          <p className="sorry">mobile layout in progress, sorry</p>
        </div>
      </div>
      {/*
      <div className="scroll-indicator" onClick={scrollToTarget}>
        <h2 className="scroll-indicator-title">see my work</h2>
        <Image src="/down.svg" alt="Scroll Down" width={50} height={50} />
      </div>
  */}
    </section>
  );
};

export default LandingSection;
