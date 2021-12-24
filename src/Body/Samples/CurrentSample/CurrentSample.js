import React from "react";
import "./CurrentSample.css";

const CurrentSample = ({ children, title = "Untitled" }) => {
  return (
    <div className={"CurrentSample"}>
      <div className={"SampleTitle"}>{title}</div>
      <div className={"SampleText"}> {children}</div>
    </div>
  );
};

export default CurrentSample;
