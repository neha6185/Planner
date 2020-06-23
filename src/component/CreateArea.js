import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="form-area">
        <input
          className="input-area"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <input
          className="input-area"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add a task..."
        />
        <button onClick={submitNote} className="todo-button">
        <i className="fa fa-plus fa-sm" />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
