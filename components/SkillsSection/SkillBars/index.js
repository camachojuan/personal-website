import SkillBar from "./SkillBar";
import styles from "./skillBars.module.css";

const SkillBars = () => {
  return (
    <div className={styles.skillBars}>
      <SkillBar name="React" percentage={90} />
      <SkillBar name="Javascript" percentage={90} />
      <SkillBar name="GraphQL" percentage={90} />
      <SkillBar name="AWS" percentage={70} />
      <SkillBar name="Node.js" percentage={65} />
      <SkillBar name="Serverless" percentage={65} />
    </div>
  );
};

export default SkillBars;
