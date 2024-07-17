import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/BookDiscoveryCards.module.css";
import '../styles/global.css';

export type BookDiscoveryCardsType = {
  className?: string;
  image24?: string;
  theyBothDieAtTheEnd?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundSize?: CSSProperties["backgroundSize"];
};

const BookDiscoveryCards: FunctionComponent<BookDiscoveryCardsType> = ({
  className = "",
  image24,
  theyBothDieAtTheEnd,
  propBorderRadius,
  propBackgroundImage,
  propBackgroundSize,
}) => {
  const bookDiscoveryCardsStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
    };
  }, [propBorderRadius, propBackgroundImage, propBackgroundSize]);

  return (
    <div
      className={[styles.bookDiscoveryCards, className].join(" ")}
      style={bookDiscoveryCardsStyle}
    >
      <img className={styles.image24Icon} loading="lazy" alt="" src={image24} />
      <div className={styles.bookDetails}>
        <div className={styles.bookTitleLayout}>
          <div className={styles.theyBothDieAtTheEndParent}>
            <div className={styles.theyBothDie}>{theyBothDieAtTheEnd}</div>
            <div className={styles.novelByAdam}>Novel by Adam Silvera</div>
            <div className={styles.pages}>245 Pages</div>
          </div>
          <div className={styles.rating}>
            <div className={styles.ratingStars}>4.5</div>
            <div className={styles.ratingIconLayout}>
              <img
                className={styles.ratingIcon}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.buyButtonLayout}>
          <div className={styles.buyNowButtonParent}>
            <div className={styles.buyNowButton}>
              <div className={styles.lend}>Lend</div>
            </div>
            <button className={styles.buyNowButton1}>
              <a className={styles.buyNow}>Buy now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDiscoveryCards;
