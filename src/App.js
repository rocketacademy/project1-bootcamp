import React from "react";
import "./App.css";
import Timer from "./Component/Timer";
import TaskDiv from "./Component/TaskDiv";

function App() {
  return (
    <div className="App-main">
      <div className="timer">
        <Timer />
      </div>
      <div className="taskDiv">
        <TaskDiv />
      </div>
    </div>
  );
}

export default App;
