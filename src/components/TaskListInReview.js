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
      moveTaskInReview,
      moveTaskInReviewBackToInProgress,
    } = this.props;
    return (
      <div className="task-in-review content">
        <h1>
          <strong>Tasks In Review</strong>
        </h1>
        <h2 className="header-2">Number of tasks: {tasksInReview.length}</h2>
        <div>
          <button onClick={resetLocalStorage}>Clear Tasks</button>
        </div>
        <TaskComposer addTask={addTaskToDo} taskLength={tasksInReview.length} />
        {tasksInReview && tasksInReview.length > 0 ? (
          <ul>
            {tasksInReview.map((task) => (
              <Task
                key={task.id}
                {...task}
                showButtonInReview={true}
                updateTask={updateTask} // Pass the updateTask function
                deleteTask={deleteTask} // Pass the deleteTask function
                moveTaskInReview={moveTaskInReview} // Pass the moveTaskInReview function
                moveTaskInReviewBackToInProgress={
                  moveTaskInReviewBackToInProgress
                }
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
