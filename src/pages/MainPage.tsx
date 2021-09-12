import React from "react";
import NavBar from "../components/NavBar";
import NewNoteContainer from "../components/NewNote/NewNoteContainer";
import ListWrapper from "../components/NoteList/ListWrapper";

function MainPage() {
  const [render, setRender] = React.useState<Array<any>>([]);

  const renderCallback = () => {
    setRender([]);
  };
  return (
    <>
      <NavBar />
      <NewNoteContainer renderCallback={renderCallback} />
      <ListWrapper dataForRerender={render} />
    </>
  );
}

export default MainPage;
