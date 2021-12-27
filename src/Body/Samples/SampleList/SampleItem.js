import writingSamples from "../WritingSamples/WritingSamples";
import React, { useContext } from "react";
import { Context } from "../../../Context/Provider";

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
      <div className={"SampleItemTitle"}>{writingSamples[sample].Title}</div>
      <div className={"SampleItemWords"}>
        {writingSamples[sample].Words} words
      </div>
      <div className={"SampleItemGenres"}>
        {writingSamples[sample].Genres.map((genre) => {
          return <span>{genre}</span>;
        })}
      </div>
    </div>
  );
};

export default SampleItem;
