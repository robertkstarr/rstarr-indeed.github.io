import React from "react";
import SampleItem from "./SampleItem";
import { AVAILABLE_WRITING_SAMPLE_KEYS } from "../WritingSamples/WritingSampleUtils";

const SampleList = () => {
  return (
    <div className={"SampleList"}>
      {AVAILABLE_WRITING_SAMPLE_KEYS.map((sample) => {
        return <SampleItem sample={sample} />;
      })}
    </div>
  );
};

export default SampleList;
