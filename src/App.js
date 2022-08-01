import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  // Initialise empty messages array in state to keep local state in sync with Firebase
  // When Firebase changes, update local state, which will update local UI
  var [task, setTask] = useState({
    date: [],
    task: [],
  });
  // var [date, setDate] = useState([]);
  var [inputValue, setInputValue] = useState("");

  // date constant
  const currDateEntry = new Date().toLocaleString() + "";

  // // update task constant

  // const updateTask = (prevTask) => setTask(prevTask => {
  //     task: inputValue,
  //     date: currDateEntry,
  // });

  // write timer function
  function timer() {}

  // testing if it can hold another function and return here - yes this works
  // function Car(props) {
  //   return <h2>I am a {props.brand.model}!</h2>;
  // }

  // function Garage() {
  //   const carInfo = { name: "Ford", model: "Mustang" };
  //   return (
  //     <>
  //       <h1>Who lives in my garage?</h1>
  //       <Car brand={carInfo} />
  //     </>
  //   );
  // }

  // use useEffect to call the timer every 1 second
  useEffect(() => {}, []);

  // use handleChange

  const HandleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(event.target.value);
  };

  //handleSubmit will need to submit the task, the date and time, and the timer component
  //so the props need to be the task prop, the date and time prop, and the timer component prop

  // use handleSubmit to submit the task
  const HandleSubmit = (event) => {
    // var setTask = useRef([]);

    event.preventDefault();

    setTask((prevState) => ({
      ...prevState,
      task: inputValue,
      date: currDateEntry,
      // inputValue: "",
    }));
    setInputValue("");
  };

  // Convert task items in state to task JSX elements to render
  // let taskListItems = task.map((task) => <li>{currDateEntry}</li>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <div>{TableContainer}</div> */}
        <form onSubmit={HandleSubmit}>
          <div>
            <p>
              <label>Date and Time: {currDateEntry}</label>
            </p>
            <p>
              <label>Task: </label>
              <input type="text" onChange={HandleChange} value={inputValue} />
              <input type="submit" value="Submit" />
            </p>
          </div>
        </form>
        {/* call function here <ol>{messageListItems}</ol> */}
        {/* <Garage /> */}
      </header>
    </div>
  );
};

export default App;
