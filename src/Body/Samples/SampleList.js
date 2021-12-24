import React from "react";
import "./SampleList.css";

const AVAILABLE_SAMPLES = ["Sample 2", "Sample 1", "Sample 3"].sort((a, b) => {
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
