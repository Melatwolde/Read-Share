import { FunctionComponent } from "react";
import styles from '../styles/framecomponent0.module.css'
import logo from '../assets/logo.png'

export type FrameComponentType = {
  className?: string;
};

const FrameComponent0: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.footerContentParent, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.image64Parent}>
          <img
            className={styles.image64Icon}
            loading="lazy"
            alt=""
            src={logo}
          />
          <div className={styles.footerLinks}>
            <div className={styles.linkCategories}>
              <div className={styles.ourServicesParent}>
                <h2 className={styles.ourServices}>{`Our Services `}</h2>
                <h2 className={styles.ourCompany}>Our Company</h2>
                <h2 className={styles.readWithUs}>Read With Us</h2>
              </div>
              <div className={styles.audioBookParent}>
                <div className={styles.audioBook}>Audio Book</div>
                <div className={styles.filterByPreferences}>
                  Filter by Preferences
                </div>
                <div className={styles.directionsAndNavigation}>
                  Directions and Navigation
                </div>
                <div className={styles.specialOffersAnd}>
                  Special Offers and Deals
                </div>
                <div className={styles.userRecommendations}>
                  User Recommendations
                </div>
                <div className={styles.integratedReviewsAnd}>
                  Integrated Reviews and Ratings
                </div>
              </div>
              <div className={styles.categoryPairOne}>
                <a className={styles.pricing}>Pricing</a>
                <div className={styles.premium}>Premium</div>
                <div className={styles.staffMember}>Staff Member</div>
              </div>
              <div className={styles.categoryPairOne1}>
                <div className={styles.faqs}>FAQS</div>
                <a className={styles.aboutUs}>About Us</a>
                <div className={styles.ourTeam}>Our Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default FrameComponent0;
