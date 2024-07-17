import { FunctionComponent } from "react";
import styles from "../styles/GroupsName.module.css";
import '../styles/global.css';

export type GroupsNameType = {
  className?: string;
  taylor1?: string;
  fantasyClub?: string;
  frameDiv?: boolean;
};

const GroupsName: FunctionComponent<GroupsNameType> = ({
  className = "",
  taylor1,
  fantasyClub,
  frameDiv,
}) => {
  return (
    <div className={[styles.groupsName, className].join(" ")}>
      <div className={styles.taylor1Wrapper}>
        <img
          className={styles.taylor1Icon}
          loading="lazy"
          alt=""
          src={taylor1}
        />
      </div>
      <div className={styles.clubDetailsLayout}>
        <div className={styles.fantasyClubParent}>
          <div className={styles.fantasyClub}>{fantasyClub}</div>
          <div className={styles.members}>20,000 Members</div>
        </div>
        <button className={styles.join}>
          <div className={styles.join1}>Join</div>
        </button>
      </div>
      {frameDiv && <div className={styles.groupsNameChild} />}
    </div>
  );
};

export default GroupsName;
