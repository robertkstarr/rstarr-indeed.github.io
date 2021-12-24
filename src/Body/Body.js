import React, { useContext } from "react";
import "./Body.css";
import { Context } from "../Context/Provider";
import Home, { HOME_LABEL } from "./Home/Home";
import Samples, { SAMPLES_LABEL } from "./Samples/Samples";
import Works, { WORKS_LABEL } from "./Works/Works";
import Contact, { CONTACT_LABEL } from "./Contact/Contact";
import About, { ABOUT_LABEL } from "./About/About";
import Services, { SERVICES_LABEL } from "./Services/Services";

const Body = () => {
  const { currentPage } = useContext(Context);

  const selectPage = () => {
    switch (currentPage) {
      case HOME_LABEL:
        return <Home />;
      case SAMPLES_LABEL:
        return <Samples />;
      case WORKS_LABEL:
        return <Works />;
      case ABOUT_LABEL:
        return <About />;
      case CONTACT_LABEL:
        return <Contact />;
      case SERVICES_LABEL:
        return <Services />;
      default:
        return <div className={"Error"}>Something went wrong</div>;
    }
  };
  return <div className={"Body"}>{selectPage()}</div>;
};

export default Body;
