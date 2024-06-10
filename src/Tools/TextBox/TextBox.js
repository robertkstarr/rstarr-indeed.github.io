import React from "react";
import "./TextBox.css";

const TextBox = (props) => {
  return <div className="TextBox">{props.children}</div>;
};

export default TextBox;
