import styles from "./ContactContent.module.css";

export default function ContactContent() {
  return (
    <section className={styles.section} aria-label="Contact">
      <div className={styles.grid}>
        {/* Left: Start Your Project form */}
        <div className={styles.formPanel}>
          <h2 className={styles.heading}>Start Your Project</h2>
          <p className={styles.subheading}>Fill out the form below and we'll get back to you within 24 hours.</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" type="text" required placeholder="Your full name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" placeholder="Your company name" />
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="service">Service Needed *</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Web & Mobile Apps</option>
                  <option>AI & Machine Learning</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Domain & Hosting</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="budget">Project Budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option>$1k – $5k</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="details">Project Details *</label>
              <textarea id="details" name="details" rows={6} required placeholder="Tell us about your project, goals, and any specific requirements..." />
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Information cards */}
        <div className={styles.infoPanel}>
          <h2 className={styles.headingLight}>Contact Information</h2>
          <p className={styles.helper}>Reach us via email, phone, or visit our office — we’re ready to help.</p>

          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.cardIcon}>✉️</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Email Us</h3>
                <div className={styles.value}>info@tapitsoftwares.tech</div>
                <div className={styles.desc}>Send us an email anytime</div>
                <a href="mailto:info@tapitsoftwares.tech" className={styles.link}>Contact Now →</a>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>📞</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Call Us</h3>
                <div className={styles.value}>+255 740 577 877</div>
                <div className={styles.desc}>Mon–Fri from 8am to 5pm EAT</div>
                <a href="tel:+255740577877" className={styles.link}>Contact Now →</a>
              </div>
            </article>

            <article className={`${styles.card} ${styles.addressCard}`}>
              <div className={styles.cardIcon}>📍</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Visit Us</h3>
                <div className={styles.value}>Sanawari, Arusha</div>
                <div className={styles.desc}>Arusha, Tanzania</div>
                <a href="#map" className={styles.link}>Contact Now →</a>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon}>🕒</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Business Hours</h3>
                <div className={styles.value}>Monday – Friday</div>
                <div className={styles.desc}>8:00 AM – 5:00 PM EAT</div>
              </div>
            </article>
          </div>

          <div className={styles.faqCard}>
            <h3 className={styles.faqTitle}>Quick Questions?</h3>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h4 className={styles.q}>How quickly can you start?</h4>
                <p className={styles.a}>We typically begin new projects within 1–2 weeks of contract signing.</p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.q}>Do you offer ongoing support?</h4>
                <p className={styles.a}>Yes, we provide comprehensive support and maintenance packages.</p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.q}>Can you work with our existing team?</h4>
                <p className={styles.a}>Absolutely! We love collaborating with in‑house teams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}