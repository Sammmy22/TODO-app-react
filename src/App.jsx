import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoapp.Todos"))
  );

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeDesc(e) {
    setDesc(e.target.value);
  }

  const handleDelete = (time) => {
    const newList = todos.filter((todo) => {
      return todo.time !== time;
    });
    setTodos(newList);
  };

  useEffect(() => {
    localStorage.setItem("todoapp.Todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit() {
    if (title === "") {
      alert("Title cannot be empty");
    } else {
      const inputTime = new Date();
      const minutes = inputTime.getMinutes();
      const seconds = inputTime.getSeconds();
      const time = `${inputTime.getHours()}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds} ${inputTime.getDate()}-${
        inputTime.getMonth() + 1
      }-${inputTime.getFullYear()}`;

      const task = {
        title: title,
        desc: desc,
        time: time,
      };

      setTodos([...todos, task]);
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
      <Content items={todos} handleDelete={handleDelete} />
      <hr />
      <Footer />
    </div>
  );
}
