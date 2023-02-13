import React from "react";

export default function Header(props) {
  return (
    <div id="main">
      <input
        type="text"
        id="title"
        value={props.title}
        onChange={props.changeTitle}
        placeholder="Enter Task Name"
      />
      <input
        type="text"
        id="desc"
        value={props.desc}
        onChange={props.changeDesc}
        placeholder="Enter Task Description"
      />
      <button id="submit" onClick={props.handleSubmit}>
        Add
      </button>
    </div>
  );
}
