import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  // date constant
  const currDateEntry = new Date().toLocaleString() + "";

  //inputvalue for the textbox
  const [inputValue, setInputValue] = useState("");

  //newTask, setNewTask (from input)
  const [newTask, setNewTask] = useState([]);

  // use handleChange
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setNewTask((prev) => ({ ...prev, id: currDateEntry, inputValue }));
  };

  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);
  //usehandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [...prev, newTask]);
    console.log(
      `inputValue is ${inputValue}, and newtask is ${newTask} and alltasks is ${allTasks}.`
    );
    setInputValue("");
  };

  //setTimer

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            value={inputValue}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
};

export default App;
