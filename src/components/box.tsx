import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/box.module.css";

export type BoxexType = {
  className?: string;
  ellipse26?: string;
  lendingOptions?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Boxex: FunctionComponent<BoxexType> = ({
  className = "",
  ellipse26,
  lendingOptions,
  propBackgroundColor,
}) => {
  const boxexStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.boxex, className].join(" ")} style={boxexStyle}>
      <img
        className={styles.boxexChild}
        loading="lazy"
        alt=""
        src={ellipse26}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.lendingOptions}>{lendingOptions}</h2>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris `}</div>
      </div>
    </div>
  );
};

export default Boxex;
