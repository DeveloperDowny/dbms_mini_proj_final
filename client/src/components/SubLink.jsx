import React from "react";
import styles from "../Global";

export const SubLink = ({ mainT, subT, goTo, setWhichSelected, tag }) => {
  return (
    <a
      onClick={() => {
        setWhichSelected(tag);
      }}
      href={goTo}
      className="cursor-pointer hover:border-b-2 duration-100"
    >
      <div className={`${styles.linksText}`}>{mainT}</div>
      <div className={`${styles.linksText} text-sm`}>{subT}</div>
    </a>
  );
};

export default SubLink;
