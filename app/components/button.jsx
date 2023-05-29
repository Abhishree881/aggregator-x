import React from "react";
import "../../app/globals.css";
import StarIcon from "@mui/icons-material/Star";

function Button(props) {
  return (
    <div
      className={
        props.type === "secondary"
          ? `jump flex items-center justify-center hover-primary-bg border button border-black py-2.5 px-6 leading-none rounded-3xl whitespace-normal text-center font-medium`
          : props.type === "primary"
          ? `jump flex gap-1 items-center justify-center leading-none border button bg-primary text-white py-2.5 px-6 rounded-3xl font-bold whitespace-normal text-center hover:bg-black`
          : ""
      }
      style={{ fontSize: "12px", cursor: "pointer" }}
    >
      {props.icon === 1 ? <StarIcon fontSize="small" /> : <></>}
      {props.text}
    </div>
  );
}

export default Button;
