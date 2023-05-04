import React from "react";
import { useState } from "react";
import NewTask from "./NewTask";
import ShowHideButton from "./ShowHideButton";
import TaskTables from "./TaskTables";

// created an array of objects to store tasks and details relating to the tasks
const existingTasks = [
  {
    id: 1,
    name: "Apple",
    description: "Sell Macbook Air",
    category: "Personal",
    priority: "Medium",
    completed: false,
  },
  {
    id: 2,
    name: "Grocery",
    description: "Buy ingredients for dinner prep",
    category: "Home",
    priority: "Low",
    completed: false,
  },
  {
    id: 3,
    name: "Study Rocket",
    description: "To do pre-class before lesson",
    category: "School",
    priority: "High",
    completed: false,
  },
];

export default function TaskDiv() {
  const [tasks, setTasks] = useState(existingTasks);
  const [showHide, setShowHide] = useState(false);

  // created a 'addTask' function that adds a new task to the list of existing tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleShowHide = () => {
    showHide === true ? setShowHide(false) : setShowHide(true);
  };

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-1">
      <div
        className="p-1"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* passed the function 'addTask' as a prop to the child component 'AddNewTask' */}
        <NewTask addTask={addTask} style={{ float: "left" }} />
        <ShowHideButton
          showHide={showHide}
          handleShowHide={handleShowHide}
          style={{ float: "right" }}
        />
      </div>
      <div className="p-1">
        <TaskTables
          tasks={tasks}
          showHide={showHide}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
