import styles from "../Global";
import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";
import { bigLogo } from "../assets";
// import { testLogo } from "../../";

export default function Navbar({
  whichSelected,
  setWhichToHover,
  setWhichSelected,
  whichToHover,
}) {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return (
    <div
      className={`navbar ${`flex flex-row justify-between bg-white text-alternateBlack pt-4 pb-4 shadow-md`} items-center  fixed w-full h-[87px] z-5`}
    >
      <div
        className={`navbar__items_container flex flex-row absolute w-full items-center justify-center gap-3`}
        // gap-16
      >
        <div
          // className={` ${whichSelected == "account" ? "" : ""} navbar__item allsides-5  border-[4px] border-primary`}
          className={` ${
            // whichSelected == "account" || whichToHover == "account"
            (whichToHover == "account" && whichToHover == whichSelected) ||
            (whichSelected == "account" && whichToHover == "none")
              ? "border-[4px] border-primary"
              : "allsides-5"
          } navbar__item   `}
          onMouseEnter={() => {
            setWhichToHover("account");
            // setWhichSelected("account");
          }}
        >
          <p className={`${styles.navbar_item} `}>ACCOUNT</p>
        </div>
        <div
          // className={`navbar__item allsides-5`}
          className={` ${
            // whichSelected == "invest" || whichToHover == "invest"
            (whichToHover == "invest" && whichToHover == whichSelected) ||
            (whichSelected == "invest" && whichToHover == "none")
              ? "border-[4px] border-primary"
              : "allsides-5"
          } navbar__item   `}
          onMouseEnter={() => {
            setWhichToHover("invest");
            // setWhichSelected("invest");
          }}
        >
          <p className={styles.navbar_item}>INVEST</p>
        </div>
        <div
          // className={`navbar__item allsides-5 `}
          className={` ${
            // whichSelected == "about" || whichToHover == "about"
            (whichToHover == "about" && whichToHover == whichSelected) ||
            (whichSelected == "about" && whichToHover == "none")
              ? "border-[4px] border-primary"
              : "allsides-5"
          } navbar__item   `}
          onMouseEnter={() => {
            setWhichToHover("about");
            // setWhichSelected("about");
          }}
        >
          <p className={styles.navbar_item}>ABOUT</p>
        </div>
      </div>
      <div className={`navbar__logo_container  pl-[265px]  h-[55px]`}>
        <img className="h-full" src={bigLogo} alt="" />
      </div>
      <div className={`navbar__cta_container flex flex-row pr-[265px] gap-5`}>
        <a
          href="/login"
          className={`cta_container__login_btn   bg-white border-2 border-primary text-primary  ${styles.ctaText} transition-all  hover:bg-primary hover:text-onPrimary`}
        >
          Login
        </a>
        <a
          href="signup"
          className={`cta_container__signup_btn ${styles.ctaText}`}
        >
          {/* <p className={`pointer-events-none`}> Sign Up</p> */}
          Sign Up
        </a>
        {/* <Button variant="contained" className="font-regular rounded-full">
          Sign Up
        </Button> */}
      </div>
    </div>
  );
}
