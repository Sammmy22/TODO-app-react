import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Content({ items, handleDelete }) {
  return (
    <div id="container" className="container">
      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nothing to show</p>
      ) : (
        items.map((i) => {
          return (
            <TodoItem
              key={i.time}
              title={i.title}
              desc={i.desc}
              time={i.time}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </div>
  );
}
