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

  //completedTasks, setCompletedTasks - setCompletedTasks is triggered when the timer runs out

  const [completedTasks, setCompletedTasks] = useState([]);
  const [secondsBalance, setSecondsBalance] = useState([25 * 60]);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  //completed Task pop

  // function timer
  const timer = () => {
    if (secondsBalance === 0) {
      //insert toggleTester wording
    }
    setSecondsBalance(secondsBalance - 1);
  };

  // task completed toggle tester

  const toggleTester = () => {
    setIsTaskCompleted((isTaskCompleted) => !isTaskCompleted);

    if (isTaskCompleted === true) {
      var popped = allTasks.pop();
      setCompletedTasks((prev) => [...prev, popped]);
    }
  };

  // useEffect for timer
  useEffect(() => {}, []);

  // function to push completed tasks to task list

  //massage the tasksLIst rendering function

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
        <td>
          <input
            type="submit"
            value="Timer placeholder"
            onClick={toggleTester}
          />
        </td>
      </tr>
    </table>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>Ongoing Tasks</header>
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
        <header>Completed Tasks</header>
        <li>{JSON.stringify(completedTasks)}</li>
      </header>
    </div>
  );
};

export default App;
