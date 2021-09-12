import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontSize: "50px",
  },
});

function SettingButton() {
  const classes = useStyles();

  return (
    <Button>
      <Box display="flex" alignItems="center">
        <SettingsIcon
          classes={{
            root: classes.root,
          }}
        />
        SETTINGS
      </Box>
    </Button>
  );
}

export default SettingButton;
