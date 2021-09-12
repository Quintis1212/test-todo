import { Box, Button, Container, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import React, { ChangeEvent } from "react";
import Line from "../NewNote/Line";
import NoteTextField from "../NewNote/NoteTextField";
type listItemProps = {
  item: string;
  currentKey: string;
  setNewRender: (arg: []) => void;
};

const useStyles = makeStyles({
  root: {
    borderRadius: "20px",
    borderColor: "rgb(156, 156, 156)",
    borderWidth: "1px",
    width: "30%",
    borderStyle: "solid",
    paddingBottom: "30px",
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "pointer",
  },
  modalRoot: {
    marginTop: "50px",
    borderRadius: "20px",
    borderColor: "rgb(156, 156, 156)",
    borderWidth: "1px",
    display: "flex",
    width: "30%",
    borderStyle: "solid",
    paddingBottom: "30px",
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#fff",
  },
});
function ListItem(props: listItemProps) {
  const [open, setOpen] = React.useState(false);
  const [changedNote, setChangedNote] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const noteTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setChangedNote(e.target.value);
  };

  const subjectTextHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubject(e.target.value);
  };
  const classes = useStyles();
  const textLine = props.item.split("~");
  const title = textLine[0];
  const note = textLine[1];

  const modalHandler = () => setOpen(!open);

  const clipboardHandler = () => {
    navigator.clipboard.writeText(note);
  };

  const deleteHandler = () => {
    localStorage.removeItem(props.currentKey);
    props.setNewRender([]);
  };

  const editHandler = () => {
    localStorage.setItem(props.currentKey, subject + "~" + changedNote);
    props.setNewRender([]);
  };

  return (
    <>
      <Box width="30%" onClick={modalHandler}>
        <Container
          classes={{
            root: classes.root,
          }}
        >
          {title}
          <Line />
          {note}
          <Line />
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={modalHandler}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
          <Container
            classes={{
              root: classes.modalRoot,
            }}
          >
            <Box>
              <NoteTextField
                onChange={subjectTextHandler}
                defaultValue={title}
              />
              <Line />
              <NoteTextField onChange={noteTextHandler} defaultValue={note} />
              <Line />
            </Box>
            <Box width="30%">
              <Button
                onClick={editHandler}
                variant="contained"
                color="secondary"
              >
                Save changes
              </Button>
              <Button
                onClick={deleteHandler}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
              <Button
                onClick={clipboardHandler}
                variant="contained"
                color="secondary"
              >
                Copy note to clipboard
              </Button>
            </Box>
          </Container>
        </>
      </Modal>
    </>
  );
}

export default ListItem;
