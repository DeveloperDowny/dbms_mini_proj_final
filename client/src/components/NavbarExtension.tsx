import { Button } from "@mui/material";
import React from "react";
import styles from "../Global";
import SubLink from "./SubLink";
import gsap from "gsap";
import { useEffect } from "react";

const NavbarExtension = ({ subLinks, setWhichSelected, setWhichToHover }) => {
  return (
    <div className="fixed w-screen bg-primary flex justify-center py-3 z-[200] shadow-xl">
      <div className="relative">
        <div className=" bg-gray justify-center items-center  flex h-full">
          <div className="h-full grid grid-cols-2 gap-x-[3rem] gap-y-5">
            {subLinks}
          </div>
        </div>
        {/* <Button variant="text">Text</Button> */}
        <div
          onClick={() => setWhichToHover("none")}
          className="absolute top-0 left-0 ml-[100%] z-50 px-[200px] text-white font-light hover:cursor-pointer "
        >
          X
        </div>
        {/* </Button> */}
      </div>
    </div>
  );
};

export default NavbarExtension;
