import React, { createContext, useState } from "react";
import { AVAILABLE_WRITING_SAMPLE_KEYS } from "../Body/Samples/WritingSamples/WritingSampleUtils";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentSampleTitle, CurrentSampleTitle] = useState(
    AVAILABLE_WRITING_SAMPLE_KEYS[0]
  );

  const value = {
    currentPage,
    setCurrentPage,
    currentSampleTitle,
    CurrentSampleTitle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
