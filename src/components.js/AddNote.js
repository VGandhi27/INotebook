import React, { useState } from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext } from 'react';
const AddNote=()=> {
    const context=useContext(noteContext);
    const { addNote}=context;


    const [note, setNote] = useState({title :"", description:"", tag:"default"})
    const handleClick=(e)=>{
     e.preventDefault();
     addNote(note.title,note.description,note.description);

    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value })
    }
  return (
    <>
     {/* Add a Note */}
     <div className="container my-3">
     <h2>Add a Note</h2>

    {/* Form for entry */}
     <form className="my-3">
       <div className="mb-3">
         <label htmlFor="title" className="form-label">
          Title
         </label>
         <input
           type="text"
           className="form-control"
           id="title" name="title"
           aria-describedby="emailHelp" onChange={onChange}
         />
         
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">
         Description
         </label>
         <input
           type="textarea"
           className="form-control" name="description"
           id="exampleInputPassword1" onChange={onChange}
         />
       </div>
       <div className="mb-3 form-check">
         <input
           type="checkbox"
           className="form-check-input"
           id="exampleCheck1" onChange={onChange}
         />
         <label className="form-check-label" htmlFor="exampleCheck1">
           Check me out
         </label>
       </div>
       <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Add Note
       </button>
     </form>
   </div>
</>
    
  )
}

export default AddNote

