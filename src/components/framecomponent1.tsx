import { FunctionComponent } from "react";
import styles from "../styles/framecomponent1.module.css";
import '../styles/global2.css'
import native from '../assets/Native.png'
import harry from '../assets/harry.png'
import midnignt from '../assets/midnight.png'


export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.newTrendingParent}>
          <h1 className={styles.newTrendingContainer}>
            <p className={styles.new}>{`New &`}</p>
            <p className={styles.trending}>Trending</p>
          </h1>
          <h1 className={styles.exploreNewBooks}>Explore new books everyday</h1>
        </div>
      </div>
      <div className={styles.exploreGpParent}>
        <div className={styles.exploreGp}>
          <img className={styles.image55Icon} alt="" src={harry} />
          <div className={styles.image54Parent}>
            <img
              className={styles.image54Icon}
              loading="lazy"
              alt=""
              src={native}
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.wrapperImage24}>
            <img className={styles.image24Icon} alt="" src={midnignt} />
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
    </section>
  );
};

export default FrameComponent1;
