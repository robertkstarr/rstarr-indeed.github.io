import writingSamples from "../WritingSamples/WritingSamples";
import React, { useContext } from "react";
import { Context } from "../../../Context/Provider";
import "./SampleItem.css";

const SampleItem = ({ sample }) => {
  const { CurrentSampleTitle } = useContext(Context);
  return (
    <div
      key={sample}
      className={"SampleItem"}
      onMouseDown={() => {
        CurrentSampleTitle(sample);
      }}
    >
      <p className={"SampleItemTitle"}>{writingSamples[sample].Title}</p>
      <p className={"SampleItemWords"}>
        ({writingSamples[sample].Words} words)
      </p>
    </div>
  );
};

export default SampleItem;
