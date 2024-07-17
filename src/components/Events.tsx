import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/Events.module.css";
import '../styles/global.css';

export type EventsType = {
  className?: string;
  parisReadersSummit?: string;
  eventDay?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Events: FunctionComponent<EventsType> = ({
  className = "",
  parisReadersSummit,
  eventDay,
  propBackgroundColor,
}) => {
  const eventsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.events, className].join(" ")} style={eventsStyle}>
      <div className={styles.eventLocation}>
        <h3 className={styles.parisReadersSummit}>{parisReadersSummit}</h3>
        <div className={styles.aratKiloAberhot}>Arat Kilo Aberhot Library</div>
        <div className={styles.lt630lt}>4:30LT - 6:30LT</div>
      </div>
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src="/group-2.svg"
      />
      <div className={styles.days}>
        <div className={styles.eventDay}>{eventDay}</div>
        <h3 className={styles.august}>August</h3>
      </div>
    </div>
  );
};

export default Events;
