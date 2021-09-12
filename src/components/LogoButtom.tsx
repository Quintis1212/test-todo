import { Button } from "@material-ui/core";
import React from "react";

function LogoButtom() {
  const logoButtonHandler = () => console.log("You pressed on Logo");
  return (
    <Button onClick={logoButtonHandler} variant="contained">
      Logo
    </Button>
  );
}

export default LogoButtom;
