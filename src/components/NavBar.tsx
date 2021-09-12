import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import LogoButtom from "./LogoButtom";
import SettingButton from "./SettingButton";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(85, 218, 173)",
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      classes={{
        root: classes.root,
      }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          width="80%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <LogoButtom />
          <SettingButton />
        </Box>
      </Box>
    </Container>
  );
}

export default NavBar;
