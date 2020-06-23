import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button onClick={handleClick} className="todo-button">
        <i className="fa fa-trash fa-sm" />
      </button>
    </div>
  );
}

export default Note;
