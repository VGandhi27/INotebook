import React, { useRef,useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const ref = useRef(null)

  const [note, setNote] = useState({etitle :"", edescription:"", etag:"default"})


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };

  const handleClick=(e)=>{
    console.log("Updating the note",note)
    e.preventDefault();

   }
   const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value })
   }
 
  
  return (
    <>
      <div className="container my-2">
        {" "}
        <AddNote />
      </div>
      <button  ref={ref}type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
               Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
    {/* Form for entry */}
     <form className="my-3">
       <div className="mb-3">
         <label htmlFor="title" className="form-label">
          Title
         </label>
         <input
           type="text"
           className="form-control"
           id="etitle" name="etitle" value={note.etitle}
           aria-describedby="emailHelp" onChange={onChange}
         />
         
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">
         Description
         </label>
         <input
           type="textarea"
           className="form-control" name="edescription" value={note.edescription}
           id="exampleInputPassword1" onChange={onChange}
         />
       </div>
       <div className="mb-3">
         <label htmlFor="tag" className="form-label">
        Tag
         </label>
         <input
           type="text"
           className="form-control" name="etag" value={note.etag}
           id="etag" onChange={onChange}
         />
       </div>
      
     </form>
            
              </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
               Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Your Notes */}
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
