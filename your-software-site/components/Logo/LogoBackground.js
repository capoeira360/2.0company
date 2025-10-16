import React from 'react';
import styles from './LogoBackground.module.css';

const LogoBackground = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.logoShape}>
        <div className={styles.centerCircle}></div>
        <div className={styles.spike1}></div>
        <div className={styles.spike2}></div>
        <div className={styles.spike3}></div>
        <div className={styles.spike4}></div>
        <div className={styles.spike5}></div>
        <div className={styles.spike6}></div>
        <div className={styles.spike7}></div>
        <div className={styles.spike8}></div>
      </div>
    </div>
  );
};

export default LogoBackground;