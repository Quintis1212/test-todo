import React from "react";

type newNoteHeaderProps = {
  title: string;
};

function NewNoteHeader(props: newNoteHeaderProps) {
  return <h3>{props.title}</h3>;
}

export default NewNoteHeader;
