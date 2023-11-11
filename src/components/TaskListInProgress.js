import React from "react";
import Task from "./Task";
import TaskComposer from "./TaskComposer";

export default class TaskListInProgress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksInProgress: [],
      tasks: [
        {
          id: 0,
          title: "React Website - ORION Project",
          task: "Coding a frontend website for Doctor Halsey",
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
        localStorage.setItem(
          "tasksInProgress",
          JSON.stringify(this.state.tasks)
        );
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
        return {
          tasks: [...prevState.tasks, newTask],
        };
      },
      () => {
        localStorage.setItem(
          "tasksInProgress",
          JSON.stringify(this.state.tasks)
        );
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
        localStorage.setItem(
          "tasksInProgress",
          JSON.stringify(this.state.tasks)
        );
      }
    );
  };

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasksInProgress");

    if (savedTasks) {
      this.setState({
        tasks: JSON.parse(savedTasks),
      });
    }
  }
  resetLocalStorage = () => {
    localStorage.clear();
    // You may also want to reinitialize the state to the default values here
    this.setState({
      tasks: [
        {
          id: 0,
          title: "React Website - ORION Project",
          task: "Coding a frontend website for Doctor Halsey",
        },
      ],
    });
  };

  moveTaskToOpen = (task) => {
    // Remove task from "Tasks in Progress"
    const updatedInProgressTasks = this.state.tasks.filter(
      (t) => t.id !== task.id
    );

    // Add task to "Open Tasks"
    this.setState(
      (prevState) => ({
        tasksInProgress: updatedInProgressTasks,
        tasks: [...prevState.tasks, task],
      }),
      () => {
        localStorage.setItem(
          "tasksInProgress",
          JSON.stringify(this.state.tasksInProgress)
        );
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    console.log(this.state.tasks);
    const { tasks } = this.state;
    const numberOfTasks = tasks.length;
    return (
      <div className="task-in-progress">
        <h1>
          <strong>Tasks In Progress</strong>
        </h1>
        <h2>{numberOfTasks}</h2>
        <div>
          <button onClick={this.resetLocalStorage}>Reset Local Storage</button>
        </div>
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
                moveTaskToOpen={() => this.moveTaskToOpen(task)}
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
