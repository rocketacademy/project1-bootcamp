import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskListInReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 0,
          title: "Project Fireteam Osiris",
          task: "Implementing a MongoDB Database for Spartan Locke",
        },
      ],
    };
  }

  updateTask = (id, updatedTask) => {
    this.setState(
      (prevState) => {
        const updatedTasks = prevState.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, ...updatedTask };
          }
          return task;
        });
        return { tasks: updatedTasks };
      },
      () => {
        localStorage.setItem("tasksInReview", JSON.stringify(this.state.tasks));
      }
    );
  };

  addTaskToDo = (task) => {
    const newId = this.state.tasks.length;

    const newTask = { ...task, id: newId };

    this.setState(
      (prevState) => {
        return {
          tasks: [...prevState.tasks, newTask],
        };
      },
      () => {
        localStorage.setItem("tasksInReview", JSON.stringify(this.state.tasks));
      }
    );
  };

  deleteTask = (id) => {
    this.setState(
      (prevState) => {
        const updatedTasks = prevState.tasks.filter((task) => task.id !== id);
        return { tasks: updatedTasks };
      },
      () => {
        localStorage.setItem("tasksInReview", JSON.stringify(this.state.tasks));
      }
    );
  };

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasksInReview");

    if (savedTasks) {
      this.setState({
        tasks: JSON.parse(savedTasks),
      });
    }
  }

  render() {
    console.log(this.state.tasks);
    const { tasks } = this.state;
    const numberOfTasks = tasks.length;
    return (
      <div className="task-in-review">
        <h1>Tasks In Review</h1>
        <h2>{numberOfTasks}</h2>
        <TaskComposer
          addTask={this.addTaskToDo}
          taskLength={this.state.tasks.length}
        />
        {this.state.tasks && this.state.tasks.length > 0 ? (
          <ul>
            {this.state.tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                updateTask={this.updateTask} // Pass the updateTask function
                deleteTask={this.deleteTask} // Pass the deleteTask function
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
