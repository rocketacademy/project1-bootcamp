import React from "react";

import "./App.css";
import Header from "./components/Header";

import TaskList from "./components/TaskList";
import TaskListInProgress from "./components/TaskListInProgress";
import TaskListInReview from "./components/TaskListInReview";
import TaskListCompleted from "./components/TaskListCompleted";

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
      tasksCompleted: [
        {
          id: 0,
          title: "Improved M-41 SPNKER with upgrades to tracking",
          task: "Added tracking to lock on to targets with greater distance and speed of the payload",
          timeTaken: "",
          keyTakeaways: "",
        },
        {
          id: 1,
          title: "Fixed software",
          task: "Fixing coding bugs on the software for Machine Learning AI",
        },
      ],
    };
  }

  // Transfer tasks from Open Tasks to Tasks In Progress
  moveTaskOpen = (id) => {
    // Find the task in state.tasks using the find method
    const taskToMove = this.state.tasks.find((task) => task.id === id);
    /** find()
     * find() method loops through the array elements and returns the first element that is true for task.id === id
     */

    // if there is a taskToMove
    if (taskToMove) {
      const newId = this.state.tasksInProgress.length + 1;
      const updatedTask = { ...taskToMove, id: newId };

      this.setState(
        (prevState) => ({
          // Wrap the arrow function in () to represent object literal and not function block!
          tasks: prevState.tasks.filter((task) => task.id !== id),
          tasksInProgress: [...prevState.tasksInProgress, updatedTask],
        }),
        this.updateLocalStorage
      );
    }
  };

  // Transfer tasks from In Progress to In Review
  moveTaskInProgress = (id) => {
    const taskToMove = this.state.tasksInProgress.find(
      (task) => task.id === id
    );
    if (taskToMove) {
      const newId = this.state.tasksInReview.length + 1;
      const updatedTask = { ...taskToMove, id: newId };
      this.setState(
        (prevState) => ({
          tasksInProgress: prevState.tasksInProgress.filter(
            (task) => task.id !== id
          ),
          tasksInReview: [...prevState.tasksInReview, updatedTask],
        }),
        this.updateLocalStorage
      );
    }
  };

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
    localStorage.setItem(
      "tasksCompleted",
      JSON.stringify(this.state.tasksCompleted)
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
        tasksInReview: prevState.tasksInReview.filter((task) => task.id !== id),
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

  // Tasks Completed
  resetLocalStorageCompleted = () => {
    localStorage.clear();
    this.setState(
      {
        tasksCompleted: [
          {
            id: 0,
            title: "Improved M-41 SPNKER with upgrades to tracking",
            tasksCompleted:
              "Added tracking to lock on to targets with greater distance and speed of the payload",
          },
        ],
      },
      this.updateLocalStorage
    );
  };

  reflectionToDo = (id, timeTaken, keyTakeaways) => {
    this.setState((prevState) => {
      const reflectedTasks = prevState.tasksCompleted.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            timeTaken: timeTaken !== undefined ? timeTaken : task.timeTaken,
            keyTakeaways:
              keyTakeaways !== undefined ? keyTakeaways : task.keyTakeaways,
          };
        }
        return task;
      });
      return { tasksCompleted: reflectedTasks };
    }, this.updateLocalStorage);
  };

  deleteTaskCompleted = (id) => {
    this.setState(
      (prevState) => ({
        tasksCompleted: prevState.tasksCompleted.filter(
          (task) => task.id !== id
        ),
      }),
      this.updateLocalStorage
    );
  };

  // Move task from In Review to Completed
  moveTaskInReview = (id) => {
    const taskToMove = this.state.tasksInReview.find((task) => task.id === id);
    if (taskToMove) {
      const newId = this.state.tasksCompleted.length + 1;
      const updatedTask = { ...taskToMove, id: newId };
      this.setState(
        (prevState) => ({
          tasksInReview: prevState.tasksInReview.filter(
            (task) => task.id !== id
          ),
          tasksCompleted: [...prevState.tasksCompleted, updatedTask],
        }),
        this.updateLocalStorage
      );
    }
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
            moveTaskOpen={this.moveTaskOpen}
          />
          <TaskListInProgress
            tasksInProgress={this.state.tasksInProgress}
            updateTask={this.updateTaskInProgress}
            addTaskToDo={this.addTaskToDoInProgress}
            deleteTask={this.deleteTaskInProgress}
            resetLocalStorage={this.resetLocalStorageInProgress}
            moveTaskInProgress={this.moveTaskInProgress}
          />
          <TaskListInReview
            tasksInReview={this.state.tasksInReview}
            updateTask={this.updateTaskInReview}
            addTaskToDo={this.addTaskToDoInReview}
            deleteTask={this.deleteTaskInReview}
            moveTaskInReview={this.moveTaskInReview}
            resetLocalStorage={this.resetLocalStorageInReview}
          />
          <TaskListCompleted
            tasksCompleted={this.state.tasksCompleted}
            deleteTask={this.deleteTaskCompleted}
            reflectionToDo={this.reflectionToDo}
            resetLocalStorage={this.resetLocalStorageCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
