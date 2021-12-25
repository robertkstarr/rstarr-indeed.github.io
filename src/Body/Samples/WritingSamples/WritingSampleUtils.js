import React, { useContext, useState } from "react";
import { Context } from "../../../Context/Provider";
import thankYouForYourPatienceFile from "../WritingSamples/ThankYouForYourPatience.txt";
import sunsetAtDiabloStation from "../WritingSamples/SunsetAtDiabloStation.txt";

const THANK_YOU_FOR_YOUR_PATIENCE = "Thank You for Your Patience";
const SUNSET_AT_DIABLO_STATION = "Sunset at Diablo Station";

export const AVAILABLE_WRITING_SAMPLES = [
  THANK_YOU_FOR_YOUR_PATIENCE,
  SUNSET_AT_DIABLO_STATION,
].sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
export const ExportWritingSample = () => {
  const { currentSampleTitle } = useContext(Context);
  const [writingSample, setWritingSample] = useState("loading");

  const getFilenameFromTitle = (title) => {
    switch (title) {
      case THANK_YOU_FOR_YOUR_PATIENCE:
        return thankYouForYourPatienceFile;
      case SUNSET_AT_DIABLO_STATION:
        return sunsetAtDiabloStation;
      default:
        return "";
    }
  };

  fetch(getFilenameFromTitle(currentSampleTitle))
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
