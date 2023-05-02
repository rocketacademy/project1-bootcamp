import React from "react";
import "./App.css";
import Timer from "./Component/Timer";
import TaskDiv from "./Component/TaskDiv";

function App() {
  return (
    <div>
      {/* passed the function 'addTask' as a prop to the child component 'AddNewTask' */}
      <div className="App-header">
        <Timer />
      </div>
      <TaskDiv />
    </div>
  );
}

export default App;
