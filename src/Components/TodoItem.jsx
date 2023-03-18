import React from "react";

export default function TodoItem({ title, desc, time, handleDelete }) {
  return (
    <article className="task">
      <header>{title}</header>
      {desc}
      <footer>
        <span>Added on: {time}</span>
        <button
          onClick={() => {
            handleDelete(time);
          }}
          className="delete"
        >
          Remove
        </button>
      </footer>
    </article>
  );
}
