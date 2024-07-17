import { FunctionComponent } from "react";
import Boxex from "./box";
import styles from "../styles/framecomponent2.module.css";
import '../styles/global2.css'
import selling from '../assets/selling.png'
import lending from '../assets/lending.png'
import commuication from '../assets/commuication.png'
export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.serviceContainerWrapper, className].join(" ")}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceWrapper}>
          <div className={styles.service} data-scroll-to="serviceContainer">
            <h1 className={styles.ourServices}>Our Services</h1>
          </div>
        </div>
        <div className={styles.serviceCards}>
          <Boxex
            ellipse26={lending}
            lendingOptions="Lending Options"
          />
          <Boxex
            ellipse26={selling}
            lendingOptions="Selling Options"
            propBackgroundColor="#fffdf0"
          />
          <Boxex
            ellipse26={commuication}
            lendingOptions="Communication"
            propBackgroundColor="#fef8f8"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
