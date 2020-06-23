import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function TodoList() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container container-size">
      <h2>Add Task</h2>

      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
       
      })}
    </div>
  );
}

export default TodoList;
