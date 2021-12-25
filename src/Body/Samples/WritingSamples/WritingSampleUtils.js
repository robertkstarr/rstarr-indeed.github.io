import React, { useState } from "react";
import thankYouForYourPatienceFile from "../WritingSamples/ThankYouForYourPatience.txt";

const THANK_YOU_FOR_YOUR_PATIENCE = "Thank You for Your Patience";

export const AVAILABLE_WRITING_SAMPLES = [THANK_YOU_FOR_YOUR_PATIENCE];

export const ExportWritingSample = ({ sampleTitle }) => {
  const [writingSample, setWritingSample] = useState("loading");

  const getFilenameFromTitle = (title) => {
    switch (title) {
      case THANK_YOU_FOR_YOUR_PATIENCE:
        return thankYouForYourPatienceFile;
      default:
        return "";
    }
  };

  fetch(getFilenameFromTitle(sampleTitle))
    .then((r) => r.text())
    .then((text) => {
      setWritingSample(text);
    });

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
