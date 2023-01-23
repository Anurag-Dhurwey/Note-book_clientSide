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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5M2MxYTQ0Y2MxMDZkN2QxYjg2In0sImlhdCI6MTY3NDEzMzE4MX0.R56iIaVnKNvSRcWyuLhC4CgbcX5vAwGN7SIsDCpjx0k",
        },
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5M2MxYTQ0Y2MxMDZkN2QxYjg2In0sImlhdCI6MTY3NDEzMzE4MX0.R56iIaVnKNvSRcWyuLhC4CgbcX5vAwGN7SIsDCpjx0k",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json=await response.json();
      console.log(json + "add_notes");
    } catch (error) {
      console.log(error.message);
    }

    let note = {
      _id: "63cbde0d",
      userID: "63c9193c1a44cc106d7d1b86",
      ref: "User",
      title: title,
      tag: tag,
      description: description,
      date: "2023-01-21T12:43:57.031Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    // window.location.reload(true);
  };
  // delete notes
  const delete_notes = async (id) => {
    if(id==='63cbde0d'){
      const reload= window.confirm("To delete this note you have to reload this page, click on ok to reload!");
       if(reload===true){
        window.location.reload(true)
       }
    }
    try {
      const response = await fetch(`${host}/delete-notes/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": " application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5M2MxYTQ0Y2MxMDZkN2QxYjg2In0sImlhdCI6MTY3NDEzMzE4MX0.R56iIaVnKNvSRcWyuLhC4CgbcX5vAwGN7SIsDCpjx0k",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }

    console.log("deleted" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // update notes
  const update_notes = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/update-notes/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5M2MxYTQ0Y2MxMDZkN2QxYjg2In0sImlhdCI6MTY3NDEzMzE4MX0.R56iIaVnKNvSRcWyuLhC4CgbcX5vAwGN7SIsDCpjx0k",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
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
