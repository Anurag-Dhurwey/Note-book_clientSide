import React, {useState, useContext ,useEffect,useRef}  from "react";
import NoteItems from "./NoteItems";
import noteContext from "../Context/notes/noteContext";
import Addnotes from "./crud/Add_notes";
import { useNavigate } from "react-router-dom";


const Notes = () => {
 let Navigate=useNavigate()
  let { notes,get_notes,update_notes} = useContext(noteContext);
  const [note,setNote]=useState({id:"",title:"",description:"",tag:""})
  useEffect(()=>{
    if(localStorage.getItem('auth-token')){
      get_notes()
    }else{
      console.log('Login to contineu')
      Navigate('/login')
    }
    // eslint-disable-next-line
  },[])
 
  const ref=useRef(null)
  const refClose=useRef(null)
  const open_modal=(currentNote)=>{
    if(currentNote._id===''){
      const reload= window.confirm("Failed, To update this note you have to reload this page, click on ok to reload!");
       if(reload===true){
        window.location.reload(true)
       }
    }else{
      ref.current.click()
      setNote({id:currentNote._id,title:currentNote.title,description:currentNote.description,tag:currentNote.tag})
    }
 
  };

  const handleChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
   };
  const handleOnClick = (e) => {
    e.preventDefault()
    refClose.current.click()
      update_notes(note.id,note.title,note.description,note.tag);

   };
  return (
    <>
      <div className="container">
        <Addnotes/>
        <div>
        <button
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ref={ref}
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                               Update box
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        className="form-control"
                                        id="title"
                                        value={note.title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        className="form-control"
                                        id="description"
                                        value={note.description}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">tag</label>
                                    <input
                                        type="text"
                                        name="tag"
                                        onChange={handleChange}
                                        className="form-control"
                                        id="tag"
                                        value={note.tag}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    id="updateBtn"
                                    className="btn btn-primary d-none"
                                    
                                >
                                    Add note
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                ref={refClose}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleOnClick}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-3">
          {notes.map((note, index) => {
            return <NoteItems note={[note]} open_modal={open_modal} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
