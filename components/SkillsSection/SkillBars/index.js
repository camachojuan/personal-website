import SkillBar from "./SkillBar";
import styles from "./skillBars.module.css";

const SkillBars = () => {
  return (
    <div className={styles.skillBars}>
      <SkillBar name="React" percentage={100} />
      <SkillBar name="GraphQL" percentage={100} />
      <SkillBar name="Javascript" percentage={100} />
      <SkillBar name="AWS" percentage={80} />
      <SkillBar name="Node.js" percentage={70} />
      <SkillBar name="Serverless" percentage={70} />
    </div>
  );
};

export default SkillBars;
