import React from "react";

class TaskCompleter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeTaken: "",
      keyTakeaways: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { tasksCompleted, id, reflectionToDo } = this.props;
    const { timeTaken, keyTakeaways } = this.state;

    const index = tasksCompleted.findIndex((task) => task.id === id); // loops through the array of objects and returns the index of the matching task

    console.log(index);

    if (index !== -1) {
      reflectionToDo(index, timeTaken, keyTakeaways);
      tasksCompleted[index].timeTaken = timeTaken;
      tasksCompleted[index].keyTakeaways = keyTakeaways;

      // Log the updated task
      console.log(tasksCompleted[index]);
    }

    // Resets the state of TaskComposer after
    this.setState({
      timeTaken: "",
      keyTakeaways: "",
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
      <div className="task-composer content">
        <form onSubmit={this.handleSubmit}>
          <br />
          <h4>Time taken to complete:</h4>
          <input
            name="timeTaken"
            type="text"
            value={this.state.timeTaken}
            onChange={this.handleChange}
          />
          <br />
          <h5>Key Takeaways:</h5>
          <input
            name="keyTakeaways"
            type="text"
            value={this.state.keyTakeaways}
            onChange={this.handleChange}
          />
          <br />
          <input name="submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default TaskCompleter;
