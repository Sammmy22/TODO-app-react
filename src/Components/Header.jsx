import React from "react";

export default function Header({
  title,
  changeTitle,
  desc,
  changeDesc,
  handleSubmit,
}) {
  return (
    <div id="main">
      <input
        type="text"
        id="title"
        value={title}
        onChange={changeTitle}
        placeholder="Enter Task Name"
      />
      <input
        type="text"
        id="desc"
        value={desc}
        onChange={changeDesc}
        placeholder="Enter Task Description"
      />
      <button id="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}
