import { Box, Button, Container, makeStyles } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import Line from "./Line";
import NoteTextField from "./NoteTextField";

const useStyles = makeStyles({
  wrapper: {
    paddingBottom: "40px",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  root: {
    borderRadius: "20px",
    borderColor: "rgb(156, 156, 156)",
    borderWidth: "1px",
    width: "100%",
    borderStyle: "solid",
    paddingBottom: "30px",
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputs: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});
type newNoteContainerProps = {
  renderCallback: (arg: []) => void;
};
function NewNoteContainer(props: newNoteContainerProps) {
  const classes = useStyles();
  const [note, setNote] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const createNoteHandler = () => {
    console.log(note, subject);

    if (!note || !subject) {
      console.log(note, subject);
      alert("Please fill all fields");
      return;
    }
    const key = `${Math.random() * 100}`;
    const value = note + "~" + subject;
    localStorage.setItem(key, value);
    setNote("");
    setSubject("");
    props.renderCallback([]);
  };

  const noteTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote(e.target.value);
  };
  console.log("render");
  const subjectTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubject(e.target.value);
  };
  return (
    <Container
      classes={{
        root: classes.wrapper,
      }}
    >
      <Box width="30%">
        <Container
          classes={{
            root: classes.root,
          }}
        >
          <Button onClick={createNoteHandler} variant="text">
            Create new note
          </Button>
          <Line />
          <Container
            classes={{
              root: classes.inputs,
            }}
          >
            <NoteTextField
              onChange={subjectTextHandler}
              placeholder={"Subject"}
              value={subject}
            />
            <Line />

            <NoteTextField
              value={note}
              onChange={noteTextHandler}
              placeholder={"Note"}
            />
          </Container>
        </Container>
      </Box>
    </Container>
  );
}

export default NewNoteContainer;
