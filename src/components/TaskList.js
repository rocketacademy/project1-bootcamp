import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskList extends React.Component {
  render() {
    const {
      tasks,
      updateTask,
      addTaskToDo,
      deleteTask,
      resetLocalStorage,
      moveTaskOpen,
    } = this.props;

    return (
      <div className="task-list">
        <h1>
          <strong>Open Tasks</strong>
        </h1>
        <h2>{tasks.length}</h2>
        <div>
          <button onClick={resetLocalStorage}>Reset Local Storage</button>
        </div>
        <TaskComposer addTask={addTaskToDo} taskLength={tasks.length} />
        {tasks && tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                showButton={true}
                updateTask={updateTask} // Pass the updateTask function
                deleteTask={deleteTask} // Pass the deleteTask function
                moveTaskOpen={moveTaskOpen}
              />
            ))}
          </ul>
        ) : (
          <p>No Tasks</p>
        )}
      </div>
    );
  }
}
