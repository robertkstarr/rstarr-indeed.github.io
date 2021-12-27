import React from "react";
import "./SampleList.css";
import { AVAILABLE_WRITING_SAMPLE_KEYS } from "../WritingSamples/WritingSampleUtils";
import SampleItem from "./SampleItem";

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
