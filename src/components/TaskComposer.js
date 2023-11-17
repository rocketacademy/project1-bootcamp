import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

class TaskComposer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      task: "",
      isFormVisible: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Adds the entire state as a new task using addTask() method
    const task = this.state;
    this.props.addTask(task);

    // Resets the state of TaskComposer after
    this.setState({
      title: "",
      task: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  // handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "task") {
  //     const textarea = document.getElementById("userInput");

  //     textarea.addEventListener("keydown", function (event) {
  //       if (event.key === "Enter") {
  //         const userInput = textarea.value.trim()
  //         const sentences = userInput.split('\n')
  //       }
  //     });
  //     this.setState({
  //       [name]: value,
  //     });
  //   }
  // };

  toggleFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { isFormVisible } = this.state;
    return (
      <div className="task-composer content">
        <button id="showFormBtn" onClick={this.toggleFormVisibility}>
          CLICK HERE TO ADD A TASK
        </button>
        <form
          id="form"
          onSubmit={this.handleSubmit}
          style={{ display: isFormVisible ? "block" : "none" }}
        >
          <br />
          <h4>Title</h4>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <h5>Task</h5>
          {/* <input
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
            style={{ height: "500px" }}
          /> */}
          <textarea
            name="task"
            type="text"
            rows="4"
            cols="20"
            value={this.state.task}
            onChange={this.handleChange}
            style={{ height: "400px" }}
            id="userInput"
          />
          <br />
          <button type="submit" className="button">
            Add Task!
          </button>
          <FontAwesomeIcon icon={faCheck} className="icon" />
        </form>
      </div>
    );
  }
}

export default TaskComposer;
