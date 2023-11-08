import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 0,
          title: "Reverse Engineer the Needler",
          task: "Coding a software to reverse engineer the Needler for Miranda Keyes",
        },
        {
          id: 1,
          title: "Fixing bugs",
          task: "Fixing coding bugs on the software for Machine Learning AI",
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
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  addTaskToDo = (task) => {
    // let newArray = [...this.state.tasks, task];
    // this.setState({
    //   tasks: newArray,
    // });

    const newId = this.state.tasks.length;

    const newTask = { ...task, id: newId };

    this.setState(
      (prevState) => {
        const updatedTasks = [...prevState.tasks, newTask];
        // Update state
        return {
          tasks: updatedTasks,
        };
      },
      () => {
        // After updating TaskList component state, update localStorage
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  deleteTask = (id) => {
    this.setState(
      (prevState) => {
        const updatedTasks = prevState.tasks.filter((task) => task.id !== id);
        // Update state
        return { tasks: updatedTasks };
      },
      () => {
        // After updating TaskList component state, update localStorage
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  componentDidMount() {
    // componentDidMount() lifecycle method is called whenever TaskList component is mounted in the app (i.e., browser is refreshed)
    // componentDidMount() is used for actions that need to be performed when a component is initally added to the DOM (e.g., fetching data from localStorage)
    // Load data from localStorage
    const savedTasks = localStorage.getItem("tasks");

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
      <div className="task-list">
        <h1>Open Tasks</h1>
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
