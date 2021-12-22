import React, { useContext } from "react";
import "./HeaderItem.css";
import { isMobile } from "react-device-detect";
import { Context } from "../../Context/Provider";

const HeaderItem = ({ headerText }) => {
  const { setCurrentPage } = useContext(Context);
  return (
    <div
      className={`HeaderItem ${isMobile && `isMobile`}`}
      onMouseDown={() => setCurrentPage(headerText)}
    >
      {" "}
      {headerText.toUpperCase()}
    </div>
  );
};

export default HeaderItem;
