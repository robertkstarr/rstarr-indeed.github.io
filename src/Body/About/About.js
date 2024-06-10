import React from "react";
import "./About.css";
import selfie from "../../Images/self-photo.jpg";
import TextBox from "../../Tools/TextBox/TextBox";

export const ABOUT_LABEL = "About";

const About = () => {
  return (
    <div className={"AboutPage"}>
      <img src={selfie} alt="Author" />
      <div className={"AboutPageText"}>
        <TextBox>
          <div>This is the page where users will learn more out about me.</div>
          <div>Probably include a picture or something.</div>
        </TextBox>
      </div>
    </div>
  );
};

export default About;
