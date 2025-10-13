import React from 'react';
import styles from './ServicesProcessOverlayContent.module.css';

const steps = [
  {
    key: 'discovery',
    title: 'Discovery & Planning',
    text:
      'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
    color: '#c79211', // gold accent
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor"/>
        <rect x="3" y="11" width="14" height="2" rx="1" fill="currentColor"/>
        <rect x="3" y="16" width="10" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: 'design',
    title: 'Design & Prototyping',
    text:
      'Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product before development begins.',
    color: '#3bb273', // green accent
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v12" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 12h12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key: 'development',
    title: 'Development & Testing',
    text:
      'We build your solution using agile methodologies, with continuous testing and quality assurance throughout the development process.',
    color: '#1f2937', // near-black accent
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="9" width="4" height="6" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: 'deployment',
    title: 'Deployment & Support',
    text:
      'We deploy your solution to production and provide ongoing support, maintenance, and updates to ensure optimal performance.',
    color: '#c79211',
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 12h4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function ServicesProcessOverlayContent() {
  return (
    <div className={styles.wrapper}>
      {steps.map((s) => (
        <div key={s.key} className={styles.row}>
          <div className={styles.iconWrap} style={{ color: s.color }}>{s.svg}</div>
          <div className={styles.body}>
            <div className={styles.title}>{s.title}</div>
            <div className={styles.desc}>{s.text}</div>
          </div>
          <button className={styles.arrowBtn} aria-label="Details">
            <span aria-hidden>→</span>
          </button>
        </div>
      ))}
    </div>
  );
}