import { FunctionComponent } from "react";
import styles from "../styles/framecomponent3.module.css";
import '../styles/global2.css'
import curlss from '../assets/curlss.png'
import bookm from '../assets/bookmain.png'
import star from '../assets/starttt.png'
import star2 from '../assets/star2.png'


export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.image13Parent}>
        <img className={styles.image13Icon} alt="" src={bookm} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.image62Icon}
            loading="lazy"
            alt=""
            src= {curlss}
          />
        </div>
      </div>
      <img
        className={styles.image60Icon}
        loading="lazy"
        alt=""
        src={star}
      />
      <img className={styles.image63Icon} alt="" src={star2}/>
    </div>
  );
};

export default FrameComponent3;
