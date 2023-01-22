import React ,{useContext} from "react";
import noteContext from "../Context/notes/noteContext";
const NoteItems = (props) => {
  let { delete_notes} = useContext(noteContext);
   const {note} =props;
  return (
    <> 
     <div className="col-md-4 col-xl-3 col-12 my-3">
     <div className="card p-1">
            <h3>{note[0].title}</h3>
            <p>{note[0]._id}</p>
            <div className="card-body">
              <p className="card-text">
                {note[0].description}
              </p>
              <p className="card-text">
                {note[0].tag}
              </p>
              <i className="fa-solid fa-trash mx-3" onClick={()=>{delete_notes(note[0]._id)}}></i> 
              <i className="fa-solid fa-pen-to-square mx-3"></i>
            </div>
          </div>
     </div>
    </>
  );
};

export default NoteItems;
