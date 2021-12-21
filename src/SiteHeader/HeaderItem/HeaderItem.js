import React from "react";
import "./HeaderItem.css";
import { isMobile } from "react-device-detect";

const HeaderItem = ({ headerText }) => {
  return (
    <div className={`HeaderItem ${isMobile && `isMobile`}`}>
      {" "}
      {headerText.toUpperCase()}
    </div>
  );
};

export default HeaderItem;
