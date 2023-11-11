import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

class TaskComposer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      task: "",
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

  render() {
    return (
      <div className="task-composer">
        <form onSubmit={this.handleSubmit}>
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
          <input
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <br />
          <input name="submit" type="submit" value="submit" />
          <FontAwesomeIcon icon={faCheck} className="icon" />
        </form>
      </div>
    );
  }
}

export default TaskComposer;
