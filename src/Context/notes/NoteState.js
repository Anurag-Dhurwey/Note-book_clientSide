
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState=(props)=>{
  const initialNotes=[
    {
      "_id": "63cbde0dcf18316c900c8f43",
      "userID": "63c9193c1a44cc106d7d1b86",
      "ref": "User",
      "title": "note three",
      "tag": "tag",
      "description": "this is a description this is a description this is a description this is a description this is a description this is a description this is a description",
      "date": "2023-01-21T12:43:57.031Z",
      "__v": 0
    }
  ]
      let [notes,setNotes]=useState(initialNotes)
      // add notes 
      const add_notes=(title,description,tag)=>{
         let note={
          "_id": "63cbde0dcf18316c900c8f43",
          "userID": "63c9193c1a44cc106d7d1b86",
          "ref": "User",
          "title": title,
          "tag": tag,
          "description": description,
          "date": "2023-01-21T12:43:57.031Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      // delete notes 
      const delete_notes=(id)=>{
        console.log("deleted"+id)
        const newNote=notes.filter((note)=>{return note._id!==id})
        setNotes(newNote);
     }
      // update notes 
      const update_notes=(id,title,description,tag)=>{
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
      }
     }
    return(
        <NoteContext.Provider value={{notes,add_notes,delete_notes,update_notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;