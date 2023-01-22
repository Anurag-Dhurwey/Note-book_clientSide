import React from "react";
import NoteItems from "./NoteItems";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import Addnotes from "./crud/Add_notes";

const Notes = () => {
  let { notes} = useContext(noteContext);
  return (
    <>
      <div className="container">
        <Addnotes/>
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
