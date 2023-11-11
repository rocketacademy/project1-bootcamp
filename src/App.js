import React from "react";
// import logo from "./logo.png";
import "./App.css";
import Header from "./components/Header";
// import Todo from "./components/Todo";

import TaskList from "./components/TaskList";
import TaskListInProgress from "./components/TaskListInProgress";
import TaskListInReview from "./components/TaskListInReview";

class App extends React.Component {
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
      tasksInProgress: [
        {
          id: 0,
          title: "React Website - ORION Project",
          task: "Coding a frontend website for Doctor Halsey",
        },
      ],
      tasksInReview: [
        {
          id: 0,
          title: "Project Fireteam Osiris",
          task: "Implementing a MongoDB Database for Spartan Locke",
        },
      ],
    };
  }

  // OPEN TASKS SECTION
  updateTask = (id, updatedTask) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
      return { tasks: updatedTasks };
    }, this.updateLocalStorage);
  };

  addTaskToDo = (task) => {
    const newId = this.state.tasks.length;
    const newTask = { ...task, id: newId };
    this.setState(
      (prevState) => ({ tasks: [...prevState.tasks, newTask] }),
      this.updateLocalStorage
    );
  };

  deleteTask = (id) => {
    this.setState(
      (prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }),
      this.updateLocalStorage
    );
  };

  updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem(
      "tasksInProgress",
      JSON.stringify(this.state.tasksInProgress)
    );
    localStorage.setItem(
      "tasksInReview",
      JSON.stringify(this.state.tasksInReview)
    );
  };

  resetLocalStorage = () => {
    localStorage.clear();
    this.setState(
      {
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
        tasksInProgress: [],
      },
      this.updateLocalStorage
    );
  };

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasks");
    const savedTasksInProgress = localStorage.getItem("tasksInProgress");
    const savedTasksInReview = localStorage.getItem("tasksInReview");

    if (savedTasks) {
      this.setState({
        tasks: JSON.parse(savedTasks),
        tasksInProgress: JSON.parse(savedTasksInProgress) || [],
        tasksInReview: JSON.parse(savedTasksInReview),
      });
    }
  }

  // TASKS IN PROGRESS SECTION
  updateTaskInProgress = (id, updatedTask) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasksInProgress.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
      return { tasksInProgress: updatedTasks };
    }, this.updateLocalStorage);
  };

  addTaskToDoInProgress = (task) => {
    const newId = this.state.tasksInProgress.length;
    const newTask = { ...task, id: newId };
    this.setState(
      (prevState) => ({
        tasksInProgress: [...prevState.tasksInProgress, newTask],
      }),
      this.updateLocalStorage
    );
  };

  deleteTaskInProgress = (id) => {
    this.setState(
      (prevState) => ({
        tasksInProgress: prevState.tasksInProgress.filter(
          (task) => task.id !== id
        ),
      }),
      this.updateLocalStorage
    );
  };

  resetLocalStorageInProgress = () => {
    localStorage.clear();
    this.setState(
      {
        tasksInProgress: [
          {
            id: 0,
            title: "React Website - ORION Project",
            task: "Coding a frontend website for Doctor Halsey",
          },
        ],
      },
      this.updateLocalStorage
    );
  };

  // TASKS IN REVIEW
  updateTaskInReview = (id, updatedTask) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasksInReview.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
      return { tasksInReview: updatedTasks };
    }, this.updateLocalStorage);
  };

  addTaskToDoInReview = (task) => {
    const newId = this.state.tasksInReview.length;
    const newTask = { ...task, id: newId };
    this.setState(
      (prevState) => ({ tasksInReview: [...prevState.tasksInReview, newTask] }),
      this.updateLocalStorage
    );
  };

  deleteTaskInReview = (id) => {
    this.setState(
      (prevState) => ({
        tasks: prevState.tasksInReview.filter((task) => task.id !== id),
      }),
      this.updateLocalStorage
    );
  };

  resetLocalStorageInReview = () => {
    localStorage.clear();
    this.setState(
      {
        tasksInReview: [
          {
            id: 0,
            title: "Project Fireteam Osiris",
            task: "Implementing a MongoDB Database for Spartan Locke",
          },
        ],
      },
      this.updateLocalStorage
    );
  };

  render() {
    return (
      <div className="app-container">
        <Header className="header" />
        <div className="task-container">
          <TaskList
            tasks={this.state.tasks}
            updateTask={this.updateTask}
            addTaskToDo={this.addTaskToDo}
            deleteTask={this.deleteTask}
            resetLocalStorage={this.resetLocalStorage}
          />
          <TaskListInProgress
            tasksInProgress={this.state.tasksInProgress}
            updateTask={this.updateTaskInProgress}
            addTaskToDo={this.addTaskToDoInProgress}
            deleteTask={this.deleteTaskInProgress}
            resetLocalStorage={this.resetLocalStorageInProgress}
          />
          <TaskListInReview
            tasksInReview={this.state.tasksInReview}
            updateTask={this.updateTaskInReview}
            addTaskToDo={this.addTaskToDoInReview}
            deleteTask={this.deleteTaskInReview}
            resetLocalStorage={this.resetLocalStorageInReview}
          />
        </div>
      </div>
    );
  }
}

export default App;
