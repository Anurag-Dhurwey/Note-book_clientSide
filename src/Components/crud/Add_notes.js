import React,{ useState,useContext} from 'react';
import noteContext from "../../Context/notes/noteContext";
const Add_notes = () => {
    let { add_notes} = useContext(noteContext);
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    };
    const handleOnClick=(e)=>{
        e.preventDefault();
        add_notes(note.title,note.description,note.tag);
    };
  return (
    <div>
      <form action="">
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" name='title' onChange={handleChange} className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" name='description' onChange={handleChange} className="form-control" id="description"/>
  </div>
  <div className="mb-3">
    <label className="form-label">tag</label>
    <input type="text" name='tag' onChange={handleChange} className="form-control" id="tag"/>
  </div>
  <button type="submit" onClick={handleOnClick} className="btn btn-primary">Add note</button>
      </form>
    </div>
  )
}

export default Add_notes
