import React from "react";
import "./HeaderItem.css";

const HeaderItem = ({ headerText }) => {
  return <div className="HeaderItem">{headerText.toUpperCase()}</div>;
};

export default HeaderItem;
