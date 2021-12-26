import React, { useContext } from "react";
import "./SampleList.css";
import writingSamples from "../WritingSamples/WritingSamples";
import { AVAILABLE_WRITING_SAMPLE_KEYS } from "../WritingSamples/WritingSampleUtils";
import { Context } from "../../../Context/Provider";

const SampleList = () => {
  const { CurrentSampleTitle } = useContext(Context);
  return (
    <div className={"SampleList"}>
      {AVAILABLE_WRITING_SAMPLE_KEYS.map((sample) => {
        return (
          <div
            key={sample}
            className={"SampleItem"}
            onMouseDown={() => {
              CurrentSampleTitle(sample);
            }}
          >
            {writingSamples[sample].Title}
          </div>
        );
      })}
    </div>
  );
};

export default SampleList;
