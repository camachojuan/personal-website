import ContactButton from "./../ContactButton";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <span className={styles.title}>
        Hi, I'm <span className={styles.highlight}>Juan Camacho.</span>
        <div>I'm a full-stack web developer.</div>
      </span>
      <div className={styles.contactButtonPosition}>
        <ContactButton />
      </div>
    </div>
  );
};

export default HeroSection;
