import SkillLogo from "./SkillLogo";
import styles from "./skillLogos.module.css";

const SkillsSection = () => {
  return (
    <>
      <div className={styles.logos}>
        <SkillLogo image="/images/skill-logos/javascript.svg" name="JavaScript" />
        <SkillLogo image="/images/skill-logos/react.svg" name="React" />
        <SkillLogo image="/images/skill-logos/graphql.svg" name="GraphQL" />
        <SkillLogo image="/images/skill-logos/nodejs.svg" name="Node.js" />
        <SkillLogo image="/images/skill-logos/aws.svg" name="AWS" />
        <SkillLogo image="/images/skill-logos/serverless.svg" name="Serverless" />
      </div>
      <div className={styles.manyMore}>and many more...</div>
    </>
  );
};

export default SkillsSection;
