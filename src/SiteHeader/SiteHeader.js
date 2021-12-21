import React from "react";
import "./SiteHeader.css";
import HeaderItem from "./HeaderItem/HeaderItem";
import { isMobile } from "react-device-detect";

const SiteHeader = () => {
  const deviceType = isMobile ? "Mobile" : "Desktop";
  return (
    <header className={`SiteHeader ${deviceType}`}>
      <HeaderItem headerText={"Home"} />
      <HeaderItem headerText={"Samples"} />
      <HeaderItem headerText={"Works"} />
      <HeaderItem headerText={"About"} />
      <HeaderItem headerText={"Contact"} />
    </header>
  );
};

export default SiteHeader;
