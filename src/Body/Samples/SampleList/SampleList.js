import React, { useContext } from "react";
import "./SampleList.css";
import { AVAILABLE_WRITING_SAMPLES } from "../WritingSamples/WritingSampleUtils";
import { Context } from "../../../Context/Provider";

const SampleList = () => {
  const { setCurrentSampleTitle } = useContext(Context);
  return (
    <div className={"SampleList"}>
      {AVAILABLE_WRITING_SAMPLES.map((sample) => {
        return (
          <div
            key={sample}
            className={"SampleItem"}
            onMouseDown={() => {
              setCurrentSampleTitle(sample);
            }}
          >
            {sample}
          </div>
        );
      })}
    </div>
  );
};

export default SampleList;
