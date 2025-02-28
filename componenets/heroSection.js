import styles from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <section className={`${styles.container1} ${styles.childContainer}`}>
        <div className={styles.infoSection}>
          <h1>Fit to code,</h1>
          <h1>Built to lead.</h1>
          <p>
            Blending technology with a problem-solving mindset,
            <br />
            Driven by curiosity and continuous growth.
            <br />
            Balancing strength and intellect in every pursuit,
            <br />
            Always striving to build and improve.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="/images/profile3.jpg" alt="" className={styles.profile}/>
          <img src="/images/profile4.jpg" alt="" className={styles.profile}/>
          <img src="/images/heart.png" alt="" className={styles.heart}/>
        </div>
      </section>
      <section
        className={`${styles.container2} ${styles.childContainer}`}
      ></section>
      <section
        className={`${styles.container3} ${styles.childContainer}`}
      ></section>
      <section
        className={`${styles.container4} ${styles.childContainer}`}
      ></section>
    </div>
  );
}
