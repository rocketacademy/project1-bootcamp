import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  // date constant
  // const currDateEntry = new Date().toLocaleString() + "";

  //inputvalue for the textbox
  // const [inputValue, setInputValue] = useState("");

  const [task, setTask] = useState({
    currDateEntry: new Date().toLocaleString() + "",
    text: "",
  });

  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);

  // use handleChange
  const handleChange = (event) => {
    // setInputValue(event.target.value);
    setTask((prev) => ({ ...prev, text: event.target.value }));
  };

  //usehandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // setAllTasks((prev) => [...prev, currDateEntry + " " + inputValue]);
    setAllTasks((prev) => [...prev, task]);
    // console.log(`inputValue is ${inputValue}, and alltasks is ${allTasks}.`);
    // setInputValue("");
    setTask({ currDateEntry: new Date().toLocaleString() + "", text: "" });
  };

  //setTimer

  // rendering message

  //massage allTasks
  // let messageListItems = this.state.messages.map((message) => (
  //       <li key={message.key}>{message.val}</li>

  let taskItems = allTasks.map((allTasks) => (
    <table>
      <tr>
        <th>Date and Time</th>
        <th>Task</th>
        <th>Timer</th>
      </tr>
      <tr>
        <td>{allTasks.currDateEntry}</td>
        <td>{allTasks.text}</td>
        <td>Timer placeholder</td>
      </tr>
    </table>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            // value={inputValue}
            value={task.text}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {/* <li>{JSON.stringify(allTasks)}</li> */}
        <div>{taskItems}</div>
      </header>
    </div>
  );
};

export default App;
