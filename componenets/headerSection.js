import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.container}>
      <h1>Full Stack Developer</h1>
      <a href="#Contact">
        <h5>
          GET IN TOUCH{" "}
          <span>
            <img src="/images/rightArrow.png" alt="" />
          </span>
        </h5>
      </a>
    </div>
  );
}
