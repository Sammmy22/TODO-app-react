import React from "react";

export default function TodoItem(props) {
  return (
    <article className="task">
      <header>{props.title}</header>
      {props.desc}
      <footer>
        Added on: {props.time}
        <button
          onClick={() => {
            props.handleDelete(props.title);
          }}
          className="delete"
        >
          Remove
        </button>
      </footer>
    </article>
  );
}
