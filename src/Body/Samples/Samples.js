import React from "react";
import "./Samples.css";
import SampleList from "./SampleList/SampleList";
import CurrentSample from "./CurrentSample/CurrentSample";
import { ExportWritingSample } from "./WritingSamples/WritingSampleUtils";

export const SAMPLES_LABEL = "Samples";

const Samples = () => {
  return (
    <div className={"Samples"}>
      <SampleList />
      <CurrentSample>
        <ExportWritingSample />
      </CurrentSample>
    </div>
  );
};

export default Samples;
