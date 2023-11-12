import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import TaskUpdate from "./TaskUpdate";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.title, // Initialize title in the local state
      task: this.props.task, // Initialize task in the local state
    };
  }

  handleUpdateClick = () => {
    this.setState({ isEditing: true });
  };

  handleUpdateComplete = () => {
    this.setState({ isEditing: false });
  };

  // ... (delete logic, if needed)
  handleDeleteClick = () => {
    this.props.deleteTask(this.props.id); // Calls the deleteTask function defined in TaskList.js
  };

  handleMoveTaskOpenClick = () => {
    this.props.moveTaskOpen(this.props.id);
  };

  handleMoveTaskInProgressClick = () => {
    this.props.moveTaskInProgress(this.props.id);
  };

  render() {
    // showButton prop is received as a parameter in the 'render' method and is then destructured from this.props

    const { showButton } = this.props;
    const { showButtonInProgress } = this.props;

    if (this.state.isEditing) {
      return (
        <TaskUpdate
          id={this.props.id}
          title={this.state.title} // Pass the local state title
          task={this.state.task} // Pass the local state task
          updateTask={this.props.updateTask}
          onUpdateComplete={this.handleUpdateComplete} // Pass the callback function
        />
      );
    }

    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Task: {this.props.task}</h2>
        <button onClick={this.handleUpdateClick}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={this.handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {showButton && (
          <button onClick={this.handleMoveTaskOpenClick}>
            Move tasks to In Progress
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
        {showButtonInProgress && (
          <button onClick={this.handleMoveTaskInProgressClick}>
            Move tasks to In Review
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </div>
    );
  }
}

export default Task;
