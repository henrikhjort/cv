import React from 'react';
import Image from 'next/image';
import "./page.css";

export default function AdPage() {
  return (
    <div className="ad-container">
      <div className="row">
        <div className="left">
          <h1 className="big-title">Need</h1>
          <Image
            src={'/qr-code.svg'}
            alt="QR code for contact information"
            width={156}
            height={150}
            className="image"
            priority
          />
        </div>
        <div className="right">
          <h1 className="big-title green">code?</h1>
          <h2 className="small-title grey">TypeScript?</h2>
          <h2 className="small-title white">Azure?</h2>
          <h2 className="small-title green">React?</h2>
          <h2 className="small-title grey">Node?</h2>
          <h2 className="small-title white">Next?</h2>
        </div>
      </div>
      <p className="contact-info-email green mail">
        henrik.m.hjort@gmail.com
      </p>
      <p className="contact-info-email white url">
        henrikhjort.com
      </p>
    </div>
  );
}
