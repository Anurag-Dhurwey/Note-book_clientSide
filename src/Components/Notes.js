import React, { useContext ,useEffect}  from "react";
import NoteItems from "./NoteItems";
import noteContext from "../Context/notes/noteContext";
import Addnotes from "./crud/Add_notes";


const Notes = () => {
  let { notes,get_notes} = useContext(noteContext);
  useEffect(()=>{
    get_notes()
    // eslint-disable-next-line
  },[])
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
