import React from 'react';
import Image from 'next/image';
import './LandingSection.css';

// Functional component with TypeScript
const LandingSection: React.FC = () => {
  return (
    <div className="landing-section">
      <div className="contact-info">
        <div className="image-container">
          <Image
            src={'/meitsi.svg'}
            alt="mankeli"
            width={400}
            height={300}
            className="image"
            priority
          />
          <p className="image-text">subject</p>
        </div>
        <div className="contact-rows">
          <div className="name-container">
            <div className="first-name-container">
              <h1 className="first-name">henrik</h1>
            </div>
            <div className="last-name-container">
              <h1 className="last-name">hjort</h1>
            </div>
          </div>
          <p className="contact-info-title">software developer</p>
          <p className="contact-info-email">
            <a href="mailto:henrik.m.hjort@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              henrik.m.hjort(at)gmail.com
            </a>
          </p>
          <div className="bottom-accent"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
