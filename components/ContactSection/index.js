import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { AwesomeButtonProgress } from "react-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import styles from "./contactSection.module.css";

const ContactSection = () => {
  const [afterSendMessage, setAfterSendMessage] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const { control, handleSubmit, getValues } = useForm();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate = (content) => {
    const isNameInvalid = content.name === "";
    if (isNameInvalid) {
      setNameInvalid(true);
    } else {
      setNameInvalid(false);
    }
    const isEmailInvalid = !validateEmail(content.email);
    if (isEmailInvalid) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
    const isMessageInvalid = content.message === "";
    if (isMessageInvalid) {
      setMessageInvalid(true);
    } else {
      setMessageInvalid(false);
    }
    return !isNameInvalid && !isEmailInvalid && !isMessageInvalid;
  };

  const onSend = (_, next) => {
    const content = getValues(["name", "email", "message"]);
    const validationResult = validate(content);
    if (validationResult) {
      axios
        .post("api/sendEmail", content)
        .then(() => {
          setTimeout(() => {
            setAfterSendMessage("Thank you! I'll get to you ASAP.");
            next();
          }, 500);
        })
        .catch((error) => {
          setTimeout(() => {
            setAfterSendMessage("There was an error sending the message.");
            next(false, "Error!");
          }, 500);
        });
    } else {
      setTimeout(() => {
        setAfterSendMessage("Please fill out all the fields");
        next(false, "Error!");
      }, 500);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactFormTitle}>Say Hi!</div>
      <div className={styles.contactForm}>
        <FormGroup>
          <Controller
            as={Input}
            id="name"
            control={control}
            name="name"
            defaultValue=""
            placeholder="Name"
            invalid={nameInvalid}
          />
        </FormGroup>
        <FormGroup>
          <Controller
            as={Input}
            id="email"
            control={control}
            name="email"
            defaultValue=""
            placeholder="Email"
            invalid={emailInvalid}
          />
        </FormGroup>
        <FormGroup>
          <Controller
            as={Input}
            id="message"
            control={control}
            name="message"
            defaultValue=""
            placeholder="Your message"
            type="textarea"
            invalid={messageInvalid}
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
      <div className={styles.afterSendMessage}>{afterSendMessage}</div>
    </section>
  );
};

export default ContactSection;
