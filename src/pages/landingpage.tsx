import { FunctionComponent } from "react";
import FrameComponent4 from "../components/framecomponent4";
import FrameComponent3 from "../components/framecomponent3";
import FrameComponent2 from "../components/framecomponent2";
import FrameComponent1 from "../components/framecomponent1";
import ContactContent from "../components/contact";
import FrameComponent0 from "../components/framecomponnent0";
import '../styles/global2.css'
import styles from "../styles/landing.module.css";
import lamp from '../assets/lamp.png'
import line from '../assets/line.png'

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.pathParent}>
        <img
          className={styles.pathIcon}
          loading="lazy"
          alt=""
          src={line}
        />
        <FrameComponent4 />
        <img
          className={styles.image61Icon}
          loading="lazy"
          alt=""
          src= {lamp}
        />
        <FrameComponent3 />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <footer className={styles.contactContentParent}>
        <ContactContent />
        <FrameComponent0 />
      </footer>
    </div>
  );
};

export default LandingPage;
