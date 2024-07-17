import { FunctionComponent } from "react";
import FrameComponentx from "../components/logframe";
import img from '../assets/log.png'
import styles from '../styles/login.module.css'
import '../styles/glo.css'

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.image53Parent}>
        <img
          className={styles.image53Icon}
          loading="lazy"
          alt=""
          src={img}
        />
        <div className={styles.frameChild} />
      </div>
      <div className={styles.loginInner}>
        <FrameComponentx />
      </div>
    </div>
  );
};

export default Login;
