import React, { useContext } from "react";
import "./Body.css";
import { Context } from "../../Context/Provider";
import Home, { HOME_LABEL } from "../Home";
import Samples, { SAMPLES_LABEL } from "./Samples/Samples";

// NEED TO IMPLEMENT UNIT TESTS
const Body = () => {
  const { currentPage } = useContext(Context);

  const selectPage = () => {
    switch (currentPage) {
      case HOME_LABEL:
        return <Home />;
      case SAMPLES_LABEL:
        return <Samples />;
      default:
        return <div className={"Error"}>Something went wrong</div>;
    }
  };
  return <div className={"Body"}>{selectPage()}</div>;
};

export default Body;
