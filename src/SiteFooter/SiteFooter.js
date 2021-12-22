import React from "react";
import "./SiteFooter.css";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className={"SiteFooter"}>
      <div className={"FooterItem"}>© Copyright {year} by Robert K. Starr</div>
      <div className={"FooterItem"}>All Rights Reserved</div>
    </div>
  );
};

export default SiteFooter;
