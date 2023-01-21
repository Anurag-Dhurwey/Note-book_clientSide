
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
    },
    {
      "_id": "63cbde0dcf18316c900c8f43",
      "userID": "63c9193c1a44cc106d7d1b86",
      "ref": "User",
      "title": "note three",
      "tag": "tag",
      "description": "this is a description this is a description this is a description this is a description this is a description this is a description this is a description",
      "date": "2023-01-21T12:43:57.031Z",
      "__v": 0
    },
    {
      "_id": "63cbde0dcf18316c900c8f43",
      "userID": "63c9193c1a44cc106d7d1b86",
      "ref": "User",
      "title": "note three",
      "tag": "tag",
      "description": "this is a description this is a description this is a description this is a description this is a description this is a description this is a description",
      "date": "2023-01-21T12:43:57.031Z",
      "__v": 0
    },
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
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;