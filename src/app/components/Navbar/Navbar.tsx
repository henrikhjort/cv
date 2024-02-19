"use client";
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  console.log('act', activeSection);

  useEffect(() => {
    const sections = ['0', '1', '2', '3'];
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].target.id);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px', threshold: 0.5 }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTarget = (targetId: string) => {
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      {['home', 'about', 'projects', 'contact'].map((label, index) => (
        <button
          key={index}
          onClick={() => scrollToTarget(index.toString())}
          className={`navbar-link ${activeSection === index.toString() ? 'active' : ''}`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
