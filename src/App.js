import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import CountdownTimer from "./CountdownTimer";
import Table from "react-bootstrap/Table";
import audio from "./cell-ring.mp3";
import "./App.css";

const App = () => {
  const INITIAL_COUNT = 10;
  let INITIAL_COUNT_IN_MINUTES = Number(INITIAL_COUNT) / 60;
  let INITIAL_COUNT_IN_MINUTES_ROUNDED = INITIAL_COUNT_IN_MINUTES.toFixed(2);

  // set initial time related drafting

  //task related drafting
  const [inputTask, setInputTask] = useState({
    id: new Date().toLocaleString() + "",
    text: "",
  });

  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);
  // use handleChange
  const handleChange = (event) => {
    setInputTask((prev) => ({
      ...prev,
      id: new Date().toLocaleString() + "",
      text: event.target.value,
    }));
  };
  //usehandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [
      ...prev,
      { id: inputTask.id, text: inputTask.text },
    ]);
    console.log(
      `Task is ${inputTask} and task text is ${inputTask.text} and task id is ${inputTask.id}. allTasks is ${allTasks}.`
    );
    setInputTask({ id: new Date().toLocaleString() + "", text: "" });
  };

  //completedTasks, setCompletedTasks - setCompletedTasks is triggered when the timer runs out
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateCompletedTasks = (task) => {
    setCompletedTasks((prev) => [...prev, { id: task.id, text: task.text }]);
    console.log(
      `updatedCompletedTask Task is ${task} and task text is ${task.text} and task id is ${task.id}. AllTask is ${allTasks} and allTask text is ${allTasks.text} and allTasks id is ${allTasks.id}.`
    );
  };

  // sound coding

  const alarm = () => {
    return new Audio(audio).play();
  };

  //rewriting taskItems

  let taskItems = (allTasks) => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Time started </th>
            <th>Task </th>
            <th> Pomodoro timer </th>
          </tr>
        </thead>
        <tbody>
          {allTasks.map((task) => {
            return (
              <tr>
                <td>{task.id}</td>
                <td>{task.text}</td>
                <td>
                  <CountdownTimer
                    updateCompletedTasks={updateCompletedTasks}
                    task={task}
                    INITIAL_COUNT={INITIAL_COUNT}
                    alarm={alarm}
                    audio={audio}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  // massage the completed tasks rendering function

  let completedTaskItems = (completedTasks) => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Time started </th>
            <th>Task </th>
            <th>Timers used </th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((completedTasks) => {
            return (
              <tr>
                <td>{completedTasks.id}</td>
                <td>{completedTasks.text}</td>
                <td>{INITIAL_COUNT_IN_MINUTES_ROUNDED} minutes</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
          <h1>Rabbithole Prevention!</h1>
          <h2>Pomodoro Timer</h2>
          <h3>Ongoing Tasks</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            value={inputTask.text}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <p>{taskItems(allTasks)}</p>
        </div>

        <header>
          <h3>Completed Tasks</h3>
        </header>
        <div>
          {" "}
          <p>{completedTaskItems(completedTasks)}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
