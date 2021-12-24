import React from "react";
import "./Samples.css";
import SampleList from "./SampleList";
import CurrentSample from "./CurrentSample/CurrentSample";
import LoremIpsum from "react-lorem-ipsum";

export const SAMPLES_LABEL = "Samples";

const Samples = () => {
  return (
    <div className={"Samples"}>
      <SampleList />
      <CurrentSample>
        <LoremIpsum p={10} />
      </CurrentSample>
    </div>
  );
};

export default Samples;
