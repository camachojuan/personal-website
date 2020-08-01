import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AwesomeButtonProgress } from "react-awesome-button";
import styles from "./sendButton.module.css";

const SendButton = ({ onSend }) => {
  return (
    <AwesomeButtonProgress
      type="primary"
      action={(element, next) => onSend(element, next)}
      size="large"
      resultLabel="Sent!"
    >
      <div className={styles.buttonContent}>
        Send <FontAwesomeIcon className={styles.iconPosition} icon={faEnvelope} />
      </div>
    </AwesomeButtonProgress>
  );
};

SendButton.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default SendButton;
