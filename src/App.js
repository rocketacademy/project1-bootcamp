import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  // date constant
  const currDateEntry = new Date().toLocaleString() + "";

  //newTask, setNewTask
  const [newTask, setNewTask] = useState({});
  // use handleChange
  const handleChange = ({ target }) => {
    const { name, value } = target; //why need to destructure target?
    setNewTask((prev) => ({ ...prev, id: currDateEntry, [name]: value }));
  };

  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({}); // what does this do?
  };

  //setTimer

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            placeholder="New task"
            value={newTask.value}
            // value={newTask.title || ""}
            onChange={handleChange}
          />
        </form>
        <input type="submit" value="Submit" />
      </header>
    </div>
  );
};

export default App;
