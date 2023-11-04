import React from "react";

class TaskUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      task: this.props.task,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      title: this.state.title,
      task: this.state.task,
    };

    this.props.updateTask(this.props.id, updatedTask);

    // Close the update form by calling the callback function by setting isEditing in Task.js to false
    this.props.onUpdateComplete();

    // Optionally, you can also reset the local state or perform any other necessary actions here
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Update Task</h3>
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
          <input name="submit" type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default TaskUpdate;
