import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskListInProgress extends React.Component {
  render() {
    const {
      tasksInProgress,
      updateTask,
      addTaskToDo,
      deleteTask,
      resetLocalStorage,
      moveTaskInProgress,
      moveTaskInProgressBacktoOpen,
    } = this.props;
    return (
      <div className="task-in-progress content">
        <h1>
          <strong>Tasks In Progress</strong>
        </h1>
        <h2 className="header-2">Number of tasks: {tasksInProgress.length}</h2>
        <div>
          <button onClick={resetLocalStorage}>Reset Default</button>
        </div>
        <TaskComposer
          addTask={addTaskToDo}
          taskLength={tasksInProgress.length}
        />
        {tasksInProgress && tasksInProgress.length > 0 ? (
          <ul>
            {tasksInProgress.map((task) => (
              <Task
                key={task.id}
                {...task}
                showButton={false}
                showButtonInProgress={true}
                updateTask={updateTask} // Pass the updateTask function
                deleteTask={deleteTask} // Pass the deleteTask function
                moveTaskInProgress={moveTaskInProgress}
                moveTaskInProgressBacktoOpen={moveTaskInProgressBacktoOpen}
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
