import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

const App = () => {
  //task related drafting
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

  const updateCompletedTasks = (currTask) => {
    setCompletedTasks((prev) => [...prev, { text: task }]);
  };

  // // const [secondsBalance, setSecondsBalance] = useState([100]);
  // const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  // //task toggler
  // var toggler = () => {
  //   if (secondsRemaining === 0) {
  //     setIsTaskCompleted((isTaskCompleted) => !isTaskCompleted);
  //   }
  //   if (isTaskCompleted === true) {
  //     var shifted = allTasks.shift();
  //     setCompletedTasks((prev) => [...prev, shifted]);
  //   }
  // };
  //massage the tasksLIst rendering function
  let taskItems = allTasks.map((allTasks) => (
    <table>
      {/* <tr>
        <th>Date and Time</th>
        <th>Task</th>
        <th>Timer</th>
      </tr> */}
      <tr>
        <td>{allTasks.currDateEntry}</td>
        <td>{allTasks.text}</td>
        <td>
          <div>
            <CountdownTimer
              updateCompletedTasks={updateCompletedTasks}
              // secondsRemaining={secondsRemaining}
              // setSecondsRemaining={setSecondsRemaining}
            />
          </div>
          {/* {secondsBalance} */}
          {/* <input type="submit" value="Timer start" onClick={timer} /> */}
          {/* <input
            type="submit"
            value="Timer placeholder"
            onClick={toggleTester}/> */}
          {/* <input type="submit" value="Timer stop" onClick={useEffect()} /> */}
        </td>
      </tr>
    </table>
  ));
  // massage the completed tasks rendering function
  let completedTaskItems = JSON.stringify(completedTasks);

  // let completedTaskItems = completedTasks.map((completedTasks) => (
  //   <table>
  //     {/* <tr>
  //       <th>Date and Time</th>
  //       <th>Task</th>
  //       <th>Timer</th>
  //     </tr> */}
  //     <tr>
  //       <td>{completedTasks.currDateEntry}</td>
  //       <td>{completedTasks.text}</td>
  //       <td>Number of minutes placeholder</td>
  //     </tr>
  //   </table>
  // ));
  // return render function
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
          <h3>Ongoing Tasks</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            // value={inputValue}
            value={task.text}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <tr>
          <th>Date and Time </th>
          <th>Task </th>
          <th>Timer </th>
        </tr>
        <div>{taskItems}</div>
        <p></p>
        <header>
          <h3>Completed Tasks</h3>
        </header>
        <tr>
          <th>Date and Time </th>
          <th>Task </th>
          <th>Time spent </th>
        </tr>
        <div> {completedTaskItems}</div>
      </header>
    </div>
  );
};

export default App;
