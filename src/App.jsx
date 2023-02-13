import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(Object.keys(localStorage) || null);

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeDesc(e) {
    setDesc(e.target.value);
  }

  const handleDelete = (item) => {
    localStorage.removeItem(item);

    setItems(Object.keys(localStorage));
  };

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

      localStorage.setItem(title, JSON.stringify(task));

      setItems(Object.keys(localStorage));
    }

    setTitle("");
    setDesc("");
  }

  return (
    <div className="App">
      <Header
        title={title}
        handleSubmit={handleSubmit}
        desc={desc}
        changeTitle={changeTitle}
        changeDesc={changeDesc}
      />
      <hr />
      <Content items={items} handleDelete={handleDelete} />
      <hr />
      <Footer />
    </div>
  );
}
