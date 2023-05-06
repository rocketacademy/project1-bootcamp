import React from "react";
import "./App.css";
import Timer from "./Component/Timer";
import TaskDiv from "./Component/TaskDiv";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <div className="timer">
          <Timer />
        </div>
        <div className="taskDiv">
          <TaskDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
