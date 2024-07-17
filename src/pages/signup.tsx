import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from '../styles/signup.module.css'
import '../styles/glo.css'
import img from '../assets/log.png'

const SignUp: FunctionComponent = () => {
  const onSignUpButtonContainerClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  return (
    <div className={styles.signup}>
      <div className={styles.content}>
        <img
          className={styles.image53Icon}
          loading="lazy"
          alt=""
          src={img}
        />
        <div className={styles.contentChild} />
      </div>
      <div className={styles.signupInner}>
        <div className={styles.accountInfoParent}>
          <div className={styles.accountInfo}>
            <div className={styles.createAccount}>
              <h1 className={styles.createAccount1}>Create Account</h1>
              <div className={styles.noAccountInfo}>
                <div className={styles.dontYouHave}>
                  Don’t you have account? No worries!
                </div>
              </div>
            </div>
          </div>
          <form className={styles.inputFieldsParent}>
            <div className={styles.inputFields}>
              <div className={styles.fieldLabels}>
                <div className={styles.fullName}>Full Name</div>
              </div>
              <div className={styles.fieldLabels1}>
                <div className={styles.email}>Email</div>
              </div>
              <div className={styles.fieldLabels2}>
                <div className={styles.password}>Password</div>
              </div>
            </div>
            <div className={styles.signUpButtonContainerWrapper}>
              <Button
                className={styles.signUpButtonContainer}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "20",
                  background: "#f7f3ef",
                  borderRadius: "15px",
                  "&:hover": { background: "#f7f3ef" },
                  height: 51,
                }}
                onClick={onSignUpButtonContainerClick}
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
