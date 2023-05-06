import React from "react";
import "./App.css";
import Timer from "./Component/Timer";
import TaskDiv from "./Component/TaskDiv";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <div className="Timer">
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
