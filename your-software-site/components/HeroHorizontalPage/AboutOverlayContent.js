"use client";
import styles from "./AboutOverlayContent.module.css";

export default function AboutOverlayContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.heading}>
          <span className={styles.headingDim}>Our </span>
          <span className={styles.headingAccent}>Story</span>
        </h2>
        <div className={styles.copy}>
          <p>
            We are a passionate team of innovators stepping boldly into the future of
            technology. As a young software startup, we are excited about the endless
            possibilities that the new era of artificial intelligence offers. Though we are
            new to the business, our vision is clear—to harness AI and creative technology
            to simplify everyday tasks and empower businesses and individuals alike.
          </p>
          <p>
            Our goal is to transform complex processes into seamless experiences,
            making technology more accessible, efficient, and impactful.
          </p>
          <p>
            We believe in innovation that serves a purpose—helping people focus less
            on tedious tasks and more on what truly matters. With a commitment to
            quality, creativity, and cutting-edge AI, we are on a mission to redefine
            how software supports life and work in the digital age.
          </p>
          <p>
            Join us on this exciting journey as we pioneer new ways to simplify the
            world through smart technology.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.dot} aria-hidden="true" />
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Our Mission</h3>
          <p className={styles.cardDesc}>
            To empower businesses with innovative digital solutions that drive growth,
            enhance efficiency, and create meaningful connections with their customers.
          </p>
        </div>
      </div>
    </div>
  );
}