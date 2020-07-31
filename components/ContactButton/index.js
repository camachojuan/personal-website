import { AwesomeButton } from "react-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./contactButton.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ContactButton = () => {
  return (
    <AnchorLink href="#contact">
      <AwesomeButton type="primary">
        <div className={styles.buttonContent}>
          Let's work together <FontAwesomeIcon className={styles.iconPosition} icon={faArrowRight} />
        </div>
      </AwesomeButton>
    </AnchorLink>
  );
};

export default ContactButton;
