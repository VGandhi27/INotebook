import React, { useState } from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext } from 'react';
import Notes from './Notes';
const AddNote=()=> {
    const context=useContext(noteContext);
    const { addNote}=context;


    const [note, setNote] = useState({title :"", description:"", tag:""})
    const handleClick=(e)=>{
     e.preventDefault();
     addNote(note.title,note.description,note.description);
     setNote({title :"", description:"", tag:""})
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
           id="title" name="title" value={note.title}
           aria-describedby="emailHelp" onChange={onChange}  minLength={5} required
         />
         
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">
         Description
         </label>
         <input
           type="textarea"
           className="form-control" name="description" value={note.description}
           id="exampleInputPassword1" onChange={onChange}  minLength={5} required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="tag" className="form-label">
        Tag
         </label>
         <input
           type="text"
           className="form-control" name="tag" value={note.tag}
           id="tag" onChange={onChange}  minLength={5} required
         />
       </div>
      
       <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
        Add Note
       </button>
     </form>
   </div>
</>
    
  )
}

export default AddNote

