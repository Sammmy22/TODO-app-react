import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Content() {
  const [items, setItems] = useState(Object.keys(localStorage) || null);

  // const prevs = Object.keys(localStorage)

  // setItem(prevs);

  return (
    <div id="container" className="container">
      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nothing to show</p>
      ) : (
        items.map((i) => {
          const task = JSON.parse(localStorage.getItem(i));
          return (
            <TodoItem title={task.title} desc={task.desc} time={task.time} />
          );
        })
      )}
    </div>
  );
}
