import PropTypes from "prop-types";
import styles from "./progressBar.module.css";

const ProgressBar = ({ percentage }) => {
  const width = `${percentage}%`;
  const remaining = `${100 - percentage}%`;
  return (
    <div className={styles.progressBar}>
      <div className={styles.skillProgress} style={{ width }} />
      <div className={styles.skillProgressRemaining} style={{ width: remaining }} />
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
