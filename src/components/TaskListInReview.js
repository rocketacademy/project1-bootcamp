import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskListInReview extends React.Component {
  render() {
    const {
      tasksInReview,
      updateTask,
      addTaskToDo,
      deleteTask,
      resetLocalStorage,
    } = this.props;
    return (
      <div className="task-in-review">
        <h1>
          <strong>Tasks In Review</strong>
        </h1>
        <h2>{tasksInReview.length}</h2>
        <div>
          <button onClick={resetLocalStorage}>Reset Local Storage</button>
        </div>
        <TaskComposer addTask={addTaskToDo} taskLength={tasksInReview.length} />
        {tasksInReview && tasksInReview.length > 0 ? (
          <ul>
            {tasksInReview.map((task) => (
              <Task
                key={task.id}
                {...task}
                updateTask={updateTask} // Pass the updateTask function
                deleteTask={deleteTask} // Pass the deleteTask function
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
