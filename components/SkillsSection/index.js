import WhoIsThisGuy from "./WhoIsThisGuy";
import SkillLogos from "./SkillLogos";
import styles from "./skillsSection.module.css";

const SkillsSection = () => {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.elements}>
        <WhoIsThisGuy className={styles.whoIsThisGuy} />
        <div className={styles.skillBars}>
          <SkillLogos />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
