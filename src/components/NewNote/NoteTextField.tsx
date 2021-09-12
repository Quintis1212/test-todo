import { TextField } from "@material-ui/core";
import React, { ChangeEvent } from "react";

type noteTextPorops = {
  placeholder?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  defaultValue?: string;
};

function NoteTextField(props: noteTextPorops) {
  return (
    <TextField
      InputProps={{ disableUnderline: true }}
      placeholder={props.placeholder}
      fullWidth={true}
      multiline={true}
      id="standard-basic"
      onChange={props.onChange}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
}

export default NoteTextField;
