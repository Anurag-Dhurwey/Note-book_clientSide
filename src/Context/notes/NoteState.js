import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const initialNotes = [];
  let [notes, setNotes] = useState(initialNotes);
  // get all notes
  const get_notes = async () => {
    try {
      const response = await fetch(`${host}/api/notes`, {
        method: "get",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  // add notes
  const add_notes = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/post-notes`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": " application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      window.alert(error.message);
      console.log(error.message);
    }
  };
  // delete notes
  const delete_notes = async (id) => {
    try {
      const response = await fetch(`${host}/delete-notes/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": " application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      if (false) {
        console.log(response);
      }
      const newNote = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNote);
    } catch (error) {
      window.alert(error.message);
      console.log(error.message);
    }
  };
  // update notes
  const update_notes = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/update-notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": " application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (false) {
        console.log(response);
      }
      const newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      window.alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, get_notes, add_notes, delete_notes, update_notes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
