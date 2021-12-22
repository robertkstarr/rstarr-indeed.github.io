import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");

  const value = {
    currentPage,
    setCurrentPage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
