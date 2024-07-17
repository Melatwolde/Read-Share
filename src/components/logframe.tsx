import { FunctionComponent, useCallback } from "react";
import styles from "../styles/framex.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponentx: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.welcomeBackWrapper}>
        <h1 className={styles.welcomeBack}>Welcome Back!</h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.fullNameWrapper}>
          <div className={styles.fullName}>Full Name</div>
        </div>
        <div className={styles.passwordWrapper}>
          <div className={styles.password}>Password</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.loginUpWrapper} onClick={onFrameContainerClick}>
          <div className={styles.loginUp}>Login up</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponentx;
