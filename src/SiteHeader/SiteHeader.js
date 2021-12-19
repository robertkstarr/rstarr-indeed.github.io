import React from "react";
import "./SiteHeader.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const SiteHeader = () => {
  return (
    <header className="SiteHeader">
      <HeaderItem headerText={"Home"} />
      <HeaderItem headerText={"Samples"} />
      <HeaderItem headerText={"Works"} />
      <HeaderItem headerText={"About"} />
      <HeaderItem headerText={"Contact"} />
    </header>
  );
};

export default SiteHeader;
