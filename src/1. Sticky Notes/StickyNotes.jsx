import { useState } from "react"

function StickyNotes(){
  const [notes, setNotes]=useState(['Learn hook useState', 'Learn hook useEffect']);
  const [note, setNote]=useState('');

  function handleInputChange(){
    setNote(event.target.value)
  }

  function addNewNote(){

    setNotes([...notes,note]);
    setNote('');
  }

  return(<>
    <h2>Sticky Notes</h2>
    <input type="text" placeholder='Write new note..' value={note} onChange={handleInputChange}/>
    <button onClick={addNewNote}>Add</button><br/>
    <div className="notes-container">
      <ul>
        {notes.map((task,index)=><li key={index}>{task}</li>)}
      </ul>
    </div>
        </>)
    
}

export default StickyNotes