import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  // Initialise empty messages array in state to keep local state in sync with Firebase
  // When Firebase changes, update local state, which will update local UI
  const [task, setTask] = useState([]);
  const [date, setDate] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // date constant
  const currDateEntry = new Date().toLocaleString() + "";

  // write timer function
  function timer() {}

  // use useEffect to call the timer every 1 second
  useEffect(() => {}, []);

  // use handleChange
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // use handleSubmit to submit the task
  const handleSubmit = () => {
    setInputValue("");
  };

  // Convert task items in state to task JSX elements to render
  let taskListItems = task.map((task) => <li>{currDateEntry}</li>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <div>{TableContainer}</div> */}
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <label>Date and Time: {currDateEntry}</label>
            </p>
            <p>
              <label>Task: </label>
              <input type="text" onChange={handleChange} value={inputValue} />
              <input type="submit" value="Submit" />
            </p>
          </div>
        </form>
        {/* call function here <ol>{messageListItems}</ol> */}
      </header>
    </div>
  );
};

export default App;
