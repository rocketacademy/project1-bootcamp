import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import TaskUpdate from "./TaskUpdate";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.title, // Initialize title in the local state
      task: this.props.task, // Initialize task in the local state
      timeTaken: this.props.timeTaken,
      keyTakeaways: this.props.keyTakeaways,
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

  handleMoveTaskInProgressBackToOpen = () => {
    this.props.moveTaskInProgressBacktoOpen(this.props.id);
  };

  handleMoveTaskInReviewBackToInProgress = () => {
    this.props.moveTaskInReviewBackToInProgress(this.props.id);
  };

  handleMoveTaskInReviewClick = () => {
    this.props.moveTaskInReview(this.props.id);
  };

  handleReflectedTaskClick = () => {
    this.props.reflectionToDo(this.props.id);
  };

  render() {
    // showButton prop is received as a parameter in the 'render' method and is then destructured from this.props

    const { showButton } = this.props;
    const { showButtonInProgress } = this.props;
    const { showButtonCompleted } = this.props;
    const { showButtonInReview } = this.props;

    if (this.state.isEditing && !showButtonCompleted) {
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
      <div className="content">
        <h1>
          <strong>Title: {this.props.title}</strong>
        </h1>
        <h2>Task: {this.props.task}</h2>
        {showButtonCompleted && <h3>TimeTaken: {this.props.timeTaken}</h3>}
        {showButtonCompleted && (
          <h3>Key Takeaways: {this.props.keyTakeaways}</h3>
        )}
        {!showButtonCompleted && (
          <button onClick={this.handleUpdateClick} className="buttons">
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button onClick={this.handleDeleteClick} className="buttons">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {showButton && (
          <button onClick={this.handleMoveTaskOpenClick} className="buttons">
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
        {showButtonInProgress && (
          <button onClick={this.handleMoveTaskInProgressBackToOpen}>
            Move tasks to Open
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {showButtonInReview && (
          <button onClick={this.handleMoveTaskInReviewClick}>
            Move tasks to Completed
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
        {showButtonInReview && (
          <button onClick={this.handleMoveTaskInReviewBackToInProgress}>
            Move tasks to In Progress
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {/* {showButtonCompleted && (
          <button onClick={this.handleReflectedTaskClick}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )} */}
      </div>
    );
  }
}

export default Task;
