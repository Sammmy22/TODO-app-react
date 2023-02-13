import React, { useEffect, useState } from "react";

export default function Header() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit() {
    if (title === "") {
      alert("Title cannot be empty");
    } else {
      const inputTime = new Date();
      const time = `${inputTime.getHours()}:${
        inputTime.getMinutes() < 10
          ? "0" + inputTime.getMinutes()
          : inputTime.getMinutes()
      } ${inputTime.getDate()}-${
        inputTime.getMonth() + 1
      }-${inputTime.getFullYear()}`;

      const task = {
        title: title,
        desc: desc,
        time: time,
      };
    }

    setTitle("");
    setDesc("");
  }

  return (
    <div id="main">
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter Task Name"
      />
      <input
        type="text"
        id="desc"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        placeholder="Enter Task Description"
      />
      <button id="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}
