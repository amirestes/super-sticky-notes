import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const text = e.target.value;
    props.onType(text, props.note.id, "title");
  };
  const updateDescription = (e) => {
    const text = e.target.value;
    props.onType(text, props.note.id, "description");
  };

  const clickDelete = () => props.remove(props.note.id);

  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        placeholder="Description..."
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};
export default Note;
