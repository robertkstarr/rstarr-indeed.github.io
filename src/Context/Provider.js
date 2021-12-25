import React, { createContext, useState } from "react";
import { AVAILABLE_WRITING_SAMPLES } from "../Body/Samples/WritingSamples/WritingSampleUtils";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentSampleTitle, setCurrentSampleTitle] = useState(
    AVAILABLE_WRITING_SAMPLES[0]
  );

  const value = {
    currentPage,
    setCurrentPage,
    currentSampleTitle,
    setCurrentSampleTitle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
