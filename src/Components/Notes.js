import React from "react";
import NoteItems from "./NoteItems";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import Alert from "./Alert";

const Notes = () => {
  let { notes, setNotes } = useContext(noteContext);
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          {notes.map((note, index) => {
            return <NoteItems note={[note]} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
