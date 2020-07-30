import { AwesomeButton } from "react-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./contactButton.module.css";

const ContactButton = () => {
  return (
    <AwesomeButton type="primary" className={styles.awsbtn}>
      <div className={styles.buttonContent}>
        Let's work together <FontAwesomeIcon className={styles.iconPosition} icon={faArrowRight} />
      </div>
    </AwesomeButton>
  );
};

export default ContactButton;
