import React from "react";
import "./Services.css";
import TextBox from "../../Tools/TextBox/TextBox";

export const SERVICES_LABEL = "Services";

const Services = () => {
  return (
    <div className={"Services"}>
      <TextBox>
        <div>A list of services along with the price per word.</div>
        <div>
          Include genres along with descriptions and well-known examples of each
          of the genres.
        </div>
      </TextBox>
    </div>
  );
};

export default Services;
