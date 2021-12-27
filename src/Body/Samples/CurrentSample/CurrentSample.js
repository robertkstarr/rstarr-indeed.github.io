import React, { useContext } from "react";
import "./CurrentSample.css";
import { Context } from "../../../Context/Provider";
import writingSamples from "../WritingSamples/WritingSamples";

const CurrentSample = ({ children }) => {
  const { currentSampleTitle } = useContext(Context);
  return (
    <div className={"CurrentSampleContainer"}>
      <div className={"CurrentSample"}>
        <div className={"SampleTitle"}>
          {writingSamples[currentSampleTitle].Title}
        </div>
        <div className={"SampleText"}> {children}</div>
      </div>
    </div>
  );
};

export default CurrentSample;
