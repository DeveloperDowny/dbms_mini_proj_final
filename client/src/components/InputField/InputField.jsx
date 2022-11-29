import { useState } from "react";
import gsap, { shuffle } from "gsap";
import "./InputField.css";

const InputField = ({
  labelRef,

  setPostData,

  ph,
}) => {
  const [phToTitle, setPhToTitle] = useState(ph);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <p
        ref={labelRef}
        id="temp"
        style={{
          zIndex: "9",
          // textAlign: "center",
          position: "absolute",
          top: "16px",
          left: "2.5rem",
        }}
        onFocus={(e) => {
          gsap.to(labelRef.current, {
            y: "-32px",
            scale: "1.2",

            duration: 0.1,
          });
          e.target.nextElementSibling.focus();
          // document.getElementsByTagName("input")[0].focus();
        }}
      >
        {phToTitle}
      </p>

      <input
        className="py-2 mb-[16px] mt-[11px]"
        onBlur={(e) => {
          if (e.target.value == "") {
            console.log("reversed");

            gsap.to(labelRef.current, {
              y: "0",
              scale: "1",

              duration: 0.1,
            });
          }
        }}
        onFocus={(e) => {
          gsap.to(labelRef.current, {
            y: "-32px",
            scale: "1.2",

            duration: 0.1,
          });
        }}
        onChange={(e) => {
          setPostData(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
