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
            localStorage.removeItem(props.title);
          }}
          className="delete"
        >
          Remove
        </button>
      </footer>
    </article>
  );
}
