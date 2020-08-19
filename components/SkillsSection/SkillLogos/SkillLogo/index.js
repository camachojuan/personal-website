import PropTypes from "prop-types";
import styles from "./skillLogo.module.css";

const SkillLogo = ({ image, name }) => {
  return (
    <div>
      <img src={image} className={styles.logoImage} />
      <div className={styles.skillName}>{name}</div>
    </div>
  );
};

SkillLogo.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillLogo;
