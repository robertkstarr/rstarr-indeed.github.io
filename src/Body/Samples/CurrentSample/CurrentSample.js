import React, { useContext } from "react";
import "./CurrentSample.css";
import { Context } from "../../../Context/Provider";

const CurrentSample = ({ children }) => {
  const { currentSampleTitle } = useContext(Context);
  return (
    <div className={"CurrentSample"}>
      <div className={"SampleTitle"}>{currentSampleTitle}</div>
      <div className={"SampleText"}> {children}</div>
    </div>
  );
};

export default CurrentSample;
