import styles from "../Global";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";

export default function Navbar() {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
    <div
      className={`navbar ${`flex flex-row justify-between bg-white text-alternateBlack pt-4 pb-4 shadow-md`} items-center`}
    >
      <div
        className={`navbar__items_container flex flex-row absolute w-full items-center justify-center gap-16`}
      >
        <div className={`navbar__items pointer-events-none`}>ACCOUNT</div>
        <div className={`navbar__items`}>INVEST</div>
      </div>
      <div className={`navbar__logo_container  pl-[265px]`}>LOGO</div>
      <div className={`navbar__cta_container flex flex-row pr-[265px] gap-5`}>
        <div
          className={`cta_container__login_btn   bg-white border-2 border-primary text-primary  ${styles.ctaText} transition-all  hover:bg-primary hover:text-onPrimary`}
        >
          Login
        </div>
        <div className={`cta_container__signup_btn ${styles.ctaText}`}>
          {/* <p className={`pointer-events-none`}> Sign Up</p> */}
          Sign Up
        </div>
        {/* <Button variant="contained" className="font-regular rounded-full">
          Sign Up
        </Button> */}
      </div>
    </div>
  );
}
