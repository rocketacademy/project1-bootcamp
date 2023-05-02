import React from "react";
import { useState } from "react";
import "./App.css";
import NewTask from "./Component/NewTask";
import TaskTables from "./Component/TaskTables";
import Timer from "./Component/Timer";

// created an array of objects to store tasks and details relating to the tasks
const existingTasks = [
  {
    id: 1,
    name: "Apple",
    description: "Sell Macbook Air",
    category: "Personal",
    priority: "Medium",
  },
];

function App() {
  const [tasks, setTasks] = useState(existingTasks);

  // created a 'addTask' function that adds a new task to the list of existing tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {/* passed the function 'addTask' as a prop to the child component 'AddNewTask' */}
      <div className="App-header">
        <Timer />
      </div>
      <NewTask addTask={addTask} />
      <TaskTables tasks={tasks} />
    </div>
  );
}

export default App;
