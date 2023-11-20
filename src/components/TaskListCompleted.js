import React from "react";
import Task from "./Task";
import TaskCompleter from "./TaskCompleter";

export default class TaskListCompleted extends React.Component {
  render() {
    const { tasksCompleted, resetLocalStorage, reflectionToDo, deleteTask } =
      this.props;

    return (
      <div className="task-completed content">
        <h1>
          <strong>Completed Tasks</strong>
        </h1>
        <h2 className="header-2">Number of tasks: {tasksCompleted.length}</h2>
        <div>
          <button onClick={resetLocalStorage} className="adjustments">
            Clear Tasks
          </button>
        </div>
        {tasksCompleted && tasksCompleted.length > 0 ? (
          <ul>
            {tasksCompleted.map((task) => (
              <li key={task.id}>
                <Task
                  key={task.id}
                  {...task}
                  showButtonCompleted={true}
                  deleteTask={deleteTask}
                  reflectionToDo={reflectionToDo}
                />
                <TaskCompleter
                  tasksCompleted={tasksCompleted}
                  reflectionToDo={reflectionToDo}
                  id={task.id}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No Tasks</p>
        )}
      </div>
    );
  }
}
