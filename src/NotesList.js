import React from "react";
import Note from "./Note.js";

const keepSearchMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  const renderNote = (note) => (
    <Note
      onType={props.onType}
      note={note}
      key={note.id}
      remove={props.remove}
    />
  );

  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
