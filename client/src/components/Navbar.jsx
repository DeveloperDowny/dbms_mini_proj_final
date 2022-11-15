import styles from "../Global";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";
import { bigLogo } from "../assets";
// import { testLogo } from "../../";

export default function Navbar() {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
    <div
      className={`navbar ${`flex flex-row justify-between bg-white text-alternateBlack pt-4 pb-4 shadow-md`} items-center h-min`}
    >
      <div
        className={`navbar__items_container flex flex-row absolute w-full items-center justify-center gap-16`}
      >
        <div className={`navbar__item ${styles.} allsides-5`}>ACCOUNT</div>
        <div className={`navbar__item allsides-5`}>INVEST</div>
      </div>
      <div className={`navbar__logo_container  pl-[265px]  h-[55px]`}>
        <img className="h-full" src={bigLogo} alt="" />
      </div>
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
