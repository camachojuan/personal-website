import WhoIsThisGuy from "./WhoIsThisGuy";
import SkillBars from "./SkillBars";
import styles from "./skillsSection.module.css";

const SkillsSection = () => {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.elements}>
        <WhoIsThisGuy className={styles.whoIsThisGuy} />
        <div className={styles.skillBars}>
          <SkillBars />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
