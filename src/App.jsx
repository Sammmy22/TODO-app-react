// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}
