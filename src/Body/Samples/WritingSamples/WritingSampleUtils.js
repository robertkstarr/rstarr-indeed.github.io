import sample from "./ThankYouForYourPatience.txt";
import React, { useState } from "react";

export const ExportWritingSample = () => {
  const [writingSample, setWritingSample] = useState("loading");
  fetch(sample)
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
