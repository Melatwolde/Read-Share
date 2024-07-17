import { FunctionComponent } from "react";
import '../styles/global2.css'
import styles from "../styles/contact.module.css";

export type ContactContentType = {
  className?: string;
};

const ContactContent: FunctionComponent<ContactContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.contactContent, className].join(" ")}
      data-scroll-to="contactContentContainer"
    >
      <div className={styles.contactHeading}>
        <div className={styles.letsKnow}>Let’s know</div>
        <h2 className={styles.wantToContact}>Want to Contact US?</h2>
      </div>
      <div className={styles.separator} />
      <div className={styles.bottom}>
        <div className={styles.messageInput}>
          <div className={styles.writeYourMessage}>Write Your Message</div>
        </div>
        <button className={styles.button}>
          <div className={styles.send}>Send</div>
        </button>
      </div>
    </div>
  );
};

export default ContactContent;
