import React from "react";
// import logo from "./logo.png";
import "./App.css";
import Header from "./components/Header";
// import Todo from "./components/Todo";

import TaskList from "./components/TaskList";
import TaskListInProgress from "./components/TaskListInProgress";
import TaskListInReview from "./components/TaskListInReview";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header className="header" />
        <div className="task-container">
          <TaskList />
          <TaskListInProgress />
          <TaskListInReview />
        </div>
      </div>
    );
  }
}

export default App;
