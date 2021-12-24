import React from "react";
import "./CurrentSample.css";

const CurrentSample = ({ children }) => {
  return (
    <div className={"CurrentSample"}>
      <div className={"SampleTitle"}>Title</div>
      <div className={"SampleText"}> {children}</div>
    </div>
  );
};

export default CurrentSample;
