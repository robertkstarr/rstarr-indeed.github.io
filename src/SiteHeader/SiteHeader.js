import React from "react";
import "./SiteHeader.css";
import HeaderItem from "./HeaderItem/HeaderItem";
import { headerItems } from "./HeaderItems";
import { isMobile } from "react-device-detect";

const SiteHeader = () => {
  const deviceType = isMobile ? "Mobile" : "Desktop";
  return (
    <header className={`SiteHeader ${deviceType}`}>
      {headerItems.map((object) => (
        <HeaderItem key={object} headerText={object} />
      ))}
    </header>
  );
};

export default SiteHeader;
