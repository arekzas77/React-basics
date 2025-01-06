import { useState } from "react";
import './StickyNotes.css'

function StickyNotes(){
  const [notes, setNotes]=useState([]);
  const [note, setNote]=useState('');

  function handleInputChange(event){
    setNote(event.target.value)
  }

  function addNewNote(){
    if(note!==''){
    setNotes([...notes,note]);
    setNote('');}
    else return
  }

  function deleteNote(i){
      const updatedNotes=notes.filter((_,index)=>index!==i);
      setNotes(updatedNotes); 
      
  }

  return(<>
    <h2>Sticky Notes</h2>
    <input type="text" placeholder='Write new note..' value={note} onChange={handleInputChange}/>
    <button className='add' onClick={addNewNote}>Add</button><br/>
        <ul>
          {notes.map((task,index)=>
            <li key={index}>
              <span>{task}</span>
              <button className='delete' onClick={()=>deleteNote(index)}>X</button>
            </li>
          )}
        </ul>
   
        </>) 
}  


export default StickyNotes