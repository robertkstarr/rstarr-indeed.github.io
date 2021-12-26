import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Provider";
import writingSamples from "./WritingSamples.js";

export const AVAILABLE_WRITING_SAMPLE_KEYS = Object.keys(writingSamples).sort(
  (a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
);

export const ExportWritingSample = () => {
  const { currentSampleTitle } = useContext(Context);
  const [writingSample, setWritingSample] = useState("loading");

  useEffect(() => {
    try {
      setWritingSample(writingSamples[currentSampleTitle].Text);
    } catch (error) {
      return "";
    }
  }, [currentSampleTitle]);

  const convertToHTML = (text) => {
    return (
      <div>
        {text.split("\n").map((e) => (
          <div className={"Paragraph"}>{e}</div>
        ))}
      </div>
    );
  };
  return <div>{convertToHTML(writingSample)}</div>;
};
