import React from "react";
import "./App.css";
import Timer from "./Component/Timer.js";
import TaskDiv from "./Component/TaskDiv.js";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* passed the function 'addTask' as a prop to the child component 'AddNewTask' */}
      <div>
        <div className="App-header">
          <Timer />
        </div>
        <div style={{ height: "50vh", overflowY: "auto" }}>
          <TaskDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
