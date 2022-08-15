import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import CountdownTimer from "./CountdownTimer";
import Table from "react-bootstrap/Table";
import audio from "./cell-ring.mp3";
import "./App.css";

const App = () => {
  const INITIAL_COUNT = 2;

  //task related drafting
  const [task, setTask] = useState({
    id: new Date().toLocaleString() + "",
    text: "",
  });
  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);
  // use handleChange
  const handleChange = (event) => {
    setTask((prev) => ({
      ...prev,
      id: new Date().toLocaleString() + "",
      text: event.target.value,
    }));
  };
  //usehandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [...prev, { id: task.id, text: task.text }]);
    console.log(
      `Task is ${task} and task text is ${task.text} and task id is ${task.id}. allTasks is ${allTasks[0]}.`
    );
    // setTask({ id: new Date().toLocaleString() + "", text: "" });
  };

  //completedTasks, setCompletedTasks - setCompletedTasks is triggered when the timer runs out
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateCompletedTasks = () => {
    setCompletedTasks((prev) => [...prev, { id: task.id, text: task.text }]);
    console.log(
      `Task is ${task} and task text is ${task.text} and task id is ${task.id}. AllTask is ${allTasks} and allTask text is ${allTasks.text} and allTasks id is ${allTasks.id}.`
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
            <th>Timer </th>
          </tr>
        </thead>
        <tbody>
          {allTasks.map((allTasks) => {
            return (
              <tr>
                <td>{allTasks.id}</td>
                <td>{allTasks.text}</td>
                <td>
                  <CountdownTimer
                    updateCompletedTasks={updateCompletedTasks}
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
            <th>Time spent </th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((completedTasks) => {
            return (
              <tr>
                <td>{completedTasks.id}</td>
                <td>{completedTasks.text}</td>
                <td>{INITIAL_COUNT} minutes</td>
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
          <h1>Don't run down rabbitholes</h1>
          <h3>Ongoing Tasks</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            value={task.text}
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
