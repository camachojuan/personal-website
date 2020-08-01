import PropTypes from "prop-types";
import styles from "./skillBar.module.css";
import ProgressBar from "./ProgressBar";

const SkillBar = ({ name, percentage }) => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.skillName}>{name}</div>
      <ProgressBar percentage={percentage} />
      <div className={styles.skillPercentage}>{`${percentage}%`}</div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
