import React, { useContext } from "react";
import "./HeaderItem.css";
import { Context } from "../../Context/Provider";
import { Button } from "@mui/material";

const HeaderItem = ({ headerText }) => {
  const { setCurrentPage } = useContext(Context);
  return (
    <Button
      variant="contained"
      color="primary"
      onMouseDown={() => setCurrentPage(headerText)}
    >
      {headerText.toUpperCase()}
    </Button>
  );
};

export default HeaderItem;
