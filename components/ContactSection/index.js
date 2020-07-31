import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { AwesomeButtonProgress } from "react-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./contactSection.module.css";
import axios from "axios";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [afterSendMessage, setAfterSendMessage] = useState("")

  const onSend = async (element, next) => {
    const content = { name, email, message };
    axios.post("api/sendEmail", content).then(() => {
      setAfterSendMessage("Thank you! I'll get to you ASAP.")
      next()
    }).catch(error => {
      setAfterSendMessage("There was an error sending the message.")
      next(false, "Error!")
  });;
  };
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactFormTitle}>Say Hi!</div>

      <div className={styles.contactForm}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>

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
      </div>
      <div className={styles.afterSendMessage} >
      {afterSendMessage}
      </div>
    </section>
  );
};

export default ContactSection;
