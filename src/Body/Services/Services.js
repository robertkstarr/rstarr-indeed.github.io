import React from "react";
import "./Services.css";

export const SERVICES_LABEL = "Services";

const Services = () => {
  return (
    <div className={"Services"}>
      <div>A list of services along with the price per word.</div>
      <div>
        Include genres along with descriptions and well-known examples of each
        of the genres.
      </div>
    </div>
  );
};

export default Services;
