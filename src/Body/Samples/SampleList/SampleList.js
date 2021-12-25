import React from "react";
import "./SampleList.css";
import { AVAILABLE_WRITING_SAMPLES } from "../WritingSamples/WritingSampleUtils";

const AVAILABLE_SAMPLES = AVAILABLE_WRITING_SAMPLES.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

const SampleList = () => {
  return (
    <div className={"SampleList"}>
      {AVAILABLE_SAMPLES.map((sample) => {
        return (
          <div key={sample} className={"SampleItem"}>
            {sample}
          </div>
        );
      })}
    </div>
  );
};

export default SampleList;
