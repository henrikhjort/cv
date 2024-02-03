import React from 'react';
import Image from 'next/image';
import './LandingSection.css';

const LandingSection: React.FC = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/henrik-hjort-50944b107';
  return (
    <div className="landing-section">
      <div className="contact-info">
        <a href={linkedinUrl} className="image-container">
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
          <p className="contact-info-email">
            <a href="mailto:henrik.m.hjort@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              henrik.m.hjort(at)gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
