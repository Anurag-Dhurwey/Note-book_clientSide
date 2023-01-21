import React from "react";
const NoteItems = (props) => {
   const {note} =props;
  return (
    <> 
     <div className="col-md-4 col-xl-3 col-12 my-3">
     <div className="card p-1">
            <h3>{note[0].title}</h3>
            <div className="card-body">
              <p className="card-text">
                {note[0].description}
              </p>
              <i class="fa-solid fa-trash mx-3"></i> 
              <i class="fa-solid fa-pen-to-square mx-3"></i>
            </div>
          </div>
     </div>
    </>
  );
};

export default NoteItems;
