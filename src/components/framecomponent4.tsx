import { FunctionComponent, useCallback } from "react";
import styles from "../styles/framecomponent4.module.css";
import '../styles/global2.css'
import logo from '../assets/logo.png'

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='serviceContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContentContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSearchClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onSearchClick1 = useCallback(() => {
    // Please sync "SignUp" to the project
  }, []);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <header className={styles.image50Parent}>
          <img
            className={styles.image50Icon}
            loading="lazy"
            alt=""
            src={logo}
          />
          <div className={styles.frameContainer}>
            <div className={styles.landingPageBarParent}>
              <nav className={styles.landingPageBar}>
                <a className={styles.home}>Home</a>
                <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                  About Us
                </a>
                <a className={styles.contact} onClick={onContactTextClick}>
                  Contact
                </a>
              </nav>
              <div className={styles.searchParent}>
                <button className={styles.search} onClick={onSearchClick}>
                  <a className={styles.login}>Login</a>
                </button>
                <button className={styles.search1} onClick={onSearchClick1}>
                  <a className={styles.signUp}>Sign Up</a>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.frameDiv}>
          <div className={styles.welcomeToReadshareParent}>
            <h1 className={styles.welcomeToReadshare}>Welcome to ReadShare!</h1>
            <h1 className={styles.yourGatewayTo}>
              Your gateway to affordable and accessible books in Ethiopia
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
